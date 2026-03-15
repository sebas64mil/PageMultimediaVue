(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function rh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Bt={},io=[],Vi=()=>{},Pg=()=>!1,Ql=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),oh=n=>n.startsWith("onUpdate:"),xn=Object.assign,ah=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ib=Object.prototype.hasOwnProperty,Tt=(n,e)=>ib.call(n,e),st=Array.isArray,so=n=>ya(n)==="[object Map]",Lg=n=>ya(n)==="[object Set]",Tp=n=>ya(n)==="[object Date]",at=n=>typeof n=="function",qt=n=>typeof n=="string",gi=n=>typeof n=="symbol",Ot=n=>n!==null&&typeof n=="object",Ig=n=>(Ot(n)||at(n))&&at(n.then)&&at(n.catch),Dg=Object.prototype.toString,ya=n=>Dg.call(n),sb=n=>ya(n).slice(8,-1),Ng=n=>ya(n)==="[object Object]",lh=n=>qt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ta=rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ec=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},rb=/-\w/g,Pn=ec(n=>n.replace(rb,e=>e.slice(1).toUpperCase())),ob=/\B([A-Z])/g,Sr=ec(n=>n.replace(ob,"-$1").toLowerCase()),tc=ec(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qc=ec(n=>n?`on${tc(n)}`:""),Ni=(n,e)=>!Object.is(n,e),eu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Og=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ab=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ap;const nc=()=>Ap||(Ap=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ch(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=qt(i)?fb(i):ch(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(qt(n)||Ot(n))return n}const lb=/;(?![^(]*\))/g,cb=/:([^]+)/,ub=/\/\*[^]*?\*\//g;function fb(n){const e={};return n.replace(ub,"").split(lb).forEach(t=>{if(t){const i=t.split(cb);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fo(n){let e="";if(qt(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=fo(n[t]);i&&(e+=i+" ")}else if(Ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",db=rh(hb);function Ug(n){return!!n||n===""}function pb(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=uh(n[i],e[i]);return t}function uh(n,e){if(n===e)return!0;let t=Tp(n),i=Tp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=gi(n),i=gi(e),t||i)return n===e;if(t=st(n),i=st(e),t||i)return t&&i?pb(n,e):!1;if(t=Ot(n),i=Ot(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!uh(n[o],e[o]))return!1}}return String(n)===String(e)}const Fg=n=>!!(n&&n.__v_isRef===!0),Oi=n=>qt(n)?n:n==null?"":st(n)||Ot(n)&&(n.toString===Dg||!at(n.toString))?Fg(n)?Oi(n.value):JSON.stringify(n,Bg,2):String(n),Bg=(n,e)=>Fg(e)?Bg(n,e.value):so(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[tu(i,r)+" =>"]=s,t),{})}:Lg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>tu(t))}:gi(e)?tu(e):Ot(e)&&!st(e)&&!Ng(e)?String(e):e,tu=(n,e="")=>{var t;return gi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Nn;class Vg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Nn;try{return Nn=this,e()}finally{Nn=t}}}on(){++this._on===1&&(this.prevScope=Nn,Nn=this)}off(){this._on>0&&--this._on===0&&(Nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mb(n){return new Vg(n)}function gb(){return Nn}let Ft;const nu=new WeakSet;class kg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nn&&Nn.active&&Nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nu.has(this)&&(nu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wp(this),Gg(this);const e=Ft,t=di;Ft=this,di=!0;try{return this.fn()}finally{Wg(this),Ft=e,di=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dh(e);this.deps=this.depsTail=void 0,wp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ju(this)&&this.run()}get dirty(){return ju(this)}}let Hg=0,na,ia;function zg(n,e=!1){if(n.flags|=8,e){n.next=ia,ia=n;return}n.next=na,na=n}function fh(){Hg++}function hh(){if(--Hg>0)return;if(ia){let e=ia;for(ia=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;na;){let e=na;for(na=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wg(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),dh(i),_b(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ju(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function $g(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ua)||(n.globalVersion=ua,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ju(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=di;Ft=n,di=!0;try{Gg(n);const s=n.fn(n._value);(e.version===0||Ni(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=t,di=i,Wg(n),n.flags&=-3}}function dh(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)dh(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function _b(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let di=!0;const Xg=[];function vs(){Xg.push(di),di=!1}function xs(){const n=Xg.pop();di=n===void 0?!0:n}function wp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let ua=0;class vb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ph{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!di||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new vb(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,Kg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,ua++,this.notify(e)}notify(e){fh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hh()}}}function Kg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Kg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const qu=new WeakMap,xr=Symbol(""),Zu=Symbol(""),fa=Symbol("");function mn(n,e,t){if(di&&Ft){let i=qu.get(n);i||qu.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ph),s.map=i,s.key=t),s.track()}}function fs(n,e,t,i,s,r){const o=qu.get(n);if(!o){ua++;return}const a=l=>{l&&l.trigger()};if(fh(),e==="clear")o.forEach(a);else{const l=st(n),u=l&&lh(t);if(l&&t==="length"){const f=Number(i);o.forEach((h,d)=>{(d==="length"||d===fa||!gi(d)&&d>=f)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(fa)),e){case"add":l?u&&a(o.get("length")):(a(o.get(xr)),so(n)&&a(o.get(Zu)));break;case"delete":l||(a(o.get(xr)),so(n)&&a(o.get(Zu)));break;case"set":so(n)&&a(o.get(xr));break}}hh()}function Vr(n){const e=Mt(n);return e===n?e:(mn(e,"iterate",fa),ti(n)?e:e.map(_i))}function ic(n){return mn(n=Mt(n),"iterate",fa),n}function Li(n,e){return Es(n)?ho(Er(n)?_i(e):e):_i(e)}const xb={__proto__:null,[Symbol.iterator](){return iu(this,Symbol.iterator,n=>Li(this,n))},concat(...n){return Vr(this).concat(...n.map(e=>st(e)?Vr(e):e))},entries(){return iu(this,"entries",n=>(n[1]=Li(this,n[1]),n))},every(n,e){return ns(this,"every",n,e,void 0,arguments)},filter(n,e){return ns(this,"filter",n,e,t=>t.map(i=>Li(this,i)),arguments)},find(n,e){return ns(this,"find",n,e,t=>Li(this,t),arguments)},findIndex(n,e){return ns(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ns(this,"findLast",n,e,t=>Li(this,t),arguments)},findLastIndex(n,e){return ns(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ns(this,"forEach",n,e,void 0,arguments)},includes(...n){return su(this,"includes",n)},indexOf(...n){return su(this,"indexOf",n)},join(n){return Vr(this).join(n)},lastIndexOf(...n){return su(this,"lastIndexOf",n)},map(n,e){return ns(this,"map",n,e,void 0,arguments)},pop(){return Vo(this,"pop")},push(...n){return Vo(this,"push",n)},reduce(n,...e){return Cp(this,"reduce",n,e)},reduceRight(n,...e){return Cp(this,"reduceRight",n,e)},shift(){return Vo(this,"shift")},some(n,e){return ns(this,"some",n,e,void 0,arguments)},splice(...n){return Vo(this,"splice",n)},toReversed(){return Vr(this).toReversed()},toSorted(n){return Vr(this).toSorted(n)},toSpliced(...n){return Vr(this).toSpliced(...n)},unshift(...n){return Vo(this,"unshift",n)},values(){return iu(this,"values",n=>Li(this,n))}};function iu(n,e,t){const i=ic(n),s=i[e]();return i!==n&&!ti(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Eb=Array.prototype;function ns(n,e,t,i,s,r){const o=ic(n),a=o!==n&&!ti(n),l=o[e];if(l!==Eb[e]){const h=l.apply(n,r);return a?_i(h):h}let u=t;o!==n&&(a?u=function(h,d){return t.call(this,Li(n,h),d,n)}:t.length>2&&(u=function(h,d){return t.call(this,h,d,n)}));const f=l.call(o,u,i);return a&&s?s(f):f}function Cp(n,e,t,i){const s=ic(n),r=s!==n&&!ti(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(u,f,h){return a&&(a=!1,u=Li(n,u)),t.call(this,u,Li(n,f),h,n)}):t.length>3&&(o=function(u,f,h){return t.call(this,u,f,h,n)}));const l=s[e](o,...i);return a?Li(n,l):l}function su(n,e,t){const i=Mt(n);mn(i,"iterate",fa);const s=i[e](...t);return(s===-1||s===!1)&&vh(t[0])?(t[0]=Mt(t[0]),i[e](...t)):s}function Vo(n,e,t=[]){vs(),fh();const i=Mt(n)[e].apply(n,t);return hh(),xs(),i}const bb=rh("__proto__,__v_isRef,__isVue"),Yg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gi));function Sb(n){gi(n)||(n=String(n));const e=Mt(this);return mn(e,"has",n),e.hasOwnProperty(n)}class jg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ib:Qg:r?Jg:Zg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=st(e);if(!s){let l;if(o&&(l=xb[t]))return l;if(t==="hasOwnProperty")return Sb}const a=Reflect.get(e,t,vn(e)?e:i);if((gi(t)?Yg.has(t):bb(t))||(s||mn(e,"get",t),r))return a;if(vn(a)){const l=o&&lh(t)?a:a.value;return s&&Ot(l)?Qu(l):l}return Ot(a)?s?Qu(a):gh(a):a}}class qg extends jg{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=st(e)&&lh(t);if(!this._isShallow){const u=Es(r);if(!ti(i)&&!Es(i)&&(r=Mt(r),i=Mt(i)),!o&&vn(r)&&!vn(i))return u||(r.value=i),!0}const a=o?Number(t)<e.length:Tt(e,t),l=Reflect.set(e,t,i,vn(e)?e:s);return e===Mt(s)&&(a?Ni(i,r)&&fs(e,"set",t,i):fs(e,"add",t,i)),l}deleteProperty(e,t){const i=Tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&fs(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!gi(t)||!Yg.has(t))&&mn(e,"has",t),i}ownKeys(e){return mn(e,"iterate",st(e)?"length":xr),Reflect.ownKeys(e)}}class yb extends jg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Mb=new qg,Tb=new yb,Ab=new qg(!0);const Ju=n=>n,Ja=n=>Reflect.getPrototypeOf(n);function wb(n,e,t){return function(...i){const s=this.__v_raw,r=Mt(s),o=so(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),f=t?Ju:e?ho:_i;return!e&&mn(r,"iterate",l?Zu:xr),xn(Object.create(u),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[f(h[0]),f(h[1])]:f(h),done:d}}})}}function Qa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cb(n,e){const t={get(s){const r=this.__v_raw,o=Mt(r),a=Mt(s);n||(Ni(s,a)&&mn(o,"get",s),mn(o,"get",a));const{has:l}=Ja(o),u=e?Ju:n?ho:_i;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&mn(Mt(s),"iterate",xr),s.size},has(s){const r=this.__v_raw,o=Mt(r),a=Mt(s);return n||(Ni(s,a)&&mn(o,"has",s),mn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Mt(a),u=e?Ju:n?ho:_i;return!n&&mn(l,"iterate",xr),a.forEach((f,h)=>s.call(r,u(f),u(h),o))}};return xn(t,n?{add:Qa("add"),set:Qa("set"),delete:Qa("delete"),clear:Qa("clear")}:{add(s){const r=Mt(this),o=Ja(r),a=Mt(s),l=!e&&!ti(s)&&!Es(s)?a:s;return o.has.call(r,l)||Ni(s,l)&&o.has.call(r,s)||Ni(a,l)&&o.has.call(r,a)||(r.add(l),fs(r,"add",l,l)),this},set(s,r){!e&&!ti(r)&&!Es(r)&&(r=Mt(r));const o=Mt(this),{has:a,get:l}=Ja(o);let u=a.call(o,s);u||(s=Mt(s),u=a.call(o,s));const f=l.call(o,s);return o.set(s,r),u?Ni(r,f)&&fs(o,"set",s,r):fs(o,"add",s,r),this},delete(s){const r=Mt(this),{has:o,get:a}=Ja(r);let l=o.call(r,s);l||(s=Mt(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&fs(r,"delete",s,void 0),u},clear(){const s=Mt(this),r=s.size!==0,o=s.clear();return r&&fs(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=wb(s,n,e)}),t}function mh(n,e){const t=Cb(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Tt(t,s)&&s in i?t:i,s,r)}const Rb={get:mh(!1,!1)},Pb={get:mh(!1,!0)},Lb={get:mh(!0,!1)};const Zg=new WeakMap,Jg=new WeakMap,Qg=new WeakMap,Ib=new WeakMap;function Db(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nb(n){return n.__v_skip||!Object.isExtensible(n)?0:Db(sb(n))}function gh(n){return Es(n)?n:_h(n,!1,Mb,Rb,Zg)}function Ob(n){return _h(n,!1,Ab,Pb,Jg)}function Qu(n){return _h(n,!0,Tb,Lb,Qg)}function _h(n,e,t,i,s){if(!Ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Nb(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Er(n){return Es(n)?Er(n.__v_raw):!!(n&&n.__v_isReactive)}function Es(n){return!!(n&&n.__v_isReadonly)}function ti(n){return!!(n&&n.__v_isShallow)}function vh(n){return n?!!n.__v_raw:!1}function Mt(n){const e=n&&n.__v_raw;return e?Mt(e):n}function e_(n){return!Tt(n,"__v_skip")&&Object.isExtensible(n)&&Og(n,"__v_skip",!0),n}const _i=n=>Ot(n)?gh(n):n,ho=n=>Ot(n)?Qu(n):n;function vn(n){return n?n.__v_isRef===!0:!1}function Ub(n){return Fb(n,!1)}function Fb(n,e){return vn(n)?n:new Bb(n,e)}class Bb{constructor(e,t){this.dep=new ph,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Mt(e),this._value=t?e:_i(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ti(e)||Es(e);e=i?e:Mt(e),Ni(e,t)&&(this._rawValue=e,this._value=i?e:_i(e),this.dep.trigger())}}function Vb(n){return vn(n)?n.value:n}const kb={get:(n,e,t)=>e==="__v_raw"?n:Vb(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return vn(s)&&!vn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function t_(n){return Er(n)?n:new Proxy(n,kb)}class Hb{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ph(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ua-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return zg(this,!0),!0}get value(){const e=this.dep.track();return $g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zb(n,e,t=!1){let i,s;return at(n)?i=n:(i=n.get,s=n.set),new Hb(i,s,t)}const el={},Hl=new WeakMap;let dr;function Gb(n,e=!1,t=dr){if(t){let i=Hl.get(t);i||Hl.set(t,i=[]),i.push(n)}}function Wb(n,e,t=Bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,u=w=>s?w:ti(w)||s===!1||s===0?Vs(w,1):Vs(w);let f,h,d,m,x=!1,b=!1;if(vn(n)?(h=()=>n.value,x=ti(n)):Er(n)?(h=()=>u(n),x=!0):st(n)?(b=!0,x=n.some(w=>Er(w)||ti(w)),h=()=>n.map(w=>{if(vn(w))return w.value;if(Er(w))return u(w);if(at(w))return l?l(w,2):w()})):at(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){vs();try{d()}finally{xs()}}const w=dr;dr=f;try{return l?l(n,3,[m]):n(m)}finally{dr=w}}:h=Vi,e&&s){const w=h,I=s===!0?1/0:s;h=()=>Vs(w(),I)}const _=gb(),g=()=>{f.stop(),_&&_.active&&ah(_.effects,f)};if(r&&e){const w=e;e=(...I)=>{w(...I),g()}}let y=b?new Array(n.length).fill(el):el;const C=w=>{if(!(!(f.flags&1)||!f.dirty&&!w))if(e){const I=f.run();if(s||x||(b?I.some((D,U)=>Ni(D,y[U])):Ni(I,y))){d&&d();const D=dr;dr=f;try{const U=[I,y===el?void 0:b&&y[0]===el?[]:y,m];y=I,l?l(e,3,U):e(...U)}finally{dr=D}}}else f.run()};return a&&a(C),f=new kg(h),f.scheduler=o?()=>o(C,!1):C,m=w=>Gb(w,!1,f),d=f.onStop=()=>{const w=Hl.get(f);if(w){if(l)l(w,4);else for(const I of w)I();Hl.delete(f)}},e?i?C(!0):y=f.run():o?o(C.bind(null,!0),!0):f.run(),g.pause=f.pause.bind(f),g.resume=f.resume.bind(f),g.stop=g,g}function Vs(n,e=1/0,t){if(e<=0||!Ot(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,vn(n))Vs(n.value,e,t);else if(st(n))for(let i=0;i<n.length;i++)Vs(n[i],e,t);else if(Lg(n)||so(n))n.forEach(i=>{Vs(i,e,t)});else if(Ng(n)){for(const i in n)Vs(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Vs(n[i],e,t)}return n}function Ma(n,e,t,i){try{return i?n(...i):n()}catch(s){sc(s,e,t)}}function Gi(n,e,t,i){if(at(n)){const s=Ma(n,e,t,i);return s&&Ig(s)&&s.catch(r=>{sc(r,e,t)}),s}if(st(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Gi(n[r],e,t,i));return s}}function sc(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Bt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](n,l,u)===!1)return}a=a.parent}if(r){vs(),Ma(r,null,10,[n,l,u]),xs();return}}$b(n,t,s,i,o)}function $b(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const wn=[];let Ri=-1;const ro=[];let Bs=null,no=0;const n_=Promise.resolve();let zl=null;function Xb(n){const e=zl||n_;return n?e.then(this?n.bind(this):n):e}function Kb(n){let e=Ri+1,t=wn.length;for(;e<t;){const i=e+t>>>1,s=wn[i],r=ha(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function xh(n){if(!(n.flags&1)){const e=ha(n),t=wn[wn.length-1];!t||!(n.flags&2)&&e>=ha(t)?wn.push(n):wn.splice(Kb(e),0,n),n.flags|=1,i_()}}function i_(){zl||(zl=n_.then(r_))}function Yb(n){st(n)?ro.push(...n):Bs&&n.id===-1?Bs.splice(no+1,0,n):n.flags&1||(ro.push(n),n.flags|=1),i_()}function Rp(n,e,t=Ri+1){for(;t<wn.length;t++){const i=wn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;wn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function s_(n){if(ro.length){const e=[...new Set(ro)].sort((t,i)=>ha(t)-ha(i));if(ro.length=0,Bs){Bs.push(...e);return}for(Bs=e,no=0;no<Bs.length;no++){const t=Bs[no];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Bs=null,no=0}}const ha=n=>n.id==null?n.flags&2?-1:1/0:n.id;function r_(n){try{for(Ri=0;Ri<wn.length;Ri++){const e=wn[Ri];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ma(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ri<wn.length;Ri++){const e=wn[Ri];e&&(e.flags&=-2)}Ri=-1,wn.length=0,s_(),zl=null,(wn.length||ro.length)&&r_()}}let Rn=null,o_=null;function Gl(n){const e=Rn;return Rn=n,o_=n&&n.type.__scopeId||null,e}function po(n,e=Rn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Hp(-1);const r=Gl(e);let o;try{o=n(...s)}finally{Gl(r),i._d&&Hp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sr(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vs(),Gi(l,t,8,[n.el,a,n,e]),xs())}}function jb(n,e){if(_n){let t=_n.provides;const i=_n.parent&&_n.parent.provides;i===t&&(t=_n.provides=Object.create(i)),t[n]=e}}function Rl(n,e,t=!1){const i=qS();if(i||ao){let s=ao?ao._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&at(e)?e.call(i&&i.proxy):e}}const qb=Symbol.for("v-scx"),Zb=()=>Rl(qb);function ru(n,e,t){return a_(n,e,t)}function a_(n,e,t=Bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=xn({},t),l=e&&i||!e&&r!=="post";let u;if(ma){if(r==="sync"){const m=Zb();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Vi,m.resume=Vi,m.pause=Vi,m}}const f=_n;a.call=(m,x,b)=>Gi(m,f,x,b);let h=!1;r==="post"?a.scheduler=m=>{Dn(m,f&&f.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,x)=>{x?m():xh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const d=Wb(n,e,a);return ma&&(u?u.push(d):l&&d()),d}function Jb(n,e,t){const i=this.proxy,s=qt(n)?n.includes(".")?l_(i,n):()=>i[n]:n.bind(i,i);let r;at(e)?r=e:(r=e.handler,t=e);const o=Ta(this),a=a_(s,r.bind(i),t);return o(),a}function l_(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Qb=Symbol("_vte"),eS=n=>n.__isTeleport,tS=Symbol("_leaveCb");function Eh(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Eh(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function c_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pp(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Wl=new WeakMap;function sa(n,e,t,i,s=!1){if(st(n)){n.forEach((b,_)=>sa(b,e&&(st(e)?e[_]:e),t,i,s));return}if(oo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&sa(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Th(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=e&&e.r,f=a.refs===Bt?a.refs={}:a.refs,h=a.setupState,d=Mt(h),m=h===Bt?Pg:b=>Pp(f,b)?!1:Tt(d,b),x=(b,_)=>!(_&&Pp(f,_));if(u!=null&&u!==l){if(Lp(e),qt(u))f[u]=null,m(u)&&(h[u]=null);else if(vn(u)){const b=e;x(u,b.k)&&(u.value=null),b.k&&(f[b.k]=null)}}if(at(l))Ma(l,a,12,[o,f]);else{const b=qt(l),_=vn(l);if(b||_){const g=()=>{if(n.f){const y=b?m(l)?h[l]:f[l]:x()||!n.k?l.value:f[n.k];if(s)st(y)&&ah(y,r);else if(st(y))y.includes(r)||y.push(r);else if(b)f[l]=[r],m(l)&&(h[l]=f[l]);else{const C=[r];x(l,n.k)&&(l.value=C),n.k&&(f[n.k]=C)}}else b?(f[l]=o,m(l)&&(h[l]=o)):_&&(x(l,n.k)&&(l.value=o),n.k&&(f[n.k]=o))};if(o){const y=()=>{g(),Wl.delete(n)};y.id=-1,Wl.set(n,y),Dn(y,t)}else Lp(n),g()}}}function Lp(n){const e=Wl.get(n);e&&(e.flags|=8,Wl.delete(n))}nc().requestIdleCallback;nc().cancelIdleCallback;const oo=n=>!!n.type.__asyncLoader,u_=n=>n.type.__isKeepAlive;function nS(n,e){f_(n,"a",e)}function iS(n,e){f_(n,"da",e)}function f_(n,e,t=_n){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(rc(e,i,t),t){let s=t.parent;for(;s&&s.parent;)u_(s.parent.vnode)&&sS(i,e,t,s),s=s.parent}}function sS(n,e,t,i){const s=rc(e,n,i,!0);h_(()=>{ah(i[e],s)},t)}function rc(n,e,t=_n,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{vs();const a=Ta(t),l=Gi(e,t,n,o);return a(),xs(),l});return i?s.unshift(r):s.push(r),r}}const Ts=n=>(e,t=_n)=>{(!ma||n==="sp")&&rc(n,(...i)=>e(...i),t)},rS=Ts("bm"),oS=Ts("m"),aS=Ts("bu"),lS=Ts("u"),cS=Ts("bum"),h_=Ts("um"),uS=Ts("sp"),fS=Ts("rtg"),hS=Ts("rtc");function dS(n,e=_n){rc("ec",n,e)}const d_="components";function Wn(n,e){return m_(d_,n,!0,e)||n}const p_=Symbol.for("v-ndc");function pS(n){return qt(n)?m_(d_,n,!1)||n:n||p_}function m_(n,e,t=!0,i=!1){const s=Rn||_n;if(s){const r=s.type;{const a=ty(r,!1);if(a&&(a===e||a===Pn(e)||a===tc(Pn(e))))return r}const o=Ip(s[n]||r[n],e)||Ip(s.appContext[n],e);return!o&&i?r:o}}function Ip(n,e){return n&&(n[e]||n[Pn(e)]||n[tc(Pn(e))])}function ef(n,e,t,i){let s;const r=t,o=st(n);if(o||qt(n)){const a=o&&Er(n);let l=!1,u=!1;a&&(l=!ti(n),u=Es(n),n=ic(n)),s=new Array(n.length);for(let f=0,h=n.length;f<h;f++)s[f]=e(l?u?ho(_i(n[f])):_i(n[f]):n[f],f,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Ot(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=e(n[f],f,l,r)}}else s=[];return s}function mS(n,e,t={},i,s){if(Rn.ce||Rn.parent&&oo(Rn.parent)&&Rn.parent.ce){const u=Object.keys(t).length>0;return Gt(),pa(gn,null,[zt("slot",t,i)],u?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Gt();const o=r&&g_(r(t)),a=t.key||o&&o.key,l=pa(gn,{key:(a&&!gi(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function g_(n){return n.some(e=>yh(e)?!(e.type===bs||e.type===gn&&!g_(e.children)):!0)?n:null}const tf=n=>n?U_(n)?Th(n):tf(n.parent):null,ra=xn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tf(n.parent),$root:n=>tf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>v_(n),$forceUpdate:n=>n.f||(n.f=()=>{xh(n.update)}),$nextTick:n=>n.n||(n.n=Xb.bind(n.proxy)),$watch:n=>Jb.bind(n)}),ou=(n,e)=>n!==Bt&&!n.__isScriptSetup&&Tt(n,e),gS={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ou(i,e))return o[e]=1,i[e];if(s!==Bt&&Tt(s,e))return o[e]=2,s[e];if(Tt(r,e))return o[e]=3,r[e];if(t!==Bt&&Tt(t,e))return o[e]=4,t[e];nf&&(o[e]=0)}}const u=ra[e];let f,h;if(u)return e==="$attrs"&&mn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Bt&&Tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ou(s,e)?(s[e]=t,!0):i!==Bt&&Tt(i,e)?(i[e]=t,!0):Tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Bt&&a[0]!=="$"&&Tt(n,a)||ou(e,a)||Tt(r,a)||Tt(i,a)||Tt(ra,a)||Tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Dp(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nf=!0;function _S(n){const e=v_(n),t=n.proxy,i=n.ctx;nf=!1,e.beforeCreate&&Np(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:h,mounted:d,beforeUpdate:m,updated:x,activated:b,deactivated:_,beforeDestroy:g,beforeUnmount:y,destroyed:C,unmounted:w,render:I,renderTracked:D,renderTriggered:U,errorCaptured:S,serverPrefetch:R,expose:te,inheritAttrs:N,components:Y,directives:j,filters:oe}=e;if(u&&vS(u,i,null),o)for(const k in o){const he=o[k];at(he)&&(i[k]=he.bind(t))}if(s){const k=s.call(t,t);Ot(k)&&(n.data=gh(k))}if(nf=!0,r)for(const k in r){const he=r[k],me=at(he)?he.bind(t,t):at(he.get)?he.get.bind(t,t):Vi,Le=!at(he)&&at(he.set)?he.set.bind(t):Vi,Oe=iy({get:me,set:Le});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Ae=>Oe.value=Ae})}if(a)for(const k in a)__(a[k],i,t,k);if(l){const k=at(l)?l.call(t):l;Reflect.ownKeys(k).forEach(he=>{jb(he,k[he])})}f&&Np(f,n,"c");function K(k,he){st(he)?he.forEach(me=>k(me.bind(t))):he&&k(he.bind(t))}if(K(rS,h),K(oS,d),K(aS,m),K(lS,x),K(nS,b),K(iS,_),K(dS,S),K(hS,D),K(fS,U),K(cS,y),K(h_,w),K(uS,R),st(te))if(te.length){const k=n.exposed||(n.exposed={});te.forEach(he=>{Object.defineProperty(k,he,{get:()=>t[he],set:me=>t[he]=me,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Vi&&(n.render=I),N!=null&&(n.inheritAttrs=N),Y&&(n.components=Y),j&&(n.directives=j),R&&c_(n)}function vS(n,e,t=Vi){st(n)&&(n=sf(n));for(const i in n){const s=n[i];let r;Ot(s)?"default"in s?r=Rl(s.from||i,s.default,!0):r=Rl(s.from||i):r=Rl(s),vn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Np(n,e,t){Gi(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function __(n,e,t,i){let s=i.includes(".")?l_(t,i):()=>t[i];if(qt(n)){const r=e[n];at(r)&&ru(s,r)}else if(at(n))ru(s,n.bind(t));else if(Ot(n))if(st(n))n.forEach(r=>__(r,e,t,i));else{const r=at(n.handler)?n.handler.bind(t):e[n.handler];at(r)&&ru(s,r,n)}}function v_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>$l(l,u,o,!0)),$l(l,e,o)),Ot(e)&&r.set(e,l),l}function $l(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&$l(n,r,t,!0),s&&s.forEach(o=>$l(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=xS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xS={data:Op,props:Up,emits:Up,methods:Zo,computed:Zo,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:Zo,directives:Zo,watch:bS,provide:Op,inject:ES};function Op(n,e){return e?n?function(){return xn(at(n)?n.call(this,this):n,at(e)?e.call(this,this):e)}:e:n}function ES(n,e){return Zo(sf(n),sf(e))}function sf(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Zo(n,e){return n?xn(Object.create(null),n,e):e}function Up(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:xn(Object.create(null),Dp(n),Dp(e??{})):e}function bS(n,e){if(!n)return e;if(!e)return n;const t=xn(Object.create(null),n);for(const i in e)t[i]=Tn(n[i],e[i]);return t}function x_(){return{app:null,config:{isNativeTag:Pg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SS=0;function yS(n,e){return function(i,s=null){at(i)||(i=xn({},i)),s!=null&&!Ot(s)&&(s=null);const r=x_(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:SS++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sy,get config(){return r.config},set config(f){},use(f,...h){return o.has(f)||(f&&at(f.install)?(o.add(f),f.install(u,...h)):at(f)&&(o.add(f),f(u,...h))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,h){return h?(r.components[f]=h,u):r.components[f]},directive(f,h){return h?(r.directives[f]=h,u):r.directives[f]},mount(f,h,d){if(!l){const m=u._ceVNode||zt(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,f,d),l=!0,u._container=f,f.__vue_app__=u,Th(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Gi(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(f,h){return r.provides[f]=h,u},runWithContext(f){const h=ao;ao=u;try{return f()}finally{ao=h}}};return u}}let ao=null;const MS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${Sr(e)}Modifiers`];function TS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Bt;let s=t;const r=e.startsWith("update:"),o=r&&MS(i,e.slice(7));o&&(o.trim&&(s=t.map(f=>qt(f)?f.trim():f)),o.number&&(s=t.map(ab)));let a,l=i[a=Qc(e)]||i[a=Qc(Pn(e))];!l&&r&&(l=i[a=Qc(Sr(e))]),l&&Gi(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Gi(u,n,6,s)}}const AS=new WeakMap;function E_(n,e,t=!1){const i=t?AS:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!at(n)){const l=u=>{const f=E_(u,e,!0);f&&(a=!0,xn(o,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ot(n)&&i.set(n,null),null):(st(r)?r.forEach(l=>o[l]=null):xn(o,r),Ot(n)&&i.set(n,o),o)}function oc(n,e){return!n||!Ql(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(n,e[0].toLowerCase()+e.slice(1))||Tt(n,Sr(e))||Tt(n,e))}function Fp(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:h,data:d,setupState:m,ctx:x,inheritAttrs:b}=n,_=Gl(n);let g,y;try{if(t.shapeFlag&4){const w=s||i,I=w;g=Ii(u.call(I,w,f,h,m,d,x)),y=a}else{const w=e;g=Ii(w.length>1?w(h,{attrs:a,slots:o,emit:l}):w(h,null)),y=e.props?a:wS(a)}}catch(w){oa.length=0,sc(w,n,1),g=zt(bs)}let C=g;if(y&&b!==!1){const w=Object.keys(y),{shapeFlag:I}=C;w.length&&I&7&&(r&&w.some(oh)&&(y=CS(y,r)),C=mo(C,y,!1,!0))}return t.dirs&&(C=mo(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&Eh(C,t.transition),g=C,Gl(_),g}const wS=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ql(t))&&((e||(e={}))[t]=n[t]);return e},CS=(n,e)=>{const t={};for(const i in n)(!oh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function RS(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bp(i,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const d=f[h];if(b_(o,i,d)&&!oc(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bp(i,o,u):!0:!!o;return!1}function Bp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(b_(e,n,r)&&!oc(t,r))return!0}return!1}function b_(n,e,t){const i=n[t],s=e[t];return t==="style"&&Ot(i)&&Ot(s)?!uh(i,s):i!==s}function PS({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const S_={},y_=()=>Object.create(S_),M_=n=>Object.getPrototypeOf(n)===S_;function LS(n,e,t,i=!1){const s={},r=y_();n.propsDefaults=Object.create(null),T_(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Ob(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function IS(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Mt(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let h=0;h<f.length;h++){let d=f[h];if(oc(n.emitsOptions,d))continue;const m=e[d];if(l)if(Tt(r,d))m!==r[d]&&(r[d]=m,u=!0);else{const x=Pn(d);s[x]=rf(l,a,x,m,n,!1)}else m!==r[d]&&(r[d]=m,u=!0)}}}else{T_(n,e,s,r)&&(u=!0);let f;for(const h in a)(!e||!Tt(e,h)&&((f=Sr(h))===h||!Tt(e,f)))&&(l?t&&(t[h]!==void 0||t[f]!==void 0)&&(s[h]=rf(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Tt(e,h))&&(delete r[h],u=!0)}u&&fs(n.attrs,"set","")}function T_(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ta(l))continue;const u=e[l];let f;s&&Tt(s,f=Pn(l))?!r||!r.includes(f)?t[f]=u:(a||(a={}))[f]=u:oc(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=Mt(t),u=a||Bt;for(let f=0;f<r.length;f++){const h=r[f];t[h]=rf(s,l,h,u[h],n,!Tt(u,h))}}return o}function rf(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&at(l)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const f=Ta(s);i=u[t]=l.call(null,e),f()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sr(t))&&(i=!0))}return i}const DS=new WeakMap;function A_(n,e,t=!1){const i=t?DS:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!at(n)){const f=h=>{l=!0;const[d,m]=A_(h,e,!0);xn(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!r&&!l)return Ot(n)&&i.set(n,io),io;if(st(r))for(let f=0;f<r.length;f++){const h=Pn(r[f]);Vp(h)&&(o[h]=Bt)}else if(r)for(const f in r){const h=Pn(f);if(Vp(h)){const d=r[f],m=o[h]=st(d)||at(d)?{type:d}:xn({},d),x=m.type;let b=!1,_=!0;if(st(x))for(let g=0;g<x.length;++g){const y=x[g],C=at(y)&&y.name;if(C==="Boolean"){b=!0;break}else C==="String"&&(_=!1)}else b=at(x)&&x.name==="Boolean";m[0]=b,m[1]=_,(b||Tt(m,"default"))&&a.push(h)}}const u=[o,a];return Ot(n)&&i.set(n,u),u}function Vp(n){return n[0]!=="$"&&!ta(n)}const bh=n=>n==="_"||n==="_ctx"||n==="$stable",Sh=n=>st(n)?n.map(Ii):[Ii(n)],NS=(n,e,t)=>{if(e._n)return e;const i=po((...s)=>Sh(e(...s)),t);return i._c=!1,i},w_=(n,e,t)=>{const i=n._ctx;for(const s in n){if(bh(s))continue;const r=n[s];if(at(r))e[s]=NS(s,r,i);else if(r!=null){const o=Sh(r);e[s]=()=>o}}},C_=(n,e)=>{const t=Sh(e);n.slots.default=()=>t},R_=(n,e,t)=>{for(const i in e)(t||!bh(i))&&(n[i]=e[i])},OS=(n,e,t)=>{const i=n.slots=y_();if(n.vnode.shapeFlag&32){const s=e._;s?(R_(i,e,t),t&&Og(i,"_",s,!0)):w_(e,i)}else e&&C_(n,e)},US=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:R_(s,e,t):(r=!e.$stable,w_(e,s)),o=e}else e&&(C_(n,e),o={default:1});if(r)for(const a in s)!bh(a)&&o[a]==null&&delete s[a]},Dn=HS;function FS(n){return BS(n)}function BS(n,e){const t=nc();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:h,nextSibling:d,setScopeId:m=Vi,insertStaticContent:x}=n,b=(L,B,q,re=null,ie=null,G=null,P=void 0,ge=null,de=!!B.dynamicChildren)=>{if(L===B)return;L&&!ko(L,B)&&(re=Se(L),Ae(L,ie,G,!0),L=null),B.patchFlag===-2&&(de=!1,B.dynamicChildren=null);const{type:le,ref:pe,shapeFlag:T}=B;switch(le){case ac:_(L,B,q,re);break;case bs:g(L,B,q,re);break;case Pl:L==null&&y(B,q,re,P);break;case gn:Y(L,B,q,re,ie,G,P,ge,de);break;default:T&1?I(L,B,q,re,ie,G,P,ge,de):T&6?j(L,B,q,re,ie,G,P,ge,de):(T&64||T&128)&&le.process(L,B,q,re,ie,G,P,ge,de,Xe)}pe!=null&&ie?sa(pe,L&&L.ref,G,B||L,!B):pe==null&&L&&L.ref!=null&&sa(L.ref,null,G,L,!0)},_=(L,B,q,re)=>{if(L==null)i(B.el=a(B.children),q,re);else{const ie=B.el=L.el;B.children!==L.children&&u(ie,B.children)}},g=(L,B,q,re)=>{L==null?i(B.el=l(B.children||""),q,re):B.el=L.el},y=(L,B,q,re)=>{[L.el,L.anchor]=x(L.children,B,q,re,L.el,L.anchor)},C=({el:L,anchor:B},q,re)=>{let ie;for(;L&&L!==B;)ie=d(L),i(L,q,re),L=ie;i(B,q,re)},w=({el:L,anchor:B})=>{let q;for(;L&&L!==B;)q=d(L),s(L),L=q;s(B)},I=(L,B,q,re,ie,G,P,ge,de)=>{if(B.type==="svg"?P="svg":B.type==="math"&&(P="mathml"),L==null)D(B,q,re,ie,G,P,ge,de);else{const le=L.el&&L.el._isVueCE?L.el:null;try{le&&le._beginPatch(),R(L,B,ie,G,P,ge,de)}finally{le&&le._endPatch()}}},D=(L,B,q,re,ie,G,P,ge)=>{let de,le;const{props:pe,shapeFlag:T,transition:E,dirs:F}=L;if(de=L.el=o(L.type,G,pe&&pe.is,pe),T&8?f(de,L.children):T&16&&S(L.children,de,null,re,ie,au(L,G),P,ge),F&&sr(L,null,re,"created"),U(de,L,L.scopeId,P,re),pe){for(const ae in pe)ae!=="value"&&!ta(ae)&&r(de,ae,null,pe[ae],G,re);"value"in pe&&r(de,"value",null,pe.value,G),(le=pe.onVnodeBeforeMount)&&Ai(le,re,L)}F&&sr(L,null,re,"beforeMount");const X=VS(ie,E);X&&E.beforeEnter(de),i(de,B,q),((le=pe&&pe.onVnodeMounted)||X||F)&&Dn(()=>{le&&Ai(le,re,L),X&&E.enter(de),F&&sr(L,null,re,"mounted")},ie)},U=(L,B,q,re,ie)=>{if(q&&m(L,q),re)for(let G=0;G<re.length;G++)m(L,re[G]);if(ie){let G=ie.subTree;if(B===G||D_(G.type)&&(G.ssContent===B||G.ssFallback===B)){const P=ie.vnode;U(L,P,P.scopeId,P.slotScopeIds,ie.parent)}}},S=(L,B,q,re,ie,G,P,ge,de=0)=>{for(let le=de;le<L.length;le++){const pe=L[le]=ge?us(L[le]):Ii(L[le]);b(null,pe,B,q,re,ie,G,P,ge)}},R=(L,B,q,re,ie,G,P)=>{const ge=B.el=L.el;let{patchFlag:de,dynamicChildren:le,dirs:pe}=B;de|=L.patchFlag&16;const T=L.props||Bt,E=B.props||Bt;let F;if(q&&rr(q,!1),(F=E.onVnodeBeforeUpdate)&&Ai(F,q,B,L),pe&&sr(B,L,q,"beforeUpdate"),q&&rr(q,!0),(T.innerHTML&&E.innerHTML==null||T.textContent&&E.textContent==null)&&f(ge,""),le?te(L.dynamicChildren,le,ge,q,re,au(B,ie),G):P||he(L,B,ge,null,q,re,au(B,ie),G,!1),de>0){if(de&16)N(ge,T,E,q,ie);else if(de&2&&T.class!==E.class&&r(ge,"class",null,E.class,ie),de&4&&r(ge,"style",T.style,E.style,ie),de&8){const X=B.dynamicProps;for(let ae=0;ae<X.length;ae++){const J=X[ae],we=T[J],ve=E[J];(ve!==we||J==="value")&&r(ge,J,we,ve,ie,q)}}de&1&&L.children!==B.children&&f(ge,B.children)}else!P&&le==null&&N(ge,T,E,q,ie);((F=E.onVnodeUpdated)||pe)&&Dn(()=>{F&&Ai(F,q,B,L),pe&&sr(B,L,q,"updated")},re)},te=(L,B,q,re,ie,G,P)=>{for(let ge=0;ge<B.length;ge++){const de=L[ge],le=B[ge],pe=de.el&&(de.type===gn||!ko(de,le)||de.shapeFlag&198)?h(de.el):q;b(de,le,pe,null,re,ie,G,P,!0)}},N=(L,B,q,re,ie)=>{if(B!==q){if(B!==Bt)for(const G in B)!ta(G)&&!(G in q)&&r(L,G,B[G],null,ie,re);for(const G in q){if(ta(G))continue;const P=q[G],ge=B[G];P!==ge&&G!=="value"&&r(L,G,ge,P,ie,re)}"value"in q&&r(L,"value",B.value,q.value,ie)}},Y=(L,B,q,re,ie,G,P,ge,de)=>{const le=B.el=L?L.el:a(""),pe=B.anchor=L?L.anchor:a("");let{patchFlag:T,dynamicChildren:E,slotScopeIds:F}=B;F&&(ge=ge?ge.concat(F):F),L==null?(i(le,q,re),i(pe,q,re),S(B.children||[],q,pe,ie,G,P,ge,de)):T>0&&T&64&&E&&L.dynamicChildren&&L.dynamicChildren.length===E.length?(te(L.dynamicChildren,E,q,ie,G,P,ge),(B.key!=null||ie&&B===ie.subTree)&&P_(L,B,!0)):he(L,B,q,pe,ie,G,P,ge,de)},j=(L,B,q,re,ie,G,P,ge,de)=>{B.slotScopeIds=ge,L==null?B.shapeFlag&512?ie.ctx.activate(B,q,re,P,de):oe(B,q,re,ie,G,P,de):ee(L,B,de)},oe=(L,B,q,re,ie,G,P)=>{const ge=L.component=jS(L,re,ie);if(u_(L)&&(ge.ctx.renderer=Xe),ZS(ge,!1,P),ge.asyncDep){if(ie&&ie.registerDep(ge,K,P),!L.el){const de=ge.subTree=zt(bs);g(null,de,B,q),L.placeholder=de.el}}else K(ge,L,B,q,ie,G,P)},ee=(L,B,q)=>{const re=B.component=L.component;if(RS(L,B,q))if(re.asyncDep&&!re.asyncResolved){k(re,B,q);return}else re.next=B,re.update();else B.el=L.el,re.vnode=B},K=(L,B,q,re,ie,G,P)=>{const ge=()=>{if(L.isMounted){let{next:T,bu:E,u:F,parent:X,vnode:ae}=L;{const ke=L_(L);if(ke){T&&(T.el=ae.el,k(L,T,P)),ke.asyncDep.then(()=>{Dn(()=>{L.isUnmounted||le()},ie)});return}}let J=T,we;rr(L,!1),T?(T.el=ae.el,k(L,T,P)):T=ae,E&&eu(E),(we=T.props&&T.props.onVnodeBeforeUpdate)&&Ai(we,X,T,ae),rr(L,!0);const ve=Fp(L),Fe=L.subTree;L.subTree=ve,b(Fe,ve,h(Fe.el),Se(Fe),L,ie,G),T.el=ve.el,J===null&&PS(L,ve.el),F&&Dn(F,ie),(we=T.props&&T.props.onVnodeUpdated)&&Dn(()=>Ai(we,X,T,ae),ie)}else{let T;const{el:E,props:F}=B,{bm:X,m:ae,parent:J,root:we,type:ve}=L,Fe=oo(B);rr(L,!1),X&&eu(X),!Fe&&(T=F&&F.onVnodeBeforeMount)&&Ai(T,J,B),rr(L,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(ve,L.parent?L.parent.type:void 0);const ke=L.subTree=Fp(L);b(null,ke,q,re,L,ie,G),B.el=ke.el}if(ae&&Dn(ae,ie),!Fe&&(T=F&&F.onVnodeMounted)){const ke=B;Dn(()=>Ai(T,J,ke),ie)}(B.shapeFlag&256||J&&oo(J.vnode)&&J.vnode.shapeFlag&256)&&L.a&&Dn(L.a,ie),L.isMounted=!0,B=q=re=null}};L.scope.on();const de=L.effect=new kg(ge);L.scope.off();const le=L.update=de.run.bind(de),pe=L.job=de.runIfDirty.bind(de);pe.i=L,pe.id=L.uid,de.scheduler=()=>xh(pe),rr(L,!0),le()},k=(L,B,q)=>{B.component=L;const re=L.vnode.props;L.vnode=B,L.next=null,IS(L,B.props,re,q),US(L,B.children,q),vs(),Rp(L),xs()},he=(L,B,q,re,ie,G,P,ge,de=!1)=>{const le=L&&L.children,pe=L?L.shapeFlag:0,T=B.children,{patchFlag:E,shapeFlag:F}=B;if(E>0){if(E&128){Le(le,T,q,re,ie,G,P,ge,de);return}else if(E&256){me(le,T,q,re,ie,G,P,ge,de);return}}F&8?(pe&16&&ue(le,ie,G),T!==le&&f(q,T)):pe&16?F&16?Le(le,T,q,re,ie,G,P,ge,de):ue(le,ie,G,!0):(pe&8&&f(q,""),F&16&&S(T,q,re,ie,G,P,ge,de))},me=(L,B,q,re,ie,G,P,ge,de)=>{L=L||io,B=B||io;const le=L.length,pe=B.length,T=Math.min(le,pe);let E;for(E=0;E<T;E++){const F=B[E]=de?us(B[E]):Ii(B[E]);b(L[E],F,q,null,ie,G,P,ge,de)}le>pe?ue(L,ie,G,!0,!1,T):S(B,q,re,ie,G,P,ge,de,T)},Le=(L,B,q,re,ie,G,P,ge,de)=>{let le=0;const pe=B.length;let T=L.length-1,E=pe-1;for(;le<=T&&le<=E;){const F=L[le],X=B[le]=de?us(B[le]):Ii(B[le]);if(ko(F,X))b(F,X,q,null,ie,G,P,ge,de);else break;le++}for(;le<=T&&le<=E;){const F=L[T],X=B[E]=de?us(B[E]):Ii(B[E]);if(ko(F,X))b(F,X,q,null,ie,G,P,ge,de);else break;T--,E--}if(le>T){if(le<=E){const F=E+1,X=F<pe?B[F].el:re;for(;le<=E;)b(null,B[le]=de?us(B[le]):Ii(B[le]),q,X,ie,G,P,ge,de),le++}}else if(le>E)for(;le<=T;)Ae(L[le],ie,G,!0),le++;else{const F=le,X=le,ae=new Map;for(le=X;le<=E;le++){const Re=B[le]=de?us(B[le]):Ii(B[le]);Re.key!=null&&ae.set(Re.key,le)}let J,we=0;const ve=E-X+1;let Fe=!1,ke=0;const _e=new Array(ve);for(le=0;le<ve;le++)_e[le]=0;for(le=F;le<=T;le++){const Re=L[le];if(we>=ve){Ae(Re,ie,G,!0);continue}let Ce;if(Re.key!=null)Ce=ae.get(Re.key);else for(J=X;J<=E;J++)if(_e[J-X]===0&&ko(Re,B[J])){Ce=J;break}Ce===void 0?Ae(Re,ie,G,!0):(_e[Ce-X]=le+1,Ce>=ke?ke=Ce:Fe=!0,b(Re,B[Ce],q,null,ie,G,P,ge,de),we++)}const Ee=Fe?kS(_e):io;for(J=Ee.length-1,le=ve-1;le>=0;le--){const Re=X+le,Ce=B[Re],Ne=B[Re+1],et=Re+1<pe?Ne.el||I_(Ne):re;_e[le]===0?b(null,Ce,q,et,ie,G,P,ge,de):Fe&&(J<0||le!==Ee[J]?Oe(Ce,q,et,2):J--)}}},Oe=(L,B,q,re,ie=null)=>{const{el:G,type:P,transition:ge,children:de,shapeFlag:le}=L;if(le&6){Oe(L.component.subTree,B,q,re);return}if(le&128){L.suspense.move(B,q,re);return}if(le&64){P.move(L,B,q,Xe);return}if(P===gn){i(G,B,q);for(let T=0;T<de.length;T++)Oe(de[T],B,q,re);i(L.anchor,B,q);return}if(P===Pl){C(L,B,q);return}if(re!==2&&le&1&&ge)if(re===0)ge.beforeEnter(G),i(G,B,q),Dn(()=>ge.enter(G),ie);else{const{leave:T,delayLeave:E,afterLeave:F}=ge,X=()=>{L.ctx.isUnmounted?s(G):i(G,B,q)},ae=()=>{G._isLeaving&&G[tS](!0),T(G,()=>{X(),F&&F()})};E?E(G,X,ae):ae()}else i(G,B,q)},Ae=(L,B,q,re=!1,ie=!1)=>{const{type:G,props:P,ref:ge,children:de,dynamicChildren:le,shapeFlag:pe,patchFlag:T,dirs:E,cacheIndex:F}=L;if(T===-2&&(ie=!1),ge!=null&&(vs(),sa(ge,null,q,L,!0),xs()),F!=null&&(B.renderCache[F]=void 0),pe&256){B.ctx.deactivate(L);return}const X=pe&1&&E,ae=!oo(L);let J;if(ae&&(J=P&&P.onVnodeBeforeUnmount)&&Ai(J,B,L),pe&6)St(L.component,q,re);else{if(pe&128){L.suspense.unmount(q,re);return}X&&sr(L,null,B,"beforeUnmount"),pe&64?L.type.remove(L,B,q,Xe,re):le&&!le.hasOnce&&(G!==gn||T>0&&T&64)?ue(le,B,q,!1,!0):(G===gn&&T&384||!ie&&pe&16)&&ue(de,B,q),re&&Je(L)}(ae&&(J=P&&P.onVnodeUnmounted)||X)&&Dn(()=>{J&&Ai(J,B,L),X&&sr(L,null,B,"unmounted")},q)},Je=L=>{const{type:B,el:q,anchor:re,transition:ie}=L;if(B===gn){At(q,re);return}if(B===Pl){w(L);return}const G=()=>{s(q),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(L.shapeFlag&1&&ie&&!ie.persisted){const{leave:P,delayLeave:ge}=ie,de=()=>P(q,G);ge?ge(L.el,G,de):de()}else G()},At=(L,B)=>{let q;for(;L!==B;)q=d(L),s(L),L=q;s(B)},St=(L,B,q)=>{const{bum:re,scope:ie,job:G,subTree:P,um:ge,m:de,a:le}=L;kp(de),kp(le),re&&eu(re),ie.stop(),G&&(G.flags|=8,Ae(P,L,B,q)),ge&&Dn(ge,B),Dn(()=>{L.isUnmounted=!0},B)},ue=(L,B,q,re=!1,ie=!1,G=0)=>{for(let P=G;P<L.length;P++)Ae(L[P],B,q,re,ie)},Se=L=>{if(L.shapeFlag&6)return Se(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const B=d(L.anchor||L.el),q=B&&B[Qb];return q?d(q):B};let H=!1;const Ze=(L,B,q)=>{let re;L==null?B._vnode&&(Ae(B._vnode,null,null,!0),re=B._vnode.component):b(B._vnode||null,L,B,null,null,null,q),B._vnode=L,H||(H=!0,Rp(re),s_(),H=!1)},Xe={p:b,um:Ae,m:Oe,r:Je,mt:oe,mc:S,pc:he,pbc:te,n:Se,o:n};return{render:Ze,hydrate:void 0,createApp:yS(Ze)}}function au({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function rr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function VS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function P_(n,e,t=!1){const i=n.children,s=e.children;if(st(i)&&st(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=us(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&P_(o,a)),a.type===ac&&(a.patchFlag===-1&&(a=s[r]=us(a)),a.el=o.el),a.type===bs&&!a.el&&(a.el=o.el)}}function kS(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function L_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:L_(e)}function kp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function I_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?I_(e.subTree):null}const D_=n=>n.__isSuspense;function HS(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):Yb(n)}const gn=Symbol.for("v-fgt"),ac=Symbol.for("v-txt"),bs=Symbol.for("v-cmt"),Pl=Symbol.for("v-stc"),oa=[];let Xn=null;function Gt(n=!1){oa.push(Xn=n?null:[])}function zS(){oa.pop(),Xn=oa[oa.length-1]||null}let da=1;function Hp(n,e=!1){da+=n,n<0&&Xn&&e&&(Xn.hasOnce=!0)}function N_(n){return n.dynamicChildren=da>0?Xn||io:null,zS(),da>0&&Xn&&Xn.push(n),n}function tn(n,e,t,i,s,r){return N_(We(n,e,t,i,s,r,!0))}function pa(n,e,t,i,s){return N_(zt(n,e,t,i,s,!0))}function yh(n){return n?n.__v_isVNode===!0:!1}function ko(n,e){return n.type===e.type&&n.key===e.key}const O_=({key:n})=>n??null,Ll=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qt(n)||vn(n)||at(n)?{i:Rn,r:n,k:e,f:!!t}:n:null);function We(n,e=null,t=null,i=0,s=null,r=n===gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&O_(e),ref:e&&Ll(e),scopeId:o_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rn};return a?(Mh(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=qt(t)?8:16),da>0&&!o&&Xn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xn.push(l),l}const zt=GS;function GS(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===p_)&&(n=bs),yh(n)){const a=mo(n,e,!0);return t&&Mh(a,t),da>0&&!r&&Xn&&(a.shapeFlag&6?Xn[Xn.indexOf(n)]=a:Xn.push(a)),a.patchFlag=-2,a}if(ny(n)&&(n=n.__vccOpts),e){e=WS(e);let{class:a,style:l}=e;a&&!qt(a)&&(e.class=fo(a)),Ot(l)&&(vh(l)&&!st(l)&&(l=xn({},l)),e.style=ch(l))}const o=qt(n)?1:D_(n)?128:eS(n)?64:Ot(n)?4:at(n)?2:0;return We(n,e,t,i,s,o,r,!0)}function WS(n){return n?vh(n)||M_(n)?xn({},n):n:null}function mo(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=e?XS(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&O_(u),ref:e&&e.ref?t&&r?st(r)?r.concat(Ll(e)):[r,Ll(e)]:Ll(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mo(n.ssContent),ssFallback:n.ssFallback&&mo(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Eh(f,l.clone(f)),f}function ms(n=" ",e=0){return zt(ac,null,n,e)}function lc(n,e){const t=zt(Pl,null,n);return t.staticCount=e,t}function $S(n="",e=!1){return e?(Gt(),pa(bs,null,n)):zt(bs,null,n)}function Ii(n){return n==null||typeof n=="boolean"?zt(bs):st(n)?zt(gn,null,n.slice()):yh(n)?us(n):zt(ac,null,String(n))}function us(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mo(n)}function Mh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Mh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!M_(e)?e._ctx=Rn:s===3&&Rn&&(Rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:Rn},t=32):(e=String(e),i&64?(t=16,e=[ms(e)]):t=8);n.children=e,n.shapeFlag|=t}function XS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=fo([e.class,i.class]));else if(s==="style")e.style=ch([e.style,i.style]);else if(Ql(s)){const r=e[s],o=i[s];o&&r!==o&&!(st(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ai(n,e,t,i=null){Gi(n,e,7,[t,i])}const KS=x_();let YS=0;function jS(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||KS,r={uid:YS++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:A_(i,s),emitsOptions:E_(i,s),emit:null,emitted:null,propsDefaults:Bt,inheritAttrs:i.inheritAttrs,ctx:Bt,data:Bt,props:Bt,attrs:Bt,slots:Bt,refs:Bt,setupState:Bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=TS.bind(null,r),n.ce&&n.ce(r),r}let _n=null;const qS=()=>_n||Rn;let Xl,of;{const n=nc(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xl=e("__VUE_INSTANCE_SETTERS__",t=>_n=t),of=e("__VUE_SSR_SETTERS__",t=>ma=t)}const Ta=n=>{const e=_n;return Xl(n),n.scope.on(),()=>{n.scope.off(),Xl(e)}},zp=()=>{_n&&_n.scope.off(),Xl(null)};function U_(n){return n.vnode.shapeFlag&4}let ma=!1;function ZS(n,e=!1,t=!1){e&&of(e);const{props:i,children:s}=n.vnode,r=U_(n);LS(n,i,r,e),OS(n,s,t||e);const o=r?JS(n,e):void 0;return e&&of(!1),o}function JS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gS);const{setup:i}=t;if(i){vs();const s=n.setupContext=i.length>1?ey(n):null,r=Ta(n),o=Ma(i,n,0,[n.props,s]),a=Ig(o);if(xs(),r(),(a||n.sp)&&!oo(n)&&c_(n),a){if(o.then(zp,zp),e)return o.then(l=>{Gp(n,l)}).catch(l=>{sc(l,n,0)});n.asyncDep=o}else Gp(n,o)}else F_(n)}function Gp(n,e,t){at(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ot(e)&&(n.setupState=t_(e)),F_(n)}function F_(n,e,t){const i=n.type;n.render||(n.render=i.render||Vi);{const s=Ta(n);vs();try{_S(n)}finally{xs(),s()}}}const QS={get(n,e){return mn(n,"get",""),n[e]}};function ey(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,QS),slots:n.slots,emit:n.emit,expose:e}}function Th(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(t_(e_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ra)return ra[t](n)},has(e,t){return t in e||t in ra}})):n.proxy}function ty(n,e=!0){return at(n)?n.displayName||n.name:n.name||e&&n.__name}function ny(n){return at(n)&&"__vccOpts"in n}const iy=(n,e)=>zb(n,e,ma),sy="3.5.30";let af;const Wp=typeof window<"u"&&window.trustedTypes;if(Wp)try{af=Wp.createPolicy("vue",{createHTML:n=>n})}catch{}const B_=af?n=>af.createHTML(n):n=>n,ry="http://www.w3.org/2000/svg",oy="http://www.w3.org/1998/Math/MathML",cs=typeof document<"u"?document:null,$p=cs&&cs.createElement("template"),ay={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?cs.createElementNS(ry,n):e==="mathml"?cs.createElementNS(oy,n):t?cs.createElement(n,{is:t}):cs.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>cs.createTextNode(n),createComment:n=>cs.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>cs.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{$p.innerHTML=B_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=$p.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ly=Symbol("_vtc");function cy(n,e,t){const i=n[ly];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xp=Symbol("_vod"),uy=Symbol("_vsh"),fy=Symbol(""),hy=/(?:^|;)\s*display\s*:/;function dy(n,e,t){const i=n.style,s=qt(t);let r=!1;if(t&&!s){if(e)if(qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Il(i,a,"")}else for(const o in e)t[o]==null&&Il(i,o,"");for(const o in t)o==="display"&&(r=!0),Il(i,o,t[o])}else if(s){if(e!==t){const o=i[fy];o&&(t+=";"+o),i.cssText=t,r=hy.test(t)}}else e&&n.removeAttribute("style");Xp in n&&(n[Xp]=r?i.display:"",n[uy]&&(i.display="none"))}const Kp=/\s*!important$/;function Il(n,e,t){if(st(t))t.forEach(i=>Il(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=py(n,e);Kp.test(t)?n.setProperty(Sr(i),t.replace(Kp,""),"important"):n[i]=t}}const Yp=["Webkit","Moz","ms"],lu={};function py(n,e){const t=lu[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return lu[e]=i;i=tc(i);for(let s=0;s<Yp.length;s++){const r=Yp[s]+i;if(r in n)return lu[e]=r}return e}const jp="http://www.w3.org/1999/xlink";function qp(n,e,t,i,s,r=db(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jp,e.slice(6,e.length)):n.setAttributeNS(jp,e,t):t==null||r&&!Ug(t)?n.removeAttribute(e):n.setAttribute(e,r?"":gi(t)?String(t):t)}function Zp(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?B_(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ug(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function my(n,e,t,i){n.addEventListener(e,t,i)}function gy(n,e,t,i){n.removeEventListener(e,t,i)}const Jp=Symbol("_vei");function _y(n,e,t,i,s=null){const r=n[Jp]||(n[Jp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=vy(e);if(i){const u=r[e]=by(i,s);my(n,a,u,l)}else o&&(gy(n,a,o,l),r[e]=void 0)}}const Qp=/(?:Once|Passive|Capture)$/;function vy(n){let e;if(Qp.test(n)){e={};let i;for(;i=n.match(Qp);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sr(n.slice(2)),e]}let cu=0;const xy=Promise.resolve(),Ey=()=>cu||(xy.then(()=>cu=0),cu=Date.now());function by(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Gi(Sy(i,t.value),e,5,[i])};return t.value=n,t.attached=Ey(),t}function Sy(n,e){if(st(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const em=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yy=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?cy(n,i,o):e==="style"?dy(n,t,i):Ql(e)?oh(e)||_y(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):My(n,e,i,o))?(Zp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qp(n,e,i,o,r,e!=="value")):n._isVueCE&&(Ty(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!qt(i)))?Zp(n,Pn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qp(n,e,i,o))};function My(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&em(e)&&at(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return em(e)&&qt(t)?!1:e in n}function Ty(n,e){const t=n._def.props;if(!t)return!1;const i=Pn(e);return Array.isArray(t)?t.some(s=>Pn(s)===i):Object.keys(t).some(s=>Pn(s)===i)}const Ay=xn({patchProp:yy},ay);let tm;function wy(){return tm||(tm=FS(Ay))}const Cy=((...n)=>{const e=wy().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Py(i);if(!s)return;const r=e._component;!at(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ry(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Ry(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Py(n){return qt(n)?document.querySelector(n):n}const Ly=Symbol();var nm;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(nm||(nm={}));function Iy(){const n=mb(!0),e=n.run(()=>Ub({}));let t=[],i=[];const s=e_({install(r){s._a=r,r.provide(Ly,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const V_="/PageMultimediaVue/assets/img/Logo.png",Ki=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Dy={name:"AppNav"};function Ny(n,e,t,i,s,r){return Gt(),tn("nav",null,[...e[0]||(e[0]=[lc('<img src="'+V_+'" alt="Ingeniería Multimedia USBBOG" class="logo" data-v-800cbc2e><div class="navbar" data-v-800cbc2e><a href="#home" data-v-800cbc2e>Home</a><a href="#home" data-v-800cbc2e>Miembros</a><div class="dropdown" data-v-800cbc2e><a class="dropbtn" data-v-800cbc2e>Investigación</a><div class="dropdown-content" data-v-800cbc2e><a href="#" data-v-800cbc2e>Semilleros</a><a href="#" data-v-800cbc2e>Publicaciones</a><a href="#" data-v-800cbc2e>Grupos</a></div></div><a href="#news" data-v-800cbc2e>Eventos</a><div class="dropdown" data-v-800cbc2e><a class="dropbtn" data-v-800cbc2e>Servicios</a><div class="dropdown-content" data-v-800cbc2e><a href="#" data-v-800cbc2e>Laboratorios</a><a href="#" data-v-800cbc2e>Equipos</a><a href="#" data-v-800cbc2e>Convenios</a></div></div></div><button data-v-800cbc2e>Contáctenos</button>',3)])])}const Oy=Ki(Dy,[["render",Ny],["__scopeId","data-v-800cbc2e"]]),Uy={name:"BannerCarousel",data(){return{banners:[{image:"/assets/img/Banner/Banner_ (1).jpg",title:"// Innovación Digital",description:"Formamos profesionales del futuro multimedia con tecnologías emergentes y visión creativa."},{image:"/assets/img/Banner/Banner_ (2).jpg",title:"// Realidad Extendida",description:"Exploramos los límites de la realidad virtual, aumentada y mixed reality como herramientas de impacto."},{image:"/assets/img/Banner/Banner_ (3).jpg",title:"// Diseño Interactivo",description:"Donde el código se convierte en experiencia y la creatividad en tecnología transformadora."}]}}},Fy={id:"banner-section"},By={id:"carouselExampleIndicators",class:"carousel slide h-100","data-bs-ride":"carousel"},Vy={class:"carousel-indicators"},ky=["data-bs-slide-to","aria-current","aria-label"],Hy={class:"carousel-inner h-100"},zy=["src","alt"],Gy={class:"carousel-caption d-none d-md-block"};function Wy(n,e,t,i,s,r){return Gt(),tn("section",Fy,[We("div",By,[We("div",Vy,[(Gt(!0),tn(gn,null,ef(s.banners,(o,a)=>(Gt(),tn("button",{key:a,type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":a,class:fo({active:a===0}),"aria-current":a===0,"aria-label":`Slide ${a+1}`},null,10,ky))),128))]),We("div",Hy,[(Gt(!0),tn(gn,null,ef(s.banners,(o,a)=>(Gt(),tn("div",{key:a,class:fo(["carousel-item","h-100",{active:a===0}])},[We("img",{src:o.image,class:"d-block w-100 h-100",alt:o.title},null,8,zy),We("div",Gy,[We("h5",null,Oi(o.title),1),We("p",null,Oi(o.description),1)])],2))),128))]),e[0]||(e[0]=lc('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-ff818496><span class="carousel-control-prev-icon" aria-hidden="true" data-v-ff818496></span><span class="visually-hidden" data-v-ff818496>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-ff818496><span class="carousel-control-next-icon" aria-hidden="true" data-v-ff818496></span><span class="visually-hidden" data-v-ff818496>Next</span></button>',2))])])}const $y=Ki(Uy,[["render",Wy],["__scopeId","data-v-ff818496"]]),Xy="modulepreload",Ky=function(n){return"/PageMultimediaVue/"+n},im={},k_=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var o=u;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=u(t.map(f=>{if(f=Ky(f),f in im)return;im[f]=!0;const h=f.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Xy,h||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((x,b)=>{m.addEventListener("load",x),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},Yy={name:"SectionLabel",props:{number:{type:String,required:!0},label:{type:String,required:!0}}},jy={class:"section-number"},qy={class:"section-label"};function Zy(n,e,t,i,s,r){return Gt(),tn("div",null,[We("p",jy,Oi(t.number)+" //",1),We("div",qy,Oi(t.label),1)])}const Ah=Ki(Yy,[["render",Zy],["__scopeId","data-v-7988fa79"]]),Jy={name:"AppButton",props:{variant:{type:String,default:"primary",validator:n=>["primary","secondary","ghost"].includes(n)},href:{type:String,default:null},showArrow:{type:Boolean,default:!1}},computed:{tag(){return this.href?"a":"button"}}},Qy={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",class:"arrow"};function eM(n,e,t,i,s,r){return Gt(),pa(pS(r.tag),{href:t.href,class:fo(["btn",`btn--${t.variant}`])},{default:po(()=>[mS(n.$slots,"default",{},void 0,!0),t.showArrow?(Gt(),tn("svg",Qy,[...e[0]||(e[0]=[We("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),We("polyline",{points:"12 5 19 12 12 19"},null,-1)])])):$S("",!0)]),_:3},8,["href","class"])}const wh=Ki(Jy,[["render",eM],["__scopeId","data-v-c8cf05fd"]]),tM="/PageMultimediaVue/assets/img/Img_1.png",nM={name:"AboutSection",components:{SectionLabel:Ah,AppButton:wh},mounted(){k_(()=>Promise.resolve().then(()=>RL),void 0).then(n=>{n.initAboutThree&&n.initAboutThree()})}},iM={class:"about-section",id:"home"},sM={class:"about-content"},rM={class:"about-info"},oM={class:"about-text"},aM={class:"about-buttons"};function lM(n,e,t,i,s,r){const o=Wn("SectionLabel"),a=Wn("AppButton");return Gt(),tn("section",iM,[e[5]||(e[5]=We("div",{id:"particles-about",class:"particles-bg"},null,-1)),e[6]||(e[6]=We("div",{class:"glow-blob"},null,-1)),We("div",sM,[We("div",rM,[We("div",oM,[zt(o,{number:"01",label:"Sobre el programa"}),e[2]||(e[2]=lc('<h1 data-v-18398a6d>Ingeniería<br data-v-18398a6d><span class="accent" data-v-18398a6d>Multimedia</span></h1><div class="about-code-snippet" data-v-18398a6d><span class="kw" data-v-18398a6d>const</span> programa = {<br data-v-18398a6d>   nombre: <span class="str" data-v-18398a6d>&quot;Ingeniería Multimedia&quot;</span>,<br data-v-18398a6d>   mision: <span class="fn" data-v-18398a6d>await launchProject</span>(<span class="str" data-v-18398a6d>&quot;innovation&quot;</span>)<br data-v-18398a6d> } </div><p data-v-18398a6d>Formamos profesionales capaces de crear, desarrollar e innovar en el mundo de los medios digitales, la realidad virtual y las tecnologías emergentes.</p>',3)),We("div",aM,[zt(a,{variant:"primary",href:"#","show-arrow":!0},{default:po(()=>[...e[0]||(e[0]=[ms("Conoce más",-1)])]),_:1}),zt(a,{variant:"ghost",href:"#"},{default:po(()=>[...e[1]||(e[1]=[ms("Contáctenos",-1)])]),_:1})])]),e[3]||(e[3]=We("div",{class:"about-stats"},[We("div",{class:"stat-card"},[We("h3",null,"15+"),We("p",null,"Años de experiencia")]),We("div",{class:"stat-card"},[We("h3",null,"800+"),We("p",null,"Graduados")]),We("div",{class:"stat-card"},[We("h3",null,"98%"),We("p",null,"Empleabilidad")])],-1))]),e[4]||(e[4]=We("div",{class:"about-image-container",id:"aboutThree"},[We("div",{class:"img-frame"},[We("img",{src:tM,class:"about-image",alt:"Estudiante con dispositivos de realidad virtual"})]),We("span",{class:"hud-label"},"terrain_render.glsl")],-1))])])}const cM=Ki(nM,[["render",lM],["__scopeId","data-v-18398a6d"]]),uM={name:"SemilleroCard",components:{AppButton:wh},props:{semillero:{type:Object,required:!0,validator:n=>n.label&&n.title&&n.description&&n.members&&n.projects},index:{type:Number,required:!0}}},fM={class:"semilleroCard"},hM={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"square"},dM={key:0,points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},pM={key:2,points:"22 12 18 12 15 21 9 3 6 12 2 12"};function mM(n,e,t,i,s,r){const o=Wn("AppButton");return Gt(),tn("div",fM,[(Gt(),tn("svg",hM,[t.index===0?(Gt(),tn("polygon",dM)):t.index===1?(Gt(),tn(gn,{key:1},[e[0]||(e[0]=We("circle",{cx:"12",cy:"12",r:"3"},null,-1)),e[1]||(e[1]=We("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"},null,-1)),e[2]||(e[2]=We("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"},null,-1))],64)):(Gt(),tn("polyline",pM))])),We("h5",null,Oi(t.semillero.label),1),We("h3",null,Oi(t.semillero.title),1),We("p",null,Oi(t.semillero.description),1),We("div",null,[We("div",null,[We("h5",null,Oi(t.semillero.members),1),e[3]||(e[3]=We("span",null,"miembros",-1))]),We("div",null,[We("h5",null,Oi(t.semillero.projects),1),e[4]||(e[4]=We("span",null,"proyectos",-1))])]),zt(o,{variant:"secondary",href:"#"},{default:po(()=>[...e[5]||(e[5]=[ms("Conoce más",-1)])]),_:1})])}const gM=Ki(uM,[["render",mM],["__scopeId","data-v-4998d5ad"]]),_M={name:"SemillerosSection",components:{SectionLabel:Ah,SemilleroCard:gM},data(){return{semilleros:[{label:"// Semillero 01",title:"Videojuegos & XR",description:"Creación de videojuegos y experiencias inmersivas con motores como Unity y Unreal Engine. Investigación en mecánicas de juego, narrativa interactiva y realidad extendida.",members:"05",projects:"12"},{label:"// Semillero 02",title:"Inteligencia Artificial",description:"Aplicación de machine learning y redes neuronales en producción audiovisual, generación de contenido y análisis de datos para medios digitales.",members:"08",projects:"07"},{label:"// Semillero 03",title:"Diseño Interactivo",description:"Investigación en UX/UI avanzado, interfaces tangibles y diseño de experiencias digitales centradas en el usuario para plataformas emergentes.",members:"06",projects:"09"}]}}},vM={class:"sectionInvestigacion"},xM={class:"semilleros"};function EM(n,e,t,i,s,r){const o=Wn("SectionLabel"),a=Wn("SemilleroCard");return Gt(),tn("section",vM,[zt(o,{number:"02",label:"Semilleros e Investigación"}),e[0]||(e[0]=We("h2",null,[ms("Grupos de"),We("br"),ms("Investigación")],-1)),e[1]||(e[1]=We("p",null," Nuestros semilleros son espacios donde estudiantes y docentes colaboran en proyectos innovadores que impactan la industria multimedia y tecnológica. ",-1)),We("div",xM,[(Gt(!0),tn(gn,null,ef(s.semilleros,(l,u)=>(Gt(),pa(a,{key:u,semillero:l,index:u},null,8,["semillero","index"]))),128))])])}const bM=Ki(_M,[["render",EM],["__scopeId","data-v-5774a7af"]]),SM={name:"EventosSection",components:{SectionLabel:Ah,AppButton:wh},mounted(){k_(()=>Promise.resolve().then(()=>IM),void 0).catch(()=>{})}},yM={class:"Eventos",id:"news"},MM={class:"VideoEvento"},TM={class:"event-info"};function AM(n,e,t,i,s,r){const o=Wn("SectionLabel"),a=Wn("AppButton");return Gt(),tn("section",yM,[e[5]||(e[5]=We("div",{id:"particles-events",class:"particles-bg"},null,-1)),zt(o,{number:"03",label:"// En vivo"}),e[6]||(e[6]=We("h2",null,[ms("Próximos"),We("br"),ms("Eventos")],-1)),We("div",MM,[e[4]||(e[4]=We("div",{class:"video-wrapper"},[We("iframe",{title:"Segunda Creación Colectiva — Ingeniería Multimedia USBBOG",src:"https://www.youtube.com/embed/0gQwwXwgSUs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)),We("div",TM,[e[1]||(e[1]=We("h5",null,"// Segunda Creación Colectiva",-1)),e[2]||(e[2]=We("h3",null,"Segunda Creación Colectiva — Ingeniería Multimedia USBBOG",-1)),e[3]||(e[3]=We("p",null," Ya puedes ver la segunda creación colectiva del USB Medialab. Los estudiantes de Ingeniería Multimedia estuvieron trabajando en una animación donde los personajes más reconocidos de Cartoon Network bailan y cantan al ritmo de Thrift Shop. ",-1)),zt(a,{variant:"primary",href:"#"},{default:po(()=>[...e[0]||(e[0]=[ms("Eventos pasados",-1)])]),_:1})])])])}const wM=Ki(SM,[["render",AM],["__scopeId","data-v-a96b16c4"]]),CM={name:"AppFooter"},RM={class:"site-footer"};function PM(n,e,t,i,s,r){return Gt(),tn("footer",RM,[...e[0]||(e[0]=[lc('<div class="footer-content" data-v-1bb1c59b><div class="footer-col" data-v-1bb1c59b><img src="'+V_+'" alt="Logo Ingeniería Multimedia" class="footer-logo" data-v-1bb1c59b><p class="muted" data-v-1bb1c59b> Ingeniería Multimedia USBBOG. Formación, tecnología y creatividad para transformar el mundo digital. </p></div><div class="footer-col" data-v-1bb1c59b><h4 data-v-1bb1c59b>Navegación</h4><ul class="footer-links" data-v-1bb1c59b><li data-v-1bb1c59b><a href="#home" data-v-1bb1c59b>Inicio</a></li><li data-v-1bb1c59b><a href="#home" data-v-1bb1c59b>Miembros</a></li><li data-v-1bb1c59b><a href="#news" data-v-1bb1c59b>Eventos</a></li><li data-v-1bb1c59b><a href="#" data-v-1bb1c59b>Servicios</a></li></ul></div><div class="footer-col" data-v-1bb1c59b><h4 data-v-1bb1c59b>Contacto</h4><ul class="footer-contact" data-v-1bb1c59b><li data-v-1bb1c59b><i class="fa-solid fa-location-dot" data-v-1bb1c59b></i> Bogotá, Colombia</li><li data-v-1bb1c59b><i class="fa-solid fa-envelope" data-v-1bb1c59b></i> ingenieria@usb.edu.co</li><li data-v-1bb1c59b><i class="fa-solid fa-phone" data-v-1bb1c59b></i> +57 1 234 5678</li></ul></div><div class="footer-col" data-v-1bb1c59b><h4 data-v-1bb1c59b>Redes</h4><div class="footer-social" data-v-1bb1c59b><a href="#" aria-label="Facebook" data-v-1bb1c59b><i class="fa-brands fa-facebook-f" data-v-1bb1c59b></i></a><a href="#" aria-label="Instagram" data-v-1bb1c59b><i class="fa-brands fa-instagram" data-v-1bb1c59b></i></a><a href="#" aria-label="YouTube" data-v-1bb1c59b><i class="fa-brands fa-youtube" data-v-1bb1c59b></i></a><a href="#" aria-label="X / Twitter" data-v-1bb1c59b><i class="fa-brands fa-x-twitter" data-v-1bb1c59b></i></a></div></div></div><hr class="footer-hr" data-v-1bb1c59b><div class="footer-bottom" data-v-1bb1c59b><p data-v-1bb1c59b>2025 Ingeniería Multimedia USBBOG — Todos los derechos reservados.</p></div>',3)])])}const LM=Ki(CM,[["render",PM],["__scopeId","data-v-1bb1c59b"]]);function Ch(n){!document.getElementById(n)||typeof particlesJS>"u"||particlesJS(n,{particles:{number:{value:155,density:{enable:!0,value_area:1e3}},color:{value:["#04BFBF","#F2911B","#037F8C"]},shape:{type:"circle"},opacity:{value:.35,random:!0,anim:{enable:!0,speed:.6,opacity_min:.05,sync:!1}},size:{value:1.5,random:!0,anim:{enable:!0,speed:1.5,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:130,color:"#037F8C",opacity:.18,width:1},move:{enable:!0,speed:1.2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:160,line_linked:{opacity:.4}},push:{particles_nb:2}}},retina_detect:!0})}function Rh(){const n=document.querySelectorAll("[data-reveal]");if(!n.length)return;const e=new IntersectionObserver(t=>{t.forEach(i=>{if(i.isIntersecting){const s=i.target.dataset.revealDelay||0;setTimeout(()=>i.target.classList.add("visible"),Number(s)),e.unobserve(i.target)}})},{threshold:.12});n.forEach(t=>e.observe(t))}typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{["particles-about","particles-events"].forEach(Ch),Rh()});const IM=Object.freeze(Object.defineProperty({__proto__:null,initParticles:Ch,initScrollReveal:Rh},Symbol.toStringTag,{value:"Module"}));const Ph="183",DM=0,sm=1,NM=2,Dl=1,OM=2,Jo=3,Ss=0,On=1,Ui=2,gs=0,lo=1,rm=2,om=3,am=4,UM=5,mr=100,FM=101,BM=102,VM=103,kM=104,HM=200,zM=201,GM=202,WM=203,lf=204,cf=205,$M=206,XM=207,KM=208,YM=209,jM=210,qM=211,ZM=212,JM=213,QM=214,uf=0,ff=1,hf=2,go=3,df=4,pf=5,mf=6,gf=7,H_=0,eT=1,tT=2,ki=0,z_=1,G_=2,W_=3,$_=4,X_=5,K_=6,Y_=7,lm="attached",nT="detached",j_=300,br=301,_o=302,uu=303,fu=304,cc=306,vo=1e3,Fi=1001,Kl=1002,nn=1003,q_=1004,Qo=1005,sn=1006,Nl=1007,hs=1008,$n=1009,Z_=1010,J_=1011,ga=1012,Lh=1013,Wi=1014,Qn=1015,ys=1016,Ih=1017,Dh=1018,_a=1020,Q_=35902,ev=35899,tv=1021,nv=1022,ei=1023,Ms=1026,_r=1027,Nh=1028,Oh=1029,xo=1030,Uh=1031,Fh=1033,Ol=33776,Ul=33777,Fl=33778,Bl=33779,_f=35840,vf=35841,xf=35842,Ef=35843,bf=36196,Sf=37492,yf=37496,Mf=37488,Tf=37489,Af=37490,wf=37491,Cf=37808,Rf=37809,Pf=37810,Lf=37811,If=37812,Df=37813,Nf=37814,Of=37815,Uf=37816,Ff=37817,Bf=37818,Vf=37819,kf=37820,Hf=37821,zf=36492,Gf=36494,Wf=36495,$f=36283,Xf=36284,Kf=36285,Yf=36286,va=2300,xa=2301,hu=2302,cm=2303,um=2400,fm=2401,hm=2402,iT=2500,sT=0,iv=1,jf=2,rT=3200,sv=0,oT=1,ks="",fn="srgb",In="srgb-linear",Yl="linear",Ct="srgb",kr=7680,dm=519,aT=512,lT=513,cT=514,Bh=515,uT=516,fT=517,Vh=518,hT=519,qf=35044,pm="300 es",Bi=2e3,Ea=2001;function dT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mT(){const n=ba("canvas");return n.style.display="block",n}const mm={};function jl(...n){const e="THREE."+n.shift();console.log(e,...n)}function rv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=rv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=rv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ql(...n){const e=n.join(" ");e in mm||(mm[e]=!0,Ye(...n))}function gT(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const _T={[uf]:ff,[hf]:mf,[df]:gf,[go]:pf,[ff]:uf,[mf]:hf,[gf]:df,[pf]:go};class To{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gm=1234567;const aa=Math.PI/180,Eo=180/Math.PI;function pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function kh(n,e){return(n%e+e)%e}function vT(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function xT(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function ET(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function bT(n,e=1){return e-Math.abs(kh(n,e*2)-e)}function ST(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function MT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function TT(n,e){return n+Math.random()*(e-n)}function AT(n){return n*(.5-Math.random())}function wT(n){n!==void 0&&(gm=n);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CT(n){return n*aa}function RT(n){return n*Eo}function PT(n){return(n&n-1)===0&&n!==0}function LT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function IT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function DT(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+i)/2),f=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),x=o((i-e)/2);switch(s){case"XYX":n.set(a*f,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*f,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*f,a*u);break;case"XZX":n.set(a*f,l*x,l*m,a*u);break;case"YXY":n.set(l*m,a*f,l*x,a*u);break;case"ZYZ":n.set(l*x,l*m,a*f,a*u);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const NT={DEG2RAD:aa,RAD2DEG:Eo,generateUUID:pi,clamp:pt,euclideanModulo:kh,mapLinear:vT,inverseLerp:xT,lerp:la,damp:ET,pingpong:bT,smoothstep:ST,smootherstep:yT,randInt:MT,randFloat:TT,randFloatSpread:AT,seededRandom:wT,degToRad:CT,radToDeg:RT,isPowerOfTwo:PT,ceilPowerOfTwo:LT,floorPowerOfTwo:IT,setQuaternionFromProperEuler:DT,normalize:Rt,denormalize:fi};class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],f=i[s+2],h=i[s+3],d=r[o+0],m=r[o+1],x=r[o+2],b=r[o+3];if(h!==b||l!==d||u!==m||f!==x){let _=l*d+u*m+f*x+h*b;_<0&&(d=-d,m=-m,x=-x,b=-b,_=-_);let g=1-a;if(_<.9995){const y=Math.acos(_),C=Math.sin(y);g=Math.sin(g*y)/C,a=Math.sin(a*y)/C,l=l*g+d*a,u=u*g+m*a,f=f*g+x*a,h=h*g+b*a}else{l=l*g+d*a,u=u*g+m*a,f=f*g+x*a,h=h*g+b*a;const y=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=y,u*=y,f*=y,h*=y}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o],d=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+f*h+l*m-u*d,e[t+1]=l*x+f*d+u*h-a*m,e[t+2]=u*x+f*m+a*d-l*h,e[t+3]=f*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+s*u-r*l,this._y=s*f+o*l+r*a-i*u,this._z=r*f+o*u+i*l-s*a,this._w=o*f-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);l=Math.sin(l*u)/f,t=Math.sin(t*u)/f,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),f=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*u+o*h-a*f,this.y=i+l*f+a*u-r*h,this.z=s+l*h+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new W,_m=new As;class ot{constructor(e,t,i,s,r,o,a,l,u){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],b=s[0],_=s[3],g=s[6],y=s[1],C=s[4],w=s[7],I=s[2],D=s[5],U=s[8];return r[0]=o*b+a*y+l*I,r[3]=o*_+a*C+l*D,r[6]=o*g+a*w+l*U,r[1]=u*b+f*y+h*I,r[4]=u*_+f*C+h*D,r[7]=u*g+f*w+h*U,r[2]=d*b+m*y+x*I,r[5]=d*_+m*C+x*D,r[8]=d*g+m*w+x*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*r*f+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*r,m=u*r-o*l,x=t*h+i*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(s*u-f*i)*b,e[2]=(a*i-s*o)*b,e[3]=d*b,e[4]=(f*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=m*b,e[7]=(i*l-u*t)*b,e[8]=(o*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pu.makeScale(e,t)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new ot,vm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OT(){const n={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ks?Yl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[In]:{primaries:e,whitePoint:i,transfer:Yl,toXYZ:vm,fromXYZ:xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:vm,fromXYZ:xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const gt=OT();function _s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hr;class UT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=ba("canvas")),Hr.width=e.width,Hr.height=e.height;const s=Hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_s(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_s(t[i]/255)*255):t[i]=_s(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FT=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mu(s[o].image)):r.push(mu(s[o]))}else r=mu(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let BT=0;const gu=new W;class cn extends To{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Fi,s=Fi,r=sn,o=hs,a=ei,l=$n,u=cn.DEFAULT_ANISOTROPY,f=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=pi(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=j_;cn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],b=l[2],_=l[6],g=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+b)<.1&&Math.abs(x+_)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(u+1)/2,w=(m+1)/2,I=(g+1)/2,D=(f+d)/4,U=(h+b)/4,S=(x+_)/4;return C>w&&C>I?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=D/i,r=U/i):w>I?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=D/s,r=S/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=U/r,s=S/r),this.set(i,s,r,t),this}let y=Math.sqrt((_-x)*(_-x)+(h-b)*(h-b)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(_-x)/y,this.y=(h-b)/y,this.z=(d-f)/y,this.w=Math.acos((u+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VT extends To{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new cn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends VT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ov extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kT extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lt{constructor(e,t,i,s,r,o,a,l,u,f,h,d,m,x,b,_){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,f,h,d,m,x,b,_)}set(e,t,i,s,r,o,a,l,u,f,h,d,m,x,b,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=f,g[10]=h,g[14]=d,g[3]=m,g[7]=x,g[11]=b,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,b=a*h;t[0]=l*f,t[4]=-l*h,t[8]=u,t[1]=m+x*u,t[5]=d-b*u,t[9]=-a*l,t[2]=b-d*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,b=u*h;t[0]=d+b*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=m*a-x,t[6]=b+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,b=u*h;t[0]=d-b*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*f,t[9]=b-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,b=a*h;t[0]=l*f,t[4]=x*u-m,t[8]=d*u+b,t[1]=l*h,t[5]=b*u+d,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,b=a*u;t[0]=l*f,t[4]=b-d*h,t[8]=x*h+m,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=m*h+x,t[10]=d-b*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,b=a*u;t[0]=l*f,t[4]=-h,t[8]=u*f,t[1]=d*h+b,t[5]=o*f,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*f,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HT,e,zT)}lookAt(e,t,i){const s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Ls.crossVectors(i,zn),Ls.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Ls.crossVectors(i,zn)),Ls.normalize(),tl.crossVectors(zn,Ls),s[0]=Ls.x,s[4]=tl.x,s[8]=zn.x,s[1]=Ls.y,s[5]=tl.y,s[9]=zn.y,s[2]=Ls.z,s[6]=tl.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],b=i[6],_=i[10],g=i[14],y=i[3],C=i[7],w=i[11],I=i[15],D=s[0],U=s[4],S=s[8],R=s[12],te=s[1],N=s[5],Y=s[9],j=s[13],oe=s[2],ee=s[6],K=s[10],k=s[14],he=s[3],me=s[7],Le=s[11],Oe=s[15];return r[0]=o*D+a*te+l*oe+u*he,r[4]=o*U+a*N+l*ee+u*me,r[8]=o*S+a*Y+l*K+u*Le,r[12]=o*R+a*j+l*k+u*Oe,r[1]=f*D+h*te+d*oe+m*he,r[5]=f*U+h*N+d*ee+m*me,r[9]=f*S+h*Y+d*K+m*Le,r[13]=f*R+h*j+d*k+m*Oe,r[2]=x*D+b*te+_*oe+g*he,r[6]=x*U+b*N+_*ee+g*me,r[10]=x*S+b*Y+_*K+g*Le,r[14]=x*R+b*j+_*k+g*Oe,r[3]=y*D+C*te+w*oe+I*he,r[7]=y*U+C*N+w*ee+I*me,r[11]=y*S+C*Y+w*K+I*Le,r[15]=y*R+C*j+w*k+I*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],b=e[7],_=e[11],g=e[15],y=l*m-u*d,C=a*m-u*h,w=a*d-l*h,I=o*m-u*f,D=o*d-l*f,U=o*h-a*f;return t*(b*y-_*C+g*w)-i*(x*y-_*I+g*D)+s*(x*C-b*I+g*U)-r*(x*w-b*D+_*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],b=e[13],_=e[14],g=e[15],y=t*a-i*o,C=t*l-s*o,w=t*u-r*o,I=i*l-s*a,D=i*u-r*a,U=s*u-r*l,S=f*b-h*x,R=f*_-d*x,te=f*g-m*x,N=h*_-d*b,Y=h*g-m*b,j=d*g-m*_,oe=y*j-C*Y+w*N+I*te-D*R+U*S;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/oe;return e[0]=(a*j-l*Y+u*N)*ee,e[1]=(s*Y-i*j-r*N)*ee,e[2]=(b*U-_*D+g*I)*ee,e[3]=(d*D-h*U-m*I)*ee,e[4]=(l*te-o*j-u*R)*ee,e[5]=(t*j-s*te+r*R)*ee,e[6]=(_*w-x*U-g*C)*ee,e[7]=(f*U-d*w+m*C)*ee,e[8]=(o*Y-a*te+u*S)*ee,e[9]=(i*te-t*Y-r*S)*ee,e[10]=(x*D-b*w+g*y)*ee,e[11]=(h*w-f*D-m*y)*ee,e[12]=(a*R-o*N-l*S)*ee,e[13]=(t*N-i*R+s*S)*ee,e[14]=(b*C-x*I-_*y)*ee,e[15]=(f*I-h*C+d*y)*ee,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,f=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,f*a+i,f*l-s*o,0,u*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,f=o+o,h=a+a,d=r*u,m=r*f,x=r*h,b=o*f,_=o*h,g=a*h,y=l*u,C=l*f,w=l*h,I=i.x,D=i.y,U=i.z;return s[0]=(1-(b+g))*I,s[1]=(m+w)*I,s[2]=(x-C)*I,s[3]=0,s[4]=(m-w)*D,s[5]=(1-(d+g))*D,s[6]=(_+y)*D,s[7]=0,s[8]=(x+C)*U,s[9]=(_-y)*U,s[10]=(1-(d+b))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=zr.set(s[0],s[1],s[2]).length();const a=zr.set(s[4],s[5],s[6]).length(),l=zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);const u=1/o,f=1/a,h=1/l;return li.elements[0]*=u,li.elements[1]*=u,li.elements[2]*=u,li.elements[4]*=f,li.elements[5]*=f,li.elements[6]*=f,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,t.setFromRotationMatrix(li),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Bi,l=!1){const u=this.elements,f=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),m=(i+s)/(i-s);let x,b;if(l)x=r/(o-r),b=o*r/(o-r);else if(a===Bi)x=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Ea)x=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Bi,l=!1){const u=this.elements,f=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),m=-(i+s)/(i-s);let x,b;if(l)x=1/(o-r),b=o/(o-r);else if(a===Bi)x=-2/(o-r),b=-(o+r)/(o-r);else if(a===Ea)x=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new W,li=new lt,HT=new W(0,0,0),zT=new W(1,1,1),Ls=new W,tl=new W,zn=new W,Em=new lt,bm=new As;class $i{constructor(e=0,t=0,i=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],f=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GT=0;const Sm=new W,Gr=new As,is=new lt,nl=new W,Ho=new W,WT=new W,$T=new As,ym=new W(1,0,0),Mm=new W(0,1,0),Tm=new W(0,0,1),Am={type:"added"},XT={type:"removed"},Wr={type:"childadded",child:null},_u={type:"childremoved",child:null};class Wt extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new W,t=new $i,i=new As,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nl.copy(e):nl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Ho,nl,this.up):is.lookAt(nl,Ho,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Gr.setFromRotationMatrix(is),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XT),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,WT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,$T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new W(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ds extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,i),g=this._getHandJoint(u,b);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},il={h:0,s:0,l:0};function xu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=kh(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xu(o,r,e+1/3),this.g=xu(o,r,e),this.b=xu(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=av[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return gt.workingToColorSpace(pn.copy(this),e),Math.round(pt(pn.r*255,0,255))*65536+Math.round(pt(pn.g*255,0,255))*256+Math.round(pt(pn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(pn.copy(this),t);const i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=fn){gt.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,s=pn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(il);const i=la(Is.h,il.h,t),s=la(Is.s,il.s,t),r=la(Is.l,il.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new it;it.NAMES=av;class Gh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new Gh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class YT extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ci=new W,ss=new W,Eu=new W,rs=new W,$r=new W,Xr=new W,wm=new W,bu=new W,Su=new W,yu=new W,Mu=new kt,Tu=new kt,Au=new kt;class hi{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ci.subVectors(e,t),s.cross(ci);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ci.subVectors(s,t),ss.subVectors(i,t),Eu.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(ss),l=ci.dot(Eu),u=ss.dot(ss),f=ss.dot(Eu),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(u*l-a*f)*d,x=(o*f-a*l)*d;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Mu.setScalar(0),Tu.setScalar(0),Au.setScalar(0),Mu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,i),Au.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mu,r.x),o.addScaledVector(Tu,r.y),o.addScaledVector(Au,r.z),o}static isFrontFacing(e,t,i,s){return ci.subVectors(i,t),ss.subVectors(e,t),ci.cross(ss).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),ci.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;$r.subVectors(s,i),Xr.subVectors(r,i),bu.subVectors(e,i);const l=$r.dot(bu),u=Xr.dot(bu);if(l<=0&&u<=0)return t.copy(i);Su.subVectors(e,s);const f=$r.dot(Su),h=Xr.dot(Su);if(f>=0&&h<=f)return t.copy(s);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector($r,o);yu.subVectors(e,r);const m=$r.dot(yu),x=Xr.dot(yu);if(x>=0&&m<=x)return t.copy(r);const b=m*u-l*x;if(b<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Xr,a);const _=f*x-m*h;if(_<=0&&h-f>=0&&m-x>=0)return wm.subVectors(r,s),a=(h-f)/(h-f+(m-x)),t.copy(s).addScaledVector(wm,a);const g=1/(_+b+d);return o=b*g,a=d*g,t.copy(i).addScaledVector($r,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),rl.subVectors(this.max,zo),Kr.subVectors(e.a,zo),Yr.subVectors(e.b,zo),jr.subVectors(e.c,zo),Ds.subVectors(Yr,Kr),Ns.subVectors(jr,Yr),or.subVectors(Kr,jr);let t=[0,-Ds.z,Ds.y,0,-Ns.z,Ns.y,0,-or.z,or.y,Ds.z,0,-Ds.x,Ns.z,0,-Ns.x,or.z,0,-or.x,-Ds.y,Ds.x,0,-Ns.y,Ns.x,0,-or.y,or.x,0];return!wu(t,Kr,Yr,jr,rl)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,Kr,Yr,jr,rl))?!1:(ol.crossVectors(Ds,Ns),t=[ol.x,ol.y,ol.z],wu(t,Kr,Yr,jr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const os=[new W,new W,new W,new W,new W,new W,new W,new W],ui=new W,sl=new Yi,Kr=new W,Yr=new W,jr=new W,Ds=new W,Ns=new W,or=new W,zo=new W,rl=new W,ol=new W,ar=new W;function wu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ar.fromArray(n,r);const a=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),l=e.dot(ar),u=t.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Qt=new W,al=new _t;let jT=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qf&&(e.usage=this.usage),e}}class lv extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cv extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mi extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}const qT=new Yi,Go=new W,Cu=new W;class ji{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qT.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Go,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Cu)),this.expandByPoint(Go.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZT=0;const Zn=new lt,Ru=new Wt,qr=new W,Gn=new Yi,Wo=new Yi,ln=new W;class ni extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dT(e)?cv:lv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Gn.min,Wo.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,Wo.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(Wo.min),Gn.expandByPoint(Wo.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)ln.fromBufferAttribute(a,u),l&&(qr.fromBufferAttribute(e,u),ln.add(qr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new W,l[S]=new W;const u=new W,f=new W,h=new W,d=new _t,m=new _t,x=new _t,b=new W,_=new W;function g(S,R,te){u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,te),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,te),f.sub(u),h.sub(u),m.sub(d),x.sub(d);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(N),_.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(N),a[S].add(b),a[R].add(b),a[te].add(b),l[S].add(_),l[R].add(_),l[te].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,R=y.length;S<R;++S){const te=y[S],N=te.start,Y=te.count;for(let j=N,oe=N+Y;j<oe;j+=3)g(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const C=new W,w=new W,I=new W,D=new W;function U(S){I.fromBufferAttribute(s,S),D.copy(I);const R=a[S];C.copy(R),C.sub(I.multiplyScalar(I.dot(R))).normalize(),w.crossVectors(D,R);const N=w.dot(l[S])<0?-1:1;o.setXYZW(S,C.x,C.y,C.z,N)}for(let S=0,R=y.length;S<R;++S){const te=y[S],N=te.start,Y=te.count;for(let j=N,oe=N+Y;j<oe;j+=3)U(e.getX(j+0)),U(e.getX(j+1)),U(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,u=new W,f=new W,h=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),b=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,_),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,_),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*f;for(let g=0;g<f;g++)d[x++]=u[m++]}return new Ln(d,f,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],h=r[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qf,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new W;class Wh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){jl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let QT=0;class zi extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=lo,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lf&&(i.blendSrc=this.blendSrc),this.blendDst!==cf&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const as=new W,Pu=new W,ll=new W,Os=new W,Lu=new W,cl=new W,Iu=new W;class Aa{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pu.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),Os.copy(this.origin).sub(Pu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ll),a=Os.dot(this.direction),l=-Os.dot(ll),u=Os.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=r*f,h>=0)if(d>=-x)if(d<=x){const b=1/f;h*=b,d*=b,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pu).addScaledVector(ll,d),m}intersectSphere(e,t){as.subVectors(e.center,this.origin);const i=as.dot(this.direction),s=as.dot(as)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),f>=0?(r=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,i,s,r){Lu.subVectors(t,e),cl.subVectors(i,e),Iu.crossVectors(Lu,cl);let o=this.direction.dot(Iu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Os.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(Os,cl));if(l<0)return null;const u=a*this.direction.dot(Lu.cross(Os));if(u<0||l+u>o)return null;const f=-a*Os.dot(Iu);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vr extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cm=new lt,lr=new Aa,ul=new ji,Rm=new W,fl=new W,hl=new W,dl=new W,Du=new W,pl=new W,Pm=new W,ml=new W;class Kn extends Wt{constructor(e=new ni,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pl.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=a[l],h=r[l];f!==0&&(Du.fromBufferAttribute(h,e),o?pl.addScaledVector(Du,f):pl.addScaledVector(Du.sub(t),f))}t.add(pl)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),lr.copy(e.ray).recast(e.near),!(ul.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ul,Rm)===null||lr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(r).invert(),lr.copy(e.ray).applyMatrix4(Cm),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){const _=d[x],g=o[_.materialIndex],y=Math.max(_.start,m.start),C=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let w=y,I=C;w<I;w+=3){const D=a.getX(w),U=a.getX(w+1),S=a.getX(w+2);s=gl(this,g,e,i,u,f,h,D,U,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let _=x,g=b;_<g;_+=3){const y=a.getX(_),C=a.getX(_+1),w=a.getX(_+2);s=gl(this,o,e,i,u,f,h,y,C,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){const _=d[x],g=o[_.materialIndex],y=Math.max(_.start,m.start),C=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let w=y,I=C;w<I;w+=3){const D=w,U=w+1,S=w+2;s=gl(this,g,e,i,u,f,h,D,U,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let _=x,g=b;_<g;_+=3){const y=_,C=_+1,w=_+2;s=gl(this,o,e,i,u,f,h,y,C,w),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function eA(n,e,t,i,s,r,o,a){let l;if(e.side===On?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ss,a),l===null)return null;ml.copy(a),ml.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ml);return u<t.near||u>t.far?null:{distance:u,point:ml.clone(),object:n}}function gl(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,fl),n.getVertexPosition(l,hl),n.getVertexPosition(u,dl);const f=eA(n,e,t,i,fl,hl,dl,Pm);if(f){const h=new W;hi.getBarycoord(Pm,fl,hl,dl,h),s&&(f.uv=hi.getInterpolatedAttribute(s,a,l,u,h,new _t)),r&&(f.uv1=hi.getInterpolatedAttribute(r,a,l,u,h,new _t)),o&&(f.normal=hi.getInterpolatedAttribute(o,a,l,u,h,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new W,materialIndex:0};hi.getNormal(fl,hl,dl,d.normal),f.face=d,f.barycoord=h}return f}const Lm=new W,Im=new kt,Dm=new kt,tA=new W,Nm=new lt,_l=new W,Nu=new ji,Om=new lt,Ou=new Aa;class nA extends Kn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lm,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_l),this.boundingBox.expandByPoint(_l)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_l),this.boundingSphere.expandByPoint(_l)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)!==!1&&(Om.copy(s).invert(),Ou.copy(e.ray).applyMatrix4(Om),!(this.boundingBox!==null&&Ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ou)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new kt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nT?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Im.fromBufferAttribute(s.attributes.skinIndex,e),Dm.fromBufferAttribute(s.attributes.skinWeight,e),Lm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Dm.getComponent(r);if(o!==0){const a=Im.getComponent(r);Nm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(tA.copy(Lm).applyMatrix4(Nm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uv extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $h extends cn{constructor(e=null,t=1,i=1,s,r,o,a,l,u=nn,f=nn,h,d){super(null,o,a,l,u,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Um=new lt,iA=new lt;class Xh{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:iA;Um.multiplyMatrices(a,t[r]),Um.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $h(t,e,e,ei,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(Ye("Skeleton: No bone found with UUID:",r),o=new uv),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Zf extends Ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zr=new lt,Fm=new lt,vl=[],Bm=new Yi,sA=new lt,$o=new Kn,Xo=new ji;class rA extends Kn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zf(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),Bm.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(Bm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),Xo.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zr),Fm.multiplyMatrices(i,Zr),$o.matrixWorld=Fm,$o.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){const l=vl[o];l.instanceId=r,l.object=this,t.push(l)}vl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(s*this.count),s,this.count,Nh,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uu=new W,oA=new W,aA=new ot;class pr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uu.subVectors(i,t).cross(oA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||aA.getNormalMatrix(e),s=this.coplanarPoint(Uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new ji,lA=new _t(.5,.5),xl=new W;class Kh{constructor(e=new pr,t=new pr,i=new pr,s=new pr,r=new pr,o=new pr){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],f=r[4],h=r[5],d=r[6],m=r[7],x=r[8],b=r[9],_=r[10],g=r[11],y=r[12],C=r[13],w=r[14],I=r[15];if(s[0].setComponents(u-o,m-f,g-x,I-y).normalize(),s[1].setComponents(u+o,m+f,g+x,I+y).normalize(),s[2].setComponents(u+a,m+h,g+b,I+C).normalize(),s[3].setComponents(u-a,m-h,g-b,I-C).normalize(),i)s[4].setComponents(l,d,_,w).normalize(),s[5].setComponents(u-l,m-d,g-_,I-w).normalize();else if(s[4].setComponents(u-l,m-d,g-_,I-w).normalize(),t===Bi)s[5].setComponents(u+l,m+d,g+_,I+w).normalize();else if(t===Ea)s[5].setComponents(l,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const t=lA.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xl.x=s.normal.x>0?e.max.x:e.min.x,xl.y=s.normal.y>0?e.max.y:e.min.y,xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fv extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new W,Jl=new W,Vm=new lt,Ko=new Aa,El=new ji,Fu=new W,km=new W;class Yh extends Wt{constructor(e=new ni,t=new fv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new mi(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;Vm.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(Vm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let b=m,_=x-1;b<_;b+=u){const g=f.getX(b),y=f.getX(b+1),C=bl(this,e,Ko,l,g,y,b);C&&t.push(C)}if(this.isLineLoop){const b=f.getX(x-1),_=f.getX(m),g=bl(this,e,Ko,l,b,_,x-1);g&&t.push(g)}}else{const m=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let b=m,_=x-1;b<_;b+=u){const g=bl(this,e,Ko,l,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){const b=bl(this,e,Ko,l,x-1,m,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bl(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Zl.fromBufferAttribute(a,s),Jl.fromBufferAttribute(a,r),t.distanceSqToSegment(Zl,Jl,Fu,km)>i)return;Fu.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Fu);if(!(u<e.near||u>e.far))return{distance:u,point:km.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Hm=new W,zm=new W;class cA extends Yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hm.fromBufferAttribute(t,s),zm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hm.distanceTo(zm);e.setAttribute("lineDistance",new mi(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uA extends Yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hv extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new lt,Jf=new Aa,Sl=new ji,yl=new W;class fA extends Wt{constructor(e=new ni,t=new hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;Gm.copy(s).invert(),Jf.copy(e.ray).applyMatrix4(Gm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,b=m;x<b;x++){const _=u.getX(x);yl.fromBufferAttribute(h,_),Wm(yl,_,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,b=m;x<b;x++)yl.fromBufferAttribute(h,x),Wm(yl,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wm(n,e,t,i,s,r,o){const a=Jf.distanceSqToPoint(n);if(a<t){const l=new W;Jf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dv extends cn{constructor(e=[],t=br,i,s,r,o,a,l,u,f){super(e,t,i,s,r,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sa extends cn{constructor(e,t,i=Wi,s,r,o,a=nn,l=nn,u,f=Ms,h=1){if(f!==Ms&&f!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hA extends Sa{constructor(e,t=Wi,i=br,s,r,o=nn,a=nn,l,u=Ms){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pv extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends ni{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(f,3)),this.setAttribute("uv",new mi(h,2));function x(b,_,g,y,C,w,I,D,U,S,R){const te=w/U,N=I/S,Y=w/2,j=I/2,oe=D/2,ee=U+1,K=S+1;let k=0,he=0;const me=new W;for(let Le=0;Le<K;Le++){const Oe=Le*N-j;for(let Ae=0;Ae<ee;Ae++){const Je=Ae*te-Y;me[b]=Je*y,me[_]=Oe*C,me[g]=oe,u.push(me.x,me.y,me.z),me[b]=0,me[_]=0,me[g]=D>0?1:-1,f.push(me.x,me.y,me.z),h.push(Ae/U),h.push(1-Le/S),k+=1}}for(let Le=0;Le<S;Le++)for(let Oe=0;Oe<U;Oe++){const Ae=d+Oe+ee*Le,Je=d+Oe+ee*(Le+1),At=d+(Oe+1)+ee*(Le+1),St=d+(Oe+1)+ee*Le;l.push(Ae,Je,St),l.push(Je,At,St),he+=6}a.addGroup(m,he,R),m+=he,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends ni{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,f=l+1,h=e/a,d=t/l,m=[],x=[],b=[],_=[];for(let g=0;g<f;g++){const y=g*d-o;for(let C=0;C<u;C++){const w=C*h-r;x.push(w,-y,0),b.push(0,0,1),_.push(C/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const C=y+u*g,w=y+u*(g+1),I=y+1+u*(g+1),D=y+1+u*g;m.push(C,w,D),m.push(w,I,D)}this.setIndex(m),this.setAttribute("position",new mi(x,3)),this.setAttribute("normal",new mi(b,3)),this.setAttribute("uv",new mi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}function bo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function An(n){const e={};for(let t=0;t<n.length;t++){const i=bo(n[t]);for(const s in i)e[s]=i[s]}return e}function dA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const pA={clone:bo,merge:An};var mA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mA,this.fragmentShader=gA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=dA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _A extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jh extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qi extends jh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vA extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xA extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ml(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function EA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function $m(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function gv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ao{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bA extends Ao{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:um,endingEnd:um}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fm:r=e,a=2*t-i;break;case hm:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fm:o=e,l=2*i-t;break;case hm:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const u=(i-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),b=x*x,_=b*x,g=-d*_+2*d*b-d*x,y=(1+d)*_+(-1.5-2*d)*b+(-.5+d)*x+1,C=(-1-m)*_+(1.5+m)*b+.5*x,w=m*_-m*b;for(let I=0;I!==a;++I)r[I]=g*o[f+I]+y*o[u+I]+C*o[l+I]+w*o[h+I];return r}}class SA extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=(i-t)/(s-t),h=1-f;for(let d=0;d!==a;++d)r[d]=o[u+d]*h+o[l+d]*f;return r}}class yA extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class MA extends Ao{interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=this.settings||this.DefaultSettings_,h=f.inTangents,d=f.outTangents;if(!h||!d){const b=(i-t)/(s-t),_=1-b;for(let g=0;g!==a;++g)r[g]=o[u+g]*_+o[l+g]*b;return r}const m=a*2,x=e-1;for(let b=0;b!==a;++b){const _=o[u+b],g=o[l+b],y=x*m+b*2,C=d[y],w=d[y+1],I=e*m+b*2,D=h[I],U=h[I+1];let S=(i-t)/(s-t),R,te,N,Y,j;for(let oe=0;oe<8;oe++){R=S*S,te=R*S,N=1-S,Y=N*N,j=Y*N;const K=j*t+3*Y*S*C+3*N*R*D+te*s-i;if(Math.abs(K)<1e-10)break;const k=3*Y*(C-t)+6*N*S*(D-C)+3*R*(s-D);if(Math.abs(k)<1e-10)break;S=S-K/k,S=Math.max(0,Math.min(1,S))}r[b]=j*_+3*Y*S*w+3*N*R*U+te*g}return r}}class vi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ml(t,this.TimeBufferType),this.values=Ml(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ml(e.times,Array),values:Ml(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new MA(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case xa:t=this.InterpolantFactoryMethodLinear;break;case hu:t=this.InterpolantFactoryMethodSmooth;break;case cm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return hu;case this.InterpolantFactoryMethodBezier:return cm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&pT(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){qe("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(s)l=!0;else{const h=a*i,d=h-i,m=h+i;for(let x=0;x!==i;++x){const b=t[h+x];if(b!==t[d+x]||b!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=xa;class wo extends vi{constructor(e,t,i){super(e,t,i)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=va;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class _v extends vi{constructor(e,t,i,s){super(e,t,i,s)}}_v.prototype.ValueTypeName="color";class So extends vi{constructor(e,t,i,s){super(e,t,i,s)}}So.prototype.ValueTypeName="number";class TA extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let u=e*a;for(let f=u+a;u!==f;u+=4)As.slerpFlat(r,0,o,u-a,o,u,l);return r}}class yo extends vi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new TA(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends vi{constructor(e,t,i){super(e,t,i)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=va;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends vi{constructor(e,t,i,s){super(e,t,i,s)}}Mo.prototype.ValueTypeName="vector";class AA{constructor(e="",t=-1,i=[],s=iT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(CA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(vi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const f=EA(l);l=$m(l,1,f),u=$m(u,1,f),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new So(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],f=u.name.match(r);if(f&&f.length>1){const h=f[1];let d=s[h];d||(s[h]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(Ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,m,x,b){if(m.length!==0){const _=[],g=[];gv(m,_,g,x),_.length!==0&&b.push(new h(d,_,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const d=u[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let b=0;b<d[x].morphTargets.length;b++)m[d[x].morphTargets[b]]=-1;for(const b in m){const _=[],g=[];for(let y=0;y!==d[x].morphTargets.length;++y){const C=d[x];_.push(C.time),g.push(C.morphTarget===b?1:0)}s.push(new So(".morphTargetInfluence["+b+"]",_,g))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i(Mo,m+".position",d,"pos",s),i(yo,m+".quaternion",d,"rot",s),i(Mo,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return So;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return _v;case"quaternion":return yo;case"bool":case"boolean":return wo;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function CA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wA(n.type);if(n.times===void 0){const t=[],i=[];gv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ps={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Xm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Xm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Xm(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class RA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=u.length;h<d;h+=2){const m=u[h],x=u[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const PA=new RA;class Ro{constructor(e){this.manager=e!==void 0?e:PA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls={};class LA extends Error{constructor(e,t){super(e),this.response=t}}class vv extends Ro{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ps.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:i,onError:s});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=ls[e],h=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=d?parseInt(d):0,x=m!==0;let b=0;const _=new ReadableStream({start(g){y();function y(){h.read().then(({done:C,value:w})=>{if(C)g.close();else{b+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:m});for(let D=0,U=f.length;D<U;D++){const S=f[D];S.onProgress&&S.onProgress(I)}g.enqueue(w),y()}},C=>{g.error(C)})}}});return new Response(_)}else throw new LA(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a==="")return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return u.arrayBuffer().then(x=>m.decode(x))}}}).then(u=>{ps.add(`file:${e}`,u);const f=ls[e];delete ls[e];for(let h=0,d=f.length;h<d;h++){const m=f[h];m.onLoad&&m.onLoad(u)}}).catch(u=>{const f=ls[e];if(f===void 0)throw this.manager.itemError(e),u;delete ls[e];for(let h=0,d=f.length;h<d;h++){const m=f[h];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jr=new WeakMap;class IA extends Ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ps.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Jr.get(o);h===void 0&&(h=[],Jr.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=ba("img");function l(){f(),t&&t(this);const h=Jr.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onLoad&&m.onLoad(this)}Jr.delete(this),r.manager.itemEnd(e)}function u(h){f(),s&&s(h),ps.remove(`image:${e}`);const d=Jr.get(this)||[];for(let m=0;m<d.length;m++){const x=d[m];x.onError&&x.onError(h)}Jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class DA extends Ro{constructor(e){super(e)}load(e,t,i,s){const r=new cn,o=new IA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class fc extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bu=new lt,Km=new W,Ym=new W;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ym),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ea||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tl=new W,Al=new As,wi=new W;class xv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tl,Al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,Al,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tl,Al,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,Al,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Us=new W,jm=new _t,qm=new _t;class Cn extends xv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,jm,qm),t.subVectors(qm,jm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class NA extends qh{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class OA extends fc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new NA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class UA extends qh{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0}}class FA extends fc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new UA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hc extends xv{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class BA extends qh{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new BA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class VA extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ca{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Vu=new WeakMap;class kA extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ps.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{if(Vu.has(o)===!0)s&&s(Vu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return ps.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),Vu.set(l,u),ps.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ps.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qr=-90,eo=1;class HA extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Qr,eo,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Qr,eo,e,t);r.layers=this.layers,this.add(r);const o=new Cn(Qr,eo,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Qr,eo,e,t);a.layers=this.layers,this.add(a);const l=new Cn(Qr,eo,e,t);l.layers=this.layers,this.add(l);const u=new Cn(Qr,eo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class zA extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zh="\\[\\]\\.:\\/",GA=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",WA="[^"+Zh.replace("\\.","")+"]",$A=/((?:WC+[\/:])*)/.source.replace("WC",Jh),XA=/(WCOD+)?/.source.replace("WCOD",WA),KA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),YA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),jA=new RegExp("^"+$A+XA+KA+YA+"$"),qA=["material","materials","bones","map"];class ZA{constructor(e,t,i){const s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Pt{constructor(e,t,i){this.path=t,this.parsedPath=i||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,i):new Pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GA,"")}static parseTrackName(e){const t=jA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);qA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=ZA;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Zm=new lt;class JA{constructor(e,t,i=0,s=1/0){this.ray=new Aa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zm),this}intersectObject(e,t=!0,i=[]){return eh(e,this,i,t),i.sort(Jm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)eh(e[s],this,i,t);return i.sort(Jm),i}}function Jm(n,e){return n.distance-e.distance}function eh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)eh(r[o],e,t,!0)}}function Qm(n,e,t,i){const s=QA(i);switch(t){case tv:return n*e;case Nh:return n*e/s.components*s.byteLength;case Oh:return n*e/s.components*s.byteLength;case xo:return n*e*2/s.components*s.byteLength;case Uh:return n*e*2/s.components*s.byteLength;case nv:return n*e*3/s.components*s.byteLength;case ei:return n*e*4/s.components*s.byteLength;case Fh:return n*e*4/s.components*s.byteLength;case Ol:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vf:case Ef:return Math.max(n,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(n,8)*Math.max(e,8)/2;case bf:case Sf:case Mf:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yf:case Af:case wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zf:case Gf:case Wf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $f:case Xf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kf:case Yf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QA(n){switch(n){case $n:case Z_:return{byteLength:1,components:1};case ga:case J_:case ys:return{byteLength:2,components:1};case Ih:case Dh:return{byteLength:2,components:4};case Wi:case Lh:case Qn:return{byteLength:4,components:1};case Q_:case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function Ev(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ew(n){const e=new WeakMap;function t(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,f);else{h.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<h.length;m++){const x=h[d],b=h[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,h[d]=b)}h.length=d+1;for(let m=0,x=h.length;m<x;m++){const b=h[m];n.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Aw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,PC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$C=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:tw,alphahash_pars_fragment:nw,alphamap_fragment:iw,alphamap_pars_fragment:sw,alphatest_fragment:rw,alphatest_pars_fragment:ow,aomap_fragment:aw,aomap_pars_fragment:lw,batching_pars_vertex:cw,batching_vertex:uw,begin_vertex:fw,beginnormal_vertex:hw,bsdfs:dw,iridescence_fragment:pw,bumpmap_pars_fragment:mw,clipping_planes_fragment:gw,clipping_planes_pars_fragment:_w,clipping_planes_pars_vertex:vw,clipping_planes_vertex:xw,color_fragment:Ew,color_pars_fragment:bw,color_pars_vertex:Sw,color_vertex:yw,common:Mw,cube_uv_reflection_fragment:Tw,defaultnormal_vertex:Aw,displacementmap_pars_vertex:ww,displacementmap_vertex:Cw,emissivemap_fragment:Rw,emissivemap_pars_fragment:Pw,colorspace_fragment:Lw,colorspace_pars_fragment:Iw,envmap_fragment:Dw,envmap_common_pars_fragment:Nw,envmap_pars_fragment:Ow,envmap_pars_vertex:Uw,envmap_physical_pars_fragment:Kw,envmap_vertex:Fw,fog_vertex:Bw,fog_pars_vertex:Vw,fog_fragment:kw,fog_pars_fragment:Hw,gradientmap_pars_fragment:zw,lightmap_pars_fragment:Gw,lights_lambert_fragment:Ww,lights_lambert_pars_fragment:$w,lights_pars_begin:Xw,lights_toon_fragment:Yw,lights_toon_pars_fragment:jw,lights_phong_fragment:qw,lights_phong_pars_fragment:Zw,lights_physical_fragment:Jw,lights_physical_pars_fragment:Qw,lights_fragment_begin:eC,lights_fragment_maps:tC,lights_fragment_end:nC,logdepthbuf_fragment:iC,logdepthbuf_pars_fragment:sC,logdepthbuf_pars_vertex:rC,logdepthbuf_vertex:oC,map_fragment:aC,map_pars_fragment:lC,map_particle_fragment:cC,map_particle_pars_fragment:uC,metalnessmap_fragment:fC,metalnessmap_pars_fragment:hC,morphinstance_vertex:dC,morphcolor_vertex:pC,morphnormal_vertex:mC,morphtarget_pars_vertex:gC,morphtarget_vertex:_C,normal_fragment_begin:vC,normal_fragment_maps:xC,normal_pars_fragment:EC,normal_pars_vertex:bC,normal_vertex:SC,normalmap_pars_fragment:yC,clearcoat_normal_fragment_begin:MC,clearcoat_normal_fragment_maps:TC,clearcoat_pars_fragment:AC,iridescence_pars_fragment:wC,opaque_fragment:CC,packing:RC,premultiplied_alpha_fragment:PC,project_vertex:LC,dithering_fragment:IC,dithering_pars_fragment:DC,roughnessmap_fragment:NC,roughnessmap_pars_fragment:OC,shadowmap_pars_fragment:UC,shadowmap_pars_vertex:FC,shadowmap_vertex:BC,shadowmask_pars_fragment:VC,skinbase_vertex:kC,skinning_pars_vertex:HC,skinning_vertex:zC,skinnormal_vertex:GC,specularmap_fragment:WC,specularmap_pars_fragment:$C,tonemapping_fragment:XC,tonemapping_pars_fragment:KC,transmission_fragment:YC,transmission_pars_fragment:jC,uv_pars_fragment:qC,uv_pars_vertex:ZC,uv_vertex:JC,worldpos_vertex:QC,background_vert:eR,background_frag:tR,backgroundCube_vert:nR,backgroundCube_frag:iR,cube_vert:sR,cube_frag:rR,depth_vert:oR,depth_frag:aR,distance_vert:lR,distance_frag:cR,equirect_vert:uR,equirect_frag:fR,linedashed_vert:hR,linedashed_frag:dR,meshbasic_vert:pR,meshbasic_frag:mR,meshlambert_vert:gR,meshlambert_frag:_R,meshmatcap_vert:vR,meshmatcap_frag:xR,meshnormal_vert:ER,meshnormal_frag:bR,meshphong_vert:SR,meshphong_frag:yR,meshphysical_vert:MR,meshphysical_frag:TR,meshtoon_vert:AR,meshtoon_frag:wR,points_vert:CR,points_frag:RR,shadow_vert:PR,shadow_frag:LR,sprite_vert:IR,sprite_frag:DR},De={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Di={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new it(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Di.physical={uniforms:An([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const wl={r:0,b:0,g:0},ur=new $i,NR=new lt;function OR(n,e,t,i,s,r){const o=new it(0);let a=s===!0?0:1,l,u,f=null,h=0,d=null;function m(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){const w=y.backgroundBlurriness>0;C=e.get(C,w)}return C}function x(y){let C=!1;const w=m(y);w===null?_(o,a):w&&w.isColor&&(_(w,1),C=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,C){const w=m(C);w&&(w.isCubeTexture||w.mapping===cc)?(u===void 0&&(u=new Kn(new wa(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:bo(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ur.copy(C.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(NR.makeRotationFromEuler(ur)),u.material.toneMapped=gt.getTransfer(w.colorSpace)!==Ct,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Kn(new uc(2,2),new Xi({name:"BackgroundMaterial",uniforms:bo(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=gt.getTransfer(w.colorSpace)!==Ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,C){y.getRGB(wl,mv(n)),t.buffers.color.setClear(wl.r,wl.g,wl.b,C,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),a=C,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(o,a)},render:x,addToRenderList:b,dispose:g}}function UR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(N,Y,j,oe,ee){let K=!1;const k=h(N,oe,j,Y);r!==k&&(r=k,u(r.object)),K=m(N,oe,j,ee),K&&x(N,oe,j,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,w(N,Y,j,oe),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function u(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function h(N,Y,j,oe){const ee=oe.wireframe===!0;let K=i[Y.id];K===void 0&&(K={},i[Y.id]=K);const k=N.isInstancedMesh===!0?N.id:0;let he=K[k];he===void 0&&(he={},K[k]=he);let me=he[j.id];me===void 0&&(me={},he[j.id]=me);let Le=me[ee];return Le===void 0&&(Le=d(l()),me[ee]=Le),Le}function d(N){const Y=[],j=[],oe=[];for(let ee=0;ee<t;ee++)Y[ee]=0,j[ee]=0,oe[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:j,attributeDivisors:oe,object:N,attributes:{},index:null}}function m(N,Y,j,oe){const ee=r.attributes,K=Y.attributes;let k=0;const he=j.getAttributes();for(const me in he)if(he[me].location>=0){const Oe=ee[me];let Ae=K[me];if(Ae===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),Oe===void 0||Oe.attribute!==Ae||Ae&&Oe.data!==Ae.data)return!0;k++}return r.attributesNum!==k||r.index!==oe}function x(N,Y,j,oe){const ee={},K=Y.attributes;let k=0;const he=j.getAttributes();for(const me in he)if(he[me].location>=0){let Oe=K[me];Oe===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(Oe=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(Oe=N.instanceColor));const Ae={};Ae.attribute=Oe,Oe&&Oe.data&&(Ae.data=Oe.data),ee[me]=Ae,k++}r.attributes=ee,r.attributesNum=k,r.index=oe}function b(){const N=r.newAttributes;for(let Y=0,j=N.length;Y<j;Y++)N[Y]=0}function _(N){g(N,0)}function g(N,Y){const j=r.newAttributes,oe=r.enabledAttributes,ee=r.attributeDivisors;j[N]=1,oe[N]===0&&(n.enableVertexAttribArray(N),oe[N]=1),ee[N]!==Y&&(n.vertexAttribDivisor(N,Y),ee[N]=Y)}function y(){const N=r.newAttributes,Y=r.enabledAttributes;for(let j=0,oe=Y.length;j<oe;j++)Y[j]!==N[j]&&(n.disableVertexAttribArray(j),Y[j]=0)}function C(N,Y,j,oe,ee,K,k){k===!0?n.vertexAttribIPointer(N,Y,j,ee,K):n.vertexAttribPointer(N,Y,j,oe,ee,K)}function w(N,Y,j,oe){b();const ee=oe.attributes,K=j.getAttributes(),k=Y.defaultAttributeValues;for(const he in K){const me=K[he];if(me.location>=0){let Le=ee[he];if(Le===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),Le!==void 0){const Oe=Le.normalized,Ae=Le.itemSize,Je=e.get(Le);if(Je===void 0)continue;const At=Je.buffer,St=Je.type,ue=Je.bytesPerElement,Se=St===n.INT||St===n.UNSIGNED_INT||Le.gpuType===Lh;if(Le.isInterleavedBufferAttribute){const H=Le.data,Ze=H.stride,Xe=Le.offset;if(H.isInstancedInterleavedBuffer){for(let je=0;je<me.locationSize;je++)g(me.location+je,H.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let je=0;je<me.locationSize;je++)_(me.location+je);n.bindBuffer(n.ARRAY_BUFFER,At);for(let je=0;je<me.locationSize;je++)C(me.location+je,Ae/me.locationSize,St,Oe,Ze*ue,(Xe+Ae/me.locationSize*je)*ue,Se)}else{if(Le.isInstancedBufferAttribute){for(let H=0;H<me.locationSize;H++)g(me.location+H,Le.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let H=0;H<me.locationSize;H++)_(me.location+H);n.bindBuffer(n.ARRAY_BUFFER,At);for(let H=0;H<me.locationSize;H++)C(me.location+H,Ae/me.locationSize,St,Oe,Ae*ue,Ae/me.locationSize*H*ue,Se)}}else if(k!==void 0){const Oe=k[he];if(Oe!==void 0)switch(Oe.length){case 2:n.vertexAttrib2fv(me.location,Oe);break;case 3:n.vertexAttrib3fv(me.location,Oe);break;case 4:n.vertexAttrib4fv(me.location,Oe);break;default:n.vertexAttrib1fv(me.location,Oe)}}}}y()}function I(){R();for(const N in i){const Y=i[N];for(const j in Y){const oe=Y[j];for(const ee in oe){const K=oe[ee];for(const k in K)f(K[k].object),delete K[k];delete oe[ee]}}delete i[N]}}function D(N){if(i[N.id]===void 0)return;const Y=i[N.id];for(const j in Y){const oe=Y[j];for(const ee in oe){const K=oe[ee];for(const k in K)f(K[k].object),delete K[k];delete oe[ee]}}delete i[N.id]}function U(N){for(const Y in i){const j=i[Y];for(const oe in j){const ee=j[oe];if(ee[N.id]===void 0)continue;const K=ee[N.id];for(const k in K)f(K[k].object),delete K[k];delete ee[N.id]}}}function S(N){for(const Y in i){const j=i[Y],oe=N.isInstancedMesh===!0?N.id:0,ee=j[oe];if(ee!==void 0){for(const K in ee){const k=ee[K];for(const he in k)f(k[he].object),delete k[he];delete ee[K]}delete j[oe],Object.keys(j).length===0&&delete i[Y]}}}function R(){te(),o=!0,r!==s&&(r=s,u(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:te,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:_,disableUnusedAttributes:y}}function FR(n,e,t){let i;function s(u){i=u}function r(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,h){h!==0&&(n.drawArraysInstanced(i,u,f,h),t.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=f[x];t.update(m,i,1)}function l(u,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u.length;x++)o(u[x],f[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let x=0;for(let b=0;b<h;b++)x+=f[b]*d[b];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BR(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==ei&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const S=U===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==$n&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qn&&!S)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=l(u);f!==u&&(Ye("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:w,maxSamples:I,samples:D}}function VR(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new pr,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,b=h.clipIntersection,_=h.clipShadows,g=n.get(h);if(!s||x===null||x.length===0||r&&!_)r?f(null):u();else{const y=r?0:i,C=y*4;let w=g.clippingState||null;l.value=w,w=f(x,d,C,m);for(let I=0;I!==C;++I)w[I]=t[I];g.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const b=h!==null?h.length:0;let _=null;if(b!==0){if(_=l.value,x!==!0||_===null){const g=m+b*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let C=0,w=m;C!==b;++C,w+=4)o.copy(h[C]).applyMatrix4(y,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const Hs=4,eg=[.125,.215,.35,.446,.526,.582],gr=20,kR=256,Yo=new hc,tg=new it;let ku=null,Hu=0,zu=0,Gu=!1;const HR=new W;class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=HR}=r;ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Hu,zu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ys,format:ei,colorSpace:In,depthBuffer:!1},s=ig(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zR(r)),this._blurMaterial=WR(r,e,t),this._ggxMaterial=GR(r,e,t)}return s}_compileMaterial(e){const t=new Kn(new ni,e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,i,s,r){const l=new Cn(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(tg),h.toneMapping=ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new wa,new vr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let g=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,g=!0):(_.color.copy(tg),g=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(l.up.set(0,u[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[C],r.y,r.z)):w===1?(l.up.set(0,0,u[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[C],r.z)):(l.up.set(0,u[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[C]));const I=this._cubeSize;to(s,w*I,C>2?I:0,I,I),h.setRenderTarget(s),g&&h.render(b,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===br||e.mapping===_o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),d=0+u*1.25,m=h*d,{_lodMax:x}=this,b=this._sizeLods[i],_=3*b*(i>x-Hs?i-x+Hs:0),g=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,to(r,_,g,3*b,2*b),s.setRenderTarget(r),s.render(a,Yo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,to(e,_,g,3*b,2*b),s.setRenderTarget(e),s.render(a,Yo)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[s];h.material=u;const d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gr-1),b=r/x,_=isFinite(r)?1+Math.floor(f*b):gr;_>gr&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${gr}`);const g=[];let y=0;for(let U=0;U<gr;++U){const S=U/b,R=Math.exp(-S*S/2);g.push(R),U===0?y+=R:U<_&&(y+=2*R)}for(let U=0;U<g.length;U++)g[U]=g[U]/y;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-i;const w=this._sizeLods[s],I=3*w*(s>C-Hs?s-C+Hs:0),D=4*(this._cubeSize-w);to(t,I,D,3*w,2*w),l.setRenderTarget(t),l.render(h,Yo)}}function zR(n){const e=[],t=[],i=[];let s=n;const r=n-Hs+1+eg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=eg[o-n+Hs-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,b=3,_=2,g=1,y=new Float32Array(b*x*m),C=new Float32Array(_*x*m),w=new Float32Array(g*x*m);for(let D=0;D<m;D++){const U=D%3*2/3-1,S=D>2?0:-1,R=[U,S,0,U+2/3,S,0,U+2/3,S+1,0,U,S,0,U+2/3,S+1,0,U,S+1,0];y.set(R,b*x*D),C.set(d,_*x*D);const te=[D,D,D,D,D,D];w.set(te,g*x*D)}const I=new ni;I.setAttribute("position",new Ln(y,b)),I.setAttribute("uv",new Ln(C,_)),I.setAttribute("faceIndex",new Ln(w,g)),i.push(new Kn(I,null)),s>Hs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ig(n,e,t){const i=new Hi(n,e,t);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function GR(n,e,t){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function WR(n,e,t){const i=new Float32Array(gr),s=new W(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function sg(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function rg(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bv extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wa(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:gs});r.uniforms.tEquirect.value=t;const o=new Kn(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=sn),new HA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function $R(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===uu||m===fu)if(e.has(d)){const x=e.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const b=new bv(x.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",u),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,x=m===uu||m===fu,b=m===br||m===_o;if(x||b){let _=t.get(d);const g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ng(n)),_=x?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return x&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new ng(n)),_=x?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function a(d,m){return m===uu?d.mapping=br:m===fu&&(d.mapping=_o),d}function l(d){let m=0;const x=6;for(let b=0;b<x;b++)d[b]!==void 0&&m++;return m===x}function u(d){const m=d.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function XR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ql("WebGLRenderer: "+i+" extension not supported."),s}}}function KR(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function u(h){const d=[],m=h.index,x=h.attributes.position;let b=0;if(x===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let C=0,w=y.length;C<w;C+=3){const I=y[C+0],D=y[C+1],U=y[C+2];d.push(I,D,D,U,U,I)}}else{const y=x.array;b=x.version;for(let C=0,w=y.length/3-1;C<w;C+=3){const I=C+0,D=C+1,U=C+2;d.push(I,D,D,U,U,I)}}const _=new(x.count>=65535?cv:lv)(d,1);_.version=b;const g=r.get(h);g&&e.remove(g),r.set(h,_)}function f(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function YR(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function u(d,m,x){x!==0&&(n.drawElementsInstanced(i,m,r,d*o,x),t.update(m,i,x))}function f(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,x);let _=0;for(let g=0;g<x;g++)_+=m[g];t.update(_,i,1)}function h(d,m,x,b){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)u(d[g]/o,m[g],b[g]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,b,0,x);let g=0;for(let y=0;y<x;y++)g+=m[y]*b[y];t.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function jR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qR(n,e,t){const i=new WeakMap,s=new kt;function r(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let te=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",te)};var m=te;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),b===!0&&(w=2),_===!0&&(w=3);let I=a.attributes.position.count*w,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*D*4*h),S=new ov(U,I,D,h);S.type=Qn,S.needsUpdate=!0;const R=w*4;for(let N=0;N<h;N++){const Y=g[N],j=y[N],oe=C[N],ee=I*D*4*N;for(let K=0;K<Y.count;K++){const k=K*R;x===!0&&(s.fromBufferAttribute(Y,K),U[ee+k+0]=s.x,U[ee+k+1]=s.y,U[ee+k+2]=s.z,U[ee+k+3]=0),b===!0&&(s.fromBufferAttribute(j,K),U[ee+k+4]=s.x,U[ee+k+5]=s.y,U[ee+k+6]=s.z,U[ee+k+7]=0),_===!0&&(s.fromBufferAttribute(oe,K),U[ee+k+8]=s.x,U[ee+k+9]=s.y,U[ee+k+10]=s.z,U[ee+k+11]=oe.itemSize===4?s.w:1)}}d={count:h,texture:S,size:new _t(I,D)},i.set(a,d),a.addEventListener("dispose",te)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let _=0;_<u.length;_++)x+=u[_];const b=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ZR(n,e,t,i,s){let r=new WeakMap;function o(u){const f=s.render.frame,h=u.geometry,d=e.get(u,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return d}function a(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}const JR={[z_]:"LINEAR_TONE_MAPPING",[G_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[$_]:"ACES_FILMIC_TONE_MAPPING",[K_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[X_]:"CUSTOM_TONE_MAPPING"};function QR(n,e,t,i,s){const r=new Hi(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Hi(e,t,{type:ys,depthBuffer:!1,stencilBuffer:!1}),a=new ni;a.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mi([0,2,0,0,2,0],2));const l=new _A({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Kn(a,l),f=new hc(-1,1,1,-1,0,1);let h=null,d=null,m=!1,x,b=null,_=[],g=!1;this.setSize=function(y,C){r.setSize(y,C),o.setSize(y,C);for(let w=0;w<_.length;w++){const I=_[w];I.setSize&&I.setSize(y,C)}},this.setEffects=function(y){_=y,g=_.length>0&&_[0].isRenderPass===!0;const C=r.width,w=r.height;for(let I=0;I<_.length;I++){const D=_[I];D.setSize&&D.setSize(C,w)}},this.begin=function(y,C){if(m||y.toneMapping===ki&&_.length===0)return!1;if(b=C,C!==null){const w=C.width,I=C.height;(r.width!==w||r.height!==I)&&this.setSize(w,I)}return g===!1&&y.setRenderTarget(r),x=y.toneMapping,y.toneMapping=ki,!0},this.hasRenderPass=function(){return g},this.end=function(y,C){y.toneMapping=x,m=!0;let w=r,I=o;for(let D=0;D<_.length;D++){const U=_[D];if(U.enabled!==!1&&(U.render(y,I,w,C),U.needsSwap!==!1)){const S=w;w=I,I=S}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},gt.getTransfer(h)===Ct&&(l.defines.SRGB_TRANSFER="");const D=JR[d];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(b),y.render(u,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Sv=new cn,th=new Sa(1,1),yv=new ov,Mv=new kT,Tv=new dv,og=[],ag=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function Po(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=og[s];if(r===void 0&&(r=new Float32Array(s),og[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=ag[e];t===void 0&&(t=new Int32Array(e),ag[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function s1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;ug.set(i),n.uniformMatrix2fv(this.addr,!1,ug),on(t,i)}}function r1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;cg.set(i),n.uniformMatrix3fv(this.addr,!1,cg),on(t,i)}}function o1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;lg.set(i),n.uniformMatrix4fv(this.addr,!1,lg),on(t,i)}}function a1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function f1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function m1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?Vh:Bh,r=th):r=Sv,t.setTexture2D(e||r,s)}function g1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mv,s)}function _1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Tv,s)}function v1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yv,s)}function x1(n){switch(n){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function E1(n,e){n.uniform1fv(this.addr,e)}function b1(n,e){const t=Po(e,this.size,2);n.uniform2fv(this.addr,t)}function S1(n,e){const t=Po(e,this.size,3);n.uniform3fv(this.addr,t)}function y1(n,e){const t=Po(e,this.size,4);n.uniform4fv(this.addr,t)}function M1(n,e){const t=Po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T1(n,e){const t=Po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A1(n,e){const t=Po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function w1(n,e){n.uniform1iv(this.addr,e)}function C1(n,e){n.uniform2iv(this.addr,e)}function R1(n,e){n.uniform3iv(this.addr,e)}function P1(n,e){n.uniform4iv(this.addr,e)}function L1(n,e){n.uniform1uiv(this.addr,e)}function I1(n,e){n.uniform2uiv(this.addr,e)}function D1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function O1(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=th:o=Sv;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function U1(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mv,r[o])}function F1(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tv,r[o])}function B1(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yv,r[o])}function V1(n){switch(n){case 5126:return E1;case 35664:return b1;case 35665:return S1;case 35666:return y1;case 35674:return M1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return w1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return I1;case 36295:return D1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}class k1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x1(t.type)}}class H1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function fg(n,e){n.seq.push(e),n.map[e.id]=e}function G1(n,e,t){const i=n.name,s=i.length;for(Wu.lastIndex=0;;){const r=Wu.exec(i),o=Wu.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){fg(t,u===void 0?new k1(a,n,e):new H1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new z1(a),fg(t,h)),t=h}}}class Vl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);G1(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function hg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const W1=37297;let $1=0;function X1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const dg=new ot;function K1(n){gt._getMatrix(dg,gt.workingColorSpace,n);const e=`mat3( ${dg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Yl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(e),a)}else return r}function Y1(n,e){const t=K1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const j1={[z_]:"Linear",[G_]:"Reinhard",[W_]:"Cineon",[$_]:"ACESFilmic",[K_]:"AgX",[Y_]:"Neutral",[X_]:"Custom"};function q1(n,e){const t=j1[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new W;function Z1(){gt.getLuminanceCoefficients(Cl);const n=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Q1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function mg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tP=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(tP,iP)}const nP=new Map;function iP(n,e){let t=ut[e];if(t===void 0){const i=nP.get(e);if(i!==void 0)t=ut[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const sP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(n){return n.replace(sP,rP)}function rP(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oP={[Dl]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function aP(n){return oP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lP={[br]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function cP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const uP={[_o]:"ENVMAP_MODE_REFRACTION"};function fP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hP={[H_]:"ENVMAP_BLENDING_MULTIPLY",[eT]:"ENVMAP_BLENDING_MIX",[tT]:"ENVMAP_BLENDING_ADD"};function dP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hP[n.combine]||"ENVMAP_BLENDING_NONE"}function pP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mP(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aP(t),u=cP(t),f=fP(t),h=dP(t),d=pP(t),m=J1(t),x=Q1(r),b=s.createProgram();let _,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ea).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(_=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?ut.tonemapping_pars_fragment:"",t.toneMapping!==ki?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),Z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=nh(o),o=mg(o,t),o=gg(o,t),a=nh(a),a=mg(a,t),a=gg(a,t),o=_g(o),a=_g(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=y+_+o,w=y+g+a,I=hg(s,s.VERTEX_SHADER,C),D=hg(s,s.FRAGMENT_SHADER,w);s.attachShader(b,I),s.attachShader(b,D),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function U(N){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(b)||"",j=s.getShaderInfoLog(I)||"",oe=s.getShaderInfoLog(D)||"",ee=Y.trim(),K=j.trim(),k=oe.trim();let he=!0,me=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,I,D);else{const Le=pg(s,I,"vertex"),Oe=pg(s,D,"fragment");qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ee+`
`+Le+`
`+Oe)}else ee!==""?Ye("WebGLProgram: Program Info Log:",ee):(K===""||k==="")&&(me=!1);me&&(N.diagnostics={runnable:he,programLog:ee,vertexShader:{log:K,prefix:_},fragmentShader:{log:k,prefix:g}})}s.deleteShader(I),s.deleteShader(D),S=new Vl(s,b),R=eP(s,b)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=s.getProgramParameter(b,W1)),te},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=D,this}let gP=0;class _P{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vP(e),t.set(e,i)),i}}class vP{constructor(e){this.id=gP++,this.code=e,this.usedTimes=0}}function xP(n,e,t,i,s,r){const o=new zh,a=new _P,l=new Set,u=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function b(S,R,te,N,Y){const j=N.fog,oe=Y.geometry,ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=e.get(S.envMap||ee,K),he=k&&k.mapping===cc?k.image.height:null,me=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Oe=Le!==void 0?Le.length:0;let Ae=0;oe.morphAttributes.position!==void 0&&(Ae=1),oe.morphAttributes.normal!==void 0&&(Ae=2),oe.morphAttributes.color!==void 0&&(Ae=3);let Je,At,St,ue;if(me){const vt=Di[me];Je=vt.vertexShader,At=vt.fragmentShader}else Je=S.vertexShader,At=S.fragmentShader,a.update(S),St=a.getVertexShaderID(S),ue=a.getFragmentShaderID(S);const Se=n.getRenderTarget(),H=n.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,Xe=Y.isBatchedMesh===!0,je=!!S.map,L=!!S.matcap,B=!!k,q=!!S.aoMap,re=!!S.lightMap,ie=!!S.bumpMap,G=!!S.normalMap,P=!!S.displacementMap,ge=!!S.emissiveMap,de=!!S.metalnessMap,le=!!S.roughnessMap,pe=S.anisotropy>0,T=S.clearcoat>0,E=S.dispersion>0,F=S.iridescence>0,X=S.sheen>0,ae=S.transmission>0,J=pe&&!!S.anisotropyMap,we=T&&!!S.clearcoatMap,ve=T&&!!S.clearcoatNormalMap,Fe=T&&!!S.clearcoatRoughnessMap,ke=F&&!!S.iridescenceMap,_e=F&&!!S.iridescenceThicknessMap,Ee=X&&!!S.sheenColorMap,Re=X&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Ne=!!S.specularColorMap,et=!!S.specularIntensityMap,V=ae&&!!S.transmissionMap,Te=ae&&!!S.thicknessMap,ye=!!S.gradientMap,Be=!!S.alphaMap,be=S.alphaTest>0,ce=!!S.alphaHash,Ve=!!S.extensions;let Qe=ki;S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const Lt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:At,defines:S.defines,customVertexShaderID:St,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Xe,batchingColor:Xe&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:In,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:L,envMap:B,envMapMode:B&&k.mapping,envMapCubeUVHeight:he,aoMap:q,lightMap:re,bumpMap:ie,normalMap:G,displacementMap:P,emissiveMap:ge,normalMapObjectSpace:G&&S.normalMapType===oT,normalMapTangentSpace:G&&S.normalMapType===sv,metalnessMap:de,roughnessMap:le,anisotropy:pe,anisotropyMap:J,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:ve,clearcoatRoughnessMap:Fe,dispersion:E,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:_e,sheen:X,sheenColorMap:Ee,sheenRoughnessMap:Re,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:et,transmission:ae,transmissionMap:V,thicknessMap:Te,gradientMap:ye,opaque:S.transparent===!1&&S.blending===lo&&S.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:ce,combine:S.combine,mapUv:je&&x(S.map.channel),aoMapUv:q&&x(S.aoMap.channel),lightMapUv:re&&x(S.lightMap.channel),bumpMapUv:ie&&x(S.bumpMap.channel),normalMapUv:G&&x(S.normalMap.channel),displacementMapUv:P&&x(S.displacementMap.channel),emissiveMapUv:ge&&x(S.emissiveMap.channel),metalnessMapUv:de&&x(S.metalnessMap.channel),roughnessMapUv:le&&x(S.roughnessMap.channel),anisotropyMapUv:J&&x(S.anisotropyMap.channel),clearcoatMapUv:we&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:Ce&&x(S.specularMap.channel),specularColorMapUv:Ne&&x(S.specularColorMap.channel),specularIntensityMapUv:et&&x(S.specularIntensityMap.channel),transmissionMapUv:V&&x(S.transmissionMap.channel),thicknessMapUv:Te&&x(S.thicknessMap.channel),alphaMapUv:Be&&x(S.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(G||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!oe.attributes.uv&&(je||Be),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||oe.attributes.normal===void 0&&G===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:H,skinning:Y.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ui,flipSided:S.side===On,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function _(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const te in S.defines)R.push(te),R.push(S.defines[te]);return S.isRawShaderMaterial===!1&&(g(R,S),y(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function y(S,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),S.push(o.mask)}function C(S){const R=m[S.type];let te;if(R){const N=Di[R];te=pA.clone(N.uniforms)}else te=S.uniforms;return te}function w(S,R){let te=f.get(R);return te!==void 0?++te.usedTimes:(te=new mP(n,R,S,s),u.push(te),f.set(R,te)),te}function I(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function D(S){a.remove(S)}function U(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:C,acquireProgram:w,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:U}}function EP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eg(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,x,b,_,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:m,material:x,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=m,y.material=x,y.materialVariant=o(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=_,y.group=g),e++,y}function l(d,m,x,b,_,g){const y=a(d,m,x,b,_,g);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function u(d,m,x,b,_,g){const y=a(d,m,x,b,_,g);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function f(d,m){t.length>1&&t.sort(d||bP),i.length>1&&i.sort(m||xg),s.length>1&&s.sort(m||xg)}function h(){for(let d=e,m=n.length;d<m;d++){const x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:u,finish:h,sort:f}}function SP(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Eg,n.set(i,[o])):s>=r.length?(o=new Eg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new it};break;case"SpotLight":t={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function MP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TP=0;function AP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wP(n){const e=new yP,t=MP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const s=new W,r=new lt,o=new lt;function a(u){let f=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,x=0,b=0,_=0,g=0,y=0,C=0,w=0,I=0,D=0,U=0;u.sort(AP);for(let R=0,te=u.length;R<te;R++){const N=u[R],Y=N.color,j=N.intensity,oe=N.distance;let ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===xo?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=Y.r*j,h+=Y.g*j,d+=Y.b*j;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],j);U++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,he=t.get(N);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,i.directionalShadow[m]=he,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=N.shadow.matrix,y++}i.directional[m]=K,m++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(Y).multiplyScalar(j),K.distance=oe,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[b]=K;const k=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,k.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[b]=k.matrix,N.castShadow){const he=t.get(N);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,i.spotShadow[b]=he,i.spotShadowMap[b]=ee,w++}b++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(Y).multiplyScalar(j),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=K,_++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const k=N.shadow,he=t.get(N);he.shadowIntensity=k.intensity,he.shadowBias=k.bias,he.shadowNormalBias=k.normalBias,he.shadowRadius=k.radius,he.shadowMapSize=k.mapSize,he.shadowCameraNear=k.camera.near,he.shadowCameraFar=k.camera.far,i.pointShadow[x]=he,i.pointShadowMap[x]=ee,i.pointShadowMatrix[x]=N.shadow.matrix,C++}i.point[x]=K,x++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(j),K.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[g]=K,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==m||S.pointLength!==x||S.spotLength!==b||S.rectAreaLength!==_||S.hemiLength!==g||S.numDirectionalShadows!==y||S.numPointShadows!==C||S.numSpotShadows!==w||S.numSpotMaps!==I||S.numLightProbes!==U)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=_,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=U,S.directionalLength=m,S.pointLength=x,S.spotLength=b,S.rectAreaLength=_,S.hemiLength=g,S.numDirectionalShadows=y,S.numPointShadows=C,S.numSpotShadows=w,S.numSpotMaps=I,S.numLightProbes=U,i.version=TP++)}function l(u,f){let h=0,d=0,m=0,x=0,b=0;const _=f.matrixWorldInverse;for(let g=0,y=u.length;g<y;g++){const C=u[g];if(C.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(C.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),m++}else if(C.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(_),o.identity(),r.copy(C.matrixWorld),r.premultiply(_),o.extractRotation(r),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(_),d++}else if(C.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(_),b++}}}return{setup:a,setupView:l,state:i}}function bg(n){const e=new wP(n),t=[],i=[];function s(f){u.camera=f,t.length=0,i.length=0}function r(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function CP(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bg(n),e.set(s,[a])):r>=o.length?(a=new bg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const RP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LP=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],IP=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Sg=new lt,jo=new W,$u=new W;function DP(n,e,t){let i=new Kh;const s=new _t,r=new _t,o=new kt,a=new vA,l=new xA,u={},f=t.maxTextureSize,h={[Ss]:On,[On]:Ss,[Ui]:Ui},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:RP,fragmentShader:PP}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new ni;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Kn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let g=this.type;this.render=function(D,U,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===OM&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dl);const R=n.getRenderTarget(),te=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(gs),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=g!==this.type;j&&U.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(ee=>ee.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,ee=D.length;oe<ee;oe++){const K=D[oe],k=K.shadow;if(k===void 0){Ye("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const he=k.getFrameExtents();s.multiply(he),r.copy(k.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/he.x),s.x=r.x*he.x,k.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/he.y),s.y=r.y*he.y,k.mapSize.y=r.y));const me=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=me,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Jo){if(K.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Hi(s.x,s.y,{format:xo,type:ys,minFilter:sn,magFilter:sn,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new Sa(s.x,s.y,Qn),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=Ms,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn}else K.isPointLight?(k.map=new bv(s.x),k.map.depthTexture=new hA(s.x,Wi)):(k.map=new Hi(s.x,s.y),k.map.depthTexture=new Sa(s.x,s.y,Wi)),k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=Ms,this.type===Dl?(k.map.depthTexture.compareFunction=me?Vh:Bh,k.map.depthTexture.minFilter=sn,k.map.depthTexture.magFilter=sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn);k.camera.updateProjectionMatrix()}const Le=k.map.isWebGLCubeRenderTarget?6:1;for(let Oe=0;Oe<Le;Oe++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Oe),n.clear();else{Oe===0&&(n.setRenderTarget(k.map),n.clear());const Ae=k.getViewport(Oe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),Y.viewport(o)}if(K.isPointLight){const Ae=k.camera,Je=k.matrix,At=K.distance||Ae.far;At!==Ae.far&&(Ae.far=At,Ae.updateProjectionMatrix()),jo.setFromMatrixPosition(K.matrixWorld),Ae.position.copy(jo),$u.copy(Ae.position),$u.add(LP[Oe]),Ae.up.copy(IP[Oe]),Ae.lookAt($u),Ae.updateMatrixWorld(),Je.makeTranslation(-jo.x,-jo.y,-jo.z),Sg.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Sg,Ae.coordinateSystem,Ae.reversedDepth)}else k.updateMatrices(K);i=k.getFrustum(),w(U,S,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Jo&&y(k,S),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(R,te,N)};function y(D,U){const S=e.update(b);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Hi(s.x,s.y,{format:xo,type:ys})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(U,null,S,d,b,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(U,null,S,m,b,null)}function C(D,U,S,R){let te=null;const N=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)te=N;else if(te=S.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=te.uuid,j=U.uuid;let oe=u[Y];oe===void 0&&(oe={},u[Y]=oe);let ee=oe[j];ee===void 0&&(ee=te.clone(),oe[j]=ee,U.addEventListener("dispose",I)),te=ee}if(te.visible=U.visible,te.wireframe=U.wireframe,R===Jo?te.side=U.shadowSide!==null?U.shadowSide:U.side:te.side=U.shadowSide!==null?U.shadowSide:h[U.side],te.alphaMap=U.alphaMap,te.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,te.map=U.map,te.clipShadows=U.clipShadows,te.clippingPlanes=U.clippingPlanes,te.clipIntersection=U.clipIntersection,te.displacementMap=U.displacementMap,te.displacementScale=U.displacementScale,te.displacementBias=U.displacementBias,te.wireframeLinewidth=U.wireframeLinewidth,te.linewidth=U.linewidth,S.isPointLight===!0&&te.isMeshDistanceMaterial===!0){const Y=n.properties.get(te);Y.light=S}return te}function w(D,U,S,R,te){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&te===Jo)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const j=e.update(D),oe=D.material;if(Array.isArray(oe)){const ee=j.groups;for(let K=0,k=ee.length;K<k;K++){const he=ee[K],me=oe[he.materialIndex];if(me&&me.visible){const Le=C(D,me,R,te);D.onBeforeShadow(n,D,U,S,j,Le,he),n.renderBufferDirect(S,null,j,Le,D,he),D.onAfterShadow(n,D,U,S,j,Le,he)}}}else if(oe.visible){const ee=C(D,oe,R,te);D.onBeforeShadow(n,D,U,S,j,ee,null),n.renderBufferDirect(S,null,j,ee,D,null),D.onAfterShadow(n,D,U,S,j,ee,null)}}const Y=D.children;for(let j=0,oe=Y.length;j<oe;j++)w(Y[j],U,S,R,te)}function I(D){D.target.removeEventListener("dispose",I);for(const S in u){const R=u[S],te=D.target.uuid;te in R&&(R[te].dispose(),delete R[te])}}}function NP(n,e){function t(){let V=!1;const Te=new kt;let ye=null;const Be=new kt(0,0,0,0);return{setMask:function(be){ye!==be&&!V&&(n.colorMask(be,be,be,be),ye=be)},setLocked:function(be){V=be},setClear:function(be,ce,Ve,Qe,Lt){Lt===!0&&(be*=Qe,ce*=Qe,Ve*=Qe),Te.set(be,ce,Ve,Qe),Be.equals(Te)===!1&&(n.clearColor(be,ce,Ve,Qe),Be.copy(Te))},reset:function(){V=!1,ye=null,Be.set(-1,0,0,0)}}}function i(){let V=!1,Te=!1,ye=null,Be=null,be=null;return{setReversed:function(ce){if(Te!==ce){const Ve=e.get("EXT_clip_control");ce?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Te=ce;const Qe=be;be=null,this.setClear(Qe)}},getReversed:function(){return Te},setTest:function(ce){ce?Se(n.DEPTH_TEST):H(n.DEPTH_TEST)},setMask:function(ce){ye!==ce&&!V&&(n.depthMask(ce),ye=ce)},setFunc:function(ce){if(Te&&(ce=_T[ce]),Be!==ce){switch(ce){case uf:n.depthFunc(n.NEVER);break;case ff:n.depthFunc(n.ALWAYS);break;case hf:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case df:n.depthFunc(n.EQUAL);break;case pf:n.depthFunc(n.GEQUAL);break;case mf:n.depthFunc(n.GREATER);break;case gf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=ce}},setLocked:function(ce){V=ce},setClear:function(ce){be!==ce&&(be=ce,Te&&(ce=1-ce),n.clearDepth(ce))},reset:function(){V=!1,ye=null,Be=null,be=null,Te=!1}}}function s(){let V=!1,Te=null,ye=null,Be=null,be=null,ce=null,Ve=null,Qe=null,Lt=null;return{setTest:function(vt){V||(vt?Se(n.STENCIL_TEST):H(n.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!V&&(n.stencilMask(vt),Te=vt)},setFunc:function(vt,ii,xi){(ye!==vt||Be!==ii||be!==xi)&&(n.stencilFunc(vt,ii,xi),ye=vt,Be=ii,be=xi)},setOp:function(vt,ii,xi){(ce!==vt||Ve!==ii||Qe!==xi)&&(n.stencilOp(vt,ii,xi),ce=vt,Ve=ii,Qe=xi)},setLocked:function(vt){V=vt},setClear:function(vt){Lt!==vt&&(n.clearStencil(vt),Lt=vt)},reset:function(){V=!1,Te=null,ye=null,Be=null,be=null,ce=null,Ve=null,Qe=null,Lt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let f={},h={},d=new WeakMap,m=[],x=null,b=!1,_=null,g=null,y=null,C=null,w=null,I=null,D=null,U=new it(0,0,0),S=0,R=!1,te=null,N=null,Y=null,j=null,oe=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,k=0;const he=n.getParameter(n.VERSION);he.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(he)[1]),K=k>=1):he.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),K=k>=2);let me=null,Le={};const Oe=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Je=new kt().fromArray(Oe),At=new kt().fromArray(Ae);function St(V,Te,ye,Be){const be=new Uint8Array(4),ce=n.createTexture();n.bindTexture(V,ce),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ye;Ve++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Te+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ce}const ue={};ue[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(n.DEPTH_TEST),o.setFunc(go),ie(!1),G(sm),Se(n.CULL_FACE),q(gs);function Se(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function H(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function Ze(V,Te){return h[V]!==Te?(n.bindFramebuffer(V,Te),h[V]=Te,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Xe(V,Te){let ye=m,Be=!1;if(V){ye=d.get(Te),ye===void 0&&(ye=[],d.set(Te,ye));const be=V.textures;if(ye.length!==be.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ve=be.length;ce<Ve;ce++)ye[ce]=n.COLOR_ATTACHMENT0+ce;ye.length=be.length,Be=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Be=!0);Be&&n.drawBuffers(ye)}function je(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const L={[mr]:n.FUNC_ADD,[FM]:n.FUNC_SUBTRACT,[BM]:n.FUNC_REVERSE_SUBTRACT};L[VM]=n.MIN,L[kM]=n.MAX;const B={[HM]:n.ZERO,[zM]:n.ONE,[GM]:n.SRC_COLOR,[lf]:n.SRC_ALPHA,[jM]:n.SRC_ALPHA_SATURATE,[KM]:n.DST_COLOR,[$M]:n.DST_ALPHA,[WM]:n.ONE_MINUS_SRC_COLOR,[cf]:n.ONE_MINUS_SRC_ALPHA,[YM]:n.ONE_MINUS_DST_COLOR,[XM]:n.ONE_MINUS_DST_ALPHA,[qM]:n.CONSTANT_COLOR,[ZM]:n.ONE_MINUS_CONSTANT_COLOR,[JM]:n.CONSTANT_ALPHA,[QM]:n.ONE_MINUS_CONSTANT_ALPHA};function q(V,Te,ye,Be,be,ce,Ve,Qe,Lt,vt){if(V===gs){b===!0&&(H(n.BLEND),b=!1);return}if(b===!1&&(Se(n.BLEND),b=!0),V!==UM){if(V!==_||vt!==R){if((g!==mr||w!==mr)&&(n.blendEquation(n.FUNC_ADD),g=mr,w=mr),vt)switch(V){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rm:n.blendFunc(n.ONE,n.ONE);break;case om:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case am:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",V);break}else switch(V){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case om:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case am:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",V);break}y=null,C=null,I=null,D=null,U.set(0,0,0),S=0,_=V,R=vt}return}be=be||Te,ce=ce||ye,Ve=Ve||Be,(Te!==g||be!==w)&&(n.blendEquationSeparate(L[Te],L[be]),g=Te,w=be),(ye!==y||Be!==C||ce!==I||Ve!==D)&&(n.blendFuncSeparate(B[ye],B[Be],B[ce],B[Ve]),y=ye,C=Be,I=ce,D=Ve),(Qe.equals(U)===!1||Lt!==S)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Lt),U.copy(Qe),S=Lt),_=V,R=!1}function re(V,Te){V.side===Ui?H(n.CULL_FACE):Se(n.CULL_FACE);let ye=V.side===On;Te&&(ye=!ye),ie(ye),V.blending===lo&&V.transparent===!1?q(gs):q(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Be=V.stencilWrite;a.setTest(Be),Be&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):H(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(V){te!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),te=V)}function G(V){V!==DM?(Se(n.CULL_FACE),V!==N&&(V===sm?n.cullFace(n.BACK):V===NM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):H(n.CULL_FACE),N=V}function P(V){V!==Y&&(K&&n.lineWidth(V),Y=V)}function ge(V,Te,ye){V?(Se(n.POLYGON_OFFSET_FILL),(j!==Te||oe!==ye)&&(j=Te,oe=ye,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,ye))):H(n.POLYGON_OFFSET_FILL)}function de(V){V?Se(n.SCISSOR_TEST):H(n.SCISSOR_TEST)}function le(V){V===void 0&&(V=n.TEXTURE0+ee-1),me!==V&&(n.activeTexture(V),me=V)}function pe(V,Te,ye){ye===void 0&&(me===null?ye=n.TEXTURE0+ee-1:ye=me);let Be=Le[ye];Be===void 0&&(Be={type:void 0,texture:void 0},Le[ye]=Be),(Be.type!==V||Be.texture!==Te)&&(me!==ye&&(n.activeTexture(ye),me=ye),n.bindTexture(V,Te||ue[V]),Be.type=V,Be.texture=Te)}function T(){const V=Le[me];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function X(){try{n.texSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function ve(){try{n.texStorage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function Fe(){try{n.texStorage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function ke(){try{n.texImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function _e(){try{n.texImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function Ee(V){Je.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Je.copy(V))}function Re(V){At.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),At.copy(V))}function Ce(V,Te){let ye=u.get(Te);ye===void 0&&(ye=new WeakMap,u.set(Te,ye));let Be=ye.get(V);Be===void 0&&(Be=n.getUniformBlockIndex(Te,V.name),ye.set(V,Be))}function Ne(V,Te){const Be=u.get(Te).get(V);l.get(Te)!==Be&&(n.uniformBlockBinding(Te,Be,V.__bindingPointIndex),l.set(Te,Be))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},me=null,Le={},h={},d=new WeakMap,m=[],x=null,b=!1,_=null,g=null,y=null,C=null,w=null,I=null,D=null,U=new it(0,0,0),S=0,R=!1,te=null,N=null,Y=null,j=null,oe=null,Je.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:H,bindFramebuffer:Ze,drawBuffers:Xe,useProgram:je,setBlending:q,setMaterial:re,setFlipSided:ie,setCullFace:G,setLineWidth:P,setPolygonOffset:ge,setScissorTest:de,activeTexture:le,bindTexture:pe,unbindTexture:T,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:ke,texImage3D:_e,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:ve,texStorage3D:Fe,texSubImage2D:X,texSubImage3D:ae,compressedTexSubImage2D:J,compressedTexSubImage3D:we,scissor:Ee,viewport:Re,reset:et}}function OP(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new _t,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,E){return m?new OffscreenCanvas(T,E):ba("canvas")}function b(T,E,F){let X=1;const ae=pe(T);if((ae.width>F||ae.height>F)&&(X=F/Math.max(ae.width,ae.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(X*ae.width),we=Math.floor(X*ae.height);h===void 0&&(h=x(J,we));const ve=E?x(J,we):h;return ve.width=J,ve.height=we,ve.getContext("2d").drawImage(T,0,0,J,we),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+J+"x"+we+")."),ve}else return"data"in T&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),T;return T}function _(T){return T.generateMipmaps}function g(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(T,E,F,X,ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=E;if(E===n.RED&&(F===n.FLOAT&&(J=n.R32F),F===n.HALF_FLOAT&&(J=n.R16F),F===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.R8UI),F===n.UNSIGNED_SHORT&&(J=n.R16UI),F===n.UNSIGNED_INT&&(J=n.R32UI),F===n.BYTE&&(J=n.R8I),F===n.SHORT&&(J=n.R16I),F===n.INT&&(J=n.R32I)),E===n.RG&&(F===n.FLOAT&&(J=n.RG32F),F===n.HALF_FLOAT&&(J=n.RG16F),F===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RG8UI),F===n.UNSIGNED_SHORT&&(J=n.RG16UI),F===n.UNSIGNED_INT&&(J=n.RG32UI),F===n.BYTE&&(J=n.RG8I),F===n.SHORT&&(J=n.RG16I),F===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGB8UI),F===n.UNSIGNED_SHORT&&(J=n.RGB16UI),F===n.UNSIGNED_INT&&(J=n.RGB32UI),F===n.BYTE&&(J=n.RGB8I),F===n.SHORT&&(J=n.RGB16I),F===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),F===n.UNSIGNED_INT&&(J=n.RGBA32UI),F===n.BYTE&&(J=n.RGBA8I),F===n.SHORT&&(J=n.RGBA16I),F===n.INT&&(J=n.RGBA32I)),E===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),E===n.RGBA){const we=ae?Yl:gt.getTransfer(X);F===n.FLOAT&&(J=n.RGBA32F),F===n.HALF_FLOAT&&(J=n.RGBA16F),F===n.UNSIGNED_BYTE&&(J=we===Ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(T,E){let F;return T?E===null||E===Wi||E===_a?F=n.DEPTH24_STENCIL8:E===Qn?F=n.DEPTH32F_STENCIL8:E===ga&&(F=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===_a?F=n.DEPTH_COMPONENT24:E===Qn?F=n.DEPTH_COMPONENT32F:E===ga&&(F=n.DEPTH_COMPONENT16),F}function I(T,E){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function D(T){const E=T.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&f.delete(E)}function U(T){const E=T.target;E.removeEventListener("dispose",U),te(E)}function S(T){const E=i.get(T);if(E.__webglInit===void 0)return;const F=T.source,X=d.get(F);if(X){const ae=X[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(T),Object.keys(X).length===0&&d.delete(F)}i.remove(T)}function R(T){const E=i.get(T);n.deleteTexture(E.__webglTexture);const F=T.source,X=d.get(F);delete X[E.__cacheKey],o.memory.textures--}function te(T){const E=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let ae=0;ae<E.__webglFramebuffer[X].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[X][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)n.deleteFramebuffer(E.__webglFramebuffer[X]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,ae=F.length;X<ae;X++){const J=i.get(F[X]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(T)}let N=0;function Y(){N=0}function j(){const T=N;return T>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function oe(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function ee(T,E){const F=i.get(T);if(T.isVideoTexture&&de(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(F,T,E);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+E)}function K(T,E){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){ue(F,T,E);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+E)}function k(T,E){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){ue(F,T,E);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+E)}function he(T,E){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Se(F,T,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+E)}const me={[vo]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},Le={[nn]:n.NEAREST,[q_]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Oe={[aT]:n.NEVER,[hT]:n.ALWAYS,[lT]:n.LESS,[Bh]:n.LEQUAL,[cT]:n.EQUAL,[Vh]:n.GEQUAL,[uT]:n.GREATER,[fT]:n.NOTEQUAL};function Ae(T,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===Nl||E.magFilter===Qo||E.magFilter===hs||E.minFilter===sn||E.minFilter===Nl||E.minFilter===Qo||E.minFilter===hs)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,me[E.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,me[E.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,me[E.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Le[E.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==Qo&&E.minFilter!==hs||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Je(T,E){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",D));const X=E.source;let ae=d.get(X);ae===void 0&&(ae={},d.set(X,ae));const J=oe(E);if(J!==T.__cacheKey){ae[J]===void 0&&(ae[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ae[J].usedTimes++;const we=ae[T.__cacheKey];we!==void 0&&(ae[T.__cacheKey].usedTimes--,we.usedTimes===0&&R(E)),T.__cacheKey=J,T.__webglTexture=ae[J].texture}return F}function At(T,E,F){return Math.floor(Math.floor(T/F)/E)}function St(T,E,F,X){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,F,X,E.data);else{J.sort((_e,Ee)=>_e.start-Ee.start);let we=0;for(let _e=1;_e<J.length;_e++){const Ee=J[we],Re=J[_e],Ce=Ee.start+Ee.count,Ne=At(Re.start,E.width,4),et=At(Ee.start,E.width,4);Re.start<=Ce+1&&Ne===et&&At(Re.start+Re.count-1,E.width,4)===Ne?Ee.count=Math.max(Ee.count,Re.start+Re.count-Ee.start):(++we,J[we]=Re)}J.length=we+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Fe=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ee=J.length;_e<Ee;_e++){const Re=J[_e],Ce=Math.floor(Re.start/4),Ne=Math.ceil(Re.count/4),et=Ce%E.width,V=Math.floor(Ce/E.width),Te=Ne,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,et,V,Te,ye,F,X,E.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function ue(T,E,F){let X=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=n.TEXTURE_3D);const ae=Je(T,E),J=E.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+F);const we=i.get(J);if(J.version!==we.__version||ae===!0){t.activeTexture(n.TEXTURE0+F);const ve=gt.getPrimaries(gt.workingColorSpace),Fe=E.colorSpace===ks?null:gt.getPrimaries(E.colorSpace),ke=E.colorSpace===ks||ve===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let _e=b(E.image,!1,s.maxTextureSize);_e=le(E,_e);const Ee=r.convert(E.format,E.colorSpace),Re=r.convert(E.type);let Ce=C(E.internalFormat,Ee,Re,E.colorSpace,E.isVideoTexture);Ae(X,E);let Ne;const et=E.mipmaps,V=E.isVideoTexture!==!0,Te=we.__version===void 0||ae===!0,ye=J.dataReady,Be=I(E,_e);if(E.isDepthTexture)Ce=w(E.format===_r,E.type),Te&&(V?t.texStorage2D(n.TEXTURE_2D,1,Ce,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ce,_e.width,_e.height,0,Ee,Re,null));else if(E.isDataTexture)if(et.length>0){V&&Te&&t.texStorage2D(n.TEXTURE_2D,Be,Ce,et[0].width,et[0].height);for(let be=0,ce=et.length;be<ce;be++)Ne=et[be],V?ye&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Ee,Re,Ne.data):t.texImage2D(n.TEXTURE_2D,be,Ce,Ne.width,Ne.height,0,Ee,Re,Ne.data);E.generateMipmaps=!1}else V?(Te&&t.texStorage2D(n.TEXTURE_2D,Be,Ce,_e.width,_e.height),ye&&St(E,_e,Ee,Re)):t.texImage2D(n.TEXTURE_2D,0,Ce,_e.width,_e.height,0,Ee,Re,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ce,et[0].width,et[0].height,_e.depth);for(let be=0,ce=et.length;be<ce;be++)if(Ne=et[be],E.format!==ei)if(Ee!==null)if(V){if(ye)if(E.layerUpdates.size>0){const Ve=Qm(Ne.width,Ne.height,E.format,E.type);for(const Qe of E.layerUpdates){const Lt=Ne.data.subarray(Qe*Ve/Ne.data.BYTES_PER_ELEMENT,(Qe+1)*Ve/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Qe,Ne.width,Ne.height,1,Ee,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,_e.depth,Ee,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Ce,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,_e.depth,Ee,Re,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Ce,Ne.width,Ne.height,_e.depth,0,Ee,Re,Ne.data)}else{V&&Te&&t.texStorage2D(n.TEXTURE_2D,Be,Ce,et[0].width,et[0].height);for(let be=0,ce=et.length;be<ce;be++)Ne=et[be],E.format!==ei?Ee!==null?V?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Ce,Ne.width,Ne.height,0,Ne.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Ee,Re,Ne.data):t.texImage2D(n.TEXTURE_2D,be,Ce,Ne.width,Ne.height,0,Ee,Re,Ne.data)}else if(E.isDataArrayTexture)if(V){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Ce,_e.width,_e.height,_e.depth),ye)if(E.layerUpdates.size>0){const be=Qm(_e.width,_e.height,E.format,E.type);for(const ce of E.layerUpdates){const Ve=_e.data.subarray(ce*be/_e.data.BYTES_PER_ELEMENT,(ce+1)*be/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,_e.width,_e.height,1,Ee,Re,Ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Re,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,_e.width,_e.height,_e.depth,0,Ee,Re,_e.data);else if(E.isData3DTexture)V?(Te&&t.texStorage3D(n.TEXTURE_3D,Be,Ce,_e.width,_e.height,_e.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Re,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,_e.width,_e.height,_e.depth,0,Ee,Re,_e.data);else if(E.isFramebufferTexture){if(Te)if(V)t.texStorage2D(n.TEXTURE_2D,Be,Ce,_e.width,_e.height);else{let be=_e.width,ce=_e.height;for(let Ve=0;Ve<Be;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Ce,be,ce,0,Ee,Re,null),be>>=1,ce>>=1}}else if(et.length>0){if(V&&Te){const be=pe(et[0]);t.texStorage2D(n.TEXTURE_2D,Be,Ce,be.width,be.height)}for(let be=0,ce=et.length;be<ce;be++)Ne=et[be],V?ye&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ee,Re,Ne):t.texImage2D(n.TEXTURE_2D,be,Ce,Ee,Re,Ne);E.generateMipmaps=!1}else if(V){if(Te){const be=pe(_e);t.texStorage2D(n.TEXTURE_2D,Be,Ce,be.width,be.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Re,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Ee,Re,_e);_(E)&&g(X),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Se(T,E,F){if(E.image.length!==6)return;const X=Je(T,E),ae=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const J=i.get(ae);if(ae.version!==J.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const we=gt.getPrimaries(gt.workingColorSpace),ve=E.colorSpace===ks?null:gt.getPrimaries(E.colorSpace),Fe=E.colorSpace===ks||we===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!ke&&!_e?Ee[ce]=b(E.image[ce],!0,s.maxCubemapSize):Ee[ce]=_e?E.image[ce].image:E.image[ce],Ee[ce]=le(E,Ee[ce]);const Re=Ee[0],Ce=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type),et=C(E.internalFormat,Ce,Ne,E.colorSpace),V=E.isVideoTexture!==!0,Te=J.__version===void 0||X===!0,ye=ae.dataReady;let Be=I(E,Re);Ae(n.TEXTURE_CUBE_MAP,E);let be;if(ke){V&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,et,Re.width,Re.height);for(let ce=0;ce<6;ce++){be=Ee[ce].mipmaps;for(let Ve=0;Ve<be.length;Ve++){const Qe=be[Ve];E.format!==ei?Ce!==null?V?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Qe.width,Qe.height,Ce,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,et,Qe.width,Qe.height,0,Qe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Qe.width,Qe.height,Ce,Ne,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,et,Qe.width,Qe.height,0,Ce,Ne,Qe.data)}}}else{if(be=E.mipmaps,V&&Te){be.length>0&&Be++;const ce=pe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,et,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(_e){V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Ce,Ne,Ee[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,Ee[ce].width,Ee[ce].height,0,Ce,Ne,Ee[ce].data);for(let Ve=0;Ve<be.length;Ve++){const Lt=be[Ve].image[ce].image;V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,Lt.width,Lt.height,Ce,Ne,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,et,Lt.width,Lt.height,0,Ce,Ne,Lt.data)}}else{V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce,Ne,Ee[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,Ce,Ne,Ee[ce]);for(let Ve=0;Ve<be.length;Ve++){const Qe=be[Ve];V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,Ce,Ne,Qe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,et,Ce,Ne,Qe.image[ce])}}}_(E)&&g(n.TEXTURE_CUBE_MAP),J.__version=ae.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function H(T,E,F,X,ae,J){const we=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),Fe=C(F.internalFormat,we,ve,F.colorSpace),ke=i.get(E),_e=i.get(F);if(_e.__renderTarget=E,!ke.__hasExternalTextures){const Ee=Math.max(1,E.width>>J),Re=Math.max(1,E.height>>J);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,J,Fe,Ee,Re,E.depth,0,we,ve,null):t.texImage2D(ae,J,Fe,Ee,Re,0,we,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ae,_e.__webglTexture,0,P(E)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ae,_e.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(T,E,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),E.depthBuffer){const X=E.depthTexture,ae=X&&X.isDepthTexture?X.type:null,J=w(E.stencilBuffer,ae),we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(E),J,E.width,E.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(E),J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const X=E.textures;for(let ae=0;ae<X.length;ae++){const J=X[ae],we=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),Fe=C(J.internalFormat,we,ve,J.colorSpace);ge(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(E),Fe,E.width,E.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(E),Fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(T,E,F){const X=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(E.depthTexture);if(ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,E.depthTexture);const ke=r.convert(E.depthTexture.format),_e=r.convert(E.depthTexture.type);let Ee;E.depthTexture.format===Ms?Ee=n.DEPTH_COMPONENT24:E.depthTexture.format===_r&&(Ee=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ee,E.width,E.height,0,ke,_e,null)}}else ee(E.depthTexture,0);const J=ae.__webglTexture,we=P(E),ve=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Fe=E.depthTexture.format===_r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ms)ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,ve,J,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,ve,J,0);else if(E.depthTexture.format===_r)ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,ve,J,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,ve,J,0);else throw new Error("Unknown depthTexture format")}function je(T){const E=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",ae)};X.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=X}if(T.depthTexture&&!E.__autoAllocateDepthBuffer)if(F)for(let X=0;X<6;X++)Xe(E.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?Xe(E.__webglFramebuffer[0],T,0):Xe(E.__webglFramebuffer,T,0)}else if(F){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=n.createRenderbuffer(),Ze(E.__webglDepthbuffer[X],T,!1);else{const ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,J)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ze(E.__webglDepthbuffer,T,!1);else{const ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(T,E,F){const X=i.get(T);E!==void 0&&H(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&je(T)}function B(T){const E=T.texture,F=i.get(T),X=i.get(E);T.addEventListener("dispose",U);const ae=T.textures,J=T.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=E.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)F.__webglFramebuffer[ve][Fe]=n.createFramebuffer()}else F.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)F.__webglFramebuffer[ve]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(we)for(let ve=0,Fe=ae.length;ve<Fe;ve++){const ke=i.get(ae[ve]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ge(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Fe=ae[ve];F.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const ke=r.convert(Fe.format,Fe.colorSpace),_e=r.convert(Fe.type),Ee=C(Fe.internalFormat,ke,_e,Fe.colorSpace,T.isXRRenderTarget===!0),Re=P(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)H(F.__webglFramebuffer[ve][Fe],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe);else H(F.__webglFramebuffer[ve],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(E)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ve=0,Fe=ae.length;ve<Fe;ve++){const ke=ae[ve],_e=i.get(ke);let Ee=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,_e.__webglTexture),Ae(Ee,ke),H(F.__webglFramebuffer,T,ke,n.COLOR_ATTACHMENT0+ve,Ee,0),_(ke)&&g(Ee)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,X.__webglTexture),Ae(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)H(F.__webglFramebuffer[Fe],T,E,n.COLOR_ATTACHMENT0,ve,Fe);else H(F.__webglFramebuffer,T,E,n.COLOR_ATTACHMENT0,ve,0);_(E)&&g(ve),t.unbindTexture()}T.depthBuffer&&je(T)}function q(T){const E=T.textures;for(let F=0,X=E.length;F<X;F++){const ae=E[F];if(_(ae)){const J=y(T),we=i.get(ae).__webglTexture;t.bindTexture(J,we),g(J),t.unbindTexture()}}}const re=[],ie=[];function G(T){if(T.samples>0){if(ge(T)===!1){const E=T.textures,F=T.width,X=T.height;let ae=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),ve=E.length>1;if(ve)for(let ke=0;ke<E.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Fe=T.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);const _e=i.get(E[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,ae,n.NEAREST),l===!0&&(re.length=0,ie.length=0,re.push(n.COLOR_ATTACHMENT0+ke),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(J),ie.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let ke=0;ke<E.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);const _e=i.get(E[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const E=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function P(T){return Math.min(s.maxSamples,T.samples)}function ge(T){const E=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(T){const E=o.render.frame;f.get(T)!==E&&(f.set(T,E),T.update())}function le(T,E){const F=T.colorSpace,X=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==In&&F!==ks&&(gt.getTransfer(F)===Ct?(X!==ei||ae!==$n)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",F)),E}function pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=k,this.setTextureCube=he,this.rebindTextures=L,this.setupRenderTarget=B,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=H,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UP(n,e){function t(i,s=ks){let r;const o=gt.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===Ih)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Q_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ev)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Z_)return n.BYTE;if(i===J_)return n.SHORT;if(i===ga)return n.UNSIGNED_SHORT;if(i===Lh)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===ys)return n.HALF_FLOAT;if(i===tv)return n.ALPHA;if(i===nv)return n.RGB;if(i===ei)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Nh)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===xo)return n.RG;if(i===Uh)return n.RG_INTEGER;if(i===Fh)return n.RGBA_INTEGER;if(i===Ol||i===Ul||i===Fl||i===Bl)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===xf||i===Ef)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_f)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bf||i===Sf||i===yf||i===Mf||i===Tf||i===Af||i===wf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bf||i===Sf)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mf)return r.COMPRESSED_R11_EAC;if(i===Tf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Af)return r.COMPRESSED_RG11_EAC;if(i===wf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cf||i===Rf||i===Pf||i===Lf||i===If||i===Df||i===Nf||i===Of||i===Uf||i===Ff||i===Bf||i===Vf||i===kf||i===Hf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===If)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Of)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hf)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zf||i===Gf||i===Wf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zf)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Xf||i===Kf||i===Yf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$f)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_a?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const FP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xi({vertexShader:FP,fragmentShader:BP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kP extends To{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",_=new VP,g={},y=t.getContextAttributes();let C=null,w=null;const I=[],D=[],U=new _t;let S=null;const R=new Cn;R.viewport=new kt;const te=new Cn;te.viewport=new kt;const N=[R,te],Y=new zA;let j=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Se=I[ue];return Se===void 0&&(Se=new vu,I[ue]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ue){let Se=I[ue];return Se===void 0&&(Se=new vu,I[ue]=Se),Se.getGripSpace()},this.getHand=function(ue){let Se=I[ue];return Se===void 0&&(Se=new vu,I[ue]=Se),Se.getHandSpace()};function ee(ue){const Se=D.indexOf(ue.inputSource);if(Se===-1)return;const H=I[Se];H!==void 0&&(H.update(ue.inputSource,ue.frame,u||o),H.dispatchEvent({type:ue.type,data:ue.inputSource}))}function K(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",k);for(let ue=0;ue<I.length;ue++){const Se=D[ue];Se!==null&&(D[ue]=null,I[ue].disconnect(Se))}j=null,oe=null,_.reset();for(const ue in g)delete g[ue];e.setRenderTarget(C),m=null,d=null,h=null,s=null,w=null,St.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){r=ue,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ue){u=ue},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",K),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(U),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Ze=null,Xe=null;y.depth&&(Xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=y.stencil?_r:Ms,Ze=y.stencil?_a:Wi);const je={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Hi(d.textureWidth,d.textureHeight,{format:ei,type:$n,depthTexture:new Sa(d.textureWidth,d.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const H={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Hi(m.framebufferWidth,m.framebufferHeight,{format:ei,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(ue){for(let Se=0;Se<ue.removed.length;Se++){const H=ue.removed[Se],Ze=D.indexOf(H);Ze>=0&&(D[Ze]=null,I[Ze].disconnect(H))}for(let Se=0;Se<ue.added.length;Se++){const H=ue.added[Se];let Ze=D.indexOf(H);if(Ze===-1){for(let je=0;je<I.length;je++)if(je>=D.length){D.push(H),Ze=je;break}else if(D[je]===null){D[je]=H,Ze=je;break}if(Ze===-1)break}const Xe=I[Ze];Xe&&Xe.connect(H)}}const he=new W,me=new W;function Le(ue,Se,H){he.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(H.matrixWorld);const Ze=he.distanceTo(me),Xe=Se.projectionMatrix.elements,je=H.projectionMatrix.elements,L=Xe[14]/(Xe[10]-1),B=Xe[14]/(Xe[10]+1),q=(Xe[9]+1)/Xe[5],re=(Xe[9]-1)/Xe[5],ie=(Xe[8]-1)/Xe[0],G=(je[8]+1)/je[0],P=L*ie,ge=L*G,de=Ze/(-ie+G),le=de*-ie;if(Se.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(le),ue.translateZ(de),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Xe[10]===-1)ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const pe=L+de,T=B+de,E=P-le,F=ge+(Ze-le),X=q*B/T*pe,ae=re*B/T*pe;ue.projectionMatrix.makePerspective(E,F,X,ae,pe,T),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function Oe(ue,Se){Se===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Se.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let Se=ue.near,H=ue.far;_.texture!==null&&(_.depthNear>0&&(Se=_.depthNear),_.depthFar>0&&(H=_.depthFar)),Y.near=te.near=R.near=Se,Y.far=te.far=R.far=H,(j!==Y.near||oe!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),j=Y.near,oe=Y.far),Y.layers.mask=ue.layers.mask|6,R.layers.mask=Y.layers.mask&-5,te.layers.mask=Y.layers.mask&-3;const Ze=ue.parent,Xe=Y.cameras;Oe(Y,Ze);for(let je=0;je<Xe.length;je++)Oe(Xe[je],Ze);Xe.length===2?Le(Y,R,te):Y.projectionMatrix.copy(R.projectionMatrix),Ae(ue,Y,Ze)};function Ae(ue,Se,H){H===null?ue.matrix.copy(Se.matrixWorld):(ue.matrix.copy(H.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Se.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Eo*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ue){l=ue,d!==null&&(d.fixedFoveation=ue),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ue)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(ue){return g[ue]};let Je=null;function At(ue,Se){if(f=Se.getViewerPose(u||o),x=Se,f!==null){const H=f.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ze=!1;H.length!==Y.cameras.length&&(Y.cameras.length=0,Ze=!0);for(let B=0;B<H.length;B++){const q=H[B];let re=null;if(m!==null)re=m.getViewport(q);else{const G=h.getViewSubImage(d,q);re=G.viewport,B===0&&(e.setRenderTargetTextures(w,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(w))}let ie=N[B];ie===void 0&&(ie=new Cn,ie.layers.enable(B),ie.viewport=new kt,N[B]=ie),ie.matrix.fromArray(q.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(q.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),B===0&&(Y.matrix.copy(ie.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ze===!0&&Y.cameras.push(ie)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const B=h.getDepthInformation(H[0]);B&&B.isValid&&B.texture&&_.init(B,s.renderState)}if(Xe&&Xe.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let B=0;B<H.length;B++){const q=H[B].camera;if(q){let re=g[q];re||(re=new pv,g[q]=re);const ie=h.getCameraImage(q);re.sourceTexture=ie}}}}for(let H=0;H<I.length;H++){const Ze=D[H],Xe=I[H];Ze!==null&&Xe!==void 0&&Xe.update(Ze,Se,u||o)}Je&&Je(ue,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),x=null}const St=new Ev;St.setAnimationLoop(At),this.setAnimationLoop=function(ue){Je=ue},this.dispose=function(){}}}const fr=new $i,HP=new lt;function zP(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,mv(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,y,C,w){g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),h(_,g)):g.isMeshPhongMaterial?(r(_,g),f(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&m(_,g,w)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),b(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,y,C):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===On&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===On&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const y=e.get(g),C=y.envMap,w=y.envMapRotation;C&&(_.envMap.value=C,fr.copy(w),fr.x*=-1,fr.y*=-1,fr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),_.envMapRotation.value.setFromMatrix4(HP.makeRotationFromEuler(fr)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,C){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=C*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,y){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function b(_,g){const y=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GP(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,C){const w=C.program;i.uniformBlockBinding(y,w)}function u(y,C){let w=s[y.id];w===void 0&&(x(y),w=f(y),s[y.id]=w,y.addEventListener("dispose",_));const I=C.program;i.updateUBOMapping(y,I);const D=e.render.frame;r[y.id]!==D&&(d(y),r[y.id]=D)}function f(y){const C=h();y.__bindingPointIndex=C;const w=n.createBuffer(),I=y.__size,D=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const C=s[y.id],w=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let D=0,U=w.length;D<U;D++){const S=Array.isArray(w[D])?w[D]:[w[D]];for(let R=0,te=S.length;R<te;R++){const N=S[R];if(m(N,D,R,I)===!0){const Y=N.__offset,j=Array.isArray(N.value)?N.value:[N.value];let oe=0;for(let ee=0;ee<j.length;ee++){const K=j[ee],k=b(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,Y+oe,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,oe),oe+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,C,w,I){const D=y.value,U=C+"_"+w;if(I[U]===void 0)return typeof D=="number"||typeof D=="boolean"?I[U]=D:I[U]=D.clone(),!0;{const S=I[U];if(typeof D=="number"||typeof D=="boolean"){if(S!==D)return I[U]=D,!0}else if(S.equals(D)===!1)return S.copy(D),!0}return!1}function x(y){const C=y.uniforms;let w=0;const I=16;for(let U=0,S=C.length;U<S;U++){const R=Array.isArray(C[U])?C[U]:[C[U]];for(let te=0,N=R.length;te<N;te++){const Y=R[te],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let oe=0,ee=j.length;oe<ee;oe++){const K=j[oe],k=b(K),he=w%I,me=he%k.boundary,Le=he+me;w+=me,Le!==0&&I-Le<k.storage&&(w+=I-Le),Y.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=k.storage}}}const D=w%I;return D>0&&(w+=I-D),y.__size=w,y.__cache={},this}function b(y){const C={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(C.boundary=4,C.storage=4):y.isVector2?(C.boundary=8,C.storage=8):y.isVector3||y.isColor?(C.boundary=16,C.storage=12):y.isVector4?(C.boundary=16,C.storage=16):y.isMatrix3?(C.boundary=48,C.storage=48):y.isMatrix4?(C.boundary=64,C.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",y),C}function _(y){const C=y.target;C.removeEventListener("dispose",_);const w=o.indexOf(C.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function g(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:u,dispose:g}}const WP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function $P(){return Ci===null&&(Ci=new $h(WP,16,16,xo,ys),Ci.name="DFG_LUT",Ci.minFilter=sn,Ci.magFilter=sn,Ci.wrapS=Fi,Ci.wrapT=Fi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class XP{constructor(e={}){const{canvas:t=mT(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=$n}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const b=m,_=new Set([Fh,Uh,Oh]),g=new Set([$n,Wi,ga,_a,Ih,Dh]),y=new Uint32Array(4),C=new Int32Array(4);let w=null,I=null;const D=[],U=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let te=!1;this._outputColorSpace=fn;let N=0,Y=0,j=null,oe=-1,ee=null;const K=new kt,k=new kt;let he=null;const me=new it(0);let Le=0,Oe=t.width,Ae=t.height,Je=1,At=null,St=null;const ue=new kt(0,0,Oe,Ae),Se=new kt(0,0,Oe,Ae);let H=!1;const Ze=new Kh;let Xe=!1,je=!1;const L=new lt,B=new W,q=new kt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function G(){return j===null?Je:1}let P=i;function ge(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ph}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),P===null){const z="webgl2";if(P=ge(z,A),P===null)throw ge(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw qe("WebGLRenderer: "+A.message),A}let de,le,pe,T,E,F,X,ae,J,we,ve,Fe,ke,_e,Ee,Re,Ce,Ne,et,V,Te,ye,Be;function be(){de=new XR(P),de.init(),Te=new UP(P,de),le=new BR(P,de,e,Te),pe=new NP(P,de),le.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),T=new jR(P),E=new EP,F=new OP(P,de,pe,E,le,Te,T),X=new $R(R),ae=new ew(P),ye=new UR(P,ae),J=new KR(P,ae,T,ye),we=new ZR(P,J,ae,ye,T),Ne=new qR(P,le,F),Ee=new VR(E),ve=new xP(R,X,de,le,ye,Ee),Fe=new zP(R,E),ke=new SP,_e=new CP(de),Ce=new OR(R,X,pe,we,x,l),Re=new DP(R,we,le),Be=new GP(P,T,le,pe),et=new FR(P,de,T),V=new YR(P,de,T),T.programs=ve.programs,R.capabilities=le,R.extensions=de,R.properties=E,R.renderLists=ke,R.shadowMap=Re,R.state=pe,R.info=T}be(),b!==$n&&(S=new QR(b,t.width,t.height,s,r));const ce=new kP(R,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Je},this.setPixelRatio=function(A){A!==void 0&&(Je=A,this.setSize(Oe,Ae,!1))},this.getSize=function(A){return A.set(Oe,Ae)},this.setSize=function(A,z,se=!0){if(ce.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=A,Ae=z,t.width=Math.floor(A*Je),t.height=Math.floor(z*Je),se===!0&&(t.style.width=A+"px",t.style.height=z+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Oe*Je,Ae*Je).floor()},this.setDrawingBufferSize=function(A,z,se){Oe=A,Ae=z,Je=se,t.width=Math.floor(A*se),t.height=Math.floor(z*se),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(b===$n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(ue)},this.setViewport=function(A,z,se,Q){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,z,se,Q),pe.viewport(K.copy(ue).multiplyScalar(Je).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,z,se,Q){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,z,se,Q),pe.scissor(k.copy(Se).multiplyScalar(Je).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){pe.setScissorTest(H=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,se=!0){let Q=0;if(A){let Z=!1;if(j!==null){const Pe=j.texture.format;Z=_.has(Pe)}if(Z){const Pe=j.texture.type,Ue=g.has(Pe),Ie=Ce.getClearColor(),He=Ce.getClearAlpha(),$e=Ie.r,tt=Ie.g,rt=Ie.b;Ue?(y[0]=$e,y[1]=tt,y[2]=rt,y[3]=He,P.clearBufferuiv(P.COLOR,0,y)):(C[0]=$e,C[1]=tt,C[2]=rt,C[3]=He,P.clearBufferiv(P.COLOR,0,C))}else Q|=P.COLOR_BUFFER_BIT}z&&(Q|=P.DEPTH_BUFFER_BIT),se&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ce.dispose(),ke.dispose(),_e.dispose(),E.dispose(),X.dispose(),we.dispose(),ye.dispose(),Be.dispose(),ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ca),ce.removeEventListener("sessionend",Ra),Un.stop()};function Ve(A){A.preventDefault(),jl("WebGLRenderer: Context Lost."),te=!0}function Qe(){jl("WebGLRenderer: Context Restored."),te=!1;const A=T.autoReset,z=Re.enabled,se=Re.autoUpdate,Q=Re.needsUpdate,Z=Re.type;be(),T.autoReset=A,Re.enabled=z,Re.autoUpdate=se,Re.needsUpdate=Q,Re.type=Z}function Lt(A){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){const z=A.target;z.removeEventListener("dispose",vt),ii(z)}function ii(A){xi(A),E.remove(A)}function xi(A){const z=E.get(A).programs;z!==void 0&&(z.forEach(function(se){ve.releaseProgram(se)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,se,Q,Z,Pe){z===null&&(z=re);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=gc(A,z,se,Q,Z);pe.setMaterial(Q,Ue);let He=se.index,$e=1;if(Q.wireframe===!0){if(He=J.getWireframeAttribute(se),He===void 0)return;$e=2}const tt=se.drawRange,rt=se.attributes.position;let Ke=tt.start*$e,yt=(tt.start+tt.count)*$e;Pe!==null&&(Ke=Math.max(Ke,Pe.start*$e),yt=Math.min(yt,(Pe.start+Pe.count)*$e)),He!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,He.count)):rt!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,rt.count));const It=yt-Ke;if(It<0||It===1/0)return;ye.setup(Z,Q,Ie,se,He);let Ht,wt=et;if(He!==null&&(Ht=ae.get(He),wt=V,wt.setIndex(Ht)),Z.isMesh)Q.wireframe===!0?(pe.setLineWidth(Q.wireframeLinewidth*G()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(Z.isLine){let $t=Q.linewidth;$t===void 0&&($t=1),pe.setLineWidth($t*G()),Z.isLineSegments?wt.setMode(P.LINES):Z.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else Z.isPoints?wt.setMode(P.POINTS):Z.isSprite&&wt.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ql("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $t=Z._multiDrawStarts,Ge=Z._multiDrawCounts,En=Z._multiDrawCount,xt=He?ae.get(He).bytesPerElement:1,Fn=E.get(Q).currentProgram.getUniforms();for(let Yn=0;Yn<En;Yn++)Fn.setValue(P,"_gl_DrawID",Yn),wt.render($t[Yn]/xt,Ge[Yn])}else if(Z.isInstancedMesh)wt.renderInstances(Ke,It,Z.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,$t);wt.renderInstances(Ke,It,Ge)}else wt.render(Ke,It)};function si(A,z,se){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Ar(A,z,se),A.side=Ss,A.needsUpdate=!0,Ar(A,z,se),A.side=Ui):Ar(A,z,se)}this.compile=function(A,z,se=null){se===null&&(se=A),I=_e.get(se),I.init(z),U.push(I),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),A!==se&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();const Q=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Ie=Pe[Ue];si(Ie,se,Z),Q.add(Ie)}else si(Pe,se,Z),Q.add(Pe)}),I=U.pop(),Q},this.compileAsync=function(A,z,se=null){const Q=this.compile(A,z,se);return new Promise(Z=>{function Pe(){if(Q.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){Z(A);return}setTimeout(Pe,10)}de.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let yr=null;function mc(A){yr&&yr(A)}function Ca(){Un.stop()}function Ra(){Un.start()}const Un=new Ev;Un.setAnimationLoop(mc),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){yr=A,ce.setAnimationLoop(A),A===null?Un.stop():Un.start()},ce.addEventListener("sessionstart",Ca),ce.addEventListener("sessionend",Ra),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(te===!0)return;const se=ce.enabled===!0&&ce.isPresenting===!0,Q=S!==null&&(j===null||se)&&S.begin(R,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,j),I=_e.get(A,U.length),I.init(z),U.push(I),L.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ze.setFromProjectionMatrix(L,Bi,z.reversedDepth),je=this.localClippingEnabled,Xe=Ee.init(this.clippingPlanes,je),w=ke.get(A,D.length),w.init(),D.push(w),ce.enabled===!0&&ce.isPresenting===!0){const Ue=R.xr.getDepthSensingMesh();Ue!==null&&Ei(Ue,z,-1/0,R.sortObjects)}Ei(A,z,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(At,St),ie=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ie&&Ce.addToRenderList(w,A),this.info.render.frame++,Xe===!0&&Ee.beginShadows();const Z=I.state.shadowsArray;if(Re.render(Z,A,z),Xe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&S.hasRenderPass())===!1){const Ue=w.opaque,Ie=w.transmissive;if(I.setupLights(),z.isArrayCamera){const He=z.cameras;if(Ie.length>0)for(let $e=0,tt=He.length;$e<tt;$e++){const rt=He[$e];zs(Ue,Ie,A,rt)}ie&&Ce.render(A);for(let $e=0,tt=He.length;$e<tt;$e++){const rt=He[$e];Zi(w,A,rt,rt.viewport)}}else Ie.length>0&&zs(Ue,Ie,A,z),ie&&Ce.render(A),Zi(w,A,z)}j!==null&&Y===0&&(F.updateMultisampleRenderTarget(j),F.updateRenderTargetMipmap(j)),Q&&S.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),ye.resetDefaultState(),oe=-1,ee=null,U.pop(),U.length>0?(I=U[U.length-1],Xe===!0&&Ee.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?w=D[D.length-1]:w=null};function Ei(A,z,se,Q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ze.intersectsSprite(A)){Q&&q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(L);const Ue=we.update(A),Ie=A.material;Ie.visible&&w.push(A,Ue,Ie,se,q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ze.intersectsObject(A))){const Ue=we.update(A),Ie=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),q.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),q.copy(Ue.boundingSphere.center)),q.applyMatrix4(A.matrixWorld).applyMatrix4(L)),Array.isArray(Ie)){const He=Ue.groups;for(let $e=0,tt=He.length;$e<tt;$e++){const rt=He[$e],Ke=Ie[rt.materialIndex];Ke&&Ke.visible&&w.push(A,Ue,Ke,se,q.z,rt)}}else Ie.visible&&w.push(A,Ue,Ie,se,q.z,null)}}const Pe=A.children;for(let Ue=0,Ie=Pe.length;Ue<Ie;Ue++)Ei(Pe[Ue],z,se,Q)}function Zi(A,z,se,Q){const{opaque:Z,transmissive:Pe,transparent:Ue}=A;I.setupLightsView(se),Xe===!0&&Ee.setGlobalState(R.clippingPlanes,se),Q&&pe.viewport(K.copy(Q)),Z.length>0&&Mr(Z,z,se),Pe.length>0&&Mr(Pe,z,se),Ue.length>0&&Mr(Ue,z,se),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function zs(A,z,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Q.id]===void 0){const Ke=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Q.id]=new Hi(1,1,{generateMipmaps:!0,type:Ke?ys:$n,minFilter:hs,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[Q.id],Ue=Q.viewport||K;Pe.setSize(Ue.z*R.transmissionResolutionScale,Ue.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget(),He=R.getActiveCubeFace(),$e=R.getActiveMipmapLevel();R.setRenderTarget(Pe),R.getClearColor(me),Le=R.getClearAlpha(),Le<1&&R.setClearColor(16777215,.5),R.clear(),ie&&Ce.render(se);const tt=R.toneMapping;R.toneMapping=ki;const rt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),I.setupLightsView(Q),Xe===!0&&Ee.setGlobalState(R.clippingPlanes,Q),Mr(A,se,Q),F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let yt=0,It=z.length;yt<It;yt++){const Ht=z[yt],{object:wt,geometry:$t,material:Ge,group:En}=Ht;if(Ge.side===Ui&&wt.layers.test(Q.layers)){const xt=Ge.side;Ge.side=On,Ge.needsUpdate=!0,Tr(wt,se,Q,$t,Ge,En),Ge.side=xt,Ge.needsUpdate=!0,Ke=!0}}Ke===!0&&(F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe))}R.setRenderTarget(Ie,He,$e),R.setClearColor(me,Le),rt!==void 0&&(Q.viewport=rt),R.toneMapping=tt}function Mr(A,z,se){const Q=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Pe=A.length;Z<Pe;Z++){const Ue=A[Z],{object:Ie,geometry:He,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&Q!==null&&(tt=Q),Ie.layers.test(se.layers)&&Tr(Ie,z,se,He,tt,$e)}}function Tr(A,z,se,Q,Z,Pe){A.onBeforeRender(R,z,se,Q,Z,Pe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,z,se,Q,A,Pe),Z.transparent===!0&&Z.side===Ui&&Z.forceSinglePass===!1?(Z.side=On,Z.needsUpdate=!0,R.renderBufferDirect(se,z,Q,Z,A,Pe),Z.side=Ss,Z.needsUpdate=!0,R.renderBufferDirect(se,z,Q,Z,A,Pe),Z.side=Ui):R.renderBufferDirect(se,z,Q,Z,A,Pe),A.onAfterRender(R,z,se,Q,Z,Pe)}function Ar(A,z,se){z.isScene!==!0&&(z=re);const Q=E.get(A),Z=I.state.lights,Pe=I.state.shadowsArray,Ue=Z.state.version,Ie=ve.getParameters(A,Z.state,Pe,z,se),He=ve.getProgramCacheKey(Ie);let $e=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Q.fog=z.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=X.get(A.envMap||Q.environment,tt),Q.envMapRotation=Q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",vt),$e=new Map,Q.programs=$e);let rt=$e.get(He);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Ue)return La(A,Ie),rt}else Ie.uniforms=ve.getUniforms(A),A.onBeforeCompile(Ie,R),rt=ve.acquireProgram(Ie,He),$e.set(He,rt),Q.uniforms=Ie.uniforms;const Ke=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Ee.uniform),La(A,Ie),Q.needsLights=vc(A),Q.lightsStateVersion=Ue,Q.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function Pa(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function La(A,z){const se=E.get(A);se.outputColorSpace=z.outputColorSpace,se.batching=z.batching,se.batchingColor=z.batchingColor,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.instancingMorph=z.instancingMorph,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function gc(A,z,se,Q,Z){z.isScene!==!0&&(z=re),F.resetTextureUnits();const Pe=z.fog,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?z.environment:null,Ie=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:In,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,$e=X.get(Q.envMap||Ue,He),tt=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ke=!!se.morphAttributes.position,yt=!!se.morphAttributes.normal,It=!!se.morphAttributes.color;let Ht=ki;Q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=R.toneMapping);const wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=wt!==void 0?wt.length:0,Ge=E.get(Q),En=I.state.lights;if(Xe===!0&&(je===!0||A!==ee)){const Jt=A===ee&&Q.id===oe;Ee.setState(Q,A,Jt)}let xt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==En.state.version||Ge.outputColorSpace!==Ie||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==$e||Q.fog===!0&&Ge.fog!==Pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ee.numPlanes||Ge.numIntersection!==Ee.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==rt||Ge.morphTargets!==Ke||Ge.morphNormals!==yt||Ge.morphColors!==It||Ge.toneMapping!==Ht||Ge.morphTargetsCount!==$t)&&(xt=!0):(xt=!0,Ge.__version=Q.version);let Fn=Ge.currentProgram;xt===!0&&(Fn=Ar(Q,z,Z));let Yn=!1,Ji=!1,bi=!1;const Et=Fn.getUniforms(),Xt=Ge.uniforms;if(pe.useProgram(Fn.program)&&(Yn=!0,Ji=!0,bi=!0),Q.id!==oe&&(oe=Q.id,Ji=!0),Yn||ee!==A){pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(P,"projectionMatrix",A.projectionMatrix),Et.setValue(P,"viewMatrix",A.matrixWorldInverse);const yi=Et.map.cameraPosition;yi!==void 0&&yi.setValue(P,B.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Et.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,Ji=!0,bi=!0)}if(Ge.needsLights&&(En.state.directionalShadowMap.length>0&&Et.setValue(P,"directionalShadowMap",En.state.directionalShadowMap,F),En.state.spotShadowMap.length>0&&Et.setValue(P,"spotShadowMap",En.state.spotShadowMap,F),En.state.pointShadowMap.length>0&&Et.setValue(P,"pointShadowMap",En.state.pointShadowMap,F)),Z.isSkinnedMesh){Et.setOptional(P,Z,"bindMatrix"),Et.setOptional(P,Z,"bindMatrixInverse");const Jt=Z.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Et.setValue(P,"boneTexture",Jt.boneTexture,F))}Z.isBatchedMesh&&(Et.setOptional(P,Z,"batchingTexture"),Et.setValue(P,"batchingTexture",Z._matricesTexture,F),Et.setOptional(P,Z,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",Z._indirectTexture,F),Et.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",Z._colorsTexture,F));const Si=se.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Ne.update(Z,se,Fn),(Ji||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Et.setValue(P,"receiveShadow",Z.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&z.environment!==null&&(Xt.envMapIntensity.value=z.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=$P()),Ji&&(Et.setValue(P,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&_c(Xt,bi),Pe&&Q.fog===!0&&Fe.refreshFogUniforms(Xt,Pe),Fe.refreshMaterialUniforms(Xt,Q,Je,Ae,I.state.transmissionRenderTarget[A.id]),Vl.upload(P,Pa(Ge),Xt,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vl.upload(P,Pa(Ge),Xt,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Et.setValue(P,"center",Z.center),Et.setValue(P,"modelViewMatrix",Z.modelViewMatrix),Et.setValue(P,"normalMatrix",Z.normalMatrix),Et.setValue(P,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Jt=Q.uniformsGroups;for(let yi=0,ws=Jt.length;yi<ws;yi++){const Da=Jt[yi];Be.update(Da,Fn),Be.bind(Da,Fn)}}return Fn}function _c(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function vc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,z,se){const Q=E.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=z,E.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const se=E.get(A);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0};const Ia=P.createFramebuffer();this.setRenderTarget=function(A,z=0,se=0){j=A,N=z,Y=se;let Q=null,Z=!1,Pe=!1;if(A){const Ie=E.get(A);if(Ie.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(P.FRAMEBUFFER,Ie.__webglFramebuffer),K.copy(A.viewport),k.copy(A.scissor),he=A.scissorTest,pe.viewport(K),pe.scissor(k),pe.setScissorTest(he),oe=-1;return}else if(Ie.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(Ie.__hasExternalTextures)F.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&E.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);const $e=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[z])?Q=$e[z][se]:Q=$e[z],Z=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?Q=E.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[se]:Q=$e,K.copy(A.viewport),k.copy(A.scissor),he=A.scissorTest}else K.copy(ue).multiplyScalar(Je).floor(),k.copy(Se).multiplyScalar(Je).floor(),he=H;if(se!==0&&(Q=Ia),pe.bindFramebuffer(P.FRAMEBUFFER,Q)&&pe.drawBuffers(A,Q),pe.viewport(K),pe.scissor(k),pe.setScissorTest(he),Z){const Ie=E.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,se)}else if(Pe){const Ie=z;for(let He=0;He<A.textures.length;He++){const $e=E.get(A.textures[He]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+He,$e.__webglTexture,se,Ie)}}else if(A!==null&&se!==0){const Ie=E.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,se)}oe=-1},this.readRenderTargetPixels=function(A,z,se,Q,Z,Pe,Ue,Ie=0){if(!(A&&A.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){pe.bindFramebuffer(P.FRAMEBUFFER,He);try{const $e=A.textures[Ie],tt=$e.format,rt=$e.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!le.textureFormatReadable(tt)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(rt)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Q&&se>=0&&se<=A.height-Z&&P.readPixels(z,se,Q,Z,Te.convert(tt),Te.convert(rt),Pe)}finally{const $e=j!==null?E.get(j).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,z,se,Q,Z,Pe,Ue,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He)if(z>=0&&z<=A.width-Q&&se>=0&&se<=A.height-Z){pe.bindFramebuffer(P.FRAMEBUFFER,He);const $e=A.textures[Ie],tt=$e.format,rt=$e.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!le.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,Pe.byteLength,P.STREAM_READ),P.readPixels(z,se,Q,Z,Te.convert(tt),Te.convert(rt),0);const yt=j!==null?E.get(j).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,yt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gT(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Pe),P.deleteBuffer(Ke),P.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,se=0){const Q=Math.pow(2,-se),Z=Math.floor(A.image.width*Q),Pe=Math.floor(A.image.height*Q),Ue=z!==null?z.x:0,Ie=z!==null?z.y:0;F.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,Ue,Ie,Z,Pe),pe.unbindTexture()};const wr=P.createFramebuffer(),xc=P.createFramebuffer();this.copyTextureToTexture=function(A,z,se=null,Q=null,Z=0,Pe=0){let Ue,Ie,He,$e,tt,rt,Ke,yt,It;const Ht=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(se!==null)Ue=se.max.x-se.min.x,Ie=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,tt=se.min.y,rt=se.isBox3?se.min.z:0;else{const Xt=Math.pow(2,-Z);Ue=Math.floor(Ht.width*Xt),Ie=Math.floor(Ht.height*Xt),A.isDataArrayTexture?He=Ht.depth:A.isData3DTexture?He=Math.floor(Ht.depth*Xt):He=1,$e=0,tt=0,rt=0}Q!==null?(Ke=Q.x,yt=Q.y,It=Q.z):(Ke=0,yt=0,It=0);const wt=Te.convert(z.format),$t=Te.convert(z.type);let Ge;z.isData3DTexture?(F.setTexture3D(z,0),Ge=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),Ge=P.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),Ge=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const En=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Yn=P.getParameter(P.UNPACK_SKIP_ROWS),Ji=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$e),P.pixelStorei(P.UNPACK_SKIP_ROWS,tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rt);const bi=A.isDataArrayTexture||A.isData3DTexture,Et=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Xt=E.get(A),Si=E.get(z),Jt=E.get(Xt.__renderTarget),yi=E.get(Si.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Jt.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let ws=0;ws<He;ws++)bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Z,rt+ws),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(z).__webglTexture,Pe,It+ws)),P.blitFramebuffer($e,tt,Ue,Ie,Ke,yt,Ue,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||E.has(A)){const Xt=E.get(A),Si=E.get(z);pe.bindFramebuffer(P.READ_FRAMEBUFFER,wr),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,xc);for(let Jt=0;Jt<He;Jt++)bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,Z,rt+Jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,Z),Et?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Si.__webglTexture,Pe,It+Jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Si.__webglTexture,Pe),Z!==0?P.blitFramebuffer($e,tt,Ue,Ie,Ke,yt,Ue,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):Et?P.copyTexSubImage3D(Ge,Pe,Ke,yt,It+Jt,$e,tt,Ue,Ie):P.copyTexSubImage2D(Ge,Pe,Ke,yt,$e,tt,Ue,Ie);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ge,Pe,Ke,yt,It,Ue,Ie,He,wt,$t,Ht.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Ge,Pe,Ke,yt,It,Ue,Ie,He,wt,Ht.data):P.texSubImage3D(Ge,Pe,Ke,yt,It,Ue,Ie,He,wt,$t,Ht):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Pe,Ke,yt,Ue,Ie,wt,$t,Ht.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Pe,Ke,yt,Ht.width,Ht.height,wt,Ht.data):P.texSubImage2D(P.TEXTURE_2D,Pe,Ke,yt,Ue,Ie,wt,$t,Ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,En),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ji),Pe===0&&z.generateMipmaps&&P.generateMipmap(Ge),pe.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){N=0,Y=0,j=null,pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function yg(n,e){if(e===sT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===jf||e===iv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===jf)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function KP(n){const e=new Map,t=new Map,i=n.clone();return Av(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Av(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Av(n.children[i],e.children[i],t)}class YP extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QP(t)}),this.register(function(t){return new eL(t)}),this.register(function(t){return new cL(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new fL(t)}),this.register(function(t){return new nL(t)}),this.register(function(t){return new iL(t)}),this.register(function(t){return new sL(t)}),this.register(function(t){return new rL(t)}),this.register(function(t){return new JP(t)}),this.register(function(t){return new oL(t)}),this.register(function(t){return new tL(t)}),this.register(function(t){return new lL(t)}),this.register(function(t){return new aL(t)}),this.register(function(t){return new qP(t)}),this.register(function(t){return new Mg(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mg(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hL(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ca.extractUrlBase(e);o=ca.resolveURL(u,this.path)}else o=ca.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(f){t(f),r.manager.itemEnd(e)},a)}catch(f){a(f)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wv){try{o[dt.KHR_BINARY_GLTF]=new dL(e)}catch(h){s&&s(h);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new AL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const h=r.extensionsUsed[f],d=r.extensionsRequired||[];switch(h){case dt.KHR_MATERIALS_UNLIT:o[h]=new ZP;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[h]=new pL(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[h]=new mL;break;case dt.KHR_MESH_QUANTIZATION:o[h]=new gL;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function jP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Zt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qP{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const f=new it(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],In);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Qf(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new FA(f),u.distance=h;break;case"spot":u=new OA(f),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),Pi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class ZP{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return vr}extendParams(e,t,i){const s=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],In),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,fn))}return Promise.all(s)}}class JP{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class QP{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _t(r,r)}return Promise.all(s)}}class eL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class tL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class nL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,fn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class iL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class sL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(r[0],r[1],r[2],In),Promise.all(s)}}class rL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class oL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(r[0],r[1],r[2],In),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,fn)),Promise.all(s)}}class aL{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class lL{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?qi:null}extendMaterialParams(e,t){const i=Zt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class cL{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uL{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class fL{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class Mg{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,f=s.count,h=s.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,h,d,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(f*h);return o.decodeGltfBuffer(new Uint8Array(m),f,h,d,s.mode,s.filter),m})})}else return null}}class hL{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const u of s.primitives)if(u.mode!==Jn.TRIANGLES&&u.mode!==Jn.TRIANGLE_STRIP&&u.mode!==Jn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(f=>(l[u]=f,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const f=u.pop(),h=f.isGroup?f.children:[f],d=u[0].count,m=[];for(const x of h){const b=new lt,_=new W,g=new As,y=new W(1,1,1),C=new rA(x.geometry,x.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&y.fromBufferAttribute(l.SCALE,w),C.setMatrixAt(w,b.compose(_,g,y));for(const w in l)if(w==="_COLOR_0"){const I=l[w];C.instanceColor=new Zf(I.array,I.itemSize,I.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&x.geometry.setAttribute(w,l[w]);Wt.prototype.copy.call(C,x),this.parser.assignFinalMaterial(C),m.push(C)}return f.isGroup?(f.clear(),f.add(...m),f):m[0]}))}}const wv="glTF",qo=12,Tg={JSON:1313821514,BIN:5130562};class dL{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qo,r=new DataView(e,qo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Tg.JSON){const u=new Uint8Array(e,qo+o,a);this.content=i.decode(u)}else if(l===Tg.BIN){const u=qo+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const f in o){const h=ih[f]||f.toLowerCase();a[h]=o[f]}for(const f in e.attributes){const h=ih[f]||f.toLowerCase();if(o[f]!==void 0){const d=i.accessors[e.attributes[f]],m=uo[d.componentType];u[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(h,d){s.decodeDracoFile(f,function(m){for(const x in m.attributes){const b=m.attributes[x],_=l[x];_!==void 0&&(b.normalized=_)}h(m)},a,u,In,d)})})}}class mL{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gL{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Cv extends Ao{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,f=s-t,h=(i-t)/f,d=h*h,m=d*h,x=e*u,b=x-u,_=-2*m+3*d,g=m-d,y=1-_,C=g-d+h;for(let w=0;w!==a;w++){const I=o[b+w+a],D=o[b+w+l]*f,U=o[x+w+a],S=o[x+w]*f;r[w]=y*I+C*D+_*U+g*S}return r}}const _L=new As;class vL extends Cv{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return _L.fromArray(r).normalize().toArray(r),r}}const Jn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ag={9728:nn,9729:sn,9984:q_,9985:Nl,9986:Qo,9987:hs},wg={33071:Fi,33648:Kl,10497:vo},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xL={CUBICSPLINE:void 0,LINEAR:xa,STEP:va},Ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new jh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ss})),n.DefaultMaterial}function hr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bL(n,e,t){let i=!1,s=!1,r=!1;for(let u=0,f=e.length;u<f;u++){const h=e[u];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const f=u[0],h=u[1],d=u[2];return i&&(n.morphAttributes.position=f),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function SL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yL(n){let e;const t=n.extensions&&n.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yu(t.attributes):e=n.indices+":"+Yu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Yu(n.targets[i]);return e}function Yu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function sh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ML(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const TL=new lt;class AL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new DA(this.options.manager):this.textureLoader=new kA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return hr(r,a,s),Pi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,f]of o.children.entries())r(f,a.children[u])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(ca.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Xu[s.type],a=uo[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Ln(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Xu[s.type],u=uo[s.componentType],f=u.BYTES_PER_ELEMENT,h=f*l,d=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let b,_;if(m&&m!==h){const g=Math.floor(d/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let C=t.cache.get(y);C||(b=new u(a,g*m,s.count*m/f),C=new JT(b,m/f),t.cache.add(y,C)),_=new Wh(C,l,d%m/f,x)}else a===null?b=new u(s.count*l):b=new u(a,d,s.count*l),_=new Ln(b,l,x);if(s.sparse!==void 0){const g=Xu.SCALAR,y=uo[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,I=new y(o[1],C,s.sparse.count*g),D=new u(o[2],w,s.sparse.count*l);a!==null&&(_=new Ln(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let U=0,S=I.length;U<S;U++){const R=I[U];if(_.setX(R,D[U*l]),l>=2&&_.setY(R,D[U*l+1]),l>=3&&_.setZ(R,D[U*l+2]),l>=4&&_.setW(R,D[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=x}return _})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return f.magFilter=Ag[d.magFilter]||sn,f.minFilter=Ag[d.minFilter]||hs,f.wrapS=wg[d.wrapS]||vo,f.wrapT=wg[d.wrapT]||vo,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==nn&&f.minFilter!==sn,s.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let x=d;t.isImageBitmapLoader===!0&&(x=function(b){const _=new cn(b);_.needsUpdate=!0,d(_)}),t.load(ca.resolveURL(h,r.path),x,void 0,m)})}).then(function(h){return u===!0&&a.revokeObjectURL(l),Pi(h,o),h.userData.mimeType=o.mimeType||ML(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new hv,zi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new fv,zi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return jh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[dt.KHR_MATERIALS_UNLIT]){const h=s[dt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],In),a.opacity=d[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",h.baseColorTexture,fn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ui);const f=r.alphaMode||Ku.OPAQUE;if(f===Ku.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===Ku.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vr&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _t(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==vr&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vr){const h=r.emissiveFactor;a.emissive=new it().setRGB(h[0],h[1],h[2],In)}return r.emissiveTexture!==void 0&&o!==vr&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,fn)),Promise.all(u).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&hr(s,h,r),h})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],f=yL(u),h=s[f];if(h)o.push(h.promise);else{let d;u.extensions&&u.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Cg(new ni,u,t),s[f]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const f=o[l].material===void 0?EL(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let m=0,x=f.length;m<x;m++){const b=f[m],_=o[m];let g;const y=u[m];if(_.mode===Jn.TRIANGLES||_.mode===Jn.TRIANGLE_STRIP||_.mode===Jn.TRIANGLE_FAN||_.mode===void 0)g=r.isSkinnedMesh===!0?new nA(b,y):new Kn(b,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),_.mode===Jn.TRIANGLE_STRIP?g.geometry=yg(g.geometry,iv):_.mode===Jn.TRIANGLE_FAN&&(g.geometry=yg(g.geometry,jf));else if(_.mode===Jn.LINES)g=new cA(b,y);else if(_.mode===Jn.LINE_STRIP)g=new Yh(b,y);else if(_.mode===Jn.LINE_LOOP)g=new uA(b,y);else if(_.mode===Jn.POINTS)g=new fA(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(g.geometry.morphAttributes).length>0&&SL(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Pi(g,r),_.extensions&&hr(s,g,_),t.assignFinalMaterial(g),h.push(g)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&hr(s,h[0],r),h[0];const d=new ds;r.extensions&&hr(s,d,r),t.associations.set(d,{meshes:e});for(let m=0,x=h.length;m<x;m++)d.add(h[m]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Cn(NT.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new hc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,f=o.length;u<f;u++){const h=o[u];if(h){a.push(h);const d=new lt;r!==null&&d.fromArray(r.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Xh(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],f=[];for(let h=0,d=s.channels.length;h<d;h++){const m=s.channels[h],x=s.samplers[m.sampler],b=m.target,_=b.node,g=s.parameters!==void 0?s.parameters[x.input]:x.input,y=s.parameters!==void 0?s.parameters[x.output]:x.output;b.node!==void 0&&(o.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),u.push(x),f.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(h){const d=h[0],m=h[1],x=h[2],b=h[3],_=h[4],g=[];for(let C=0,w=d.length;C<w;C++){const I=d[C],D=m[C],U=x[C],S=b[C],R=_[C];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const te=i._createAnimationTracks(I,D,U,S,R);if(te)for(let N=0;N<te.length;N++)g.push(te[N])}const y=new AA(r,void 0,g);return Pi(y,s),y})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,f=a.length;u<f;u++)o.push(i.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const f=u[0],h=u[1],d=u[2];d!==null&&f.traverse(function(m){m.isSkinnedMesh&&m.bind(d,TL)});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);if(f.userData.pivot!==void 0&&h.length>0){const m=f.userData.pivot,x=h[0];f.pivot=new W().fromArray(m),f.position.x-=m[0],f.position.y-=m[1],f.position.z-=m[2],x.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let f;if(r.isBone===!0?f=new uv:u.length>1?f=new ds:u.length===1?f=u[0]:f=new Wt,f!==u[0])for(let h=0,d=u.length;h<d;h++)f.add(u[h]);if(r.name&&(f.userData.name=r.name,f.name=o),Pi(f,r),r.extensions&&hr(i,f,r),r.matrix!==void 0){const h=new lt;h.fromArray(r.matrix),f.applyMatrix4(h)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!s.associations.has(f))s.associations.set(f,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(f);s.associations.set(f,{...h})}return s.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ds;i.name&&(r.name=s.createUniqueName(i.name)),Pi(r,i),i.extensions&&hr(t,r,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let f=0,h=l.length;f<h;f++){const d=l[f];d.parent!==null?r.add(KP(d)):r.add(d)}const u=f=>{const h=new Map;for(const[d,m]of s.associations)(d instanceof zi||d instanceof cn)&&h.set(d,m);return f.traverse(d=>{const m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=u(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Fs[r.path]===Fs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(Fs[r.path]){case Fs.weights:u=So;break;case Fs.rotation:u=yo;break;case Fs.translation:case Fs.scale:u=Mo;break;default:i.itemSize===1?u=So:u=Mo;break}const f=s.interpolation!==void 0?xL[s.interpolation]:xa,h=this._getArrayFromAccessor(i);for(let d=0,m=l.length;d<m;d++){const x=new u(l[d]+"."+Fs[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=sh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof yo?vL:Cv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wL(n,e,t){const i=e.attributes,s=new Yi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new W(l[0],l[1],l[2]),new W(u[0],u[1],u[2])),a.normalized){const f=sh(uo[a.componentType]);s.min.multiplyScalar(f),s.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new W,l=new W;for(let u=0,f=r.length;u<f;u++){const h=r[u];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,x=d.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),d.normalized){const b=sh(uo[d.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ji;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Cg(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ih[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return gt.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Pi(n,e),wL(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bL(n,e.targets,t):n})}function Qh(){const n=document.getElementById("aboutThree");if(!n){console.error("No se encontró #aboutThree");return}CL(n)}function CL(n){let e=n.clientWidth,t=n.clientHeight;const i=new YT;i.fog=new Gh(527376,.08);const s=new Cn(55,e/t,.1,100);s.position.set(0,4.5,9),s.lookAt(0,0,0);const r=new XP({alpha:!0,antialias:!0});r.setSize(e,t),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0),n.appendChild(r.domElement),i.add(new VA(16777215,.6));const o=new Qf(16777215,1.2);o.position.set(5,10,7),i.add(o);const a=new Qf(311231,.4);a.position.set(-5,2,-5),i.add(a);const l=new ds,u=new ds;l.add(u),i.add(l);let f=null,h=1,d=!1;const m=1,x=2.12;let b=m,_=m,g=0,y=0;const C=new _t,w=new JA;new YP().load("/assets/3d/modelo.glb",te=>{f=te.scene;const N=new Yi().setFromObject(f),Y=N.getCenter(new W),j=N.getSize(new W);h=4/Math.max(j.x,j.y,j.z),f.position.sub(Y),f.scale.setScalar(h),u.add(f),console.log("✅ Modelo cargado")},te=>console.log(`Cargando: ${Math.round(te.loaded/te.total*100)}%`),te=>console.error("❌ Error:",te)),window.addEventListener("mousemove",te=>{const N=n.getBoundingClientRect();g=(te.clientY/window.innerHeight-.5)*.5,y=(te.clientX/window.innerWidth-.5)*1.2;const Y=te.clientX>=N.left&&te.clientX<=N.right,j=te.clientY>=N.top&&te.clientY<=N.bottom;Y&&j?(C.x=(te.clientX-N.left)/N.width*2-1,C.y=-((te.clientY-N.top)/N.height)*2+1):(C.set(-9999,-9999),d&&(d=!1,_=m,U()))});function D(){n.style.cursor="pointer",console.log("🎯 hover — activa animación")}function U(){n.style.cursor="default",console.log("💤 hover end")}let S=0;function R(){if(requestAnimationFrame(R),S+=.008,f){w.setFromCamera(C,s);const N=w.intersectObject(f,!0).length>0;N&&!d?(d=!0,_=x,D()):!N&&d&&(d=!1,_=m,U()),b+=(_-b)*.06,f.scale.setScalar(h*b),u.rotation.x+=(g-u.rotation.x)*.05,u.rotation.y+=(y-u.rotation.y)*.05,d||(l.rotation.y+=.003),l.position.y=Math.sin(S)*.15}r.render(i,s)}R(),window.addEventListener("resize",()=>{e=n.clientWidth,t=n.clientHeight,r.setSize(e,t),s.aspect=e/t,s.updateProjectionMatrix()})}typeof document<"u"&&document.addEventListener("DOMContentLoaded",Qh);const RL=Object.freeze(Object.defineProperty({__proto__:null,initAboutThree:Qh},Symbol.toStringTag,{value:"Module"})),PL={name:"App",components:{AppNav:Oy,BannerCarousel:$y,AboutSection:cM,SemillerosSection:bM,EventosSection:wM,AppFooter:LM},mounted(){this.$nextTick(()=>{["particles-about","particles-events"].forEach(Ch),Rh(),Qh()})}},LL={id:"app"};function IL(n,e,t,i,s,r){const o=Wn("AppNav"),a=Wn("BannerCarousel"),l=Wn("AboutSection"),u=Wn("SemillerosSection"),f=Wn("EventosSection"),h=Wn("AppFooter");return Gt(),tn("div",LL,[zt(o),zt(a),zt(l),zt(u),zt(f),zt(h)])}const DL=Ki(PL,[["render",IL]]);var kl={exports:{}};var NL=kl.exports,Rg;function OL(){return Rg||(Rg=1,(function(n,e){(function(t,i){n.exports=i()})(NL,(function(){const t=new Map,i={set(v,c,p){t.has(v)||t.set(v,new Map);const M=t.get(v);if(!M.has(c)&&M.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(M.keys())[0]}.`);return}M.set(c,p)},get(v,c){return t.has(v)&&t.get(v).get(c)||null},remove(v,c){if(!t.has(v))return;const p=t.get(v);p.delete(c),p.size===0&&t.delete(v)}},s=1e6,r=1e3,o="transitionend",a=v=>(v&&window.CSS&&window.CSS.escape&&(v=v.replace(/#([^\s"#']+)/g,(c,p)=>`#${CSS.escape(p)}`)),v),l=v=>v==null?`${v}`:Object.prototype.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase(),u=v=>{do v+=Math.floor(Math.random()*s);while(document.getElementById(v));return v},f=v=>{if(!v)return 0;let{transitionDuration:c,transitionDelay:p}=window.getComputedStyle(v);const M=Number.parseFloat(c),O=Number.parseFloat(p);return!M&&!O?0:(c=c.split(",")[0],p=p.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(p))*r)},h=v=>{v.dispatchEvent(new Event(o))},d=v=>!v||typeof v!="object"?!1:(typeof v.jquery<"u"&&(v=v[0]),typeof v.nodeType<"u"),m=v=>d(v)?v.jquery?v[0]:v:typeof v=="string"&&v.length>0?document.querySelector(a(v)):null,x=v=>{if(!d(v)||v.getClientRects().length===0)return!1;const c=getComputedStyle(v).getPropertyValue("visibility")==="visible",p=v.closest("details:not([open])");if(!p)return c;if(p!==v){const M=v.closest("summary");if(M&&M.parentNode!==p||M===null)return!1}return c},b=v=>!v||v.nodeType!==Node.ELEMENT_NODE||v.classList.contains("disabled")?!0:typeof v.disabled<"u"?v.disabled:v.hasAttribute("disabled")&&v.getAttribute("disabled")!=="false",_=v=>{if(!document.documentElement.attachShadow)return null;if(typeof v.getRootNode=="function"){const c=v.getRootNode();return c instanceof ShadowRoot?c:null}return v instanceof ShadowRoot?v:v.parentNode?_(v.parentNode):null},g=()=>{},y=v=>{v.offsetHeight},C=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,w=[],I=v=>{document.readyState==="loading"?(w.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of w)c()}),w.push(v)):v()},D=()=>document.documentElement.dir==="rtl",U=v=>{I(()=>{const c=C();if(c){const p=v.NAME,M=c.fn[p];c.fn[p]=v.jQueryInterface,c.fn[p].Constructor=v,c.fn[p].noConflict=()=>(c.fn[p]=M,v.jQueryInterface)}})},S=(v,c=[],p=v)=>typeof v=="function"?v.call(...c):p,R=(v,c,p=!0)=>{if(!p){S(v);return}const O=f(c)+5;let $=!1;const ne=({target:fe})=>{fe===c&&($=!0,c.removeEventListener(o,ne),S(v))};c.addEventListener(o,ne),setTimeout(()=>{$||h(c)},O)},te=(v,c,p,M)=>{const O=v.length;let $=v.indexOf(c);return $===-1?!p&&M?v[O-1]:v[0]:($+=p?1:-1,M&&($=($+O)%O),v[Math.max(0,Math.min($,O-1))])},N=/[^.]*(?=\..*)\.|.*/,Y=/\..*/,j=/::\d+$/,oe={};let ee=1;const K={mouseenter:"mouseover",mouseleave:"mouseout"},k=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function he(v,c){return c&&`${c}::${ee++}`||v.uidEvent||ee++}function me(v){const c=he(v);return v.uidEvent=c,oe[c]=oe[c]||{},oe[c]}function Le(v,c){return function p(M){return Ze(M,{delegateTarget:v}),p.oneOff&&H.off(v,M.type,c),c.apply(v,[M])}}function Oe(v,c,p){return function M(O){const $=v.querySelectorAll(c);for(let{target:ne}=O;ne&&ne!==this;ne=ne.parentNode)for(const fe of $)if(fe===ne)return Ze(O,{delegateTarget:ne}),M.oneOff&&H.off(v,O.type,c,p),p.apply(ne,[O])}}function Ae(v,c,p=null){return Object.values(v).find(M=>M.callable===c&&M.delegationSelector===p)}function Je(v,c,p){const M=typeof c=="string",O=M?p:c||p;let $=Se(v);return k.has($)||($=v),[M,O,$]}function At(v,c,p,M,O){if(typeof c!="string"||!v)return;let[$,ne,fe]=Je(c,p,M);c in K&&(ne=(Ut=>function(ht){if(!ht.relatedTarget||ht.relatedTarget!==ht.delegateTarget&&!ht.delegateTarget.contains(ht.relatedTarget))return Ut.call(this,ht)})(ne));const xe=me(v),ze=xe[fe]||(xe[fe]={}),Me=Ae(ze,ne,$?p:null);if(Me){Me.oneOff=Me.oneOff&&O;return}const ct=he(ne,c.replace(N,"")),ft=$?Oe(v,p,ne):Le(v,ne);ft.delegationSelector=$?p:null,ft.callable=ne,ft.oneOff=O,ft.uidEvent=ct,ze[ct]=ft,v.addEventListener(fe,ft,$)}function St(v,c,p,M,O){const $=Ae(c[p],M,O);$&&(v.removeEventListener(p,$,!!O),delete c[p][$.uidEvent])}function ue(v,c,p,M){const O=c[p]||{};for(const[$,ne]of Object.entries(O))$.includes(M)&&St(v,c,p,ne.callable,ne.delegationSelector)}function Se(v){return v=v.replace(Y,""),K[v]||v}const H={on(v,c,p,M){At(v,c,p,M,!1)},one(v,c,p,M){At(v,c,p,M,!0)},off(v,c,p,M){if(typeof c!="string"||!v)return;const[O,$,ne]=Je(c,p,M),fe=ne!==c,xe=me(v),ze=xe[ne]||{},Me=c.startsWith(".");if(typeof $<"u"){if(!Object.keys(ze).length)return;St(v,xe,ne,$,O?p:null);return}if(Me)for(const ct of Object.keys(xe))ue(v,xe,ct,c.slice(1));for(const[ct,ft]of Object.entries(ze)){const nt=ct.replace(j,"");(!fe||c.includes(nt))&&St(v,xe,ne,ft.callable,ft.delegationSelector)}},trigger(v,c,p){if(typeof c!="string"||!v)return null;const M=C(),O=Se(c),$=c!==O;let ne=null,fe=!0,xe=!0,ze=!1;$&&M&&(ne=M.Event(c,p),M(v).trigger(ne),fe=!ne.isPropagationStopped(),xe=!ne.isImmediatePropagationStopped(),ze=ne.isDefaultPrevented());const Me=Ze(new Event(c,{bubbles:fe,cancelable:!0}),p);return ze&&Me.preventDefault(),xe&&v.dispatchEvent(Me),Me.defaultPrevented&&ne&&ne.preventDefault(),Me}};function Ze(v,c={}){for(const[p,M]of Object.entries(c))try{v[p]=M}catch{Object.defineProperty(v,p,{configurable:!0,get(){return M}})}return v}function Xe(v){if(v==="true")return!0;if(v==="false")return!1;if(v===Number(v).toString())return Number(v);if(v===""||v==="null")return null;if(typeof v!="string")return v;try{return JSON.parse(decodeURIComponent(v))}catch{return v}}function je(v){return v.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const L={setDataAttribute(v,c,p){v.setAttribute(`data-bs-${je(c)}`,p)},removeDataAttribute(v,c){v.removeAttribute(`data-bs-${je(c)}`)},getDataAttributes(v){if(!v)return{};const c={},p=Object.keys(v.dataset).filter(M=>M.startsWith("bs")&&!M.startsWith("bsConfig"));for(const M of p){let O=M.replace(/^bs/,"");O=O.charAt(0).toLowerCase()+O.slice(1),c[O]=Xe(v.dataset[M])}return c},getDataAttribute(v,c){return Xe(v.getAttribute(`data-bs-${je(c)}`))}};class B{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,p){const M=d(p)?L.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof M=="object"?M:{},...d(p)?L.getDataAttributes(p):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,p=this.constructor.DefaultType){for(const[M,O]of Object.entries(p)){const $=c[M],ne=d($)?"element":l($);if(!new RegExp(O).test(ne))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${M}" provided type "${ne}" but expected type "${O}".`)}}}const q="5.3.8";class re extends B{constructor(c,p){super(),c=m(c),c&&(this._element=c,this._config=this._getConfig(p),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,p,M=!0){R(c,p,M)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return i.get(m(c),this.DATA_KEY)}static getOrCreateInstance(c,p={}){return this.getInstance(c)||new this(c,typeof p=="object"?p:null)}static get VERSION(){return q}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const ie=v=>{let c=v.getAttribute("data-bs-target");if(!c||c==="#"){let p=v.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),c=p&&p!=="#"?p.trim():null}return c?c.split(",").map(p=>a(p)).join(","):null},G={find(v,c=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(c,v))},findOne(v,c=document.documentElement){return Element.prototype.querySelector.call(c,v)},children(v,c){return[].concat(...v.children).filter(p=>p.matches(c))},parents(v,c){const p=[];let M=v.parentNode.closest(c);for(;M;)p.push(M),M=M.parentNode.closest(c);return p},prev(v,c){let p=v.previousElementSibling;for(;p;){if(p.matches(c))return[p];p=p.previousElementSibling}return[]},next(v,c){let p=v.nextElementSibling;for(;p;){if(p.matches(c))return[p];p=p.nextElementSibling}return[]},focusableChildren(v){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(p=>`${p}:not([tabindex^="-"])`).join(",");return this.find(c,v).filter(p=>!b(p)&&x(p))},getSelectorFromElement(v){const c=ie(v);return c&&G.findOne(c)?c:null},getElementFromSelector(v){const c=ie(v);return c?G.findOne(c):null},getMultipleElementsFromSelector(v){const c=ie(v);return c?G.find(c):[]}},P=(v,c="hide")=>{const p=`click.dismiss${v.EVENT_KEY}`,M=v.NAME;H.on(document,p,`[data-bs-dismiss="${M}"]`,function(O){if(["A","AREA"].includes(this.tagName)&&O.preventDefault(),b(this))return;const $=G.getElementFromSelector(this)||this.closest(`.${M}`);v.getOrCreateInstance($)[c]()})},ge="alert",le=".bs.alert",pe=`close${le}`,T=`closed${le}`,E="fade",F="show";class X extends re{static get NAME(){return ge}close(){if(H.trigger(this._element,pe).defaultPrevented)return;this._element.classList.remove(F);const p=this._element.classList.contains(E);this._queueCallback(()=>this._destroyElement(),this._element,p)}_destroyElement(){this._element.remove(),H.trigger(this._element,T),this.dispose()}static jQueryInterface(c){return this.each(function(){const p=X.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}P(X,"close"),U(X);const ae="button",we=".bs.button",ve=".data-api",Fe="active",ke='[data-bs-toggle="button"]',_e=`click${we}${ve}`;class Ee extends re{static get NAME(){return ae}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Fe))}static jQueryInterface(c){return this.each(function(){const p=Ee.getOrCreateInstance(this);c==="toggle"&&p[c]()})}}H.on(document,_e,ke,v=>{v.preventDefault();const c=v.target.closest(ke);Ee.getOrCreateInstance(c).toggle()}),U(Ee);const Re="swipe",Ce=".bs.swipe",Ne=`touchstart${Ce}`,et=`touchmove${Ce}`,V=`touchend${Ce}`,Te=`pointerdown${Ce}`,ye=`pointerup${Ce}`,Be="touch",be="pen",ce="pointer-event",Ve=40,Qe={endCallback:null,leftCallback:null,rightCallback:null},Lt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class vt extends B{constructor(c,p){super(),this._element=c,!(!c||!vt.isSupported())&&(this._config=this._getConfig(p),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Qe}static get DefaultType(){return Lt}static get NAME(){return Re}dispose(){H.off(this._element,Ce)}_start(c){if(!this._supportPointerEvents){this._deltaX=c.touches[0].clientX;return}this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX)}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),S(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=Ve)return;const p=c/this._deltaX;this._deltaX=0,p&&S(p>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(H.on(this._element,Te,c=>this._start(c)),H.on(this._element,ye,c=>this._end(c)),this._element.classList.add(ce)):(H.on(this._element,Ne,c=>this._start(c)),H.on(this._element,et,c=>this._move(c)),H.on(this._element,V,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType===be||c.pointerType===Be)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ii="carousel",si=".bs.carousel",yr=".data-api",mc="ArrowLeft",Ca="ArrowRight",Ra=500,Un="next",Ei="prev",Zi="left",zs="right",Mr=`slide${si}`,Tr=`slid${si}`,Ar=`keydown${si}`,Pa=`mouseenter${si}`,La=`mouseleave${si}`,gc=`dragstart${si}`,_c=`load${si}${yr}`,vc=`click${si}${yr}`,Ia="carousel",wr="active",xc="slide",A="carousel-item-end",z="carousel-item-start",se="carousel-item-next",Q="carousel-item-prev",Z=".active",Pe=".carousel-item",Ue=Z+Pe,Ie=".carousel-item img",He=".carousel-indicators",$e="[data-bs-slide], [data-bs-slide-to]",tt='[data-bs-ride="carousel"]',rt={[mc]:zs,[Ca]:Zi},Ke={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},yt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class It extends re{constructor(c,p){super(c,p),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=G.findOne(He,this._element),this._addEventListeners(),this._config.ride===Ia&&this.cycle()}static get Default(){return Ke}static get DefaultType(){return yt}static get NAME(){return ii}next(){this._slide(Un)}nextWhenVisible(){!document.hidden&&x(this._element)&&this.next()}prev(){this._slide(Ei)}pause(){this._isSliding&&h(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){H.one(this._element,Tr,()=>this.cycle());return}this.cycle()}}to(c){const p=this._getItems();if(c>p.length-1||c<0)return;if(this._isSliding){H.one(this._element,Tr,()=>this.to(c));return}const M=this._getItemIndex(this._getActive());if(M===c)return;const O=c>M?Un:Ei;this._slide(O,p[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&H.on(this._element,Ar,c=>this._keydown(c)),this._config.pause==="hover"&&(H.on(this._element,Pa,()=>this.pause()),H.on(this._element,La,()=>this._maybeEnableCycle())),this._config.touch&&vt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const M of G.find(Ie,this._element))H.on(M,gc,O=>O.preventDefault());const p={leftCallback:()=>this._slide(this._directionToOrder(Zi)),rightCallback:()=>this._slide(this._directionToOrder(zs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Ra+this._config.interval))}};this._swipeHelper=new vt(this._element,p)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const p=rt[c.key];p&&(c.preventDefault(),this._slide(this._directionToOrder(p)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const p=G.findOne(Z,this._indicatorsElement);p.classList.remove(wr),p.removeAttribute("aria-current");const M=G.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);M&&(M.classList.add(wr),M.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const p=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=p||this._config.defaultInterval}_slide(c,p=null){if(this._isSliding)return;const M=this._getActive(),O=c===Un,$=p||te(this._getItems(),M,O,this._config.wrap);if($===M)return;const ne=this._getItemIndex($),fe=nt=>H.trigger(this._element,nt,{relatedTarget:$,direction:this._orderToDirection(c),from:this._getItemIndex(M),to:ne});if(fe(Mr).defaultPrevented||!M||!$)return;const ze=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(ne),this._activeElement=$;const Me=O?z:A,ct=O?se:Q;$.classList.add(ct),y($),M.classList.add(Me),$.classList.add(Me);const ft=()=>{$.classList.remove(Me,ct),$.classList.add(wr),M.classList.remove(wr,ct,Me),this._isSliding=!1,fe(Tr)};this._queueCallback(ft,M,this._isAnimated()),ze&&this.cycle()}_isAnimated(){return this._element.classList.contains(xc)}_getActive(){return G.findOne(Ue,this._element)}_getItems(){return G.find(Pe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return D()?c===Zi?Ei:Un:c===Zi?Un:Ei}_orderToDirection(c){return D()?c===Ei?Zi:zs:c===Ei?zs:Zi}static jQueryInterface(c){return this.each(function(){const p=It.getOrCreateInstance(this,c);if(typeof c=="number"){p.to(c);return}if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}H.on(document,vc,$e,function(v){const c=G.getElementFromSelector(this);if(!c||!c.classList.contains(Ia))return;v.preventDefault();const p=It.getOrCreateInstance(c),M=this.getAttribute("data-bs-slide-to");if(M){p.to(M),p._maybeEnableCycle();return}if(L.getDataAttribute(this,"slide")==="next"){p.next(),p._maybeEnableCycle();return}p.prev(),p._maybeEnableCycle()}),H.on(window,_c,()=>{const v=G.find(tt);for(const c of v)It.getOrCreateInstance(c)}),U(It);const Ht="collapse",$t=".bs.collapse",Ge=".data-api",En=`show${$t}`,xt=`shown${$t}`,Fn=`hide${$t}`,Yn=`hidden${$t}`,Ji=`click${$t}${Ge}`,bi="show",Et="collapse",Xt="collapsing",Si="collapsed",Jt=`:scope .${Et} .${Et}`,yi="collapse-horizontal",ws="width",Da="height",Pv=".collapse.show, .collapse.collapsing",Ec='[data-bs-toggle="collapse"]',Lv={parent:null,toggle:!0},Iv={parent:"(null|element)",toggle:"boolean"};class Cr extends re{constructor(c,p){super(c,p),this._isTransitioning=!1,this._triggerArray=[];const M=G.find(Ec);for(const O of M){const $=G.getSelectorFromElement(O),ne=G.find($).filter(fe=>fe===this._element);$!==null&&ne.length&&this._triggerArray.push(O)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Lv}static get DefaultType(){return Iv}static get NAME(){return Ht}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(Pv).filter(fe=>fe!==this._element).map(fe=>Cr.getOrCreateInstance(fe,{toggle:!1}))),c.length&&c[0]._isTransitioning||H.trigger(this._element,En).defaultPrevented)return;for(const fe of c)fe.hide();const M=this._getDimension();this._element.classList.remove(Et),this._element.classList.add(Xt),this._element.style[M]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const O=()=>{this._isTransitioning=!1,this._element.classList.remove(Xt),this._element.classList.add(Et,bi),this._element.style[M]="",H.trigger(this._element,xt)},ne=`scroll${M[0].toUpperCase()+M.slice(1)}`;this._queueCallback(O,this._element,!0),this._element.style[M]=`${this._element[ne]}px`}hide(){if(this._isTransitioning||!this._isShown()||H.trigger(this._element,Fn).defaultPrevented)return;const p=this._getDimension();this._element.style[p]=`${this._element.getBoundingClientRect()[p]}px`,y(this._element),this._element.classList.add(Xt),this._element.classList.remove(Et,bi);for(const O of this._triggerArray){const $=G.getElementFromSelector(O);$&&!this._isShown($)&&this._addAriaAndCollapsedClass([O],!1)}this._isTransitioning=!0;const M=()=>{this._isTransitioning=!1,this._element.classList.remove(Xt),this._element.classList.add(Et),H.trigger(this._element,Yn)};this._element.style[p]="",this._queueCallback(M,this._element,!0)}_isShown(c=this._element){return c.classList.contains(bi)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=m(c.parent),c}_getDimension(){return this._element.classList.contains(yi)?ws:Da}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(Ec);for(const p of c){const M=G.getElementFromSelector(p);M&&this._addAriaAndCollapsedClass([p],this._isShown(M))}}_getFirstLevelChildren(c){const p=G.find(Jt,this._config.parent);return G.find(c,this._config.parent).filter(M=>!p.includes(M))}_addAriaAndCollapsedClass(c,p){if(c.length)for(const M of c)M.classList.toggle(Si,!p),M.setAttribute("aria-expanded",p)}static jQueryInterface(c){const p={};return typeof c=="string"&&/show|hide/.test(c)&&(p.toggle=!1),this.each(function(){const M=Cr.getOrCreateInstance(this,p);if(typeof c=="string"){if(typeof M[c]>"u")throw new TypeError(`No method named "${c}"`);M[c]()}})}}H.on(document,Ji,Ec,function(v){(v.target.tagName==="A"||v.delegateTarget&&v.delegateTarget.tagName==="A")&&v.preventDefault();for(const c of G.getMultipleElementsFromSelector(this))Cr.getOrCreateInstance(c,{toggle:!1}).toggle()}),U(Cr);var bn="top",Bn="bottom",Vn="right",Sn="left",Na="auto",Rr=[bn,Bn,Vn,Sn],Gs="start",Pr="end",ed="clippingParents",bc="viewport",Lr="popper",td="reference",Sc=Rr.reduce(function(v,c){return v.concat([c+"-"+Gs,c+"-"+Pr])},[]),yc=[].concat(Rr,[Na]).reduce(function(v,c){return v.concat([c,c+"-"+Gs,c+"-"+Pr])},[]),nd="beforeRead",id="read",sd="afterRead",rd="beforeMain",od="main",ad="afterMain",ld="beforeWrite",cd="write",ud="afterWrite",fd=[nd,id,sd,rd,od,ad,ld,cd,ud];function Mi(v){return v?(v.nodeName||"").toLowerCase():null}function kn(v){if(v==null)return window;if(v.toString()!=="[object Window]"){var c=v.ownerDocument;return c&&c.defaultView||window}return v}function Ws(v){var c=kn(v).Element;return v instanceof c||v instanceof Element}function jn(v){var c=kn(v).HTMLElement;return v instanceof c||v instanceof HTMLElement}function Mc(v){if(typeof ShadowRoot>"u")return!1;var c=kn(v).ShadowRoot;return v instanceof c||v instanceof ShadowRoot}function Dv(v){var c=v.state;Object.keys(c.elements).forEach(function(p){var M=c.styles[p]||{},O=c.attributes[p]||{},$=c.elements[p];!jn($)||!Mi($)||(Object.assign($.style,M),Object.keys(O).forEach(function(ne){var fe=O[ne];fe===!1?$.removeAttribute(ne):$.setAttribute(ne,fe===!0?"":fe)}))})}function Nv(v){var c=v.state,p={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,p.popper),c.styles=p,c.elements.arrow&&Object.assign(c.elements.arrow.style,p.arrow),function(){Object.keys(c.elements).forEach(function(M){var O=c.elements[M],$=c.attributes[M]||{},ne=Object.keys(c.styles.hasOwnProperty(M)?c.styles[M]:p[M]),fe=ne.reduce(function(xe,ze){return xe[ze]="",xe},{});!jn(O)||!Mi(O)||(Object.assign(O.style,fe),Object.keys($).forEach(function(xe){O.removeAttribute(xe)}))})}}const Tc={name:"applyStyles",enabled:!0,phase:"write",fn:Dv,effect:Nv,requires:["computeStyles"]};function Ti(v){return v.split("-")[0]}var $s=Math.max,Oa=Math.min,Ir=Math.round;function Ac(){var v=navigator.userAgentData;return v!=null&&v.brands&&Array.isArray(v.brands)?v.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function hd(){return!/^((?!chrome|android).)*safari/i.test(Ac())}function Dr(v,c,p){c===void 0&&(c=!1),p===void 0&&(p=!1);var M=v.getBoundingClientRect(),O=1,$=1;c&&jn(v)&&(O=v.offsetWidth>0&&Ir(M.width)/v.offsetWidth||1,$=v.offsetHeight>0&&Ir(M.height)/v.offsetHeight||1);var ne=Ws(v)?kn(v):window,fe=ne.visualViewport,xe=!hd()&&p,ze=(M.left+(xe&&fe?fe.offsetLeft:0))/O,Me=(M.top+(xe&&fe?fe.offsetTop:0))/$,ct=M.width/O,ft=M.height/$;return{width:ct,height:ft,top:Me,right:ze+ct,bottom:Me+ft,left:ze,x:ze,y:Me}}function wc(v){var c=Dr(v),p=v.offsetWidth,M=v.offsetHeight;return Math.abs(c.width-p)<=1&&(p=c.width),Math.abs(c.height-M)<=1&&(M=c.height),{x:v.offsetLeft,y:v.offsetTop,width:p,height:M}}function dd(v,c){var p=c.getRootNode&&c.getRootNode();if(v.contains(c))return!0;if(p&&Mc(p)){var M=c;do{if(M&&v.isSameNode(M))return!0;M=M.parentNode||M.host}while(M)}return!1}function Qi(v){return kn(v).getComputedStyle(v)}function Ov(v){return["table","td","th"].indexOf(Mi(v))>=0}function Cs(v){return((Ws(v)?v.ownerDocument:v.document)||window.document).documentElement}function Ua(v){return Mi(v)==="html"?v:v.assignedSlot||v.parentNode||(Mc(v)?v.host:null)||Cs(v)}function pd(v){return!jn(v)||Qi(v).position==="fixed"?null:v.offsetParent}function Uv(v){var c=/firefox/i.test(Ac()),p=/Trident/i.test(Ac());if(p&&jn(v)){var M=Qi(v);if(M.position==="fixed")return null}var O=Ua(v);for(Mc(O)&&(O=O.host);jn(O)&&["html","body"].indexOf(Mi(O))<0;){var $=Qi(O);if($.transform!=="none"||$.perspective!=="none"||$.contain==="paint"||["transform","perspective"].indexOf($.willChange)!==-1||c&&$.willChange==="filter"||c&&$.filter&&$.filter!=="none")return O;O=O.parentNode}return null}function Lo(v){for(var c=kn(v),p=pd(v);p&&Ov(p)&&Qi(p).position==="static";)p=pd(p);return p&&(Mi(p)==="html"||Mi(p)==="body"&&Qi(p).position==="static")?c:p||Uv(v)||c}function Cc(v){return["top","bottom"].indexOf(v)>=0?"x":"y"}function Io(v,c,p){return $s(v,Oa(c,p))}function Fv(v,c,p){var M=Io(v,c,p);return M>p?p:M}function md(){return{top:0,right:0,bottom:0,left:0}}function gd(v){return Object.assign({},md(),v)}function _d(v,c){return c.reduce(function(p,M){return p[M]=v,p},{})}var Bv=function(c,p){return c=typeof c=="function"?c(Object.assign({},p.rects,{placement:p.placement})):c,gd(typeof c!="number"?c:_d(c,Rr))};function Vv(v){var c,p=v.state,M=v.name,O=v.options,$=p.elements.arrow,ne=p.modifiersData.popperOffsets,fe=Ti(p.placement),xe=Cc(fe),ze=[Sn,Vn].indexOf(fe)>=0,Me=ze?"height":"width";if(!(!$||!ne)){var ct=Bv(O.padding,p),ft=wc($),nt=xe==="y"?bn:Sn,Ut=xe==="y"?Bn:Vn,ht=p.rects.reference[Me]+p.rects.reference[xe]-ne[xe]-p.rects.popper[Me],bt=ne[xe]-p.rects.reference[xe],Vt=Lo($),Yt=Vt?xe==="y"?Vt.clientHeight||0:Vt.clientWidth||0:0,jt=ht/2-bt/2,mt=ct[nt],Dt=Yt-ft[Me]-ct[Ut],Nt=Yt/2-ft[Me]/2+jt,Kt=Io(mt,Nt,Dt),un=xe;p.modifiersData[M]=(c={},c[un]=Kt,c.centerOffset=Kt-Nt,c)}}function kv(v){var c=v.state,p=v.options,M=p.element,O=M===void 0?"[data-popper-arrow]":M;O!=null&&(typeof O=="string"&&(O=c.elements.popper.querySelector(O),!O)||dd(c.elements.popper,O)&&(c.elements.arrow=O))}const vd={name:"arrow",enabled:!0,phase:"main",fn:Vv,effect:kv,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Nr(v){return v.split("-")[1]}var Hv={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zv(v,c){var p=v.x,M=v.y,O=c.devicePixelRatio||1;return{x:Ir(p*O)/O||0,y:Ir(M*O)/O||0}}function xd(v){var c,p=v.popper,M=v.popperRect,O=v.placement,$=v.variation,ne=v.offsets,fe=v.position,xe=v.gpuAcceleration,ze=v.adaptive,Me=v.roundOffsets,ct=v.isFixed,ft=ne.x,nt=ft===void 0?0:ft,Ut=ne.y,ht=Ut===void 0?0:Ut,bt=typeof Me=="function"?Me({x:nt,y:ht}):{x:nt,y:ht};nt=bt.x,ht=bt.y;var Vt=ne.hasOwnProperty("x"),Yt=ne.hasOwnProperty("y"),jt=Sn,mt=bn,Dt=window;if(ze){var Nt=Lo(p),Kt="clientHeight",un="clientWidth";if(Nt===kn(p)&&(Nt=Cs(p),Qi(Nt).position!=="static"&&fe==="absolute"&&(Kt="scrollHeight",un="scrollWidth")),Nt=Nt,O===bn||(O===Sn||O===Vn)&&$===Pr){mt=Bn;var an=ct&&Nt===Dt&&Dt.visualViewport?Dt.visualViewport.height:Nt[Kt];ht-=an-M.height,ht*=xe?1:-1}if(O===Sn||(O===bn||O===Bn)&&$===Pr){jt=Vn;var en=ct&&Nt===Dt&&Dt.visualViewport?Dt.visualViewport.width:Nt[un];nt-=en-M.width,nt*=xe?1:-1}}var hn=Object.assign({position:fe},ze&&Hv),oi=Me===!0?zv({x:nt,y:ht},kn(p)):{x:nt,y:ht};if(nt=oi.x,ht=oi.y,xe){var yn;return Object.assign({},hn,(yn={},yn[mt]=Yt?"0":"",yn[jt]=Vt?"0":"",yn.transform=(Dt.devicePixelRatio||1)<=1?"translate("+nt+"px, "+ht+"px)":"translate3d("+nt+"px, "+ht+"px, 0)",yn))}return Object.assign({},hn,(c={},c[mt]=Yt?ht+"px":"",c[jt]=Vt?nt+"px":"",c.transform="",c))}function Gv(v){var c=v.state,p=v.options,M=p.gpuAcceleration,O=M===void 0?!0:M,$=p.adaptive,ne=$===void 0?!0:$,fe=p.roundOffsets,xe=fe===void 0?!0:fe,ze={placement:Ti(c.placement),variation:Nr(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:O,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,xd(Object.assign({},ze,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:ne,roundOffsets:xe})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,xd(Object.assign({},ze,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:xe})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})}const Rc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Gv,data:{}};var Fa={passive:!0};function Wv(v){var c=v.state,p=v.instance,M=v.options,O=M.scroll,$=O===void 0?!0:O,ne=M.resize,fe=ne===void 0?!0:ne,xe=kn(c.elements.popper),ze=[].concat(c.scrollParents.reference,c.scrollParents.popper);return $&&ze.forEach(function(Me){Me.addEventListener("scroll",p.update,Fa)}),fe&&xe.addEventListener("resize",p.update,Fa),function(){$&&ze.forEach(function(Me){Me.removeEventListener("scroll",p.update,Fa)}),fe&&xe.removeEventListener("resize",p.update,Fa)}}const Pc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wv,data:{}};var $v={left:"right",right:"left",bottom:"top",top:"bottom"};function Ba(v){return v.replace(/left|right|bottom|top/g,function(c){return $v[c]})}var Xv={start:"end",end:"start"};function Ed(v){return v.replace(/start|end/g,function(c){return Xv[c]})}function Lc(v){var c=kn(v),p=c.pageXOffset,M=c.pageYOffset;return{scrollLeft:p,scrollTop:M}}function Ic(v){return Dr(Cs(v)).left+Lc(v).scrollLeft}function Kv(v,c){var p=kn(v),M=Cs(v),O=p.visualViewport,$=M.clientWidth,ne=M.clientHeight,fe=0,xe=0;if(O){$=O.width,ne=O.height;var ze=hd();(ze||!ze&&c==="fixed")&&(fe=O.offsetLeft,xe=O.offsetTop)}return{width:$,height:ne,x:fe+Ic(v),y:xe}}function Yv(v){var c,p=Cs(v),M=Lc(v),O=(c=v.ownerDocument)==null?void 0:c.body,$=$s(p.scrollWidth,p.clientWidth,O?O.scrollWidth:0,O?O.clientWidth:0),ne=$s(p.scrollHeight,p.clientHeight,O?O.scrollHeight:0,O?O.clientHeight:0),fe=-M.scrollLeft+Ic(v),xe=-M.scrollTop;return Qi(O||p).direction==="rtl"&&(fe+=$s(p.clientWidth,O?O.clientWidth:0)-$),{width:$,height:ne,x:fe,y:xe}}function Dc(v){var c=Qi(v),p=c.overflow,M=c.overflowX,O=c.overflowY;return/auto|scroll|overlay|hidden/.test(p+O+M)}function bd(v){return["html","body","#document"].indexOf(Mi(v))>=0?v.ownerDocument.body:jn(v)&&Dc(v)?v:bd(Ua(v))}function Do(v,c){var p;c===void 0&&(c=[]);var M=bd(v),O=M===((p=v.ownerDocument)==null?void 0:p.body),$=kn(M),ne=O?[$].concat($.visualViewport||[],Dc(M)?M:[]):M,fe=c.concat(ne);return O?fe:fe.concat(Do(Ua(ne)))}function Nc(v){return Object.assign({},v,{left:v.x,top:v.y,right:v.x+v.width,bottom:v.y+v.height})}function jv(v,c){var p=Dr(v,!1,c==="fixed");return p.top=p.top+v.clientTop,p.left=p.left+v.clientLeft,p.bottom=p.top+v.clientHeight,p.right=p.left+v.clientWidth,p.width=v.clientWidth,p.height=v.clientHeight,p.x=p.left,p.y=p.top,p}function Sd(v,c,p){return c===bc?Nc(Kv(v,p)):Ws(c)?jv(c,p):Nc(Yv(Cs(v)))}function qv(v){var c=Do(Ua(v)),p=["absolute","fixed"].indexOf(Qi(v).position)>=0,M=p&&jn(v)?Lo(v):v;return Ws(M)?c.filter(function(O){return Ws(O)&&dd(O,M)&&Mi(O)!=="body"}):[]}function Zv(v,c,p,M){var O=c==="clippingParents"?qv(v):[].concat(c),$=[].concat(O,[p]),ne=$[0],fe=$.reduce(function(xe,ze){var Me=Sd(v,ze,M);return xe.top=$s(Me.top,xe.top),xe.right=Oa(Me.right,xe.right),xe.bottom=Oa(Me.bottom,xe.bottom),xe.left=$s(Me.left,xe.left),xe},Sd(v,ne,M));return fe.width=fe.right-fe.left,fe.height=fe.bottom-fe.top,fe.x=fe.left,fe.y=fe.top,fe}function yd(v){var c=v.reference,p=v.element,M=v.placement,O=M?Ti(M):null,$=M?Nr(M):null,ne=c.x+c.width/2-p.width/2,fe=c.y+c.height/2-p.height/2,xe;switch(O){case bn:xe={x:ne,y:c.y-p.height};break;case Bn:xe={x:ne,y:c.y+c.height};break;case Vn:xe={x:c.x+c.width,y:fe};break;case Sn:xe={x:c.x-p.width,y:fe};break;default:xe={x:c.x,y:c.y}}var ze=O?Cc(O):null;if(ze!=null){var Me=ze==="y"?"height":"width";switch($){case Gs:xe[ze]=xe[ze]-(c[Me]/2-p[Me]/2);break;case Pr:xe[ze]=xe[ze]+(c[Me]/2-p[Me]/2);break}}return xe}function Or(v,c){c===void 0&&(c={});var p=c,M=p.placement,O=M===void 0?v.placement:M,$=p.strategy,ne=$===void 0?v.strategy:$,fe=p.boundary,xe=fe===void 0?ed:fe,ze=p.rootBoundary,Me=ze===void 0?bc:ze,ct=p.elementContext,ft=ct===void 0?Lr:ct,nt=p.altBoundary,Ut=nt===void 0?!1:nt,ht=p.padding,bt=ht===void 0?0:ht,Vt=gd(typeof bt!="number"?bt:_d(bt,Rr)),Yt=ft===Lr?td:Lr,jt=v.rects.popper,mt=v.elements[Ut?Yt:ft],Dt=Zv(Ws(mt)?mt:mt.contextElement||Cs(v.elements.popper),xe,Me,ne),Nt=Dr(v.elements.reference),Kt=yd({reference:Nt,element:jt,placement:O}),un=Nc(Object.assign({},jt,Kt)),an=ft===Lr?un:Nt,en={top:Dt.top-an.top+Vt.top,bottom:an.bottom-Dt.bottom+Vt.bottom,left:Dt.left-an.left+Vt.left,right:an.right-Dt.right+Vt.right},hn=v.modifiersData.offset;if(ft===Lr&&hn){var oi=hn[O];Object.keys(en).forEach(function(yn){var Qs=[Vn,Bn].indexOf(yn)>=0?1:-1,er=[bn,Bn].indexOf(yn)>=0?"y":"x";en[yn]+=oi[er]*Qs})}return en}function Jv(v,c){c===void 0&&(c={});var p=c,M=p.placement,O=p.boundary,$=p.rootBoundary,ne=p.padding,fe=p.flipVariations,xe=p.allowedAutoPlacements,ze=xe===void 0?yc:xe,Me=Nr(M),ct=Me?fe?Sc:Sc.filter(function(Ut){return Nr(Ut)===Me}):Rr,ft=ct.filter(function(Ut){return ze.indexOf(Ut)>=0});ft.length===0&&(ft=ct);var nt=ft.reduce(function(Ut,ht){return Ut[ht]=Or(v,{placement:ht,boundary:O,rootBoundary:$,padding:ne})[Ti(ht)],Ut},{});return Object.keys(nt).sort(function(Ut,ht){return nt[Ut]-nt[ht]})}function Qv(v){if(Ti(v)===Na)return[];var c=Ba(v);return[Ed(v),c,Ed(c)]}function e0(v){var c=v.state,p=v.options,M=v.name;if(!c.modifiersData[M]._skip){for(var O=p.mainAxis,$=O===void 0?!0:O,ne=p.altAxis,fe=ne===void 0?!0:ne,xe=p.fallbackPlacements,ze=p.padding,Me=p.boundary,ct=p.rootBoundary,ft=p.altBoundary,nt=p.flipVariations,Ut=nt===void 0?!0:nt,ht=p.allowedAutoPlacements,bt=c.options.placement,Vt=Ti(bt),Yt=Vt===bt,jt=xe||(Yt||!Ut?[Ba(bt)]:Qv(bt)),mt=[bt].concat(jt).reduce(function(Br,Ps){return Br.concat(Ti(Ps)===Na?Jv(c,{placement:Ps,boundary:Me,rootBoundary:ct,padding:ze,flipVariations:Ut,allowedAutoPlacements:ht}):Ps)},[]),Dt=c.rects.reference,Nt=c.rects.popper,Kt=new Map,un=!0,an=mt[0],en=0;en<mt.length;en++){var hn=mt[en],oi=Ti(hn),yn=Nr(hn)===Gs,Qs=[bn,Bn].indexOf(oi)>=0,er=Qs?"width":"height",Hn=Or(c,{placement:hn,boundary:Me,rootBoundary:ct,altBoundary:ft,padding:ze}),ai=Qs?yn?Vn:Sn:yn?Bn:bn;Dt[er]>Nt[er]&&(ai=Ba(ai));var Ka=Ba(ai),tr=[];if($&&tr.push(Hn[oi]<=0),fe&&tr.push(Hn[ai]<=0,Hn[Ka]<=0),tr.every(function(Br){return Br})){an=hn,un=!1;break}Kt.set(hn,tr)}if(un)for(var Ya=Ut?3:1,jc=function(Ps){var Bo=mt.find(function(qa){var nr=Kt.get(qa);if(nr)return nr.slice(0,Ps).every(function(qc){return qc})});if(Bo)return an=Bo,"break"},Fo=Ya;Fo>0;Fo--){var ja=jc(Fo);if(ja==="break")break}c.placement!==an&&(c.modifiersData[M]._skip=!0,c.placement=an,c.reset=!0)}}const Md={name:"flip",enabled:!0,phase:"main",fn:e0,requiresIfExists:["offset"],data:{_skip:!1}};function Td(v,c,p){return p===void 0&&(p={x:0,y:0}),{top:v.top-c.height-p.y,right:v.right-c.width+p.x,bottom:v.bottom-c.height+p.y,left:v.left-c.width-p.x}}function Ad(v){return[bn,Vn,Bn,Sn].some(function(c){return v[c]>=0})}function t0(v){var c=v.state,p=v.name,M=c.rects.reference,O=c.rects.popper,$=c.modifiersData.preventOverflow,ne=Or(c,{elementContext:"reference"}),fe=Or(c,{altBoundary:!0}),xe=Td(ne,M),ze=Td(fe,O,$),Me=Ad(xe),ct=Ad(ze);c.modifiersData[p]={referenceClippingOffsets:xe,popperEscapeOffsets:ze,isReferenceHidden:Me,hasPopperEscaped:ct},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Me,"data-popper-escaped":ct})}const wd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:t0};function n0(v,c,p){var M=Ti(v),O=[Sn,bn].indexOf(M)>=0?-1:1,$=typeof p=="function"?p(Object.assign({},c,{placement:v})):p,ne=$[0],fe=$[1];return ne=ne||0,fe=(fe||0)*O,[Sn,Vn].indexOf(M)>=0?{x:fe,y:ne}:{x:ne,y:fe}}function i0(v){var c=v.state,p=v.options,M=v.name,O=p.offset,$=O===void 0?[0,0]:O,ne=yc.reduce(function(Me,ct){return Me[ct]=n0(ct,c.rects,$),Me},{}),fe=ne[c.placement],xe=fe.x,ze=fe.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=xe,c.modifiersData.popperOffsets.y+=ze),c.modifiersData[M]=ne}const Cd={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:i0};function s0(v){var c=v.state,p=v.name;c.modifiersData[p]=yd({reference:c.rects.reference,element:c.rects.popper,placement:c.placement})}const Oc={name:"popperOffsets",enabled:!0,phase:"read",fn:s0,data:{}};function r0(v){return v==="x"?"y":"x"}function o0(v){var c=v.state,p=v.options,M=v.name,O=p.mainAxis,$=O===void 0?!0:O,ne=p.altAxis,fe=ne===void 0?!1:ne,xe=p.boundary,ze=p.rootBoundary,Me=p.altBoundary,ct=p.padding,ft=p.tether,nt=ft===void 0?!0:ft,Ut=p.tetherOffset,ht=Ut===void 0?0:Ut,bt=Or(c,{boundary:xe,rootBoundary:ze,padding:ct,altBoundary:Me}),Vt=Ti(c.placement),Yt=Nr(c.placement),jt=!Yt,mt=Cc(Vt),Dt=r0(mt),Nt=c.modifiersData.popperOffsets,Kt=c.rects.reference,un=c.rects.popper,an=typeof ht=="function"?ht(Object.assign({},c.rects,{placement:c.placement})):ht,en=typeof an=="number"?{mainAxis:an,altAxis:an}:Object.assign({mainAxis:0,altAxis:0},an),hn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,oi={x:0,y:0};if(Nt){if($){var yn,Qs=mt==="y"?bn:Sn,er=mt==="y"?Bn:Vn,Hn=mt==="y"?"height":"width",ai=Nt[mt],Ka=ai+bt[Qs],tr=ai-bt[er],Ya=nt?-un[Hn]/2:0,jc=Yt===Gs?Kt[Hn]:un[Hn],Fo=Yt===Gs?-un[Hn]:-Kt[Hn],ja=c.elements.arrow,Br=nt&&ja?wc(ja):{width:0,height:0},Ps=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:md(),Bo=Ps[Qs],qa=Ps[er],nr=Io(0,Kt[Hn],Br[Hn]),qc=jt?Kt[Hn]/2-Ya-nr-Bo-en.mainAxis:jc-nr-Bo-en.mainAxis,ZE=jt?-Kt[Hn]/2+Ya+nr+qa+en.mainAxis:Fo+nr+qa+en.mainAxis,Zc=c.elements.arrow&&Lo(c.elements.arrow),JE=Zc?mt==="y"?Zc.clientTop||0:Zc.clientLeft||0:0,gp=(yn=hn?.[mt])!=null?yn:0,QE=ai+qc-gp-JE,eb=ai+ZE-gp,_p=Io(nt?Oa(Ka,QE):Ka,ai,nt?$s(tr,eb):tr);Nt[mt]=_p,oi[mt]=_p-ai}if(fe){var vp,tb=mt==="x"?bn:Sn,nb=mt==="x"?Bn:Vn,ir=Nt[Dt],Za=Dt==="y"?"height":"width",xp=ir+bt[tb],Ep=ir-bt[nb],Jc=[bn,Sn].indexOf(Vt)!==-1,bp=(vp=hn?.[Dt])!=null?vp:0,Sp=Jc?xp:ir-Kt[Za]-un[Za]-bp+en.altAxis,yp=Jc?ir+Kt[Za]+un[Za]-bp-en.altAxis:Ep,Mp=nt&&Jc?Fv(Sp,ir,yp):Io(nt?Sp:xp,ir,nt?yp:Ep);Nt[Dt]=Mp,oi[Dt]=Mp-ir}c.modifiersData[M]=oi}}const Rd={name:"preventOverflow",enabled:!0,phase:"main",fn:o0,requiresIfExists:["offset"]};function a0(v){return{scrollLeft:v.scrollLeft,scrollTop:v.scrollTop}}function l0(v){return v===kn(v)||!jn(v)?Lc(v):a0(v)}function c0(v){var c=v.getBoundingClientRect(),p=Ir(c.width)/v.offsetWidth||1,M=Ir(c.height)/v.offsetHeight||1;return p!==1||M!==1}function u0(v,c,p){p===void 0&&(p=!1);var M=jn(c),O=jn(c)&&c0(c),$=Cs(c),ne=Dr(v,O,p),fe={scrollLeft:0,scrollTop:0},xe={x:0,y:0};return(M||!M&&!p)&&((Mi(c)!=="body"||Dc($))&&(fe=l0(c)),jn(c)?(xe=Dr(c,!0),xe.x+=c.clientLeft,xe.y+=c.clientTop):$&&(xe.x=Ic($))),{x:ne.left+fe.scrollLeft-xe.x,y:ne.top+fe.scrollTop-xe.y,width:ne.width,height:ne.height}}function f0(v){var c=new Map,p=new Set,M=[];v.forEach(function($){c.set($.name,$)});function O($){p.add($.name);var ne=[].concat($.requires||[],$.requiresIfExists||[]);ne.forEach(function(fe){if(!p.has(fe)){var xe=c.get(fe);xe&&O(xe)}}),M.push($)}return v.forEach(function($){p.has($.name)||O($)}),M}function h0(v){var c=f0(v);return fd.reduce(function(p,M){return p.concat(c.filter(function(O){return O.phase===M}))},[])}function d0(v){var c;return function(){return c||(c=new Promise(function(p){Promise.resolve().then(function(){c=void 0,p(v())})})),c}}function p0(v){var c=v.reduce(function(p,M){var O=p[M.name];return p[M.name]=O?Object.assign({},O,M,{options:Object.assign({},O.options,M.options),data:Object.assign({},O.data,M.data)}):M,p},{});return Object.keys(c).map(function(p){return c[p]})}var Pd={placement:"bottom",modifiers:[],strategy:"absolute"};function Ld(){for(var v=arguments.length,c=new Array(v),p=0;p<v;p++)c[p]=arguments[p];return!c.some(function(M){return!(M&&typeof M.getBoundingClientRect=="function")})}function Va(v){v===void 0&&(v={});var c=v,p=c.defaultModifiers,M=p===void 0?[]:p,O=c.defaultOptions,$=O===void 0?Pd:O;return function(fe,xe,ze){ze===void 0&&(ze=$);var Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pd,$),modifiersData:{},elements:{reference:fe,popper:xe},attributes:{},styles:{}},ct=[],ft=!1,nt={state:Me,setOptions:function(Vt){var Yt=typeof Vt=="function"?Vt(Me.options):Vt;ht(),Me.options=Object.assign({},$,Me.options,Yt),Me.scrollParents={reference:Ws(fe)?Do(fe):fe.contextElement?Do(fe.contextElement):[],popper:Do(xe)};var jt=h0(p0([].concat(M,Me.options.modifiers)));return Me.orderedModifiers=jt.filter(function(mt){return mt.enabled}),Ut(),nt.update()},forceUpdate:function(){if(!ft){var Vt=Me.elements,Yt=Vt.reference,jt=Vt.popper;if(Ld(Yt,jt)){Me.rects={reference:u0(Yt,Lo(jt),Me.options.strategy==="fixed"),popper:wc(jt)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(en){return Me.modifiersData[en.name]=Object.assign({},en.data)});for(var mt=0;mt<Me.orderedModifiers.length;mt++){if(Me.reset===!0){Me.reset=!1,mt=-1;continue}var Dt=Me.orderedModifiers[mt],Nt=Dt.fn,Kt=Dt.options,un=Kt===void 0?{}:Kt,an=Dt.name;typeof Nt=="function"&&(Me=Nt({state:Me,options:un,name:an,instance:nt})||Me)}}}},update:d0(function(){return new Promise(function(bt){nt.forceUpdate(),bt(Me)})}),destroy:function(){ht(),ft=!0}};if(!Ld(fe,xe))return nt;nt.setOptions(ze).then(function(bt){!ft&&ze.onFirstUpdate&&ze.onFirstUpdate(bt)});function Ut(){Me.orderedModifiers.forEach(function(bt){var Vt=bt.name,Yt=bt.options,jt=Yt===void 0?{}:Yt,mt=bt.effect;if(typeof mt=="function"){var Dt=mt({state:Me,name:Vt,instance:nt,options:jt}),Nt=function(){};ct.push(Dt||Nt)}})}function ht(){ct.forEach(function(bt){return bt()}),ct=[]}return nt}}var m0=Va(),g0=[Pc,Oc,Rc,Tc],_0=Va({defaultModifiers:g0}),v0=[Pc,Oc,Rc,Tc,Cd,Md,Rd,vd,wd],Uc=Va({defaultModifiers:v0});const Id=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ad,afterRead:sd,afterWrite:ud,applyStyles:Tc,arrow:vd,auto:Na,basePlacements:Rr,beforeMain:rd,beforeRead:nd,beforeWrite:ld,bottom:Bn,clippingParents:ed,computeStyles:Rc,createPopper:Uc,createPopperBase:m0,createPopperLite:_0,detectOverflow:Or,end:Pr,eventListeners:Pc,flip:Md,hide:wd,left:Sn,main:od,modifierPhases:fd,offset:Cd,placements:yc,popper:Lr,popperGenerator:Va,popperOffsets:Oc,preventOverflow:Rd,read:id,reference:td,right:Vn,start:Gs,top:bn,variationPlacements:Sc,viewport:bc,write:cd},Symbol.toStringTag,{value:"Module"})),Dd="dropdown",Xs=".bs.dropdown",Fc=".data-api",x0="Escape",Nd="Tab",E0="ArrowUp",Od="ArrowDown",b0=2,S0=`hide${Xs}`,y0=`hidden${Xs}`,M0=`show${Xs}`,T0=`shown${Xs}`,Ud=`click${Xs}${Fc}`,Fd=`keydown${Xs}${Fc}`,A0=`keyup${Xs}${Fc}`,Ur="show",w0="dropup",C0="dropend",R0="dropstart",P0="dropup-center",L0="dropdown-center",Ks='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',I0=`${Ks}.${Ur}`,ka=".dropdown-menu",D0=".navbar",N0=".navbar-nav",O0=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",U0=D()?"top-end":"top-start",F0=D()?"top-start":"top-end",B0=D()?"bottom-end":"bottom-start",V0=D()?"bottom-start":"bottom-end",k0=D()?"left-start":"right-start",H0=D()?"right-start":"left-start",z0="top",G0="bottom",W0={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},$0={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ri extends re{constructor(c,p){super(c,p),this._popper=null,this._parent=this._element.parentNode,this._menu=G.next(this._element,ka)[0]||G.prev(this._element,ka)[0]||G.findOne(ka,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return W0}static get DefaultType(){return $0}static get NAME(){return Dd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(b(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!H.trigger(this._element,M0,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(N0))for(const M of[].concat(...document.body.children))H.on(M,"mouseover",g);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ur),this._element.classList.add(Ur),H.trigger(this._element,T0,c)}}hide(){if(b(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!H.trigger(this._element,S0,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const M of[].concat(...document.body.children))H.off(M,"mouseover",g);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ur),this._element.classList.remove(Ur),this._element.setAttribute("aria-expanded","false"),L.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,y0,c)}}_getConfig(c){if(c=super._getConfig(c),typeof c.reference=="object"&&!d(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Dd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(typeof Id>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let c=this._element;this._config.reference==="parent"?c=this._parent:d(this._config.reference)?c=m(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const p=this._getPopperConfig();this._popper=Uc(c,this._menu,p)}_isShown(){return this._menu.classList.contains(Ur)}_getPlacement(){const c=this._parent;if(c.classList.contains(C0))return k0;if(c.classList.contains(R0))return H0;if(c.classList.contains(P0))return z0;if(c.classList.contains(L0))return G0;const p=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains(w0)?p?F0:U0:p?V0:B0}_detectNavbar(){return this._element.closest(D0)!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(L.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...S(this._config.popperConfig,[void 0,c])}}_selectMenuItem({key:c,target:p}){const M=G.find(O0,this._menu).filter(O=>x(O));M.length&&te(M,p,c===Od,!M.includes(p)).focus()}static jQueryInterface(c){return this.each(function(){const p=ri.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof p[c]>"u")throw new TypeError(`No method named "${c}"`);p[c]()}})}static clearMenus(c){if(c.button===b0||c.type==="keyup"&&c.key!==Nd)return;const p=G.find(I0);for(const M of p){const O=ri.getInstance(M);if(!O||O._config.autoClose===!1)continue;const $=c.composedPath(),ne=$.includes(O._menu);if($.includes(O._element)||O._config.autoClose==="inside"&&!ne||O._config.autoClose==="outside"&&ne||O._menu.contains(c.target)&&(c.type==="keyup"&&c.key===Nd||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const fe={relatedTarget:O._element};c.type==="click"&&(fe.clickEvent=c),O._completeHide(fe)}}static dataApiKeydownHandler(c){const p=/input|textarea/i.test(c.target.tagName),M=c.key===x0,O=[E0,Od].includes(c.key);if(!O&&!M||p&&!M)return;c.preventDefault();const $=this.matches(Ks)?this:G.prev(this,Ks)[0]||G.next(this,Ks)[0]||G.findOne(Ks,c.delegateTarget.parentNode),ne=ri.getOrCreateInstance($);if(O){c.stopPropagation(),ne.show(),ne._selectMenuItem(c);return}ne._isShown()&&(c.stopPropagation(),ne.hide(),$.focus())}}H.on(document,Fd,Ks,ri.dataApiKeydownHandler),H.on(document,Fd,ka,ri.dataApiKeydownHandler),H.on(document,Ud,ri.clearMenus),H.on(document,A0,ri.clearMenus),H.on(document,Ud,Ks,function(v){v.preventDefault(),ri.getOrCreateInstance(this).toggle()}),U(ri);const Bd="backdrop",X0="fade",Vd="show",kd=`mousedown.bs.${Bd}`,K0={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Y0={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Hd extends B{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return K0}static get DefaultType(){return Y0}static get NAME(){return Bd}show(c){if(!this._config.isVisible){S(c);return}this._append();const p=this._getElement();this._config.isAnimated&&y(p),p.classList.add(Vd),this._emulateAnimation(()=>{S(c)})}hide(c){if(!this._config.isVisible){S(c);return}this._getElement().classList.remove(Vd),this._emulateAnimation(()=>{this.dispose(),S(c)})}dispose(){this._isAppended&&(H.off(this._element,kd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add(X0),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=m(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),H.on(c,kd,()=>{S(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){R(c,this._getElement(),this._config.isAnimated)}}const j0="focustrap",Ha=".bs.focustrap",q0=`focusin${Ha}`,Z0=`keydown.tab${Ha}`,J0="Tab",Q0="forward",zd="backward",ex={autofocus:!0,trapElement:null},tx={autofocus:"boolean",trapElement:"element"};class Gd extends B{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ex}static get DefaultType(){return tx}static get NAME(){return j0}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),H.off(document,Ha),H.on(document,q0,c=>this._handleFocusin(c)),H.on(document,Z0,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,Ha))}_handleFocusin(c){const{trapElement:p}=this._config;if(c.target===document||c.target===p||p.contains(c.target))return;const M=G.focusableChildren(p);M.length===0?p.focus():this._lastTabNavDirection===zd?M[M.length-1].focus():M[0].focus()}_handleKeydown(c){c.key===J0&&(this._lastTabNavDirection=c.shiftKey?zd:Q0)}}const Wd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$d=".sticky-top",za="padding-right",Xd="margin-right";class Bc{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,za,p=>p+c),this._setElementAttributes(Wd,za,p=>p+c),this._setElementAttributes($d,Xd,p=>p-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,za),this._resetElementAttributes(Wd,za),this._resetElementAttributes($d,Xd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,p,M){const O=this.getWidth(),$=ne=>{if(ne!==this._element&&window.innerWidth>ne.clientWidth+O)return;this._saveInitialAttribute(ne,p);const fe=window.getComputedStyle(ne).getPropertyValue(p);ne.style.setProperty(p,`${M(Number.parseFloat(fe))}px`)};this._applyManipulationCallback(c,$)}_saveInitialAttribute(c,p){const M=c.style.getPropertyValue(p);M&&L.setDataAttribute(c,p,M)}_resetElementAttributes(c,p){const M=O=>{const $=L.getDataAttribute(O,p);if($===null){O.style.removeProperty(p);return}L.removeDataAttribute(O,p),O.style.setProperty(p,$)};this._applyManipulationCallback(c,M)}_applyManipulationCallback(c,p){if(d(c)){p(c);return}for(const M of G.find(c,this._element))p(M)}}const nx="modal",qn=".bs.modal",ix=".data-api",sx="Escape",rx=`hide${qn}`,ox=`hidePrevented${qn}`,Kd=`hidden${qn}`,Yd=`show${qn}`,ax=`shown${qn}`,lx=`resize${qn}`,cx=`click.dismiss${qn}`,ux=`mousedown.dismiss${qn}`,fx=`keydown.dismiss${qn}`,hx=`click${qn}${ix}`,jd="modal-open",dx="fade",qd="show",Vc="modal-static",px=".modal.show",mx=".modal-dialog",gx=".modal-body",_x='[data-bs-toggle="modal"]',vx={backdrop:!0,focus:!0,keyboard:!0},xx={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ys extends re{constructor(c,p){super(c,p),this._dialog=G.findOne(mx,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Bc,this._addEventListeners()}static get Default(){return vx}static get DefaultType(){return xx}static get NAME(){return nx}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||H.trigger(this._element,Yd,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(jd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){!this._isShown||this._isTransitioning||H.trigger(this._element,rx).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(qd),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){H.off(window,qn),H.off(this._dialog,qn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Hd({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Gd({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const p=G.findOne(gx,this._dialog);p&&(p.scrollTop=0),y(this._element),this._element.classList.add(qd);const M=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,ax,{relatedTarget:c})};this._queueCallback(M,this._dialog,this._isAnimated())}_addEventListeners(){H.on(this._element,fx,c=>{if(c.key===sx){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),H.on(window,lx,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),H.on(this._element,ux,c=>{H.one(this._element,cx,p=>{if(!(this._element!==c.target||this._element!==p.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(jd),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Kd)})}_isAnimated(){return this._element.classList.contains(dx)}_triggerBackdropTransition(){if(H.trigger(this._element,ox).defaultPrevented)return;const p=this._element.scrollHeight>document.documentElement.clientHeight,M=this._element.style.overflowY;M==="hidden"||this._element.classList.contains(Vc)||(p||(this._element.style.overflowY="hidden"),this._element.classList.add(Vc),this._queueCallback(()=>{this._element.classList.remove(Vc),this._queueCallback(()=>{this._element.style.overflowY=M},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,p=this._scrollBar.getWidth(),M=p>0;if(M&&!c){const O=D()?"paddingLeft":"paddingRight";this._element.style[O]=`${p}px`}if(!M&&c){const O=D()?"paddingRight":"paddingLeft";this._element.style[O]=`${p}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,p){return this.each(function(){const M=Ys.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof M[c]>"u")throw new TypeError(`No method named "${c}"`);M[c](p)}})}}H.on(document,hx,_x,function(v){const c=G.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&v.preventDefault(),H.one(c,Yd,O=>{O.defaultPrevented||H.one(c,Kd,()=>{x(this)&&this.focus()})});const p=G.findOne(px);p&&Ys.getInstance(p).hide(),Ys.getOrCreateInstance(c).toggle(this)}),P(Ys),U(Ys);const Ex="offcanvas",es=".bs.offcanvas",Zd=".data-api",bx=`load${es}${Zd}`,Sx="Escape",Jd="show",Qd="showing",ep="hiding",yx="offcanvas-backdrop",tp=".offcanvas.show",Mx=`show${es}`,Tx=`shown${es}`,Ax=`hide${es}`,np=`hidePrevented${es}`,ip=`hidden${es}`,wx=`resize${es}`,Cx=`click${es}${Zd}`,Rx=`keydown.dismiss${es}`,Px='[data-bs-toggle="offcanvas"]',Lx={backdrop:!0,keyboard:!0,scroll:!1},Ix={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ts extends re{constructor(c,p){super(c,p),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Lx}static get DefaultType(){return Ix}static get NAME(){return Ex}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){if(this._isShown||H.trigger(this._element,Mx,{relatedTarget:c}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Bc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Qd);const M=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Jd),this._element.classList.remove(Qd),H.trigger(this._element,Tx,{relatedTarget:c})};this._queueCallback(M,this._element,!0)}hide(){if(!this._isShown||H.trigger(this._element,Ax).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ep),this._backdrop.hide();const p=()=>{this._element.classList.remove(Jd,ep),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Bc().reset(),H.trigger(this._element,ip)};this._queueCallback(p,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=()=>{if(this._config.backdrop==="static"){H.trigger(this._element,np);return}this.hide()},p=!!this._config.backdrop;return new Hd({className:yx,isVisible:p,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:p?c:null})}_initializeFocusTrap(){return new Gd({trapElement:this._element})}_addEventListeners(){H.on(this._element,Rx,c=>{if(c.key===Sx){if(this._config.keyboard){this.hide();return}H.trigger(this._element,np)}})}static jQueryInterface(c){return this.each(function(){const p=ts.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}H.on(document,Cx,Px,function(v){const c=G.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&v.preventDefault(),b(this))return;H.one(c,ip,()=>{x(this)&&this.focus()});const p=G.findOne(tp);p&&p!==c&&ts.getInstance(p).hide(),ts.getOrCreateInstance(c).toggle(this)}),H.on(window,bx,()=>{for(const v of G.find(tp))ts.getOrCreateInstance(v).show()}),H.on(window,wx,()=>{for(const v of G.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(v).position!=="fixed"&&ts.getOrCreateInstance(v).hide()}),P(ts),U(ts);const sp={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Dx=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Nx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ox=(v,c)=>{const p=v.nodeName.toLowerCase();return c.includes(p)?Dx.has(p)?!!Nx.test(v.nodeValue):!0:c.filter(M=>M instanceof RegExp).some(M=>M.test(p))};function Ux(v,c,p){if(!v.length)return v;if(p&&typeof p=="function")return p(v);const O=new window.DOMParser().parseFromString(v,"text/html"),$=[].concat(...O.body.querySelectorAll("*"));for(const ne of $){const fe=ne.nodeName.toLowerCase();if(!Object.keys(c).includes(fe)){ne.remove();continue}const xe=[].concat(...ne.attributes),ze=[].concat(c["*"]||[],c[fe]||[]);for(const Me of xe)Ox(Me,ze)||ne.removeAttribute(Me.nodeName)}return O.body.innerHTML}const Fx="TemplateFactory",Bx={allowList:sp,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Vx={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},kx={entry:"(string|element|function|null)",selector:"(string|element)"};class Hx extends B{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Bx}static get DefaultType(){return Vx}static get NAME(){return Fx}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[O,$]of Object.entries(this._config.content))this._setContent(c,$,O);const p=c.children[0],M=this._resolvePossibleFunction(this._config.extraClass);return M&&p.classList.add(...M.split(" ")),p}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[p,M]of Object.entries(c))super._typeCheckConfig({selector:p,entry:M},kx)}_setContent(c,p,M){const O=G.findOne(M,c);if(O){if(p=this._resolvePossibleFunction(p),!p){O.remove();return}if(d(p)){this._putElementInTemplate(m(p),O);return}if(this._config.html){O.innerHTML=this._maybeSanitize(p);return}O.textContent=p}}_maybeSanitize(c){return this._config.sanitize?Ux(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return S(c,[void 0,this])}_putElementInTemplate(c,p){if(this._config.html){p.innerHTML="",p.append(c);return}p.textContent=c.textContent}}const zx="tooltip",Gx=new Set(["sanitize","allowList","sanitizeFn"]),kc="fade",Wx="modal",Ga="show",$x=".tooltip-inner",rp=`.${Wx}`,op="hide.bs.modal",No="hover",Hc="focus",zc="click",Xx="manual",Kx="hide",Yx="hidden",jx="show",qx="shown",Zx="inserted",Jx="click",Qx="focusin",eE="focusout",tE="mouseenter",nE="mouseleave",iE={AUTO:"auto",TOP:"top",RIGHT:D()?"left":"right",BOTTOM:"bottom",LEFT:D()?"right":"left"},sE={allowList:sp,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},rE={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class js extends re{constructor(c,p){if(typeof Id>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(c,p),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return sE}static get DefaultType(){return rE}static get NAME(){return zx}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(rp),op,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const c=H.trigger(this._element,this.constructor.eventName(jx)),M=(_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!M)return;this._disposePopper();const O=this._getTipElement();this._element.setAttribute("aria-describedby",O.getAttribute("id"));const{container:$}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||($.append(O),H.trigger(this._element,this.constructor.eventName(Zx))),this._popper=this._createPopper(O),O.classList.add(Ga),"ontouchstart"in document.documentElement)for(const fe of[].concat(...document.body.children))H.on(fe,"mouseover",g);const ne=()=>{H.trigger(this._element,this.constructor.eventName(qx)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(ne,this.tip,this._isAnimated())}hide(){if(!this._isShown()||H.trigger(this._element,this.constructor.eventName(Kx)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ga),"ontouchstart"in document.documentElement)for(const O of[].concat(...document.body.children))H.off(O,"mouseover",g);this._activeTrigger[zc]=!1,this._activeTrigger[Hc]=!1,this._activeTrigger[No]=!1,this._isHovered=null;const M=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.eventName(Yx)))};this._queueCallback(M,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const p=this._getTemplateFactory(c).toHtml();if(!p)return null;p.classList.remove(kc,Ga),p.classList.add(`bs-${this.constructor.NAME}-auto`);const M=u(this.constructor.NAME).toString();return p.setAttribute("id",M),this._isAnimated()&&p.classList.add(kc),p}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Hx({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[$x]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(kc)}_isShown(){return this.tip&&this.tip.classList.contains(Ga)}_createPopper(c){const p=S(this._config.placement,[this,c,this._element]),M=iE[p.toUpperCase()];return Uc(this._element,c,this._getPopperConfig(M))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_resolvePossibleFunction(c){return S(c,[this._element,this._element])}_getPopperConfig(c){const p={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:M=>{this._getTipElement().setAttribute("data-popper-placement",M.state.placement)}}]};return{...p,...S(this._config.popperConfig,[void 0,p])}}_setListeners(){const c=this._config.trigger.split(" ");for(const p of c)if(p==="click")H.on(this._element,this.constructor.eventName(Jx),this._config.selector,M=>{const O=this._initializeOnDelegatedTarget(M);O._activeTrigger[zc]=!(O._isShown()&&O._activeTrigger[zc]),O.toggle()});else if(p!==Xx){const M=p===No?this.constructor.eventName(tE):this.constructor.eventName(Qx),O=p===No?this.constructor.eventName(nE):this.constructor.eventName(eE);H.on(this._element,M,this._config.selector,$=>{const ne=this._initializeOnDelegatedTarget($);ne._activeTrigger[$.type==="focusin"?Hc:No]=!0,ne._enter()}),H.on(this._element,O,this._config.selector,$=>{const ne=this._initializeOnDelegatedTarget($);ne._activeTrigger[$.type==="focusout"?Hc:No]=ne._element.contains($.relatedTarget),ne._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(rp),op,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,p){clearTimeout(this._timeout),this._timeout=setTimeout(c,p)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const p=L.getDataAttributes(this._element);for(const M of Object.keys(p))Gx.has(M)&&delete p[M];return c={...p,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:m(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[p,M]of Object.entries(this._config))this.constructor.Default[p]!==M&&(c[p]=M);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const p=js.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof p[c]>"u")throw new TypeError(`No method named "${c}"`);p[c]()}})}}U(js);const oE="popover",aE=".popover-header",lE=".popover-body",cE={...js.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},uE={...js.DefaultType,content:"(null|string|element|function)"};class Wa extends js{static get Default(){return cE}static get DefaultType(){return uE}static get NAME(){return oE}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[aE]:this._getTitle(),[lE]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const p=Wa.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof p[c]>"u")throw new TypeError(`No method named "${c}"`);p[c]()}})}}U(Wa);const fE="scrollspy",Gc=".bs.scrollspy",hE=".data-api",dE=`activate${Gc}`,ap=`click${Gc}`,pE=`load${Gc}${hE}`,mE="dropdown-item",Fr="active",gE='[data-bs-spy="scroll"]',Wc="[href]",_E=".nav, .list-group",lp=".nav-link",vE=`${lp}, .nav-item > ${lp}, .list-group-item`,xE=".dropdown",EE=".dropdown-toggle",bE={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},SE={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Oo extends re{constructor(c,p){super(c,p),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return bE}static get DefaultType(){return SE}static get NAME(){return fE}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=m(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(p=>Number.parseFloat(p))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(H.off(this._config.target,ap),H.on(this._config.target,ap,Wc,c=>{const p=this._observableSections.get(c.target.hash);if(p){c.preventDefault();const M=this._rootElement||window,O=p.offsetTop-this._element.offsetTop;if(M.scrollTo){M.scrollTo({top:O,behavior:"smooth"});return}M.scrollTop=O}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(p=>this._observerCallback(p),c)}_observerCallback(c){const p=ne=>this._targetLinks.get(`#${ne.target.id}`),M=ne=>{this._previousScrollData.visibleEntryTop=ne.target.offsetTop,this._process(p(ne))},O=(this._rootElement||document.documentElement).scrollTop,$=O>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=O;for(const ne of c){if(!ne.isIntersecting){this._activeTarget=null,this._clearActiveClass(p(ne));continue}const fe=ne.target.offsetTop>=this._previousScrollData.visibleEntryTop;if($&&fe){if(M(ne),!O)return;continue}!$&&!fe&&M(ne)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=G.find(Wc,this._config.target);for(const p of c){if(!p.hash||b(p))continue;const M=G.findOne(decodeURI(p.hash),this._element);x(M)&&(this._targetLinks.set(decodeURI(p.hash),p),this._observableSections.set(p.hash,M))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(Fr),this._activateParents(c),H.trigger(this._element,dE,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains(mE)){G.findOne(EE,c.closest(xE)).classList.add(Fr);return}for(const p of G.parents(c,_E))for(const M of G.prev(p,vE))M.classList.add(Fr)}_clearActiveClass(c){c.classList.remove(Fr);const p=G.find(`${Wc}.${Fr}`,c);for(const M of p)M.classList.remove(Fr)}static jQueryInterface(c){return this.each(function(){const p=Oo.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}H.on(window,pE,()=>{for(const v of G.find(gE))Oo.getOrCreateInstance(v)}),U(Oo);const yE="tab",qs=".bs.tab",ME=`hide${qs}`,TE=`hidden${qs}`,AE=`show${qs}`,wE=`shown${qs}`,CE=`click${qs}`,RE=`keydown${qs}`,PE=`load${qs}`,LE="ArrowLeft",cp="ArrowRight",IE="ArrowUp",up="ArrowDown",$c="Home",fp="End",Zs="active",hp="fade",Xc="show",DE="dropdown",dp=".dropdown-toggle",NE=".dropdown-menu",Kc=`:not(${dp})`,OE='.list-group, .nav, [role="tablist"]',UE=".nav-item, .list-group-item",FE=`.nav-link${Kc}, .list-group-item${Kc}, [role="tab"]${Kc}`,pp='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Yc=`${FE}, ${pp}`,BE=`.${Zs}[data-bs-toggle="tab"], .${Zs}[data-bs-toggle="pill"], .${Zs}[data-bs-toggle="list"]`;class Js extends re{constructor(c){super(c),this._parent=this._element.closest(OE),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),H.on(this._element,RE,p=>this._keydown(p)))}static get NAME(){return yE}show(){const c=this._element;if(this._elemIsActive(c))return;const p=this._getActiveElem(),M=p?H.trigger(p,ME,{relatedTarget:c}):null;H.trigger(c,AE,{relatedTarget:p}).defaultPrevented||M&&M.defaultPrevented||(this._deactivate(p,c),this._activate(c,p))}_activate(c,p){if(!c)return;c.classList.add(Zs),this._activate(G.getElementFromSelector(c));const M=()=>{if(c.getAttribute("role")!=="tab"){c.classList.add(Xc);return}c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),H.trigger(c,wE,{relatedTarget:p})};this._queueCallback(M,c,c.classList.contains(hp))}_deactivate(c,p){if(!c)return;c.classList.remove(Zs),c.blur(),this._deactivate(G.getElementFromSelector(c));const M=()=>{if(c.getAttribute("role")!=="tab"){c.classList.remove(Xc);return}c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),H.trigger(c,TE,{relatedTarget:p})};this._queueCallback(M,c,c.classList.contains(hp))}_keydown(c){if(![LE,cp,IE,up,$c,fp].includes(c.key))return;c.stopPropagation(),c.preventDefault();const p=this._getChildren().filter(O=>!b(O));let M;if([$c,fp].includes(c.key))M=p[c.key===$c?0:p.length-1];else{const O=[cp,up].includes(c.key);M=te(p,c.target,O,!0)}M&&(M.focus({preventScroll:!0}),Js.getOrCreateInstance(M).show())}_getChildren(){return G.find(Yc,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,p){this._setAttributeIfNotExists(c,"role","tablist");for(const M of p)this._setInitialAttributesOnChild(M)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const p=this._elemIsActive(c),M=this._getOuterElement(c);c.setAttribute("aria-selected",p),M!==c&&this._setAttributeIfNotExists(M,"role","presentation"),p||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const p=G.getElementFromSelector(c);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,p){const M=this._getOuterElement(c);if(!M.classList.contains(DE))return;const O=($,ne)=>{const fe=G.findOne($,M);fe&&fe.classList.toggle(ne,p)};O(dp,Zs),O(NE,Xc),M.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(c,p,M){c.hasAttribute(p)||c.setAttribute(p,M)}_elemIsActive(c){return c.classList.contains(Zs)}_getInnerElement(c){return c.matches(Yc)?c:G.findOne(Yc,c)}_getOuterElement(c){return c.closest(UE)||c}static jQueryInterface(c){return this.each(function(){const p=Js.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}H.on(document,CE,pp,function(v){["A","AREA"].includes(this.tagName)&&v.preventDefault(),!b(this)&&Js.getOrCreateInstance(this).show()}),H.on(window,PE,()=>{for(const v of G.find(BE))Js.getOrCreateInstance(v)}),U(Js);const VE="toast",Rs=".bs.toast",kE=`mouseover${Rs}`,HE=`mouseout${Rs}`,zE=`focusin${Rs}`,GE=`focusout${Rs}`,WE=`hide${Rs}`,$E=`hidden${Rs}`,XE=`show${Rs}`,KE=`shown${Rs}`,YE="fade",mp="hide",$a="show",Xa="showing",jE={animation:"boolean",autohide:"boolean",delay:"number"},qE={animation:!0,autohide:!0,delay:5e3};class Uo extends re{constructor(c,p){super(c,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return qE}static get DefaultType(){return jE}static get NAME(){return VE}show(){if(H.trigger(this._element,XE).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(YE);const p=()=>{this._element.classList.remove(Xa),H.trigger(this._element,KE),this._maybeScheduleHide()};this._element.classList.remove(mp),y(this._element),this._element.classList.add($a,Xa),this._queueCallback(p,this._element,this._config.animation)}hide(){if(!this.isShown()||H.trigger(this._element,WE).defaultPrevented)return;const p=()=>{this._element.classList.add(mp),this._element.classList.remove(Xa,$a),H.trigger(this._element,$E)};this._element.classList.add(Xa),this._queueCallback(p,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove($a),super.dispose()}isShown(){return this._element.classList.contains($a)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,p){switch(c.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=p;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=p;break}}if(p){this._clearTimeout();return}const M=c.relatedTarget;this._element===M||this._element.contains(M)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,kE,c=>this._onInteraction(c,!0)),H.on(this._element,HE,c=>this._onInteraction(c,!1)),H.on(this._element,zE,c=>this._onInteraction(c,!0)),H.on(this._element,GE,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const p=Uo.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof p[c]>"u")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}return P(Uo),U(Uo),{Alert:X,Button:Ee,Carousel:It,Collapse:Cr,Dropdown:ri,Modal:Ys,Offcanvas:ts,Popover:Wa,ScrollSpy:Oo,Tab:Js,Toast:Uo,Tooltip:js}}))})(kl)),kl.exports}OL();const Rv=Cy(DL);Rv.use(Iy());Rv.mount("#app");
