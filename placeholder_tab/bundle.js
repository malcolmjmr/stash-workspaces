var App=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode&&t.parentNode.removeChild(t)}let i;function s(t){i=t}function a(t){(function(){if(!i)throw new Error("Function called outside component initialization");return i})().$$.on_mount.push(t)}const f=[],l=[];let d=[];const $=[],h=Promise.resolve();let p=!1;function m(t){d.push(t)}const g=new Set;let y=0;function _(){if(0!==y)return;const t=i;do{try{for(;y<f.length;){const t=f[y];y++,s(t),b(t.$$)}}catch(t){throw f.length=0,y=0,t}for(s(null),f.length=0,y=0;l.length;)l.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];g.has(n)||(g.add(n),n())}d.length=0}while(f.length);for(;$.length;)$.pop()();p=!1,g.clear(),s(t)}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(m)}}const x=new Set;function w(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];d.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),d=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function E(t,n){-1===t.$$.dirty[0]&&(f.push(t),p||(p=!0,h.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,a,f,l,d,$,h,p=[-1]){const g=i;s(c);const y=c.$$={fragment:null,ctx:[],props:$,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(g?g.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:a.target||g.$$.root};h&&h(y.root);let b=!1;if(y.ctx=f?f(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),b&&E(c,t)),n})):[],y.update(),b=!0,o(y.before_update),y.fragment=!!l&&l(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(u)}else y.fragment&&y.fragment.c();a.intro&&((w=c.$$.fragment)&&w.i&&(x.delete(w),w.i(k))),function(t,e,c,u){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,c),u||m((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(m)}(c,a.target,a.anchor,a.customElement),_()}var w,k;s(g)}class v{$destroy(){w(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(n){let e;return{c(){var t;t="main",e=document.createElement(t),e.innerHTML='<div class="container"></div>'},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}function j(t){a((()=>{n()}));const n=async()=>{await chrome.runtime.sendMessage({command:"getTabInfo"})};return[]}return new class extends v{constructor(t){super(),k(this,t,j,O,c,{})}}({target:document.body})}();
