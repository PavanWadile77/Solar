function i_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},sc={},Zm={exports:{}},Je={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var cs=Symbol.for("react.element"),n_=Symbol.for("react.portal"),a_=Symbol.for("react.fragment"),o_=Symbol.for("react.strict_mode"),s_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),d_=Symbol.for("react.suspense"),h_=Symbol.for("react.memo"),p_=Symbol.for("react.lazy"),Cp=Symbol.iterator;function f_(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,Qm={};function $a(t,e,r){this.props=t,this.context=e,this.refs=Qm,this.updater=r||Km}$a.prototype.isReactComponent={};$a.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=$a.prototype;function gh(t,e,r){this.props=t,this.context=e,this.refs=Qm,this.updater=r||Km}var vh=gh.prototype=new $m;vh.constructor=gh;Jm(vh,$a.prototype);vh.isPureReactComponent=!0;var Pp=Array.isArray,eg=Object.prototype.hasOwnProperty,_h={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,r){var i,n={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)eg.call(e,i)&&!tg.hasOwnProperty(i)&&(n[i]=e[i]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:cs,type:t,key:a,ref:o,props:n,_owner:_h.current}}function m_(t,e){return{$$typeof:cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===cs}function g_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Lp=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g_(""+t.key):e.toString(36)}function dl(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cs:case n_:o=!0}}if(o)return o=t,n=n(o),t=i===""?"."+Rc(o,0):i,Pp(n)?(r="",t!=null&&(r=t.replace(Lp,"$&/")+"/"),dl(n,e,r,"",function(c){return c})):n!=null&&(yh(n)&&(n=m_(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(Lp,"$&/")+"/")+t)),e.push(n)),1;if(o=0,i=i===""?".":i+":",Pp(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+Rc(a,s);o+=dl(a,e,r,l,n)}else if(l=f_(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+Rc(a,s++),o+=dl(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ss(t,e,r){if(t==null)return t;var i=[],n=0;return dl(t,i,"","",function(a){return e.call(r,a,n++)}),i}function v_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xr={current:null},hl={transition:null},__={ReactCurrentDispatcher:xr,ReactCurrentBatchConfig:hl,ReactCurrentOwner:_h};function ig(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Ss,forEach:function(t,e,r){Ss(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ss(t,function(){e++}),e},toArray:function(t){return Ss(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=$a;Je.Fragment=a_;Je.Profiler=s_;Je.PureComponent=gh;Je.StrictMode=o_;Je.Suspense=d_;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Je.act=ig;Je.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jm({},t.props),n=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=_h.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)eg.call(e,l)&&!tg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:cs,type:t.type,key:n,ref:a,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:c_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};Je.createElement=rg;Je.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:u_,render:t}};Je.isValidElement=yh;Je.lazy=function(t){return{$$typeof:p_,_payload:{_status:-1,_result:t},_init:v_}};Je.memo=function(t,e){return{$$typeof:h_,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Je.unstable_act=ig;Je.useCallback=function(t,e){return xr.current.useCallback(t,e)};Je.useContext=function(t){return xr.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return xr.current.useDeferredValue(t)};Je.useEffect=function(t,e){return xr.current.useEffect(t,e)};Je.useId=function(){return xr.current.useId()};Je.useImperativeHandle=function(t,e,r){return xr.current.useImperativeHandle(t,e,r)};Je.useInsertionEffect=function(t,e){return xr.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return xr.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return xr.current.useMemo(t,e)};Je.useReducer=function(t,e,r){return xr.current.useReducer(t,e,r)};Je.useRef=function(t){return xr.current.useRef(t)};Je.useState=function(t){return xr.current.useState(t)};Je.useSyncExternalStore=function(t,e,r){return xr.current.useSyncExternalStore(t,e,r)};Je.useTransition=function(){return xr.current.useTransition()};Je.version="18.3.1";Zm.exports=Je;var ze=Zm.exports;const y_=i_(ze);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var x_=ze,S_=Symbol.for("react.element"),b_=Symbol.for("react.fragment"),M_=Object.prototype.hasOwnProperty,E_=x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w_={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)M_.call(e,i)&&!w_.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:S_,type:t,key:a,ref:o,props:n,_owner:E_.current}}sc.Fragment=b_;sc.jsx=ng;sc.jsxs=ng;qm.exports=sc;var X=qm.exports,Iu={},ag={exports:{}},zr={},og={exports:{}},sg={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(G,B){var W=G.length;G.push(B);e:for(;0<W;){var O=W-1>>>1,fe=G[O];if(0<n(fe,B))G[O]=B,G[W]=fe,W=O;else break e}}function r(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var B=G[0],W=G.pop();if(W!==B){G[0]=W;e:for(var O=0,fe=G.length,ve=fe>>>1;O<ve;){var Pe=2*(O+1)-1,De=G[Pe],Ve=Pe+1,K=G[Ve];if(0>n(De,W))Ve<fe&&0>n(K,De)?(G[O]=K,G[Ve]=W,O=Ve):(G[O]=De,G[Pe]=W,O=Pe);else if(Ve<fe&&0>n(K,W))G[O]=K,G[Ve]=W,O=Ve;else break e}}return B}function n(G,B){var W=G.sortIndex-B.sortIndex;return W!==0?W:G.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],h=1,p=null,u=3,f=!1,m=!1,b=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(G){for(var B=r(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=G)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=r(c)}}function x(G){if(b=!1,M(G),!m)if(r(l)!==null)m=!0,$(E);else{var B=r(c);B!==null&&Q(x,B.startTime-G)}}function E(G,B){m=!1,b&&(b=!1,d(y),y=-1),f=!0;var W=u;try{for(M(B),p=r(l);p!==null&&(!(p.expirationTime>B)||G&&!U());){var O=p.callback;if(typeof O=="function"){p.callback=null,u=p.priorityLevel;var fe=O(p.expirationTime<=B);B=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===r(l)&&i(l),M(B)}else i(l);p=r(l)}if(p!==null)var ve=!0;else{var Pe=r(c);Pe!==null&&Q(x,Pe.startTime-B),ve=!1}return ve}finally{p=null,u=W,f=!1}}var w=!1,T=null,y=-1,R=5,C=-1;function U(){return!(t.unstable_now()-C<R)}function k(){if(T!==null){var G=t.unstable_now();C=G;var B=!0;try{B=T(!0,G)}finally{B?Y():(w=!1,T=null)}}else w=!1}var Y;if(typeof v=="function")Y=function(){v(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,q=N.port2;N.port1.onmessage=k,Y=function(){q.postMessage(null)}}else Y=function(){g(k,0)};function $(G){T=G,w||(w=!0,Y())}function Q(G,B){y=g(function(){G(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,$(E))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(G){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var W=u;u=B;try{return G()}finally{u=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,B){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=u;u=G;try{return B()}finally{u=W}},t.unstable_scheduleCallback=function(G,B,W){var O=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?O+W:O):W=O,G){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=W+fe,G={id:h++,callback:B,priorityLevel:G,startTime:W,expirationTime:fe,sortIndex:-1},W>O?(G.sortIndex=W,e(c,G),r(l)===null&&G===r(c)&&(b?(d(y),y=-1):b=!0,Q(x,W-O))):(G.sortIndex=fe,e(l,G),m||f||(m=!0,$(E))),G},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(G){var B=u;return function(){var W=u;u=B;try{return G.apply(this,arguments)}finally{u=W}}}})(sg);og.exports=sg;var T_=og.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var R_=ze,kr=T_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,Bo={};function ea(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(Bo[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,A_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Dp={};function C_(t){return Uu.call(Dp,t)?!0:Uu.call(Np,t)?!1:A_.test(t)?Dp[t]=!0:(Np[t]=!0,!1)}function P_(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,r,i){if(e===null||typeof e>"u"||P_(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sr(t,e,r,i,n,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var er={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){er[t]=new Sr(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];er[e]=new Sr(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){er[t]=new Sr(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){er[t]=new Sr(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){er[t]=new Sr(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){er[t]=new Sr(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){er[t]=new Sr(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){er[t]=new Sr(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){er[t]=new Sr(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Sh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,Sh);er[e]=new Sr(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,Sh);er[e]=new Sr(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,Sh);er[e]=new Sr(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){er[t]=new Sr(t,1,!1,t.toLowerCase(),null,!1,!1)});er.xlinkHref=new Sr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){er[t]=new Sr(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,r,i){var n=er.hasOwnProperty(e)?er[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,r,n,i)&&(r=null),i||n===null?C_(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Yi=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),xa=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Ac;function bo(t){if(Ac===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Cc=!1;function Pc(t,e){if(!t||Cc)return"";Cc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),o=n.length-1,s=a.length-1;1<=o&&0<=s&&n[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(n[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||n[o]!==a[s]){var l=`
`+n[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Cc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?bo(t):""}function N_(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sa:return"Fragment";case xa:return"Portal";case Ou:return"Profiler";case Mh:return"StrictMode";case Fu:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function D_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I_(t){var e=hg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ms(t){t._valueTracker||(t._valueTracker=I_(t))}function pg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=hg(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var r=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Up(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=Sn(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function Hu(t,e){fg(t,e);var r=Sn(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,r):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Gu(t,e,r){(e!=="number"||Pl(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Mo=Array.isArray;function Ua(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+Sn(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(oe(92));if(Mo(r)){if(1<r.length)throw Error(oe(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Sn(r)}}function mg(t,e){var r=Sn(e.value),i=Sn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Es,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Es.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){U_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function _g(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function yg(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=_g(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var O_=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(O_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Oa=null,Fa=null;function zp(t){if(t=hs(t)){if(typeof qu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=hc(e),qu(t.stateNode,t.type,e))}}function xg(t){Oa?Fa?Fa.push(t):Fa=[t]:Oa=t}function Sg(){if(Oa){var t=Oa,e=Fa;if(Fa=Oa=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function bg(t,e){return t(e)}function Mg(){}var Lc=!1;function Eg(t,e,r){if(Lc)return t(e,r);Lc=!0;try{return bg(t,e,r)}finally{Lc=!1,(Oa!==null||Fa!==null)&&(Mg(),Sg())}}function Go(t,e){var r=t.stateNode;if(r===null)return null;var i=hc(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(oe(231,e,typeof r));return r}var Zu=!1;if(Hi)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Zu=!1}function F_(t,e,r,i,n,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(h){this.onError(h)}}var Po=!1,Ll=null,Nl=!1,Ku=null,k_={onError:function(t){Po=!0,Ll=t}};function z_(t,e,r,i,n,a,o,s,l){Po=!1,Ll=null,F_.apply(k_,arguments)}function B_(t,e,r,i,n,a,o,s,l){if(z_.apply(this,arguments),Po){if(Po){var c=Ll;Po=!1,Ll=null}else throw Error(oe(198));Nl||(Nl=!0,Ku=c)}}function ta(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(ta(t)!==t)throw Error(oe(188))}function H_(t){var e=t.alternate;if(!e){if(e=ta(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Bp(n),t;if(a===i)return Bp(n),e;a=a.sibling}throw Error(oe(188))}if(r.return!==i.return)r=n,i=a;else{for(var o=!1,s=n.child;s;){if(s===r){o=!0,r=n,i=a;break}if(s===i){o=!0,i=n,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,i=n;break}if(s===i){o=!0,i=a,r=n;break}s=s.sibling}if(!o)throw Error(oe(189))}}if(r.alternate!==i)throw Error(oe(190))}if(r.tag!==3)throw Error(oe(188));return r.stateNode.current===r?t:e}function Tg(t){return t=H_(t),t!==null?Rg(t):null}function Rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rg(t);if(e!==null)return e;t=t.sibling}return null}var Ag=kr.unstable_scheduleCallback,Hp=kr.unstable_cancelCallback,G_=kr.unstable_shouldYield,V_=kr.unstable_requestPaint,Dt=kr.unstable_now,W_=kr.unstable_getCurrentPriorityLevel,Rh=kr.unstable_ImmediatePriority,Cg=kr.unstable_UserBlockingPriority,Dl=kr.unstable_NormalPriority,j_=kr.unstable_LowPriority,Pg=kr.unstable_IdlePriority,lc=null,bi=null;function X_(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Z_,Y_=Math.log,q_=Math.LN2;function Z_(t){return t>>>=0,t===0?32:31-(Y_(t)/q_|0)|0}var ws=64,Ts=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~n;s!==0?i=Eo(s):(a&=o,a!==0&&(i=Eo(a)))}else o=r&~n,o!==0?i=Eo(o):a!==0&&(i=Eo(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-si(e),n=1<<r,i|=t[r],e&=~n;return i}function K_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J_(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-si(a),s=1<<o,l=n[o];l===-1?(!(s&r)||s&i)&&(n[o]=K_(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lg(){var t=ws;return ws<<=1,!(ws&4194240)&&(ws=64),t}function Nc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function us(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=r}function Q_(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-si(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function Ah(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-si(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var st=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dg,Ch,Ig,Ug,Og,Qu=!1,Rs=[],pn=null,fn=null,mn=null,Vo=new Map,Wo=new Map,ln=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function oo(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=hs(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ey(t,e,r,i,n){switch(e){case"focusin":return pn=oo(pn,t,e,r,i,n),!0;case"dragenter":return fn=oo(fn,t,e,r,i,n),!0;case"mouseover":return mn=oo(mn,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return Vo.set(a,oo(Vo.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Wo.set(a,oo(Wo.get(a)||null,t,e,r,i,n)),!0}return!1}function Fg(t){var e=Bn(t.target);if(e!==null){var r=ta(e);if(r!==null){if(e=r.tag,e===13){if(e=wg(r),e!==null){t.blockedOn=e,Og(t.priority,function(){Ig(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);Yu=i,r.target.dispatchEvent(i),Yu=null}else return e=hs(r),e!==null&&Ch(e),t.blockedOn=r,!1;e.shift()}return!0}function Vp(t,e,r){pl(t)&&r.delete(e)}function ty(){Qu=!1,pn!==null&&pl(pn)&&(pn=null),fn!==null&&pl(fn)&&(fn=null),mn!==null&&pl(mn)&&(mn=null),Vo.forEach(Vp),Wo.forEach(Vp)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,kr.unstable_scheduleCallback(kr.unstable_NormalPriority,ty)))}function jo(t){function e(n){return so(n,t)}if(0<Rs.length){so(Rs[0],t);for(var r=1;r<Rs.length;r++){var i=Rs[r];i.blockedOn===t&&(i.blockedOn=null)}}for(pn!==null&&so(pn,t),fn!==null&&so(fn,t),mn!==null&&so(mn,t),Vo.forEach(e),Wo.forEach(e),r=0;r<ln.length;r++)i=ln[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<ln.length&&(r=ln[0],r.blockedOn===null);)Fg(r),r.blockedOn===null&&ln.shift()}var ka=Yi.ReactCurrentBatchConfig,Ul=!0;function ry(t,e,r,i){var n=st,a=ka.transition;ka.transition=null;try{st=1,Ph(t,e,r,i)}finally{st=n,ka.transition=a}}function iy(t,e,r,i){var n=st,a=ka.transition;ka.transition=null;try{st=4,Ph(t,e,r,i)}finally{st=n,ka.transition=a}}function Ph(t,e,r,i){if(Ul){var n=$u(t,e,r,i);if(n===null)Gc(t,e,i,Ol,r),Gp(t,i);else if(ey(n,t,e,r,i))i.stopPropagation();else if(Gp(t,i),e&4&&-1<$_.indexOf(t)){for(;n!==null;){var a=hs(n);if(a!==null&&Dg(a),a=$u(t,e,r,i),a===null&&Gc(t,e,i,Ol,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else Gc(t,e,i,null,r)}}var Ol=null;function $u(t,e,r,i){if(Ol=null,t=Th(i),t=Bn(t),t!==null)if(e=ta(t),e===null)t=null;else if(r=e.tag,r===13){if(t=wg(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case Rh:return 1;case Cg:return 4;case Dl:case j_:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var dn=null,Lh=null,fl=null;function zg(){if(fl)return fl;var t,e=Lh,r=e.length,i,n="value"in dn?dn.value:dn.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===n[a-i];i++);return fl=n.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function As(){return!0}function Wp(){return!1}function Br(t){function e(r,i,n,a,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?As:Wp,this.isPropagationStopped=Wp,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nh=Br(eo),ds=Et({},eo,{view:0,detail:0}),ny=Br(ds),Dc,Ic,lo,cc=Et({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Dc=t.screenX-lo.screenX,Ic=t.screenY-lo.screenY):Ic=Dc=0,lo=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),jp=Br(cc),ay=Et({},cc,{dataTransfer:0}),oy=Br(ay),sy=Et({},ds,{relatedTarget:0}),Uc=Br(sy),ly=Et({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Br(ly),uy=Et({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=Br(uy),hy=Et({},eo,{data:0}),Xp=Br(hy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=my[t])?!!e[t]:!1}function Dh(){return gy}var vy=Et({},ds,{key:function(t){if(t.key){var e=py[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=Br(vy),yy=Et({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Br(yy),xy=Et({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),Sy=Br(xy),by=Et({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=Br(by),Ey=Et({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=Br(Ey),Ty=[9,13,27,32],Ih=Hi&&"CompositionEvent"in window,Lo=null;Hi&&"documentMode"in document&&(Lo=document.documentMode);var Ry=Hi&&"TextEvent"in window&&!Lo,Bg=Hi&&(!Ih||Lo&&8<Lo&&11>=Lo),qp=" ",Zp=!1;function Hg(t,e){switch(t){case"keyup":return Ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ba=!1;function Ay(t,e){switch(t){case"compositionend":return Gg(e);case"keypress":return e.which!==32?null:(Zp=!0,qp);case"textInput":return t=e.data,t===qp&&Zp?null:t;default:return null}}function Cy(t,e){if(ba)return t==="compositionend"||!Ih&&Hg(t,e)?(t=zg(),fl=Lh=dn=null,ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Py[t.type]:e==="textarea"}function Vg(t,e,r,i){xg(i),e=Fl(e,"onChange"),0<e.length&&(r=new Nh("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var No=null,Xo=null;function Ly(t){ev(t,0)}function uc(t){var e=wa(t);if(pg(e))return t}function Ny(t,e){if(t==="change")return e}var Wg=!1;if(Hi){var Oc;if(Hi){var Fc="oninput"in document;if(!Fc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Fc=typeof Jp.oninput=="function"}Oc=Fc}else Oc=!1;Wg=Oc&&(!document.documentMode||9<document.documentMode)}function Qp(){No&&(No.detachEvent("onpropertychange",jg),Xo=No=null)}function jg(t){if(t.propertyName==="value"&&uc(Xo)){var e=[];Vg(e,Xo,t,Th(t)),Eg(Ly,e)}}function Dy(t,e,r){t==="focusin"?(Qp(),No=e,Xo=r,No.attachEvent("onpropertychange",jg)):t==="focusout"&&Qp()}function Iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Xo)}function Uy(t,e){if(t==="click")return uc(e)}function Oy(t,e){if(t==="input"||t==="change")return uc(e)}function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:Fy;function Yo(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Uu.call(e,n)||!di(t[n],e[n]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ef(t,e){var r=$p(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$p(r)}}function Xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ky(t){var e=Yg(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Xg(r.ownerDocument.documentElement,r)){if(i!==null&&Uh(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=ef(r,a);var o=ef(r,i);n&&o&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=Hi&&"documentMode"in document&&11>=document.documentMode,Ma=null,ed=null,Do=null,td=!1;function tf(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;td||Ma==null||Ma!==Pl(i)||(i=Ma,"selectionStart"in i&&Uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Yo(Do,i)||(Do=i,i=Fl(ed,"onSelect"),0<i.length&&(e=new Nh("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Ma)))}function Cs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Ea={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},kc={},qg={};Hi&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function dc(t){if(kc[t])return kc[t];if(!Ea[t])return t;var e=Ea[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in qg)return kc[t]=e[r];return t}var Zg=dc("animationend"),Kg=dc("animationiteration"),Jg=dc("animationstart"),Qg=dc("transitionend"),$g=new Map,rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){$g.set(t,e),ea(e,[t])}for(var zc=0;zc<rf.length;zc++){var Bc=rf[zc],By=Bc.toLowerCase(),Hy=Bc[0].toUpperCase()+Bc.slice(1);Tn(By,"on"+Hy)}Tn(Zg,"onAnimationEnd");Tn(Kg,"onAnimationIteration");Tn(Jg,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Qg,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function nf(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,B_(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&n.isPropagationStopped())break e;nf(n,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&n.isPropagationStopped())break e;nf(n,s,c),a=l}}}if(Nl)throw t=Ku,Nl=!1,Ku=null,t}function gt(t,e){var r=e[od];r===void 0&&(r=e[od]=new Set);var i=t+"__bubble";r.has(i)||(tv(e,t,2,!1),r.add(i))}function Hc(t,e,r){var i=0;e&&(i|=4),tv(r,t,i,e)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Ps]){t[Ps]=!0,lg.forEach(function(r){r!=="selectionchange"&&(Gy.has(r)||Hc(r,!1,t),Hc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ps]||(e[Ps]=!0,Hc("selectionchange",!1,e))}}function tv(t,e,r,i){switch(kg(e)){case 1:var n=ry;break;case 4:n=iy;break;default:n=Ph}r=n.bind(null,e,r,t),n=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function Gc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;o=o.return}for(;s!==null;){if(o=Bn(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}Eg(function(){var c=a,h=Th(r),p=[];e:{var u=$g.get(t);if(u!==void 0){var f=Nh,m=t;switch(t){case"keypress":if(ml(r)===0)break e;case"keydown":case"keyup":f=_y;break;case"focusin":m="focus",f=Uc;break;case"focusout":m="blur",f=Uc;break;case"beforeblur":case"afterblur":f=Uc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Sy;break;case Zg:case Kg:case Jg:f=cy;break;case Qg:f=My;break;case"scroll":f=ny;break;case"wheel":f=wy;break;case"copy":case"cut":case"paste":f=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Yp}var b=(e&4)!==0,g=!b&&t==="scroll",d=b?u!==null?u+"Capture":null:u;b=[];for(var v=c,M;v!==null;){M=v;var x=M.stateNode;if(M.tag===5&&x!==null&&(M=x,d!==null&&(x=Go(v,d),x!=null&&b.push(Zo(v,x,M)))),g)break;v=v.return}0<b.length&&(u=new f(u,m,null,r,h),p.push({event:u,listeners:b}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",u&&r!==Yu&&(m=r.relatedTarget||r.fromElement)&&(Bn(m)||m[Gi]))break e;if((f||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,f?(m=r.relatedTarget||r.toElement,f=c,m=m?Bn(m):null,m!==null&&(g=ta(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=c),f!==m)){if(b=jp,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=Yp,x="onPointerLeave",d="onPointerEnter",v="pointer"),g=f==null?u:wa(f),M=m==null?u:wa(m),u=new b(x,v+"leave",f,r,h),u.target=g,u.relatedTarget=M,x=null,Bn(h)===c&&(b=new b(d,v+"enter",m,r,h),b.target=M,b.relatedTarget=g,x=b),g=x,f&&m)t:{for(b=f,d=m,v=0,M=b;M;M=aa(M))v++;for(M=0,x=d;x;x=aa(x))M++;for(;0<v-M;)b=aa(b),v--;for(;0<M-v;)d=aa(d),M--;for(;v--;){if(b===d||d!==null&&b===d.alternate)break t;b=aa(b),d=aa(d)}b=null}else b=null;f!==null&&af(p,u,f,b,!1),m!==null&&g!==null&&af(p,g,m,b,!0)}}e:{if(u=c?wa(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var E=Ny;else if(Kp(u))if(Wg)E=Oy;else{E=Iy;var w=Dy}else(f=u.nodeName)&&f.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Uy);if(E&&(E=E(t,c))){Vg(p,E,r,h);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Gu(u,"number",u.value)}switch(w=c?wa(c):window,t){case"focusin":(Kp(w)||w.contentEditable==="true")&&(Ma=w,ed=c,Do=null);break;case"focusout":Do=ed=Ma=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,tf(p,r,h);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":tf(p,r,h)}var T;if(Ih)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ba?Hg(t,r)&&(y="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(y="onCompositionStart");y&&(Bg&&r.locale!=="ko"&&(ba||y!=="onCompositionStart"?y==="onCompositionEnd"&&ba&&(T=zg()):(dn=h,Lh="value"in dn?dn.value:dn.textContent,ba=!0)),w=Fl(c,y),0<w.length&&(y=new Xp(y,t,null,r,h),p.push({event:y,listeners:w}),T?y.data=T:(T=Gg(r),T!==null&&(y.data=T)))),(T=Ry?Ay(t,r):Cy(t,r))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(h=new Xp("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:c}),h.data=T))}ev(p,e)})}function Zo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Fl(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Go(t,r),a!=null&&i.unshift(Zo(t,a,n)),a=Go(t,e),a!=null&&i.push(Zo(t,a,n))),t=t.return}return i}function aa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function af(t,e,r,i,n){for(var a=e._reactName,o=[];r!==null&&r!==i;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,n?(l=Go(r,a),l!=null&&o.unshift(Zo(r,l,s))):n||(l=Go(r,a),l!=null&&o.push(Zo(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Vy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function of(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Wy,"")}function Ls(t,e,r){if(e=of(e),of(t)!==e&&r)throw Error(oe(425))}function kl(){}var rd=null,id=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(t){return sf.resolve(null).then(t).catch(Yy)}:ad;function Yy(t){setTimeout(function(){throw t})}function Vc(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),jo(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);jo(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),yi="__reactFiber$"+to,Ko="__reactProps$"+to,Gi="__reactContainer$"+to,od="__reactEvents$"+to,qy="__reactListeners$"+to,Zy="__reactHandles$"+to;function Bn(t){var e=t[yi];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Gi]||r[yi]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=lf(t);t!==null;){if(r=t[yi])return r;t=lf(t)}return e}t=r,r=t.parentNode}return null}function hs(t){return t=t[yi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function hc(t){return t[Ko]||null}var sd=[],Ta=-1;function Rn(t){return{current:t}}function vt(t){0>Ta||(t.current=sd[Ta],sd[Ta]=null,Ta--)}function ft(t,e){Ta++,sd[Ta]=t.current,t.current=e}var bn={},hr=Rn(bn),Tr=Rn(!1),Yn=bn;function ja(t,e){var r=t.type.contextTypes;if(!r)return bn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function Rr(t){return t=t.childContextTypes,t!=null}function zl(){vt(Tr),vt(hr)}function cf(t,e,r){if(hr.current!==bn)throw Error(oe(168));ft(hr,e),ft(Tr,r)}function rv(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(oe(108,D_(t)||"Unknown",n));return Et({},r,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,Yn=hr.current,ft(hr,t),ft(Tr,Tr.current),!0}function uf(t,e,r){var i=t.stateNode;if(!i)throw Error(oe(169));r?(t=rv(t,e,Yn),i.__reactInternalMemoizedMergedChildContext=t,vt(Tr),vt(hr),ft(hr,t)):vt(Tr),ft(Tr,r)}var Ii=null,pc=!1,Wc=!1;function iv(t){Ii===null?Ii=[t]:Ii.push(t)}function Ky(t){pc=!0,iv(t)}function An(){if(!Wc&&Ii!==null){Wc=!0;var t=0,e=st;try{var r=Ii;for(st=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Ii=null,pc=!1}catch(n){throw Ii!==null&&(Ii=Ii.slice(t+1)),Ag(Rh,An),n}finally{st=e,Wc=!1}}return null}var Ra=[],Aa=0,Hl=null,Gl=0,Vr=[],Wr=0,qn=null,Oi=1,Fi="";function kn(t,e){Ra[Aa++]=Gl,Ra[Aa++]=Hl,Hl=t,Gl=e}function nv(t,e,r){Vr[Wr++]=Oi,Vr[Wr++]=Fi,Vr[Wr++]=qn,qn=t;var i=Oi;t=Fi;var n=32-si(i)-1;i&=~(1<<n),r+=1;var a=32-si(e)+n;if(30<a){var o=n-n%5;a=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Oi=1<<32-si(e)+n|r<<n|i,Fi=a+t}else Oi=1<<a|r<<n|i,Fi=t}function Oh(t){t.return!==null&&(kn(t,1),nv(t,1,0))}function Fh(t){for(;t===Hl;)Hl=Ra[--Aa],Ra[Aa]=null,Gl=Ra[--Aa],Ra[Aa]=null;for(;t===qn;)qn=Vr[--Wr],Vr[Wr]=null,Fi=Vr[--Wr],Vr[Wr]=null,Oi=Vr[--Wr],Vr[Wr]=null}var Fr=null,Or=null,xt=!1,ni=null;function av(t,e){var r=Xr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function df(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fr=t,Or=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fr=t,Or=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=qn!==null?{id:Oi,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Xr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Fr=t,Or=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(xt){var e=Or;if(e){var r=e;if(!df(t,e)){if(ld(t))throw Error(oe(418));e=gn(r.nextSibling);var i=Fr;e&&df(t,e)?av(i,r):(t.flags=t.flags&-4097|2,xt=!1,Fr=t)}}else{if(ld(t))throw Error(oe(418));t.flags=t.flags&-4097|2,xt=!1,Fr=t}}}function hf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fr=t}function Ns(t){if(t!==Fr)return!1;if(!xt)return hf(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=Or)){if(ld(t))throw ov(),Error(oe(418));for(;e;)av(t,e),e=gn(e.nextSibling)}if(hf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Or=gn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Or=null}}else Or=Fr?gn(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=Or;t;)t=gn(t.nextSibling)}function Xa(){Or=Fr=null,xt=!1}function kh(t){ni===null?ni=[t]:ni.push(t)}var Jy=Yi.ReactCurrentBatchConfig;function co(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(oe(309));var i=r.stateNode}if(!i)throw Error(oe(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=n.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(oe(284));if(!r._owner)throw Error(oe(290,t))}return t}function Ds(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pf(t){var e=t._init;return e(t._payload)}function sv(t){function e(d,v){if(t){var M=d.deletions;M===null?(d.deletions=[v],d.flags|=16):M.push(v)}}function r(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function n(d,v){return d=xn(d,v),d.index=0,d.sibling=null,d}function a(d,v,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<v?(d.flags|=2,v):M):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,v,M,x){return v===null||v.tag!==6?(v=Jc(M,d.mode,x),v.return=d,v):(v=n(v,M),v.return=d,v)}function l(d,v,M,x){var E=M.type;return E===Sa?h(d,v,M.props.children,x,M.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&pf(E)===v.type)?(x=n(v,M.props),x.ref=co(d,v,M),x.return=d,x):(x=bl(M.type,M.key,M.props,null,d.mode,x),x.ref=co(d,v,M),x.return=d,x)}function c(d,v,M,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Qc(M,d.mode,x),v.return=d,v):(v=n(v,M.children||[]),v.return=d,v)}function h(d,v,M,x,E){return v===null||v.tag!==7?(v=Xn(M,d.mode,x,E),v.return=d,v):(v=n(v,M),v.return=d,v)}function p(d,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jc(""+v,d.mode,M),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bs:return M=bl(v.type,v.key,v.props,null,d.mode,M),M.ref=co(d,null,v),M.return=d,M;case xa:return v=Qc(v,d.mode,M),v.return=d,v;case an:var x=v._init;return p(d,x(v._payload),M)}if(Mo(v)||no(v))return v=Xn(v,d.mode,M,null),v.return=d,v;Ds(d,v)}return null}function u(d,v,M,x){var E=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:s(d,v,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case bs:return M.key===E?l(d,v,M,x):null;case xa:return M.key===E?c(d,v,M,x):null;case an:return E=M._init,u(d,v,E(M._payload),x)}if(Mo(M)||no(M))return E!==null?null:h(d,v,M,x,null);Ds(d,M)}return null}function f(d,v,M,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(M)||null,s(v,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bs:return d=d.get(x.key===null?M:x.key)||null,l(v,d,x,E);case xa:return d=d.get(x.key===null?M:x.key)||null,c(v,d,x,E);case an:var w=x._init;return f(d,v,M,w(x._payload),E)}if(Mo(x)||no(x))return d=d.get(M)||null,h(v,d,x,E,null);Ds(v,x)}return null}function m(d,v,M,x){for(var E=null,w=null,T=v,y=v=0,R=null;T!==null&&y<M.length;y++){T.index>y?(R=T,T=null):R=T.sibling;var C=u(d,T,M[y],x);if(C===null){T===null&&(T=R);break}t&&T&&C.alternate===null&&e(d,T),v=a(C,v,y),w===null?E=C:w.sibling=C,w=C,T=R}if(y===M.length)return r(d,T),xt&&kn(d,y),E;if(T===null){for(;y<M.length;y++)T=p(d,M[y],x),T!==null&&(v=a(T,v,y),w===null?E=T:w.sibling=T,w=T);return xt&&kn(d,y),E}for(T=i(d,T);y<M.length;y++)R=f(T,d,y,M[y],x),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?y:R.key),v=a(R,v,y),w===null?E=R:w.sibling=R,w=R);return t&&T.forEach(function(U){return e(d,U)}),xt&&kn(d,y),E}function b(d,v,M,x){var E=no(M);if(typeof E!="function")throw Error(oe(150));if(M=E.call(M),M==null)throw Error(oe(151));for(var w=E=null,T=v,y=v=0,R=null,C=M.next();T!==null&&!C.done;y++,C=M.next()){T.index>y?(R=T,T=null):R=T.sibling;var U=u(d,T,C.value,x);if(U===null){T===null&&(T=R);break}t&&T&&U.alternate===null&&e(d,T),v=a(U,v,y),w===null?E=U:w.sibling=U,w=U,T=R}if(C.done)return r(d,T),xt&&kn(d,y),E;if(T===null){for(;!C.done;y++,C=M.next())C=p(d,C.value,x),C!==null&&(v=a(C,v,y),w===null?E=C:w.sibling=C,w=C);return xt&&kn(d,y),E}for(T=i(d,T);!C.done;y++,C=M.next())C=f(T,d,y,C.value,x),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?y:C.key),v=a(C,v,y),w===null?E=C:w.sibling=C,w=C);return t&&T.forEach(function(k){return e(d,k)}),xt&&kn(d,y),E}function g(d,v,M,x){if(typeof M=="object"&&M!==null&&M.type===Sa&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case bs:e:{for(var E=M.key,w=v;w!==null;){if(w.key===E){if(E=M.type,E===Sa){if(w.tag===7){r(d,w.sibling),v=n(w,M.props.children),v.return=d,d=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&pf(E)===w.type){r(d,w.sibling),v=n(w,M.props),v.ref=co(d,w,M),v.return=d,d=v;break e}r(d,w);break}else e(d,w);w=w.sibling}M.type===Sa?(v=Xn(M.props.children,d.mode,x,M.key),v.return=d,d=v):(x=bl(M.type,M.key,M.props,null,d.mode,x),x.ref=co(d,v,M),x.return=d,d=x)}return o(d);case xa:e:{for(w=M.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){r(d,v.sibling),v=n(v,M.children||[]),v.return=d,d=v;break e}else{r(d,v);break}else e(d,v);v=v.sibling}v=Qc(M,d.mode,x),v.return=d,d=v}return o(d);case an:return w=M._init,g(d,v,w(M._payload),x)}if(Mo(M))return m(d,v,M,x);if(no(M))return b(d,v,M,x);Ds(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(r(d,v.sibling),v=n(v,M),v.return=d,d=v):(r(d,v),v=Jc(M,d.mode,x),v.return=d,d=v),o(d)):r(d,v)}return g}var Ya=sv(!0),lv=sv(!1),Vl=Rn(null),Wl=null,Ca=null,zh=null;function Bh(){zh=Ca=Wl=null}function Hh(t){var e=Vl.current;vt(Vl),t._currentValue=e}function ud(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function za(t,e){Wl=t,zh=Ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wr=!0),t.firstContext=null)}function Zr(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},Ca===null){if(Wl===null)throw Error(oe(308));Ca=t,Wl.dependencies={lanes:0,firstContext:t}}else Ca=Ca.next=t;return e}var Hn=null;function Gh(t){Hn===null?Hn=[t]:Hn.push(t)}function cv(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,Gh(e)):(r.next=n.next,n.next=r),e.interleaved=r,Vi(t,i)}function Vi(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var on=!1;function Vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,Vi(t,r)}return n=i.interleaved,n===null?(e.next=e,Gh(i)):(e.next=n.next,n.next=e),i.interleaved=e,Vi(t,r)}function gl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Ah(t,r)}}function ff(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function jl(t,e,r,i){var n=t.updateQueue;on=!1;var a=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=n.baseState;o=0,h=c=l=null,s=a;do{var u=s.lane,f=s.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,b=s;switch(u=e,f=r,b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(f,p,u);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,u=typeof m=="function"?m.call(f,p,u):m,u==null)break e;p=Et({},p,u);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,u=n.effects,u===null?n.effects=[s]:u.push(s))}else f={eventTime:f,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=f,l=p):h=h.next=f,o|=u;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;u=s,s=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(!0);if(h===null&&(l=p),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=h,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=p}}function mf(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(oe(191,n));n.call(i)}}}var ps={},Mi=Rn(ps),Jo=Rn(ps),Qo=Rn(ps);function Gn(t){if(t===ps)throw Error(oe(174));return t}function Wh(t,e){switch(ft(Qo,e),ft(Jo,t),ft(Mi,ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}vt(Mi),ft(Mi,e)}function qa(){vt(Mi),vt(Jo),vt(Qo)}function dv(t){Gn(Qo.current);var e=Gn(Mi.current),r=Wu(e,t.type);e!==r&&(ft(Jo,t),ft(Mi,r))}function jh(t){Jo.current===t&&(vt(Mi),vt(Jo))}var St=Rn(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Xh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var vl=Yi.ReactCurrentDispatcher,Xc=Yi.ReactCurrentBatchConfig,Zn=0,bt=null,Gt=null,qt=null,Yl=!1,Io=!1,$o=0,Qy=0;function rr(){throw Error(oe(321))}function Yh(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!di(t[r],e[r]))return!1;return!0}function qh(t,e,r,i,n,a){if(Zn=a,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?rx:ix,t=r(i,n),Io){a=0;do{if(Io=!1,$o=0,25<=a)throw Error(oe(301));a+=1,qt=Gt=null,e.updateQueue=null,vl.current=nx,t=r(i,n)}while(Io)}if(vl.current=ql,e=Gt!==null&&Gt.next!==null,Zn=0,qt=Gt=bt=null,Yl=!1,e)throw Error(oe(300));return t}function Zh(){var t=$o!==0;return $o=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?bt.memoizedState=qt=t:qt=qt.next=t,qt}function Kr(){if(Gt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=qt===null?bt.memoizedState:qt.next;if(e!==null)qt=e,Gt=t;else{if(t===null)throw Error(oe(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},qt===null?bt.memoizedState=qt=t:qt=qt.next=t}return qt}function es(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=Kr(),r=e.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=t;var i=Gt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var o=n.next;n.next=a.next,a.next=o}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var s=o=null,l=null,c=a;do{var h=c.lane;if((Zn&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,o=i):l=l.next=p,bt.lanes|=h,Kn|=h}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,di(i,e.memoizedState)||(wr=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,bt.lanes|=a,Kn|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function qc(t){var e=Kr(),r=e.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do a=t(a,o.action),o=o.next;while(o!==n);di(a,e.memoizedState)||(wr=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function hv(){}function pv(t,e){var r=bt,i=Kr(),n=e(),a=!di(i.memoizedState,n);if(a&&(i.memoizedState=n,wr=!0),i=i.queue,Kh(gv.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,ts(9,mv.bind(null,r,i,n,e),void 0,null),Zt===null)throw Error(oe(349));Zn&30||fv(r,e,n)}return n}function fv(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function mv(t,e,r,i){e.value=r,e.getSnapshot=i,vv(e)&&_v(t)}function gv(t,e,r){return r(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!di(t,r)}catch{return!0}}function _v(t){var e=Vi(t,1);e!==null&&li(e,t,1,-1)}function gf(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},e.queue=t,t=t.dispatch=tx.bind(null,bt,t),[e.memoizedState,t]}function ts(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function yv(){return Kr().memoizedState}function _l(t,e,r,i){var n=vi();bt.flags|=t,n.memoizedState=ts(1|e,r,void 0,i===void 0?null:i)}function fc(t,e,r,i){var n=Kr();i=i===void 0?null:i;var a=void 0;if(Gt!==null){var o=Gt.memoizedState;if(a=o.destroy,i!==null&&Yh(i,o.deps)){n.memoizedState=ts(e,r,a,i);return}}bt.flags|=t,n.memoizedState=ts(1|e,r,a,i)}function vf(t,e){return _l(8390656,8,t,e)}function Kh(t,e){return fc(2048,8,t,e)}function xv(t,e){return fc(4,2,t,e)}function Sv(t,e){return fc(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,r){return r=r!=null?r.concat([t]):null,fc(4,4,bv.bind(null,e,t),r)}function Jh(){}function Ev(t,e){var r=Kr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function wv(t,e){var r=Kr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function Tv(t,e,r){return Zn&21?(di(r,e)||(r=Lg(),bt.lanes|=r,Kn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wr=!0),t.memoizedState=r)}function $y(t,e){var r=st;st=r!==0&&4>r?r:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{st=r,Xc.transition=i}}function Rv(){return Kr().memoizedState}function ex(t,e,r){var i=yn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Av(t))Cv(e,r);else if(r=cv(t,e,r,i),r!==null){var n=vr();li(r,t,i,n),Pv(r,e,i)}}function tx(t,e,r){var i=yn(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Cv(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(n.hasEagerState=!0,n.eagerState=s,di(s,o)){var l=e.interleaved;l===null?(n.next=n,Gh(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=cv(t,e,n,i),r!==null&&(n=vr(),li(r,t,i,n),Pv(r,e,i))}}function Av(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function Cv(t,e){Io=Yl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Pv(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Ah(t,r)}}var ql={readContext:Zr,useCallback:rr,useContext:rr,useEffect:rr,useImperativeHandle:rr,useInsertionEffect:rr,useLayoutEffect:rr,useMemo:rr,useReducer:rr,useRef:rr,useState:rr,useDebugValue:rr,useDeferredValue:rr,useTransition:rr,useMutableSource:rr,useSyncExternalStore:rr,useId:rr,unstable_isNewReconciler:!1},rx={readContext:Zr,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Zr,useEffect:vf,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,_l(4194308,4,bv.bind(null,e,t),r)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var r=vi();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=vi();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ex.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:gf,useDebugValue:Jh,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=gf(!1),e=t[0];return t=$y.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=bt,n=vi();if(xt){if(r===void 0)throw Error(oe(407));r=r()}else{if(r=e(),Zt===null)throw Error(oe(349));Zn&30||fv(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,vf(gv.bind(null,i,a,t),[t]),i.flags|=2048,ts(9,mv.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=vi(),e=Zt.identifierPrefix;if(xt){var r=Fi,i=Oi;r=(i&~(1<<32-si(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=$o++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Qy++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ix={readContext:Zr,useCallback:Ev,useContext:Zr,useEffect:Kh,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:wv,useReducer:Yc,useRef:yv,useState:function(){return Yc(es)},useDebugValue:Jh,useDeferredValue:function(t){var e=Kr();return Tv(e,Gt.memoizedState,t)},useTransition:function(){var t=Yc(es)[0],e=Kr().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:pv,useId:Rv,unstable_isNewReconciler:!1},nx={readContext:Zr,useCallback:Ev,useContext:Zr,useEffect:Kh,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:wv,useReducer:qc,useRef:yv,useState:function(){return qc(es)},useDebugValue:Jh,useDeferredValue:function(t){var e=Kr();return Gt===null?e.memoizedState=t:Tv(e,Gt.memoizedState,t)},useTransition:function(){var t=qc(es)[0],e=Kr().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:pv,useId:Rv,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function dd(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:Et({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var mc={isMounted:function(t){return(t=t._reactInternals)?ta(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=vr(),n=yn(t),a=ki(i,n);a.payload=e,r!=null&&(a.callback=r),e=vn(t,a,n),e!==null&&(li(e,t,n,i),gl(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=vr(),n=yn(t),a=ki(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=vn(t,a,n),e!==null&&(li(e,t,n,i),gl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=vr(),i=yn(t),n=ki(r,i);n.tag=2,e!=null&&(n.callback=e),e=vn(t,n,i),e!==null&&(li(e,t,i,r),gl(e,t,i))}};function _f(t,e,r,i,n,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(r,i)||!Yo(n,a):!0}function Lv(t,e,r){var i=!1,n=bn,a=e.contextType;return typeof a=="object"&&a!==null?a=Zr(a):(n=Rr(e)?Yn:hr.current,i=e.contextTypes,a=(i=i!=null)?ja(t,n):bn),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function yf(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function hd(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},Vh(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=Zr(a):(a=Rr(e)?Yn:hr.current,n.context=ja(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(dd(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&mc.enqueueReplaceState(n,n.state,null),jl(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function Za(t,e){try{var r="",i=e;do r+=N_(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Zc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,r){r=ki(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Kl||(Kl=!0,bd=i),pd(t,e)},r}function Dv(t,e,r){r=ki(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){pd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){pd(t,e),typeof i!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function xf(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new ax;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=yx.bind(null,t,e,r),e.then(t,t))}function Sf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ki(-1,1),e.tag=2,vn(r,e,1))),r.lanes|=1),t)}var ox=Yi.ReactCurrentOwner,wr=!1;function gr(t,e,r,i){e.child=t===null?lv(e,null,r,i):Ya(e,t.child,r,i)}function Mf(t,e,r,i,n){r=r.render;var a=e.ref;return za(e,n),i=qh(t,e,r,i,a,n),r=Zh(),t!==null&&!wr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Wi(t,e,n)):(xt&&r&&Oh(e),e.flags|=1,gr(t,e,i,n),e.child)}function Ef(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!ap(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,Iv(t,e,a,i,n)):(t=bl(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Yo,r(o,i)&&t.ref===e.ref)return Wi(t,e,n)}return e.flags|=1,t=xn(a,i),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(Yo(a,i)&&t.ref===e.ref)if(wr=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(wr=!0);else return e.lanes=t.lanes,Wi(t,e,n)}return fd(t,e,r,i,n)}function Uv(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(La,Dr),Dr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(La,Dr),Dr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,ft(La,Dr),Dr|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,ft(La,Dr),Dr|=i;return gr(t,e,n,r),e.child}function Ov(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,r,i,n){var a=Rr(r)?Yn:hr.current;return a=ja(e,a),za(e,n),r=qh(t,e,r,i,a,n),i=Zh(),t!==null&&!wr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Wi(t,e,n)):(xt&&i&&Oh(e),e.flags|=1,gr(t,e,r,n),e.child)}function wf(t,e,r,i,n){if(Rr(r)){var a=!0;Bl(e)}else a=!1;if(za(e,n),e.stateNode===null)yl(t,e),Lv(e,r,i),hd(e,r,i,n),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Zr(c):(c=Rr(r)?Yn:hr.current,c=ja(e,c));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&yf(e,o,i,c),on=!1;var u=e.memoizedState;o.state=u,jl(e,i,o,n),l=e.memoizedState,s!==i||u!==l||Tr.current||on?(typeof h=="function"&&(dd(e,r,h,i),l=e.memoizedState),(s=on||_f(e,r,s,i,u,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,uv(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:ri(e.type,s),o.props=c,p=e.pendingProps,u=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Zr(l):(l=Rr(r)?Yn:hr.current,l=ja(e,l));var f=r.getDerivedStateFromProps;(h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||u!==l)&&yf(e,o,i,l),on=!1,u=e.memoizedState,o.state=u,jl(e,i,o,n);var m=e.memoizedState;s!==p||u!==m||Tr.current||on?(typeof f=="function"&&(dd(e,r,f,i),m=e.memoizedState),(c=on||_f(e,r,c,i,u,m,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,r,i,a,n)}function md(t,e,r,i,n,a){Ov(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return n&&uf(e,r,!1),Wi(t,e,a);i=e.stateNode,ox.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ya(e,t.child,null,a),e.child=Ya(e,null,s,a)):gr(t,e,s,a),e.memoizedState=i.state,n&&uf(e,r,!0),e.child}function Fv(t){var e=t.stateNode;e.pendingContext?cf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cf(t,e.context,!1),Wh(t,e.containerInfo)}function Tf(t,e,r,i,n){return Xa(),kh(n),e.flags|=256,gr(t,e,r,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,r){var i=e.pendingProps,n=St.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(n&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),ft(St,n&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=_c(o,i,0,null),t=Xn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=vd(r),e.memoizedState=gd,t):Qh(e,o));if(n=t.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return sx(t,e,o,i,s,n,r);if(a){a=i.fallback,o=e.mode,n=t.child,s=n.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xn(n,l),i.subtreeFlags=n.subtreeFlags&14680064),s!==null?a=xn(s,a):(a=Xn(a,o,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?vd(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=gd,i}return a=t.child,t=a.sibling,i=xn(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Qh(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Is(t,e,r,i){return i!==null&&kh(i),Ya(e,t.child,null,r),t=Qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sx(t,e,r,i,n,a,o){if(r)return e.flags&256?(e.flags&=-257,i=Zc(Error(oe(422))),Is(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=_c({mode:"visible",children:i.children},n,0,null),a=Xn(a,n,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ya(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=gd,a);if(!(e.mode&1))return Is(t,e,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(oe(419)),i=Zc(a,i,void 0),Is(t,e,o,i)}if(s=(o&t.childLanes)!==0,wr||s){if(i=Zt,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,Vi(t,n),li(i,t,n,-1))}return np(),i=Zc(Error(oe(421))),Is(t,e,o,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=xx.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,Or=gn(n.nextSibling),Fr=e,xt=!0,ni=null,t!==null&&(Vr[Wr++]=Oi,Vr[Wr++]=Fi,Vr[Wr++]=qn,Oi=t.id,Fi=t.overflow,qn=e),e=Qh(e,i.children),e.flags|=4096,e)}function Rf(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,r)}function Kc(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function zv(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(gr(t,e,i.children,r),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,r,e);else if(t.tag===19)Rf(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&Xl(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),Kc(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Xl(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}Kc(e,!0,r,null,a);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,r=xn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=xn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function lx(t,e,r){switch(e.tag){case 3:Fv(e),Xa();break;case 5:dv(e);break;case 1:Rr(e.type)&&Bl(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;ft(Vl,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):r&e.child.childLanes?kv(t,e,r):(ft(St,St.current&1),t=Wi(t,e,r),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return zv(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,r)}return Wi(t,e,r)}var Bv,_d,Hv,Gv;Bv=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};_d=function(){};Hv=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,Gn(Mi.current);var a=null;switch(r){case"input":n=Bu(t,n),i=Bu(t,i),a=[];break;case"select":n=Et({},n,{value:void 0}),i=Et({},i,{value:void 0}),a=[];break;case"textarea":n=Vu(t,n),i=Vu(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}ju(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var s=n[c];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=n!=null?n[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,r,i){r!==i&&(e.flags|=4)};function uo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ir(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function cx(t,e,r){var i=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ir(e),null;case 1:return Rr(e.type)&&zl(),ir(e),null;case 3:return i=e.stateNode,qa(),vt(Tr),vt(hr),Xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ns(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(wd(ni),ni=null))),_d(t,e),ir(e),null;case 5:jh(e);var n=Gn(Qo.current);if(r=e.type,t!==null&&e.stateNode!=null)Hv(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return ir(e),null}if(t=Gn(Mi.current),Ns(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[yi]=e,i[Ko]=a,t=(e.mode&1)!==0,r){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(n=0;n<wo.length;n++)gt(wo[n],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Up(i,a),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},gt("invalid",i);break;case"textarea":Fp(i,a),gt("invalid",i)}ju(r,a),n=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ls(i.textContent,s,t),n=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ls(i.textContent,s,t),n=["children",""+s]):Bo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&gt("scroll",i)}switch(r){case"input":Ms(i),Op(i,a,!0);break;case"textarea":Ms(i),kp(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=kl)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[yi]=e,t[Ko]=i,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xu(r,i),r){case"dialog":gt("cancel",t),gt("close",t),n=i;break;case"iframe":case"object":case"embed":gt("load",t),n=i;break;case"video":case"audio":for(n=0;n<wo.length;n++)gt(wo[n],t);n=i;break;case"source":gt("error",t),n=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),n=i;break;case"details":gt("toggle",t),n=i;break;case"input":Up(t,i),n=Bu(t,i),gt("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Fp(t,i),n=Vu(t,i),gt("invalid",t);break;default:n=i}ju(r,n),s=n;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?yg(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&gt("scroll",t):l!=null&&bh(t,a,l,o))}switch(r){case"input":Ms(t),Op(t,i,!1);break;case"textarea":Ms(t),kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sn(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Ua(t,!!i.multiple,a,!1):i.defaultValue!=null&&Ua(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=kl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ir(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(r=Gn(Qo.current),Gn(Mi.current),Ns(e)){if(i=e.stateNode,r=e.memoizedProps,i[yi]=e,(a=i.nodeValue!==r)&&(t=Fr,t!==null))switch(t.tag){case 3:Ls(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ls(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return ir(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Or!==null&&e.mode&1&&!(e.flags&128))ov(),Xa(),e.flags|=98560,a=!1;else if(a=Ns(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(oe(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(oe(317));a[yi]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ir(e),a=!1}else ni!==null&&(wd(ni),ni=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Vt===0&&(Vt=3):np())),e.updateQueue!==null&&(e.flags|=4),ir(e),null);case 4:return qa(),_d(t,e),t===null&&qo(e.stateNode.containerInfo),ir(e),null;case 10:return Hh(e.type._context),ir(e),null;case 17:return Rr(e.type)&&zl(),ir(e),null;case 19:if(vt(St),a=e.memoizedState,a===null)return ir(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)uo(a,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,uo(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}a.tail!==null&&Dt()>Ka&&(e.flags|=128,i=!0,uo(a,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),uo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!xt)return ir(e),null}else 2*Dt()-a.renderingStartTime>Ka&&r!==1073741824&&(e.flags|=128,i=!0,uo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Dt(),e.sibling=null,r=St.current,ft(St,i?r&1|2:r&1),e):(ir(e),null);case 22:case 23:return ip(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dr&1073741824&&(ir(e),e.subtreeFlags&6&&(e.flags|=8192)):ir(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function ux(t,e){switch(Fh(e),e.tag){case 1:return Rr(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qa(),vt(Tr),vt(hr),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Xa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return qa(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return ip(),null;case 24:return null;default:return null}}var Us=!1,or=!1,dx=typeof WeakSet=="function"?WeakSet:Set,be=null;function Pa(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Rt(t,e,i)}else r.current=null}function Vv(t,e,r){try{r()}catch(i){Rt(t,e,i)}}var Af=!1;function hx(t,e){if(rd=Ul,t=Yg(),Uh(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,c=0,h=0,p=t,u=null;t:for(;;){for(var f;p!==r||n!==0&&p.nodeType!==3||(s=o+n),p!==a||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(f=p.firstChild)!==null;)u=p,p=f;for(;;){if(p===t)break t;if(u===r&&++c===n&&(s=o),u===a&&++h===i&&(l=o),(f=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=f}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(id={focusedElem:t,selectionRange:r},Ul=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,g=m.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:ri(e.type,b),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){Rt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return m=Af,Af=!1,m}function Uo(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&Vv(e,r,a)}n=n.next}while(n!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function yd(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[Ko],delete e[od],delete e[qy],delete e[Zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,r),t=t.sibling;t!==null;)xd(t,e,r),t=t.sibling}function Sd(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,r),t=t.sibling;t!==null;)Sd(t,e,r),t=t.sibling}var Jt=null,ii=!1;function Qi(t,e,r){for(r=r.child;r!==null;)Xv(t,e,r),r=r.sibling}function Xv(t,e,r){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(lc,r)}catch{}switch(r.tag){case 5:or||Pa(r,e);case 6:var i=Jt,n=ii;Jt=null,Qi(t,e,r),Jt=i,ii=n,Jt!==null&&(ii?(t=Jt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Jt.removeChild(r.stateNode));break;case 18:Jt!==null&&(ii?(t=Jt,r=r.stateNode,t.nodeType===8?Vc(t.parentNode,r):t.nodeType===1&&Vc(t,r),jo(t)):Vc(Jt,r.stateNode));break;case 4:i=Jt,n=ii,Jt=r.stateNode.containerInfo,ii=!0,Qi(t,e,r),Jt=i,ii=n;break;case 0:case 11:case 14:case 15:if(!or&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Vv(r,e,o),n=n.next}while(n!==i)}Qi(t,e,r);break;case 1:if(!or&&(Pa(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){Rt(r,e,s)}Qi(t,e,r);break;case 21:Qi(t,e,r);break;case 22:r.mode&1?(or=(i=or)||r.memoizedState!==null,Qi(t,e,r),or=i):Qi(t,e,r);break;default:Qi(t,e,r)}}function Pf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new dx),e.forEach(function(i){var n=Sx.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Qr(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Jt=s.stateNode,ii=!1;break e;case 3:Jt=s.stateNode.containerInfo,ii=!0;break e;case 4:Jt=s.stateNode.containerInfo,ii=!0;break e}s=s.return}if(Jt===null)throw Error(oe(160));Xv(a,o,n),Jt=null,ii=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){Rt(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qr(e,t),pi(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(b){Rt(t,t.return,b)}try{Uo(5,t,t.return)}catch(b){Rt(t,t.return,b)}}break;case 1:Qr(e,t),pi(t),i&512&&r!==null&&Pa(r,r.return);break;case 5:if(Qr(e,t),pi(t),i&512&&r!==null&&Pa(r,r.return),t.flags&32){var n=t.stateNode;try{Ho(n,"")}catch(b){Rt(t,t.return,b)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&fg(n,a),Xu(s,o);var c=Xu(s,a);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?yg(n,p):h==="dangerouslySetInnerHTML"?vg(n,p):h==="children"?Ho(n,p):bh(n,h,p,c)}switch(s){case"input":Hu(n,a);break;case"textarea":mg(n,a);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Ua(n,!!a.multiple,f,!1):u!==!!a.multiple&&(a.defaultValue!=null?Ua(n,!!a.multiple,a.defaultValue,!0):Ua(n,!!a.multiple,a.multiple?[]:"",!1))}n[Ko]=a}catch(b){Rt(t,t.return,b)}}break;case 6:if(Qr(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(oe(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(b){Rt(t,t.return,b)}}break;case 3:if(Qr(e,t),pi(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(b){Rt(t,t.return,b)}break;case 4:Qr(e,t),pi(t);break;case 13:Qr(e,t),pi(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(tp=Dt())),i&4&&Pf(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(or=(c=or)||h,Qr(e,t),or=c):Qr(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(p=be=h;be!==null;){switch(u=be,f=u.child,u.tag){case 0:case 11:case 14:case 15:Uo(4,u,u.return);break;case 1:Pa(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,r=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(b){Rt(i,r,b)}}break;case 5:Pa(u,u.return);break;case 22:if(u.memoizedState!==null){Nf(p);continue}}f!==null?(f.return=u,be=f):Nf(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{n=p.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=_g("display",o))}catch(b){Rt(t,t.return,b)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(b){Rt(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qr(e,t),pi(t),i&4&&Pf(t);break;case 21:break;default:Qr(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(jv(r)){var i=r;break e}r=r.return}throw Error(oe(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Ho(n,""),i.flags&=-33);var a=Cf(t);Sd(t,a,n);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Cf(t);xd(t,s,o);break;default:throw Error(oe(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function px(t,e,r){be=t,qv(t)}function qv(t,e,r){for(var i=(t.mode&1)!==0;be!==null;){var n=be,a=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||Us;if(!o){var s=n.alternate,l=s!==null&&s.memoizedState!==null||or;s=Us;var c=or;if(Us=o,(or=l)&&!c)for(be=n;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Df(n):l!==null?(l.return=o,be=l):Df(n);for(;a!==null;)be=a,qv(a),a=a.sibling;be=n,Us=s,or=c}Lf(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,be=a):Lf(t)}}function Lf(t){for(;be!==null;){var e=be;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:or||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!or)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:ri(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&mf(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}mf(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}or||e.flags&512&&yd(e)}catch(u){Rt(e,e.return,u)}}if(e===t){be=null;break}if(r=e.sibling,r!==null){r.return=e.return,be=r;break}be=e.return}}function Nf(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var r=e.sibling;if(r!==null){r.return=e.return,be=r;break}be=e.return}}function Df(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{gc(4,e)}catch(l){Rt(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){Rt(e,n,l)}}var a=e.return;try{yd(e)}catch(l){Rt(e,a,l)}break;case 5:var o=e.return;try{yd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){be=null;break}var s=e.sibling;if(s!==null){s.return=e.return,be=s;break}be=e.return}}var fx=Math.ceil,Zl=Yi.ReactCurrentDispatcher,$h=Yi.ReactCurrentOwner,Yr=Yi.ReactCurrentBatchConfig,rt=0,Zt=null,zt=null,$t=0,Dr=0,La=Rn(0),Vt=0,rs=null,Kn=0,vc=0,ep=0,Oo=null,Er=null,tp=0,Ka=1/0,Di=null,Kl=!1,bd=null,_n=null,Os=!1,hn=null,Jl=0,Fo=0,Md=null,xl=-1,Sl=0;function vr(){return rt&6?Dt():xl!==-1?xl:xl=Dt()}function yn(t){return t.mode&1?rt&2&&$t!==0?$t&-$t:Jy.transition!==null?(Sl===0&&(Sl=Lg()),Sl):(t=st,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function li(t,e,r,i){if(50<Fo)throw Fo=0,Md=null,Error(oe(185));us(t,r,i),(!(rt&2)||t!==Zt)&&(t===Zt&&(!(rt&2)&&(vc|=r),Vt===4&&cn(t,$t)),Ar(t,i),r===1&&rt===0&&!(e.mode&1)&&(Ka=Dt()+500,pc&&An()))}function Ar(t,e){var r=t.callbackNode;J_(t,e);var i=Il(t,t===Zt?$t:0);if(i===0)r!==null&&Hp(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Hp(r),e===1)t.tag===0?Ky(If.bind(null,t)):iv(If.bind(null,t)),Xy(function(){!(rt&6)&&An()}),r=null;else{switch(Ng(i)){case 1:r=Rh;break;case 4:r=Cg;break;case 16:r=Dl;break;case 536870912:r=Pg;break;default:r=Dl}r=r0(r,Zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Zv(t,e){if(xl=-1,Sl=0,rt&6)throw Error(oe(327));var r=t.callbackNode;if(Ba()&&t.callbackNode!==r)return null;var i=Il(t,t===Zt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var n=rt;rt|=2;var a=Jv();(Zt!==t||$t!==e)&&(Di=null,Ka=Dt()+500,jn(t,e));do try{vx();break}catch(s){Kv(t,s)}while(!0);Bh(),Zl.current=a,rt=n,zt!==null?e=0:(Zt=null,$t=0,e=Vt)}if(e!==0){if(e===2&&(n=Ju(t),n!==0&&(i=n,e=Ed(t,n))),e===1)throw r=rs,jn(t,0),cn(t,i),Ar(t,Dt()),r;if(e===6)cn(t,i);else{if(n=t.current.alternate,!(i&30)&&!mx(n)&&(e=Ql(t,i),e===2&&(a=Ju(t),a!==0&&(i=a,e=Ed(t,a))),e===1))throw r=rs,jn(t,0),cn(t,i),Ar(t,Dt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:zn(t,Er,Di);break;case 3:if(cn(t,i),(i&130023424)===i&&(e=tp+500-Dt(),10<e)){if(Il(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){vr(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=ad(zn.bind(null,t,Er,Di),e);break}zn(t,Er,Di);break;case 4:if(cn(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var o=31-si(i);a=1<<o,o=e[o],o>n&&(n=o),i&=~a}if(i=n,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fx(i/1960))-i,10<i){t.timeoutHandle=ad(zn.bind(null,t,Er,Di),i);break}zn(t,Er,Di);break;case 5:zn(t,Er,Di);break;default:throw Error(oe(329))}}}return Ar(t,Dt()),t.callbackNode===r?Zv.bind(null,t):null}function Ed(t,e){var r=Oo;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=Er,Er=r,e!==null&&wd(e)),t}function wd(t){Er===null?Er=t:Er.push.apply(Er,t)}function mx(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!di(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~ep,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-si(e),i=1<<r;t[r]=-1,e&=~i}}function If(t){if(rt&6)throw Error(oe(327));Ba();var e=Il(t,0);if(!(e&1))return Ar(t,Dt()),null;var r=Ql(t,e);if(t.tag!==0&&r===2){var i=Ju(t);i!==0&&(e=i,r=Ed(t,i))}if(r===1)throw r=rs,jn(t,0),cn(t,e),Ar(t,Dt()),r;if(r===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,Er,Di),Ar(t,Dt()),null}function rp(t,e){var r=rt;rt|=1;try{return t(e)}finally{rt=r,rt===0&&(Ka=Dt()+500,pc&&An())}}function Jn(t){hn!==null&&hn.tag===0&&!(rt&6)&&Ba();var e=rt;rt|=1;var r=Yr.transition,i=st;try{if(Yr.transition=null,st=1,t)return t()}finally{st=i,Yr.transition=r,rt=e,!(rt&6)&&An()}}function ip(){Dr=La.current,vt(La)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,jy(r)),zt!==null)for(r=zt.return;r!==null;){var i=r;switch(Fh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:qa(),vt(Tr),vt(hr),Xh();break;case 5:jh(i);break;case 4:qa();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Hh(i.type._context);break;case 22:case 23:ip()}r=r.return}if(Zt=t,zt=t=xn(t.current,null),$t=Dr=e,Vt=0,rs=null,ep=vc=Kn=0,Er=Oo=null,Hn!==null){for(e=0;e<Hn.length;e++)if(r=Hn[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=n,i.next=o}r.pending=i}Hn=null}return t}function Kv(t,e){do{var r=zt;try{if(Bh(),vl.current=ql,Yl){for(var i=bt.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}Yl=!1}if(Zn=0,qt=Gt=bt=null,Io=!1,$o=0,$h.current=null,r===null||r.return===null){Vt=1,rs=e,zt=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=$t,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=Sf(o);if(f!==null){f.flags&=-257,bf(f,o,s,a,e),f.mode&1&&xf(a,c,e),e=f,l=c;var m=e.updateQueue;if(m===null){var b=new Set;b.add(l),e.updateQueue=b}else m.add(l);break e}else{if(!(e&1)){xf(a,c,e),np();break e}l=Error(oe(426))}}else if(xt&&s.mode&1){var g=Sf(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),bf(g,o,s,a,e),kh(Za(l,s));break e}}a=l=Za(l,s),Vt!==4&&(Vt=2),Oo===null?Oo=[a]:Oo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=Nv(a,l,e);ff(a,d);break e;case 1:s=l;var v=a.type,M=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(_n===null||!_n.has(M)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=Dv(a,s,e);ff(a,x);break e}}a=a.return}while(a!==null)}$v(r)}catch(E){e=E,zt===r&&r!==null&&(zt=r=r.return);continue}break}while(!0)}function Jv(){var t=Zl.current;return Zl.current=ql,t===null?ql:t}function np(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Zt===null||!(Kn&268435455)&&!(vc&268435455)||cn(Zt,$t)}function Ql(t,e){var r=rt;rt|=2;var i=Jv();(Zt!==t||$t!==e)&&(Di=null,jn(t,e));do try{gx();break}catch(n){Kv(t,n)}while(!0);if(Bh(),rt=r,Zl.current=i,zt!==null)throw Error(oe(261));return Zt=null,$t=0,Vt}function gx(){for(;zt!==null;)Qv(zt)}function vx(){for(;zt!==null&&!G_();)Qv(zt)}function Qv(t){var e=t0(t.alternate,t,Dr);t.memoizedProps=t.pendingProps,e===null?$v(t):zt=e,$h.current=null}function $v(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=ux(r,e),r!==null){r.flags&=32767,zt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,zt=null;return}}else if(r=cx(r,e,Dr),r!==null){zt=r;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Vt===0&&(Vt=5)}function zn(t,e,r){var i=st,n=Yr.transition;try{Yr.transition=null,st=1,_x(t,e,r,i)}finally{Yr.transition=n,st=i}return null}function _x(t,e,r,i){do Ba();while(hn!==null);if(rt&6)throw Error(oe(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(Q_(t,a),t===Zt&&(zt=Zt=null,$t=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Os||(Os=!0,r0(Dl,function(){return Ba(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Yr.transition,Yr.transition=null;var o=st;st=1;var s=rt;rt|=4,$h.current=null,hx(t,r),Yv(r,t),ky(id),Ul=!!rd,id=rd=null,t.current=r,px(r),V_(),rt=s,st=o,Yr.transition=a}else t.current=r;if(Os&&(Os=!1,hn=t,Jl=n),a=t.pendingLanes,a===0&&(_n=null),X_(r.stateNode),Ar(t,Dt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(Kl)throw Kl=!1,t=bd,bd=null,t;return Jl&1&&t.tag!==0&&Ba(),a=t.pendingLanes,a&1?t===Md?Fo++:(Fo=0,Md=t):Fo=0,An(),null}function Ba(){if(hn!==null){var t=Ng(Jl),e=Yr.transition,r=st;try{if(Yr.transition=null,st=16>t?16:t,hn===null)var i=!1;else{if(t=hn,hn=null,Jl=0,rt&6)throw Error(oe(331));var n=rt;for(rt|=4,be=t.current;be!==null;){var a=be,o=a.child;if(be.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:Uo(8,h,a)}var p=h.child;if(p!==null)p.return=h,be=p;else for(;be!==null;){h=be;var u=h.sibling,f=h.return;if(Wv(h),h===c){be=null;break}if(u!==null){u.return=f,be=u;break}be=f}}}var m=a.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var g=b.sibling;b.sibling=null,b=g}while(b!==null)}}be=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,be=o;else e:for(;be!==null;){if(a=be,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Uo(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,be=d;break e}be=a.return}}var v=t.current;for(be=v;be!==null;){o=be;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,be=M;else e:for(o=v;be!==null;){if(s=be,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gc(9,s)}}catch(E){Rt(s,s.return,E)}if(s===o){be=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,be=x;break e}be=s.return}}if(rt=n,An(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{st=r,Yr.transition=e}}return!1}function Uf(t,e,r){e=Za(r,e),e=Nv(t,e,1),t=vn(t,e,1),e=vr(),t!==null&&(us(t,1,e),Ar(t,e))}function Rt(t,e,r){if(t.tag===3)Uf(t,t,r);else for(;e!==null;){if(e.tag===3){Uf(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_n===null||!_n.has(i))){t=Za(r,t),t=Dv(e,t,1),e=vn(e,t,1),t=vr(),e!==null&&(us(e,1,t),Ar(e,t));break}}e=e.return}}function yx(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=vr(),t.pingedLanes|=t.suspendedLanes&r,Zt===t&&($t&r)===r&&(Vt===4||Vt===3&&($t&130023424)===$t&&500>Dt()-tp?jn(t,0):ep|=r),Ar(t,e)}function e0(t,e){e===0&&(t.mode&1?(e=Ts,Ts<<=1,!(Ts&130023424)&&(Ts=4194304)):e=1);var r=vr();t=Vi(t,e),t!==null&&(us(t,e,r),Ar(t,r))}function xx(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),e0(t,r)}function Sx(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),e0(t,r)}var t0;t0=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tr.current)wr=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return wr=!1,lx(t,e,r);wr=!!(t.flags&131072)}else wr=!1,xt&&e.flags&1048576&&nv(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var n=ja(e,hr.current);za(e,r),n=qh(null,e,i,t,n,r);var a=Zh();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rr(i)?(a=!0,Bl(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Vh(e),n.updater=mc,e.stateNode=n,n._reactInternals=e,hd(e,i,t,r),e=md(null,e,i,!0,a,r)):(e.tag=0,xt&&a&&Oh(e),gr(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=Mx(i),t=ri(i,t),n){case 0:e=fd(null,e,i,t,r);break e;case 1:e=wf(null,e,i,t,r);break e;case 11:e=Mf(null,e,i,t,r);break e;case 14:e=Ef(null,e,i,ri(i.type,t),r);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:ri(i,n),fd(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:ri(i,n),wf(t,e,i,n,r);case 3:e:{if(Fv(e),t===null)throw Error(oe(387));i=e.pendingProps,a=e.memoizedState,n=a.element,uv(t,e),jl(e,i,null,r);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=Za(Error(oe(423)),e),e=Tf(t,e,i,r,n);break e}else if(i!==n){n=Za(Error(oe(424)),e),e=Tf(t,e,i,r,n);break e}else for(Or=gn(e.stateNode.containerInfo.firstChild),Fr=e,xt=!0,ni=null,r=lv(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xa(),i===n){e=Wi(t,e,r);break e}gr(t,e,i,r)}e=e.child}return e;case 5:return dv(e),t===null&&cd(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,o=n.children,nd(i,n)?o=null:a!==null&&nd(i,a)&&(e.flags|=32),Ov(t,e),gr(t,e,o,r),e.child;case 6:return t===null&&cd(e),null;case 13:return kv(t,e,r);case 4:return Wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ya(e,null,i,r):gr(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:ri(i,n),Mf(t,e,i,n,r);case 7:return gr(t,e,e.pendingProps,r),e.child;case 8:return gr(t,e,e.pendingProps.children,r),e.child;case 12:return gr(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,o=n.value,ft(Vl,i._currentValue),i._currentValue=o,a!==null)if(di(a.value,o)){if(a.children===n.children&&!Tr.current){e=Wi(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ki(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),ud(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(oe(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),ud(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}gr(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,za(e,r),n=Zr(n),i=i(n),e.flags|=1,gr(t,e,i,r),e.child;case 14:return i=e.type,n=ri(i,e.pendingProps),n=ri(i.type,n),Ef(t,e,i,n,r);case 15:return Iv(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:ri(i,n),yl(t,e),e.tag=1,Rr(i)?(t=!0,Bl(e)):t=!1,za(e,r),Lv(e,i,n),hd(e,i,n,r),md(null,e,i,!0,t,r);case 19:return zv(t,e,r);case 22:return Uv(t,e,r)}throw Error(oe(156,e.tag))};function r0(t,e){return Ag(t,e)}function bx(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xr(t,e,r,i){return new bx(t,e,r,i)}function ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mx(t){if(typeof t=="function")return ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===wh)return 14}return 2}function xn(t,e){var r=t.alternate;return r===null?(r=Xr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function bl(t,e,r,i,n,a){var o=2;if(i=t,typeof t=="function")ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sa:return Xn(r.children,n,a,e);case Mh:o=8,n|=8;break;case Ou:return t=Xr(12,r,e,n|2),t.elementType=Ou,t.lanes=a,t;case Fu:return t=Xr(13,r,e,n),t.elementType=Fu,t.lanes=a,t;case ku:return t=Xr(19,r,e,n),t.elementType=ku,t.lanes=a,t;case dg:return _c(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:o=10;break e;case ug:o=9;break e;case Eh:o=11;break e;case wh:o=14;break e;case an:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Xr(o,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function Xn(t,e,r,i){return t=Xr(7,t,i,e),t.lanes=r,t}function _c(t,e,r,i){return t=Xr(22,t,i,e),t.elementType=dg,t.lanes=r,t.stateNode={isHidden:!1},t}function Jc(t,e,r){return t=Xr(6,t,null,e),t.lanes=r,t}function Qc(t,e,r){return e=Xr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ex(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function op(t,e,r,i,n,a,o,s,l){return t=new Ex(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Xr(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(a),t}function wx(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xa,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function i0(t){if(!t)return bn;t=t._reactInternals;e:{if(ta(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var r=t.type;if(Rr(r))return rv(t,r,e)}return e}function n0(t,e,r,i,n,a,o,s,l){return t=op(r,i,!0,t,n,a,o,s,l),t.context=i0(null),r=t.current,i=vr(),n=yn(r),a=ki(i,n),a.callback=e??null,vn(r,a,n),t.current.lanes=n,us(t,n,i),Ar(t,i),t}function yc(t,e,r,i){var n=e.current,a=vr(),o=yn(n);return r=i0(r),e.context===null?e.context=r:e.pendingContext=r,e=ki(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vn(n,e,o),t!==null&&(li(t,n,o,a),gl(t,n,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Of(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function sp(t,e){Of(t,e),(t=t.alternate)&&Of(t,e)}function Tx(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}xc.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));yc(t,e,null,null)};xc.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jn(function(){yc(null,t,null,null)}),e[Gi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ug();t={blockedOn:null,target:t,priority:e};for(var r=0;r<ln.length&&e!==0&&e<ln[r].priority;r++);ln.splice(r,0,t),r===0&&Fg(t)}};function cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ff(){}function Rx(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=$l(o);a.call(c)}}var o=n0(e,i,t,0,null,!1,!1,"",Ff);return t._reactRootContainer=o,t[Gi]=o.current,qo(t.nodeType===8?t.parentNode:t),Jn(),o}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var s=i;i=function(){var c=$l(l);s.call(c)}}var l=op(t,0,!1,null,null,!1,!1,"",Ff);return t._reactRootContainer=l,t[Gi]=l.current,qo(t.nodeType===8?t.parentNode:t),Jn(function(){yc(e,l,r,i)}),l}function bc(t,e,r,i,n){var a=r._reactRootContainer;if(a){var o=a;if(typeof n=="function"){var s=n;n=function(){var l=$l(o);s.call(l)}}yc(e,o,t,n)}else o=Rx(r,e,t,n,i);return $l(o)}Dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Eo(e.pendingLanes);r!==0&&(Ah(e,r|1),Ar(e,Dt()),!(rt&6)&&(Ka=Dt()+500,An()))}break;case 13:Jn(function(){var i=Vi(t,1);if(i!==null){var n=vr();li(i,t,1,n)}}),sp(t,1)}};Ch=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var r=vr();li(e,t,134217728,r)}sp(t,134217728)}};Ig=function(t){if(t.tag===13){var e=yn(t),r=Vi(t,e);if(r!==null){var i=vr();li(r,t,e,i)}sp(t,e)}};Ug=function(){return st};Og=function(t,e){var r=st;try{return st=t,e()}finally{st=r}};qu=function(t,e,r){switch(e){case"input":if(Hu(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=hc(i);if(!n)throw Error(oe(90));pg(i),Hu(i,n)}}}break;case"textarea":mg(t,r);break;case"select":e=r.value,e!=null&&Ua(t,!!r.multiple,e,!1)}};bg=rp;Mg=Jn;var Ax={usingClientEntryPoint:!1,Events:[hs,wa,hc,xg,Sg,rp]},ho={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cx={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{lc=Fs.inject(Cx),bi=Fs}catch{}}zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;zr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(e))throw Error(oe(200));return wx(t,e,null,r)};zr.createRoot=function(t,e){if(!cp(t))throw Error(oe(299));var r=!1,i="",n=a0;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=op(t,1,!1,null,null,r,!1,i,n),t[Gi]=e.current,qo(t.nodeType===8?t.parentNode:t),new lp(e)};zr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};zr.flushSync=function(t){return Jn(t)};zr.hydrate=function(t,e,r){if(!Sc(e))throw Error(oe(200));return bc(null,t,e,!0,r)};zr.hydrateRoot=function(t,e,r){if(!cp(t))throw Error(oe(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",o=a0;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=n0(e,null,t,1,r??null,n,!1,a,o),t[Gi]=e.current,qo(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new xc(e)};zr.render=function(t,e,r){if(!Sc(e))throw Error(oe(200));return bc(null,t,e,!1,r)};zr.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(oe(40));return t._reactRootContainer?(Jn(function(){bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};zr.unstable_batchedUpdates=rp;zr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Sc(r))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return bc(t,e,r,!1,i)};zr.version="18.3.1-next-f1338f8080-20240426";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(t){console.error(t)}}o0(),ag.exports=zr;var Px=ag.exports,kf=Px;Iu.createRoot=kf.createRoot,Iu.hydrateRoot=kf.hydrateRoot;/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var Lx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pr=(t,e)=>{const r=ze.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:l,...c},h)=>ze.createElement("svg",{ref:h,...Lx,width:n,height:n,stroke:i,strokeWidth:o?Number(a)*24/Number(n):a,className:["lucide",`lucide-${Nx(t)}`,s].join(" "),...c},[...e.map(([p,u])=>ze.createElement(p,u)),...Array.isArray(l)?l:[l]]));return r.displayName=`${t}`,r};/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dx=Pr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ix=Pr("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ux=Pr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ox=Pr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fx=Pr("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kx=Pr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const up=Pr("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zx=Pr("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bx=Pr("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hx=Pr("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gx=Pr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vx=Pr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wx=Pr("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jx=Pr("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Xx=()=>{const[t,e]=ze.useState(!1),[r,i]=ze.useState(!1);ze.useEffect(()=>{const a=()=>{e(window.scrollY>10)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const n=()=>{i(!1)};return X.jsxs("header",{className:`site-header${t?" scrolled":""}`,children:[X.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[X.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px"},"aria-label":"Solar Explorer Home",children:[X.jsx(up,{style:{color:"var(--accent-purple)"}}),X.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.25rem"},children:"Solar Explorer"})]}),X.jsxs("nav",{className:"desktop-nav",children:[X.jsx("a",{href:"#explorer",className:"header-nav-link",children:"Explore"}),X.jsx("a",{href:"#planets",className:"header-nav-link",children:"Planets"}),X.jsx("a",{href:"#discover",className:"header-nav-link",children:"Discover"}),X.jsx("a",{href:"#explorer",className:"btn-primary",style:{padding:"10px 24px",fontSize:"1rem"},children:"Start Exploring"})]}),X.jsx("button",{className:"mobile-nav-toggle",onClick:()=>i(!r),"aria-expanded":r,"aria-label":"Toggle navigation menu",children:r?X.jsx(Vx,{}):X.jsx(kx,{})})]}),r&&X.jsxs("nav",{className:"mobile-nav",role:"navigation",children:[X.jsx("a",{href:"#explorer",onClick:n,children:"Explore"}),X.jsx("a",{href:"#planets",onClick:n,children:"Planets"}),X.jsx("a",{href:"#discover",onClick:n,children:"Discover"}),X.jsx("a",{href:"#explorer",onClick:n,className:"btn-primary",style:{alignSelf:"flex-start"},children:"Start Exploring"})]}),X.jsx("style",{children:`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          padding: 16px 0;
        }
        .site-header.scrolled {
          background-color: rgba(250, 249, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--border-subtle);
        }
        .desktop-nav {
          display: none;
          gap: 32px;
          align-items: center;
        }
        .header-nav-link {
          font-weight: 500;
          transition: color 0.18s ease;
        }
        .header-nav-link:hover {
          color: var(--accent-purple);
        }
        .mobile-nav-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          color: var(--text-primary);
        }
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--bg-page);
          border-bottom: 1px solid var(--border-subtle);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .mobile-nav a {
          font-size: 1.25rem;
          font-weight: 500;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `})]})},Yx=()=>X.jsxs("section",{style:{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",paddingTop:"80px",overflow:"hidden"},children:[X.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap-reverse",gap:"48px",position:"relative",zIndex:2},children:[X.jsxs("div",{style:{flex:"1 1 500px",maxWidth:"650px",padding:"40px 0"},children:[X.jsx("div",{style:{color:"var(--accent-purple)",fontWeight:600,letterSpacing:"0.1em",marginBottom:"16px",fontSize:"1rem",fontFamily:"var(--font-display)"},children:"A JOURNEY BEYOND EARTH"}),X.jsxs("h1",{style:{fontSize:"clamp(4rem, 8vw, 7rem)",lineHeight:1,marginBottom:"24px",textTransform:"uppercase"},children:[X.jsx("div",{style:{color:"#100D28"},children:"EXPLORE THE"}),X.jsx("div",{className:"text-gradient",children:"SOLAR SYSTEM"})]}),X.jsx("p",{style:{fontSize:"1.25rem",color:"var(--text-secondary)",marginBottom:"40px",maxWidth:"520px",lineHeight:1.5},children:"Discover incredible worlds, follow their orbits, and explore the wonders of our cosmic neighborhood."}),X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",marginBottom:"32px"},children:[X.jsx("a",{href:"#explorer",className:"btn-primary",children:"Start Exploring"}),X.jsx("a",{href:"#planets",className:"btn-secondary",children:"Meet the Planets"})]}),X.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.875rem",fontWeight:500,display:"flex",alignItems:"center",gap:"12px"},children:[X.jsx("span",{children:"8 planets"}),X.jsx("span",{style:{color:"var(--border-subtle)"},children:"•"}),X.jsx("span",{children:"1 star"}),X.jsx("span",{style:{color:"var(--border-subtle)"},children:"•"}),X.jsx("span",{children:"Endless discovery"})]})]}),X.jsx("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:X.jsx("div",{style:{width:"100%",maxWidth:"600px",aspectRatio:"1/1",borderRadius:"50%",overflow:"hidden",boxShadow:"0 30px 60px rgba(78, 85, 216, 0.15)",border:"8px solid white",position:"relative",transform:"translateX(5%)",animation:"float 6s ease-in-out infinite"},children:X.jsx("img",{src:"/Solar/hero-artwork.jpg",alt:"Artistic rendering of the solar system",style:{width:"100%",height:"100%",objectFit:"cover"}})})})]}),X.jsx("div",{style:{position:"absolute",top:"-10%",right:"-10%",width:"60vw",height:"60vw",borderRadius:"50%",background:"radial-gradient(circle, rgba(240,236,252,0.8) 0%, rgba(250,249,255,0) 70%)",zIndex:0,pointerEvents:"none"}}),X.jsx("style",{children:`
        @keyframes float {
          0% { transform: translate(5%, 0px); }
          50% { transform: translate(5%, -15px); }
          100% { transform: translate(5%, 0px); }
        }
        @media (max-width: 900px) {
          @keyframes float {
            0% { transform: translate(0%, 0px); }
            50% { transform: translate(0%, -10px); }
            100% { transform: translate(0%, 0px); }
          }
          .hero-artwork {
            transform: none !important;
          }
        }
      `})]});/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const dp="186",Ha={ROTATE:0,DOLLY:1,PAN:2},Na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qx=0,zf=1,Zx=2,Ml=1,Kx=2,To=3,Mn=0,lr=1,jr=2,zi=0,ko=1,is=2,Bf=3,Hf=4,Jx=5,ya=100,Qx=101,$x=102,eS=103,tS=104,rS=200,iS=201,nS=202,aS=203,s0=204,l0=205,oS=206,sS=207,lS=208,cS=209,uS=210,dS=211,hS=212,pS=213,fS=214,Td=0,Rd=1,Ad=2,ns=3,Cd=4,Pd=5,Ld=6,Nd=7,c0=0,mS=1,gS=2,Ei=0,u0=1,d0=2,h0=3,p0=4,f0=5,m0=6,g0=7,v0=300,Qn=301,Ja=302,$c=303,eu=304,Mc=306,Cr=1e3,At=1001,Dd=1002,Qt=1003,vS=1004,ks=1005,sr=1006,tu=1007,Vn=1008,Ur=1009,_0=1010,y0=1011,as=1012,hp=1013,wi=1014,xi=1015,Ti=1016,pp=1017,fp=1018,os=1020,x0=35902,S0=35899,b0=1021,M0=1022,oi=1023,ji=1026,Wn=1027,E0=1028,mp=1029,$n=1030,gp=1031,vp=1033,El=33776,wl=33777,Tl=33778,Rl=33779,Id=35840,Ud=35841,Od=35842,Fd=35843,kd=36196,zd=37492,Bd=37496,Hd=37488,Gd=37489,ec=37490,Vd=37491,Wd=37808,jd=37809,Xd=37810,Yd=37811,qd=37812,Zd=37813,Kd=37814,Jd=37815,Qd=37816,$d=37817,eh=37818,th=37819,rh=37820,ih=37821,nh=36492,ah=36494,oh=36495,sh=36283,lh=36284,tc=36285,ch=36286,_S=3200,uh=0,yS=1,un="",yt="srgb",rc="srgb-linear",ic="linear",at="srgb",ru=7680,xS=519,SS=512,bS=513,MS=514,_p=515,ES=516,wS=517,yp=518,TS=519,RS=35044,Gf="300 es",Si=2e3,ss=2001;function AS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CS(){const t=nc("canvas");return t.style.display="block",t}const Vf={};function Wf(...t){const e="THREE."+t.shift();console.log(e,...t)}function w0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const r=t[1];r&&r.isStackTrace?t[0]+=" "+r.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=w0(t);const e="THREE."+t.shift();{const r=t[0];r&&r.isStackTrace?console.warn(r.getError(e)):console.warn(e,...t)}}function tt(...t){t=w0(t);const e="THREE."+t.shift();{const r=t[0];r&&r.isStackTrace?console.error(r.getError(e)):console.error(e,...t)}}function Ga(...t){const e=t.join(" ");e in Vf||(Vf[e]=!0,Oe(...t))}function PS(t,e,r){return new Promise(function(i,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}const LS={[Td]:Rd,[Ad]:Ld,[Cd]:Nd,[ns]:Pd,[Rd]:Td,[Ld]:Ad,[Nd]:Cd,[Pd]:ns};class Cn{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const a=n.indexOf(r);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const r=this._listeners;if(r===void 0)return;const i=r[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,e);e.target=null}}}const nr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,dh=180/Math.PI;function fs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nr[t&255]+nr[t>>8&255]+nr[t>>16&255]+nr[t>>24&255]+"-"+nr[e&255]+nr[e>>8&255]+"-"+nr[e>>16&15|64]+nr[e>>24&255]+"-"+nr[r&63|128]+nr[r>>8&255]+"-"+nr[r>>16&255]+nr[r>>24&255]+nr[i&255]+nr[i>>8&255]+nr[i>>16&255]+nr[i>>24&255]).toLowerCase()}function Ke(t,e,r){return Math.max(e,Math.min(r,t))}function NS(t,e){return(t%e+e)%e}function iu(t,e,r){return(1-r)*t+r*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function br(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const DS={DEG2RAD:Al},T0=class{constructor(e=0,r=0){this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Ke(this.x,e.x,r.x),this.y=Ke(this.y,e.y,r.y),this}clampScalar(e,r){return this.x=Ke(this.x,e,r),this.y=Ke(this.y,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};T0.prototype.isVector2=!0;let ke=T0;class En{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,o,s){let l=i[n+0],c=i[n+1],h=i[n+2],p=i[n+3],u=a[o+0],f=a[o+1],m=a[o+2],b=a[o+3];if(p!==b||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+p*b;g<0&&(u=-u,f=-f,m=-m,b=-b,g=-g);let d=1-s;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);d=Math.sin(d*v)/M,s=Math.sin(s*v)/M,l=l*d+u*s,c=c*d+f*s,h=h*d+m*s,p=p*d+b*s}else{l=l*d+u*s,c=c*d+f*s,h=h*d+m*s,p=p*d+b*s;const v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[r]=l,e[r+1]=c,e[r+2]=h,e[r+3]=p}static multiplyQuaternionsFlat(e,r,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],h=i[n+3],p=a[o],u=a[o+1],f=a[o+2],m=a[o+3];return e[r]=s*m+h*p+l*f-c*u,e[r+1]=l*m+h*u+c*p-s*f,e[r+2]=c*m+h*f+s*u-l*p,e[r+3]=h*m-s*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(n/2),p=s(a/2),u=l(i/2),f=l(n/2),m=l(a/2);switch(o){case"XYZ":this._x=u*h*p+c*f*m,this._y=c*f*p-u*h*m,this._z=c*h*m+u*f*p,this._w=c*h*p-u*f*m;break;case"YXZ":this._x=u*h*p+c*f*m,this._y=c*f*p-u*h*m,this._z=c*h*m-u*f*p,this._w=c*h*p+u*f*m;break;case"ZXY":this._x=u*h*p-c*f*m,this._y=c*f*p+u*h*m,this._z=c*h*m+u*f*p,this._w=c*h*p-u*f*m;break;case"ZYX":this._x=u*h*p-c*f*m,this._y=c*f*p+u*h*m,this._z=c*h*m-u*f*p,this._w=c*h*p+u*f*m;break;case"YZX":this._x=u*h*p+c*f*m,this._y=c*f*p+u*h*m,this._z=c*h*m-u*f*p,this._w=c*h*p-u*f*m;break;case"XZY":this._x=u*h*p-c*f*m,this._y=c*f*p-u*h*m,this._z=c*h*m+u*f*p,this._w=c*h*p+u*f*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],o=r[1],s=r[5],l=r[9],c=r[2],h=r[6],p=r[10],u=i+s+p;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(o-n)*f}else if(i>s&&i>p){const f=2*Math.sqrt(1+i-s-p);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(a+c)/f}else if(s>p){const f=2*Math.sqrt(1+s-i-p);this._w=(a-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-i-s);this._w=(o-n)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,o=e._w,s=r._x,l=r._y,c=r._z,h=r._w;return this._x=i*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-n*s,this._w=o*h-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){let i=e._x,n=e._y,a=e._z,o=e._w,s=this.dot(e);s<0&&(i=-i,n=-n,a=-a,o=-o,s=-s);let l=1-r;if(s<.9995){const c=Math.acos(s),h=Math.sin(c);l=Math.sin(l*c)/h,r=Math.sin(r*c)/h,this._x=this._x*l+i*r,this._y=this._y*l+n*r,this._z=this._z*l+a*r,this._w=this._w*l+o*r,this._onChangeCallback()}else this._x=this._x*l+i*r,this._y=this._y*l+n*r,this._z=this._z*l+a*r,this._w=this._w*l+o*r,this.normalize();return this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const R0=class{constructor(e=0,r=0,i=0){this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(jf.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),h=2*(s*r-a*n),p=2*(a*i-o*r);return this.x=r+l*c+o*p-s*h,this.y=i+l*h+s*c-a*p,this.z=n+l*p+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Ke(this.x,e.x,r.x),this.y=Ke(this.y,e.y,r.y),this.z=Ke(this.z,e.z,r.z),this}clampScalar(e,r){return this.x=Ke(this.x,e,r),this.y=Ke(this.y,e,r),this.z=Ke(this.z,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,o=r.x,s=r.y,l=r.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};R0.prototype.isVector3=!0;let F=R0;const nu=new F,jf=new En,A0=class{constructor(e,r,i,n,a,o,s,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c)}set(e,r,i,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=r,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],m=i[8],b=n[0],g=n[3],d=n[6],v=n[1],M=n[4],x=n[7],E=n[2],w=n[5],T=n[8];return a[0]=o*b+s*v+l*E,a[3]=o*g+s*M+l*w,a[6]=o*d+s*x+l*T,a[1]=c*b+h*v+p*E,a[4]=c*g+h*M+p*w,a[7]=c*d+h*x+p*T,a[2]=u*b+f*v+m*E,a[5]=u*g+f*M+m*w,a[8]=u*d+f*x+m*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return r*o*h-r*s*c-i*a*h+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],p=h*o-s*c,u=s*l-h*a,f=c*a-o*l,m=r*p+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=p*b,e[1]=(n*c-h*i)*b,e[2]=(s*i-n*o)*b,e[3]=u*b,e[4]=(h*r-n*l)*b,e[5]=(n*a-s*r)*b,e[6]=f*b,e[7]=(i*l-c*r)*b,e[8]=(o*r-i*a)*b,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+r,0,0,1),this}scale(e,r){return Ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(au.makeScale(e,r)),this}rotate(e){return Ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(au.makeRotation(-e)),this}translate(e,r){return Ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(au.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};A0.prototype.isMatrix3=!0;let je=A0;const au=new je,Xf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const t={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(n,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===at&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(n.r=Va(n.r),n.g=Va(n.g),n.b=Va(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===un?ic:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,o){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[rc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),t}const Qe=IS();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Va(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let oa;class US{static getDataURL(e,r="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{oa===void 0&&(oa=nc("canvas")),oa.width=e.width,oa.height=e.height;const n=oa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=oa}return i.toDataURL(r)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=nc("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Bi(a[o]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(Bi(r[i]/255)*255):r[i]=Bi(r[i]);return{data:r,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class xp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const r=this.data;return typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement?e.set(r.videoWidth,r.videoHeight,0):typeof VideoFrame<"u"&&r instanceof VideoFrame?e.set(r.displayWidth,r.displayHeight,0):r!==null?e.set(r.width,r.height,r.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(ou(n[o].image)):a.push(ou(n[o]))}else a=ou(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let FS=0;const su=new F;class cr extends Cn{constructor(e=cr.DEFAULT_IMAGE,r=cr.DEFAULT_MAPPING,i=At,n=At,a=sr,o=Vn,s=oi,l=Ur,c=cr.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=fs(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const r in e){const i=e[r];if(i===void 0){Oe(`Texture.setValues(): parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){Oe(`Texture.setValues(): property '${r}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cr.DEFAULT_IMAGE=null;cr.DEFAULT_MAPPING=v0;cr.DEFAULT_ANISOTROPY=1;const C0=class{constructor(e=0,r=0,i=0,n=1){this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*r+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*r+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*r+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*r+o[7]*i+o[11]*n+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],p=o[5],u=o[9],f=o[2],m=o[6],b=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(u-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(u+m)<.1&&Math.abs(s+p+b-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const d=(s+1)/2,v=(p+1)/2,M=(b+1)/2,x=(l+h)/4,E=(c+f)/4,w=(u+m)/4;return d>v&&d>M?d<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(d),n=x/i,a=E/i):v>M?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=x/n,a=w/n):M<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),i=E/a,n=w/a),this.set(i,n,a,r),this}let g=Math.sqrt((m-u)*(m-u)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(m-u)/g,this.y=(c-f)/g,this.z=(h-l)/g,this.w=Math.acos((s+p+b-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Ke(this.x,e.x,r.x),this.y=Ke(this.y,e.y,r.y),this.z=Ke(this.z,e.z,r.z),this.w=Ke(this.w,e.w,r.w),this}clampScalar(e,r){return this.x=Ke(this.x,e,r),this.y=Ke(this.y,e,r),this.z=Ke(this.z,e,r),this.w=Ke(this.w,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};C0.prototype.isVector4=!0;let It=C0;class kS extends Cn{constructor(e=1,r=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sr,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=i.depth,this.scissor=new It(0,0,e,r),this.scissorTest=!1,this.viewport=new It(0,0,e,r),this.textures=[];const n={width:e,height:r,depth:i.depth},a=new cr(n),o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const r={minFilter:sr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(r.mapping=e.mapping),e.wrapS!==void 0&&(r.wrapS=e.wrapS),e.wrapT!==void 0&&(r.wrapT=e.wrapT),e.wrapR!==void 0&&(r.wrapR=e.wrapR),e.magFilter!==void 0&&(r.magFilter=e.magFilter),e.minFilter!==void 0&&(r.minFilter=e.minFilter),e.format!==void 0&&(r.format=e.format),e.type!==void 0&&(r.type=e.type),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(r.colorSpace=e.colorSpace),e.flipY!==void 0&&(r.flipY=e.flipY),e.generateMipmaps!==void 0&&(r.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(r.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(r)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++){this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.textures[r].image);this.textures[r].source=new xp(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const r=e.depthTexture.clone();r.renderTarget=null,this.depthTexture=r}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends kS{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class P0 extends cr{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends cr{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const L0=class N0{constructor(e,r,i,n,a,o,s,l,c,h,p,u,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c,h,p,u,f,m,b,g)}set(e,r,i,n,a,o,s,l,c,h,p,u,f,m,b,g){const d=this.elements;return d[0]=e,d[4]=r,d[8]=i,d[12]=n,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=m,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new N0().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return this.determinantAffine()===0?(e.set(1,0,0),r.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const r=this.elements,i=e.elements,n=1/sa.setFromMatrixColumn(e,0).length(),a=1/sa.setFromMatrixColumn(e,1).length(),o=1/sa.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*o,r[9]=i[9]*o,r[10]=i[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=o*h,f=o*p,m=s*h,b=s*p;r[0]=l*h,r[4]=-l*p,r[8]=c,r[1]=f+m*c,r[5]=u-b*c,r[9]=-s*l,r[2]=b-u*c,r[6]=m+f*c,r[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*p,m=c*h,b=c*p;r[0]=u+b*s,r[4]=m*s-f,r[8]=o*c,r[1]=o*p,r[5]=o*h,r[9]=-s,r[2]=f*s-m,r[6]=b+u*s,r[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*p,m=c*h,b=c*p;r[0]=u-b*s,r[4]=-o*p,r[8]=m+f*s,r[1]=f+m*s,r[5]=o*h,r[9]=b-u*s,r[2]=-o*c,r[6]=s,r[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*p,m=s*h,b=s*p;r[0]=l*h,r[4]=m*c-f,r[8]=u*c+b,r[1]=l*p,r[5]=b*c+u,r[9]=f*c-m,r[2]=-c,r[6]=s*l,r[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,m=s*l,b=s*c;r[0]=l*h,r[4]=b-u*p,r[8]=m*p+f,r[1]=p,r[5]=o*h,r[9]=-s*h,r[2]=-c*h,r[6]=f*p+m,r[10]=u-b*p}else if(e.order==="XZY"){const u=o*l,f=o*c,m=s*l,b=s*c;r[0]=l*h,r[4]=-p,r[8]=c*h,r[1]=u*p+b,r[5]=o*h,r[9]=f*p-m,r[2]=m*p-f,r[6]=s*h,r[10]=b*p+u}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BS,e,HS)}lookAt(e,r,i){const n=this.elements;return Lr.subVectors(e,r),Lr.lengthSq()===0&&(Lr.z=1),Lr.normalize(),$i.crossVectors(i,Lr),$i.lengthSq()===0&&(Math.abs(i.z)===1?Lr.x+=1e-4:Lr.z+=1e-4,Lr.normalize(),$i.crossVectors(i,Lr)),$i.normalize(),zs.crossVectors(Lr,$i),n[0]=$i.x,n[4]=zs.x,n[8]=Lr.x,n[1]=$i.y,n[5]=zs.y,n[9]=Lr.y,n[2]=$i.z,n[6]=zs.z,n[10]=Lr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],m=i[2],b=i[6],g=i[10],d=i[14],v=i[3],M=i[7],x=i[11],E=i[15],w=n[0],T=n[4],y=n[8],R=n[12],C=n[1],U=n[5],k=n[9],Y=n[13],N=n[2],q=n[6],$=n[10],Q=n[14],G=n[3],B=n[7],W=n[11],O=n[15];return a[0]=o*w+s*C+l*N+c*G,a[4]=o*T+s*U+l*q+c*B,a[8]=o*y+s*k+l*$+c*W,a[12]=o*R+s*Y+l*Q+c*O,a[1]=h*w+p*C+u*N+f*G,a[5]=h*T+p*U+u*q+f*B,a[9]=h*y+p*k+u*$+f*W,a[13]=h*R+p*Y+u*Q+f*O,a[2]=m*w+b*C+g*N+d*G,a[6]=m*T+b*U+g*q+d*B,a[10]=m*y+b*k+g*$+d*W,a[14]=m*R+b*Y+g*Q+d*O,a[3]=v*w+M*C+x*N+E*G,a[7]=v*T+M*U+x*q+E*B,a[11]=v*y+M*k+x*$+E*W,a[15]=v*R+M*Y+x*Q+E*O,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],f=e[14],m=e[3],b=e[7],g=e[11],d=e[15],v=l*f-c*u,M=s*f-c*p,x=s*u-l*p,E=o*f-c*h,w=o*u-l*h,T=o*p-s*h;return r*(b*v-g*M+d*x)-i*(m*v-g*E+d*w)+n*(m*M-b*E+d*T)-a*(m*x-b*w+g*T)}determinantAffine(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[1],o=e[5],s=e[9],l=e[2],c=e[6],h=e[10];return r*(o*h-s*c)-i*(a*h-s*l)+n*(a*c-o*l)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],f=e[11],m=e[12],b=e[13],g=e[14],d=e[15],v=r*s-i*o,M=r*l-n*o,x=r*c-a*o,E=i*l-n*s,w=i*c-a*s,T=n*c-a*l,y=h*b-p*m,R=h*g-u*m,C=h*d-f*m,U=p*g-u*b,k=p*d-f*b,Y=u*d-f*g,N=v*Y-M*k+x*U+E*C-w*R+T*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/N;return e[0]=(s*Y-l*k+c*U)*q,e[1]=(n*k-i*Y-a*U)*q,e[2]=(b*T-g*w+d*E)*q,e[3]=(u*w-p*T-f*E)*q,e[4]=(l*C-o*Y-c*R)*q,e[5]=(r*Y-n*C+a*R)*q,e[6]=(g*x-m*T-d*M)*q,e[7]=(h*T-u*x+f*M)*q,e[8]=(o*k-s*C+c*y)*q,e[9]=(i*C-r*k-a*y)*q,e[10]=(m*w-b*x+d*v)*q,e[11]=(p*x-h*w-f*v)*q,e[12]=(s*R-o*U-l*y)*q,e[13]=(r*U-i*R+n*y)*q,e[14]=(b*M-m*E-g*v)*q,e[15]=(h*E-p*M+u*v)*q,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+i,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,c=a+a,h=o+o,p=s+s,u=a*c,f=a*h,m=a*p,b=o*h,g=o*p,d=s*p,v=l*c,M=l*h,x=l*p,E=i.x,w=i.y,T=i.z;return n[0]=(1-(b+d))*E,n[1]=(f+x)*E,n[2]=(m-M)*E,n[3]=0,n[4]=(f-x)*w,n[5]=(1-(u+d))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(m+M)*T,n[9]=(g-v)*T,n[10]=(1-(u+b))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),r.identity(),this;let o=sa.set(n[0],n[1],n[2]).length();const s=sa.set(n[4],n[5],n[6]).length(),l=sa.set(n[8],n[9],n[10]).length();a<0&&(o=-o),$r.copy(this);const c=1/o,h=1/s,p=1/l;return $r.elements[0]*=c,$r.elements[1]*=c,$r.elements[2]*=c,$r.elements[4]*=h,$r.elements[5]*=h,$r.elements[6]*=h,$r.elements[8]*=p,$r.elements[9]*=p,$r.elements[10]*=p,r.setFromRotationMatrix($r),i.x=o,i.y=s,i.z=l,this}makePerspective(e,r,i,n,a,o,s=Si,l=!1){const c=this.elements,h=2*a/(r-e),p=2*a/(i-n),u=(r+e)/(r-e),f=(i+n)/(i-n);let m,b;if(l)m=a/(o-a),b=o*a/(o-a);else if(s===Si)m=-(o+a)/(o-a),b=-2*o*a/(o-a);else if(s===ss)m=-o/(o-a),b=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,r,i,n,a,o,s=Si,l=!1){const c=this.elements,h=2/(r-e),p=2/(i-n),u=-(r+e)/(r-e),f=-(i+n)/(i-n);let m,b;if(l)m=1/(o-a),b=o/(o-a);else if(s===Si)m=-2/(o-a),b=-(o+a)/(o-a);else if(s===ss)m=-1/(o-a),b=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}};L0.prototype.isMatrix4=!0;let Mt=L0;const sa=new F,$r=new Mt,BS=new F(0,0,0),HS=new F(1,1,1),$i=new F,zs=new F,Lr=new F,qf=new Mt,Zf=new En;class wn{constructor(e=0,r=0,i=0,n=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],p=n[2],u=n[6],f=n[10];switch(r){case"XYZ":this._y=Math.asin(Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const Kf=new F,la=new En,Ai=new Mt,Bs=new F,fo=new F,VS=new F,WS=new En,Jf=new F(1,0,0),Qf=new F(0,1,0),$f=new F(0,0,1),em={type:"added"},jS={type:"removed"},ca={type:"childadded",child:null},lu={type:"childremoved",child:null};class ur extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ur.DEFAULT_UP.clone();const e=new F,r=new wn,i=new En,n=new F(1,1,1);function a(){i.setFromEuler(r,!1)}function o(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=ur.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return la.setFromAxisAngle(e,r),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,r){return la.setFromAxisAngle(e,r),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,r){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?Bs.copy(e):Bs.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(fo,Bs,this.up):Ai.lookAt(Bs,fo,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),la.setFromRotationMatrix(Ai),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),ca.child=e,this.dispatchEvent(ca),ca.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(jS),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const r=e.x,i=e.y,n=e.z,a=this.matrix.elements;a[12]+=r-a[0]*r-a[4]*i-a[8]*n,a[13]+=i-a[1]*r-a[5]*i-a[9]*n,a[14]+=n-a[2]*r-a[6]*i-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),r===!0){const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(s=>({...s})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(r){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ur.DEFAULT_UP=new F(0,1,0);ur.DEFAULT_MATRIX_AUTO_UPDATE=!0;ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ro extends ur{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const g=r.getJointPose(b,i),d=this._getHandJoint(c,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function uu(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ge{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,r),this}setRGB(e,r,i,n=Qe.workingColorSpace){return this.r=e,this.g=r,this.b=i,Qe.colorSpaceToWorking(this,n),this}setHSL(e,r,i,n=Qe.workingColorSpace){if(e=NS(e,1),r=Ke(r,0,1),i=Ke(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,o=2*i-a;this.r=uu(o,a,e+1/3),this.g=uu(o,a,e),this.b=uu(o,a,e-1/3)}return Qe.colorSpaceToWorking(this,n),this}setStyle(e,r=yt){function i(a){a!==void 0&&parseFloat(a)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:Oe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=yt){const i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,r):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Qe.workingToColorSpace(ar.copy(this),e),Math.round(Ke(ar.r*255,0,255))*65536+Math.round(Ke(ar.g*255,0,255))*256+Math.round(Ke(ar.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Qe.workingColorSpace){Qe.workingToColorSpace(ar.copy(this),r);const i=ar.r,n=ar.g,a=ar.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const p=o-s;switch(c=h<=.5?p/(o+s):p/(2-o-s),o){case i:l=(n-a)/p+(n<a?6:0);break;case n:l=(a-i)/p+2;break;case a:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,r=Qe.workingColorSpace){return Qe.workingToColorSpace(ar.copy(this),r),e.r=ar.r,e.g=ar.g,e.b=ar.b,e}getStyle(e=yt){Qe.workingToColorSpace(ar.copy(this),e);const r=ar.r,i=ar.g,n=ar.b;return e!==yt?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(en),this.setHSL(en.h+e,en.s+r,en.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(en),e.getHSL(Hs);const i=iu(en.h,Hs.h,r),n=iu(en.s,Hs.s,r),a=iu(en.l,Hs.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ar=new Ge;Ge.NAMES=D0;class YS extends ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),r.object.backgroundBlurriness=this.backgroundBlurriness,r.object.backgroundIntensity=this.backgroundIntensity,r.object.backgroundRotation=this.backgroundRotation.toArray(),r.object.environmentIntensity=this.environmentIntensity,r.object.environmentRotation=this.environmentRotation.toArray(),r}}const ei=new F,Ci=new F,du=new F,Pi=new F,ua=new F,da=new F,tm=new F,hu=new F,pu=new F,fu=new F,mu=new It,gu=new It,vu=new It;class ai{constructor(e=new F,r=new F,i=new F){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),ei.subVectors(e,r),n.cross(ei);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){ei.subVectors(n,r),Ci.subVectors(i,r),du.subVectors(e,r);const o=ei.dot(ei),s=ei.dot(Ci),l=ei.dot(du),c=Ci.dot(Ci),h=Ci.dot(du),p=o*c-s*s;if(p===0)return a.set(0,0,0),null;const u=1/p,f=(c*l-s*h)*u,m=(o*h-s*l)*u;return a.set(1-f-m,m,f)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,r,i,n,a,o,s,l){return this.getBarycoord(e,r,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(s,Pi.z),l)}static getInterpolatedAttribute(e,r,i,n,a,o){return mu.setScalar(0),gu.setScalar(0),vu.setScalar(0),mu.fromBufferAttribute(e,r),gu.fromBufferAttribute(e,i),vu.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(mu,a.x),o.addScaledVector(gu,a.y),o.addScaledVector(vu,a.z),o}static isFrontFacing(e,r,i,n){return ei.subVectors(i,r),Ci.subVectors(e,r),ei.cross(Ci).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return ai.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return ai.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let o,s;ua.subVectors(n,i),da.subVectors(a,i),hu.subVectors(e,i);const l=ua.dot(hu),c=da.dot(hu);if(l<=0&&c<=0)return r.copy(i);pu.subVectors(e,n);const h=ua.dot(pu),p=da.dot(pu);if(h>=0&&p<=h)return r.copy(n);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),r.copy(i).addScaledVector(ua,o);fu.subVectors(e,a);const f=ua.dot(fu),m=da.dot(fu);if(m>=0&&f<=m)return r.copy(a);const b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return s=c/(c-m),r.copy(i).addScaledVector(da,s);const g=h*m-f*p;if(g<=0&&p-h>=0&&f-m>=0)return tm.subVectors(a,n),s=(p-h)/(p-h+(f-m)),r.copy(n).addScaledVector(tm,s);const d=1/(g+b+u);return o=b*d,s=u*d,r.copy(i).addScaledVector(ua,o).addScaledVector(da,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ms{constructor(e=new F(1/0,1/0,1/0),r=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(ti.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(ti.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=ti.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(a,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Vs.subVectors(this.max,mo),ha.subVectors(e.a,mo),pa.subVectors(e.b,mo),fa.subVectors(e.c,mo),tn.subVectors(pa,ha),rn.subVectors(fa,pa),Dn.subVectors(ha,fa);let r=[0,-tn.z,tn.y,0,-rn.z,rn.y,0,-Dn.z,Dn.y,tn.z,0,-tn.x,rn.z,0,-rn.x,Dn.z,0,-Dn.x,-tn.y,tn.x,0,-rn.y,rn.x,0,-Dn.y,Dn.x,0];return!_u(r,ha,pa,fa,Vs)||(r=[1,0,0,0,1,0,0,0,1],!_u(r,ha,pa,fa,Vs))?!1:(Ws.crossVectors(tn,rn),r=[Ws.x,Ws.y,Ws.z],_u(r,ha,pa,fa,Vs))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,Gs=new ms,ha=new F,pa=new F,fa=new F,tn=new F,rn=new F,Dn=new F,mo=new F,Vs=new F,Ws=new F,In=new F;function _u(t,e,r,i,n){for(let a=0,o=t.length-3;a<=o;a+=3){In.fromArray(t,a);const s=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=e.dot(In),c=r.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const kt=new F,js=new ke;let qS=0;class ui extends Cn{constructor(e,r,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qS++}),this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=RS,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)js.fromBufferAttribute(this,r),js.applyMatrix3(e),this.setXY(r,js.x,js.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)kt.fromBufferAttribute(this,r),kt.applyMatrix3(e),this.setXYZ(r,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)kt.fromBufferAttribute(this,r),kt.applyMatrix4(e),this.setXYZ(r,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)kt.fromBufferAttribute(this,r),kt.applyNormalMatrix(e),this.setXYZ(r,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)kt.fromBufferAttribute(this,r),kt.transformDirection(e),this.setXYZ(r,kt.x,kt.y,kt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=br(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=po(r,this.array)),r}setX(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=po(r,this.array)),r}setY(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=po(r,this.array)),r}setZ(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=po(r,this.array)),r}setW(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),i=br(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),i=br(i,this.array),n=br(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),i=br(i,this.array),n=br(n,this.array),a=br(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class I0 extends ui{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class U0 extends ui{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class dr extends ui{constructor(e,r,i){super(new Float32Array(e),r,i)}}const ZS=new ms,go=new F,yu=new F;class gs{constructor(e=new F,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):ZS.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const r=go.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(go,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(yu)),this.expandByPoint(go.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let KS=0;const Gr=new Mt,xu=new ur,ma=new F,Nr=new ms,vo=new ms,Yt=new F;class _r extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AS(e)?U0:I0)(e,1):this.index=e,this}setIndirect(e,r=0){return this.indirect=e,this.indirectOffset=r,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gr.makeRotationFromQuaternion(e),this.applyMatrix4(Gr),this}rotateX(e){return Gr.makeRotationX(e),this.applyMatrix4(Gr),this}rotateY(e){return Gr.makeRotationY(e),this.applyMatrix4(Gr),this}rotateZ(e){return Gr.makeRotationZ(e),this.applyMatrix4(Gr),this}translate(e,r,i){return Gr.makeTranslation(e,r,i),this.applyMatrix4(Gr),this}scale(e,r,i){return Gr.makeScale(e,r,i),this.applyMatrix4(Gr),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const r=this.getAttribute("position");if(r===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dr(i,3))}else{const i=Math.min(e.length,r.count);for(let n=0;n<i;n++){const a=e[n];r.setXYZ(n,a.x,a.y,a.z||0)}e.length>r.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];vo.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(Nr.min,vo.min),Nr.expandByPoint(Yt),Yt.addVectors(Nr.max,vo.max),Nr.expandByPoint(Yt)):(Nr.expandByPoint(vo.min),Nr.expandByPoint(vo.max))}Nr.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)Yt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Yt));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)Yt.fromBufferAttribute(s,c),l&&(ma.fromBufferAttribute(e,c),Yt.add(ma)),n=Math.max(n,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const s=[],l=[];for(let y=0;y<i.count;y++)s[y]=new F,l[y]=new F;const c=new F,h=new F,p=new F,u=new ke,f=new ke,m=new ke,b=new F,g=new F;function d(y,R,C){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,C),u.fromBufferAttribute(a,y),f.fromBufferAttribute(a,R),m.fromBufferAttribute(a,C),h.sub(c),p.sub(c),f.sub(u),m.sub(u);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(U),g.copy(p).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(U),s[y].add(b),s[R].add(b),s[C].add(b),l[y].add(g),l[R].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,R=v.length;y<R;++y){const C=v[y],U=C.start,k=C.count;for(let Y=U,N=U+k;Y<N;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new F,x=new F,E=new F,w=new F;function T(y){E.fromBufferAttribute(n,y),w.copy(E);const R=s[y];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),x.crossVectors(w,R);const C=x.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,C)}for(let y=0,R=v.length;y<R;++y){const C=v[y],U=C.start,k=C.count;for(let Y=U,N=U+k;Y<N;Y+=3)T(e.getX(Y+0)),T(e.getX(Y+1)),T(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==r.count)i=new ui(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new F,a=new F,o=new F,s=new F,l=new F,c=new F,h=new F,p=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(r,m),a.fromBufferAttribute(r,b),o.fromBufferAttribute(r,g),h.subVectors(o,a),p.subVectors(n,a),h.cross(p),s.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),s.add(h),l.add(h),c.add(h),i.setXYZ(m,s.x,s.y,s.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=r.count;u<f;u+=3)n.fromBufferAttribute(r,u+0),a.fromBufferAttribute(r,u+1),o.fromBufferAttribute(r,u+2),h.subVectors(o,a),p.subVectors(n,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Yt.fromBufferAttribute(e,r),Yt.normalize(),e.setXYZ(r,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,p=s.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let b=0,g=l.length;b<g;b++){s.isInterleavedBufferAttribute?f=l[b]*s.data.stride+s.offset:f=l[b]*h;for(let d=0;d<h;d++)u[m++]=c[f++]}return new ui(u,h,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new _r,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);r.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,p=c.length;h<p;h++){const u=c[h],f=e(u,i);l.push(f)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(r))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(r));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new F,JS=new F,QS=new je;class Ui{constructor(e=new F(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Su.subVectors(i,r).cross(JS.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r,i=!0){const n=e.delta(Su),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(o<0||o>1)?null:r.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||QS.getNormalMatrix(e),n=this.coplanarPoint(Su).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $S=0;class ra extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ko,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=s0,this.blendDst=l0,this.blendEquation=ya,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ru,this.stencilZFail=ru,this.stencilZPass=ru,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){Oe(`Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){Oe(`Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(r){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}fromJSON(e,r){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ui().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=r[e.map]||null),e.matcap!==void 0&&(this.matcap=r[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=r[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=r[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=r[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=r[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=r[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=r[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=r[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=r[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=r[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=r[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=r[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=r[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=r[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=r[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=r[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=r[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=r[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=r[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=r[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=r[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=r[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=r[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=r[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=r[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new F,bu=new F,Xs=new F,Ys=new F;class vs{constructor(e=new F,r=new F(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Ni.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,r),Ni.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){bu.copy(e).add(r).multiplyScalar(.5),Xs.copy(r).sub(e).normalize(),Ys.copy(this.origin).sub(bu);const a=e.distanceTo(r)*.5,o=-this.direction.dot(Xs),s=Ys.dot(this.direction),l=-Ys.dot(Xs),c=Ys.lengthSq(),h=Math.abs(1-o*o);let p,u,f,m;if(h>0)if(p=o*l-s,u=o*s-l,m=a*h,p>=0)if(u>=-m)if(u<=m){const b=1/h;p*=b,u*=b,f=p*(p+o*u+2*s)+u*(o*p+u+2*l)+c}else u=a,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-o*a+s)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(o*a+s)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=o>0?-a:a,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(bu).addScaledVector(Xs,u),f}intersectSphere(e,r){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),n=Ni.dot(Ni)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,r):this.at(s,r)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),p>=0?(s=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(s=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,r,i,n,a){const o=this.origin,s=this.direction,l=s.x,c=s.y,h=s.z,p=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=r.x-o.x,b=r.y-o.y,g=r.z-o.z,d=i.x-o.x,v=i.y-o.y,M=i.z-o.z,x=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let T,y,R,C,U,k,Y,N,q,$,Q,G;if(x>=E&&x>=w?(R=l,k=p,q=m,G=d,l>=0?(T=c,y=h,C=u,U=f,Y=b,N=g,$=v,Q=M):(T=h,y=c,C=f,U=u,Y=g,N=b,$=M,Q=v)):E>=w?(R=c,k=u,q=b,G=v,c>=0?(T=h,y=l,C=f,U=p,Y=g,N=m,$=M,Q=d):(T=l,y=h,C=p,U=f,Y=m,N=g,$=d,Q=M)):(R=h,k=f,q=g,G=M,h>=0?(T=l,y=c,C=p,U=u,Y=m,N=b,$=d,Q=v):(T=c,y=l,C=u,U=p,Y=b,N=m,$=v,Q=d)),R===0)return null;const B=T/R,W=y/R,O=1/R,fe=C-B*k,ve=U-W*k,Pe=Y-B*q,De=N-W*q,Ve=$-B*G,K=Q-W*G,ee=Ve*De-K*Pe,Me=fe*K-ve*Ve,Ue=Pe*ve-De*fe;if(n){if(ee<0||Me<0||Ue<0)return null}else if((ee<0||Me<0||Ue<0)&&(ee>0||Me>0||Ue>0))return null;const _e=ee+Me+Ue;if(_e===0)return null;const Re=O*(ee*k+Me*q+Ue*G);return(_e>0?Re<0:Re>0)?null:this.at(Re/_e,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Da extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rm=new Mt,Un=new vs,qs=new gs,im=new F,Zs=new F,Ks=new F,Js=new F,Mu=new F,Qs=new F,nm=new F,$s=new F;class Ht extends ur{constructor(e=new _r,r=new Da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Qs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],p=a[l];h!==0&&(Mu.fromBufferAttribute(p,e),o?Qs.addScaledVector(Mu,h):Qs.addScaledVector(Mu.sub(r),h))}r.add(Qs)}return r}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(qs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(qs,im)===null||Un.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(rm.copy(a).invert(),Un.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Un)))}_computeIntersections(e,r,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let m=0,b=u.length;m<b;m++){const g=u[m],d=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(s.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,E=M;x<E;x+=3){const w=s.getX(x),T=s.getX(x+1),y=s.getX(x+2);n=el(this,d,e,i,c,h,p,w,T,y),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const m=Math.max(0,f.start),b=Math.min(s.count,f.start+f.count);for(let g=m,d=b;g<d;g+=3){const v=s.getX(g),M=s.getX(g+1),x=s.getX(g+2);n=el(this,o,e,i,c,h,p,v,M,x),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=u.length;m<b;m++){const g=u[m],d=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,E=M;x<E;x+=3){const w=x,T=x+1,y=x+2;n=el(this,d,e,i,c,h,p,w,T,y),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,d=b;g<d;g+=3){const v=g,M=g+1,x=g+2;n=el(this,o,e,i,c,h,p,v,M,x),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}}}function e1(t,e,r,i,n,a,o,s){let l;if(e.side===lr?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Mn,s),l===null)return null;$s.copy(s),$s.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo($s);return c<r.near||c>r.far?null:{distance:c,point:$s.clone(),object:t}}function el(t,e,r,i,n,a,o,s,l,c){t.getVertexPosition(s,Zs),t.getVertexPosition(l,Ks),t.getVertexPosition(c,Js);const h=e1(t,e,r,i,Zs,Ks,Js,nm);if(h){const p=new F;ai.getBarycoord(nm,Zs,Ks,Js,p),n&&(h.uv=ai.getInterpolatedAttribute(n,s,l,c,p,new ke)),a&&(h.uv1=ai.getInterpolatedAttribute(a,s,l,c,p,new ke)),o&&(h.normal=ai.getInterpolatedAttribute(o,s,l,c,p,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new F,materialIndex:0};ai.getNormal(Zs,Ks,Js,u.normal),h.face=u,h.barycoord=p}return h}class t1 extends cr{constructor(e=null,r=1,i=1,n,a,o,s,l,c=Qt,h=Qt,p,u){super(null,o,s,l,c,h,n,a,p,u),this.isDataTexture=!0,this.image={data:e,width:r,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const On=new gs,r1=new ke(.5,.5),tl=new F;class bp{constructor(e=new Ui,r=new Ui,i=new Ui,n=new Ui,a=new Ui,o=new Ui){this.planes=[e,r,i,n,a,o]}set(e,r,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(r),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=Si,i=!1){const n=this.planes,a=e.elements,o=a[0],s=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],f=a[7],m=a[8],b=a[9],g=a[10],d=a[11],v=a[12],M=a[13],x=a[14],E=a[15];if(n[0].setComponents(c-o,f-h,d-m,E-v).normalize(),n[1].setComponents(c+o,f+h,d+m,E+v).normalize(),n[2].setComponents(c+s,f+p,d+b,E+M).normalize(),n[3].setComponents(c-s,f-p,d-b,E-M).normalize(),i)n[4].setComponents(l,u,g,x).normalize(),n[5].setComponents(c-l,f-u,d-g,E-x).normalize();else if(n[4].setComponents(c-l,f-u,d-g,E-x).normalize(),r===Si)n[5].setComponents(c+l,f+u,d+g,E+x).normalize();else if(r===ss)n[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),On.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const r=r1.distanceTo(e.center);return On.radius=.7071067811865476+r,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(tl.x=n.normal.x>0?e.max.x:e.min.x,tl.y=n.normal.y>0?e.max.y:e.min.y,tl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends ra{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new F,oc=new F,am=new Mt,_o=new vs,rl=new gs,Eu=new F,om=new F;class i1 extends ur{constructor(e=new _r,r=new O0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[0];for(let n=1,a=r.count;n<a;n++)ac.fromBufferAttribute(r,n-1),oc.fromBufferAttribute(r,n),i[n]=i[n-1],i[n]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new dr(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(n),rl.radius+=a,e.ray.intersectsSphere(rl)===!1)return;am.copy(n).invert(),_o.copy(e.ray).applyMatrix4(am);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=u,b=f-1;m<b;m+=c){const g=h.getX(m),d=h.getX(m+1),v=il(this,e,_o,l,g,d,m);v&&r.push(v)}if(this.isLineLoop){const m=h.getX(f-1),b=h.getX(u),g=il(this,e,_o,l,m,b,f-1);g&&r.push(g)}}else{const u=Math.max(0,o.start),f=Math.min(p.count,o.start+o.count);for(let m=u,b=f-1;m<b;m+=c){const g=il(this,e,_o,l,m,m+1,m);g&&r.push(g)}if(this.isLineLoop){const m=il(this,e,_o,l,f-1,u,f-1);m&&r.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function il(t,e,r,i,n,a,o){const s=t.geometry.attributes.position;if(ac.fromBufferAttribute(s,n),oc.fromBufferAttribute(s,a),r.distanceSqToSegment(ac,oc,Eu,om)>i)return;Eu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:om.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class n1 extends i1{constructor(e,r){super(e,r),this.isLineLoop=!0,this.type="LineLoop"}}class F0 extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sm=new Mt,hh=new vs,nl=new gs,al=new F;class a1 extends ur{constructor(e=new _r,r=new F0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(n),nl.radius+=a,e.ray.intersectsSphere(nl)===!1)return;sm.copy(n).invert(),hh.copy(e.ray).applyMatrix4(sm);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let f=p,m=u;f<m;f++){const b=c.getX(f);al.fromBufferAttribute(h,b),lm(al,b,l,n,e,r,this)}}else{const p=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let f=p,m=u;f<m;f++)al.fromBufferAttribute(h,f),lm(al,f,l,n,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function lm(t,e,r,i,n,a,o){const s=hh.distanceSqToPoint(t);if(s<r){const l=new F;hh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class k0 extends cr{constructor(e=[],r=Qn,i,n,a,o,s,l,c,h){super(e,r,i,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jr extends cr{constructor(e,r,i,n,a,o,s,l,c){super(e,r,i,n,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends cr{constructor(e,r,i=wi,n,a,o,s=Qt,l=Qt,c,h=ji,p=1){if(h!==ji&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:r,depth:p};super(u,n,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return r.compareFunction=this.compareFunction,r}}class o1 extends ls{constructor(e,r=wi,i=Qn,n,a,o=Qt,s=Qt,l,c=ji){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,r,i,n,a,o,s,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class z0 extends cr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _s extends _r{constructor(e=1,r=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],p=[];let u=0,f=0;m("z","y","x",-1,-1,i,r,e,o,a,0),m("z","y","x",1,-1,i,r,-e,o,a,1),m("x","z","y",1,1,e,i,r,n,o,2),m("x","z","y",1,-1,e,i,-r,n,o,3),m("x","y","z",1,-1,e,r,i,n,a,4),m("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(h,3)),this.setAttribute("uv",new dr(p,2));function m(b,g,d,v,M,x,E,w,T,y,R){const C=x/T,U=E/y,k=x/2,Y=E/2,N=w/2,q=T+1,$=y+1;let Q=0,G=0;const B=new F;for(let W=0;W<$;W++){const O=W*U-Y;for(let fe=0;fe<q;fe++){const ve=fe*C-k;B[b]=ve*v,B[g]=O*M,B[d]=N,c.push(B.x,B.y,B.z),B[b]=0,B[g]=0,B[d]=w>0?1:-1,h.push(B.x,B.y,B.z),p.push(fe/T),p.push(1-W/y),Q+=1}}for(let W=0;W<y;W++)for(let O=0;O<T;O++){const fe=u+O+q*W,ve=u+O+q*(W+1),Pe=u+(O+1)+q*(W+1),De=u+(O+1)+q*W;l.push(fe,ve,De),l.push(ve,Pe,De),G+=6}s.addGroup(f,G,R),f+=G,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ec extends _r{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,o=r/2,s=Math.floor(i),l=Math.floor(n),c=s+1,h=l+1,p=e/s,u=r/l,f=[],m=[],b=[],g=[];for(let d=0;d<h;d++){const v=d*u-o;for(let M=0;M<c;M++){const x=M*p-a;m.push(x,-v,0),b.push(0,0,1),g.push(M/s),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<s;v++){const M=v+c*d,x=v+c*(d+1),E=v+1+c*(d+1),w=v+1+c*d;f.push(M,x,w),f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new dr(m,3)),this.setAttribute("normal",new dr(b,3)),this.setAttribute("uv",new dr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class zo extends _r{constructor(e=.5,r=1,i=32,n=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:r,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const s=[],l=[],c=[],h=[];let p=e;const u=(r-e)/n,f=new F,m=new ke;for(let b=0;b<=n;b++){for(let g=0;g<=i;g++){const d=a+g/i*o;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/r+1)/2,m.y=(f.y/r+1)/2,h.push(m.x,m.y)}p+=u}for(let b=0;b<n;b++){const g=b*(i+1);for(let d=0;d<i;d++){const v=d+g,M=v,x=v+i+1,E=v+i+2,w=v+1;s.push(M,x,w),s.push(x,E,w)}}this.setIndex(s),this.setAttribute("position",new dr(l,3)),this.setAttribute("normal",new dr(c,3)),this.setAttribute("uv",new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sn extends _r{constructor(e=1,r=32,i=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],p=new F,u=new F,f=[],m=[],b=[],g=[];for(let d=0;d<=i;d++){const v=[],M=d/i,x=o+M*s,E=e*Math.cos(x),w=Math.sqrt(e*e-E*E);let T=0;d===0&&o===0?T=.5/r:d===i&&l===Math.PI&&(T=-.5/r);for(let y=0;y<=r;y++){const R=y/r,C=n+R*a;p.x=-w*Math.cos(C),p.y=E,p.z=w*Math.sin(C),m.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),g.push(R+T,1-M),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<r;v++){const M=h[d][v+1],x=h[d][v],E=h[d+1][v],w=h[d+1][v+1];(d!==0||o>0)&&f.push(M,x,w),(d!==i-1||l<Math.PI)&&f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new dr(m,3)),this.setAttribute("normal",new dr(b,3)),this.setAttribute("uv",new dr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Qa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];if(cm(n))n.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone();else if(Array.isArray(n))if(cm(n[0])){const a=[];for(let o=0,s=n.length;o<s;o++)a[o]=n[o].clone();e[r][i]=a}else e[r][i]=n.slice();else e[r][i]=n}}return e}function mr(t){const e={};for(let r=0;r<t.length;r++){const i=Qa(t[r]);for(const n in i)e[n]=i[n]}return e}function cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function s1(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function B0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const l1={clone:Qa,merge:mr};var c1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}fromJSON(e,r){if(super.fromJSON(e,r),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=r[n.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(n.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(n.value);break;case"v3":this.uniforms[i].value=new F().fromArray(n.value);break;case"v4":this.uniforms[i].value=new It().fromArray(n.value);break;case"m3":this.uniforms[i].value=new je().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class d1 extends yr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h1 extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p1 extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class H0 extends ur{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=r}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,r}}const wu=new Mt,um=new F,dm=new F;class m1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Ur,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera;um.setFromMatrixPosition(e.matrixWorld),r.position.copy(um),dm.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(dm),r.updateMatrixWorld(),this._updateMatrix(r,this.matrix,this._frustum)}_updateMatrix(e,r,i,n){wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,o=n?n.z/a.x:1,s=n?n.w/a.y:1,l=n?n.x/a.x:0,c=n?n.y/a.y:0;e.coordinateSystem===ss||e.reversedDepth?r.set(.5*o,0,0,.5*o+l,0,.5*s,0,.5*s+c,0,0,1,0,0,0,0,1):r.set(.5*o,0,0,.5*o+l,0,.5*s,0,.5*s+c,0,0,.5,.5,0,0,0,1),r.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ol=new F,sl=new En,fi=new F;class G0 extends ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,sl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,sl,fi.set(1,1,1)).invert()}updateWorldMatrix(e,r,i=!1){super.updateWorldMatrix(e,r,i),this.matrixWorld.decompose(ol,sl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,sl,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nn=new F,hm=new ke,pm=new ke;class Ir extends G0{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nn.x,nn.y).multiplyScalar(-e/nn.z),nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nn.x,nn.y).multiplyScalar(-e/nn.z)}getViewSize(e,r){return this.getViewBounds(e,hm,pm),r.subVectors(pm,hm)}setViewOffset(e,r,i,n,a,o){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,r-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}class g1 extends m1{constructor(){super(new Ir(90,1,.5,500)),this.isPointLightShadow=!0}}class v1 extends H0{constructor(e,r,i=0,n=2){super(e,r),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new g1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,r){return super.copy(e,r),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const r=super.toJSON(e);return r.object.distance=this.distance,r.object.decay=this.decay,r.object.shadow=this.shadow.toJSON(),r}}class V0 extends G0{constructor(e=-1,r=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}class _1 extends H0{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,va=1;class y1 extends ur{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ir(ga,va,e,r);n.layers=this.layers,this.add(n);const a=new Ir(ga,va,e,r);a.layers=this.layers,this.add(a);const o=new Ir(ga,va,e,r);o.layers=this.layers,this.add(o);const s=new Ir(ga,va,e,r);s.layers=this.layers,this.add(s);const l=new Ir(ga,va,e,r);l.layers=this.layers,this.add(l);const c=new Ir(ga,va,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,o,s,l]=r;for(const c of r)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,a),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,o),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,s),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(r,h),e.setRenderTarget(p,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class x1 extends Ir{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fm=new Mt;class S1{constructor(e,r,i=0,n=1/0){this.ray=new vs(e,r),this.near=i,this.far=n,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,r){this.ray.set(e,r)}setFromCamera(e,r){r.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(r).sub(this.ray.origin).normalize(),this.camera=r):r.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,r.projectionMatrix.elements[14]).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld),this.camera=r):tt("Raycaster: Unsupported camera type: "+r.type)}setFromXRController(e){return fm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fm),this}intersectObject(e,r=!0,i=[]){return ph(e,this,i,r),i.sort(mm),i}intersectObjects(e,r=!0,i=[]){for(let n=0,a=e.length;n<a;n++)ph(e[n],this,i,r);return i.sort(mm),i}}function mm(t,e){return t.distance-e.distance}function ph(t,e,r,i){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,r)===!1&&(n=!1),n===!0&&i===!0){const a=t.children;for(let o=0,s=a.length;o<s;o++)ph(a[o],e,r,!0)}}class gm{constructor(e=1,r=0,i=0){this.radius=e,this.phi=r,this.theta=i}set(e,r,i){return this.radius=e,this.phi=r,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,r,i){return this.radius=Math.sqrt(e*e+r*r+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(r/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b1 extends Cn{constructor(e,r=null){super(),this.object=e,this.domElement=r,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vm(t,e,r,i){const n=M1(i);switch(r){case b0:return t*e;case E0:return t*e/n.components*n.byteLength;case mp:return t*e/n.components*n.byteLength;case $n:return t*e*2/n.components*n.byteLength;case gp:return t*e*2/n.components*n.byteLength;case M0:return t*e*3/n.components*n.byteLength;case oi:return t*e*4/n.components*n.byteLength;case vp:return t*e*4/n.components*n.byteLength;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Fd:return Math.max(t,16)*Math.max(e,8)/4;case Id:case Od:return Math.max(t,8)*Math.max(e,8)/2;case kd:case zd:case Hd:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:case ec:case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nh:case ah:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sh:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function M1(t){switch(t){case Ur:case _0:return{byteLength:1,components:1};case as:case y0:case Ti:return{byteLength:2,components:1};case pp:case fp:return{byteLength:2,components:4};case wi:case hp:case xi:return{byteLength:4,components:1};case x0:case S0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function W0(){let t=null,e=!1,r=null,i=null;function n(a,o){i=t.requestAnimationFrame(n),r(a,o)}return{start:function(){e!==!0&&r!==null&&t!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function E1(t){const e=new WeakMap;function r(s,l){const c=s.array,h=s.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),s.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:p}}function i(s,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,s),p.length===0)t.bufferSubData(c,0,h);else{p.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<p.length;f++){const m=p[u],b=p[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,p[u]=b)}p.length=u+1;for(let f=0,m=p.length;f<m;f++){const b=p[f];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=e.get(s);(!h||h.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,r(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:n,remove:a,update:o}}var w1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T1=`#ifdef USE_ALPHAHASH
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
#endif`,R1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
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
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,z1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,q1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K1=`vec3 transformedNormal = objectNormal;
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
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hb=`#ifdef USE_GRADIENTMAP
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
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Eb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ub=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,uM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,dM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
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
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`#include <common>
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
}`,NM=`#if DEPTH_PACKING == 3200
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
}`,DM=`#define DISTANCE
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
}`,IM=`#define DISTANCE
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
void main() {
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
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
}`,kM=`uniform vec3 diffuse;
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
}`,zM=`#include <common>
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
}`,BM=`uniform vec3 diffuse;
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
}`,HM=`#define LAMBERT
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
}`,GM=`#define LAMBERT
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
}`,VM=`#define MATCAP
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
}`,WM=`#define MATCAP
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
}`,jM=`#define NORMAL
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
}`,XM=`#define NORMAL
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
}`,YM=`#define PHONG
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
}`,qM=`#define PHONG
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
}`,ZM=`#define STANDARD
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
}`,KM=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,JM=`#define TOON
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
}`,QM=`#define TOON
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
}`,$M=`uniform float size;
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,rE=`uniform vec3 color;
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
}`,iE=`uniform float rotation;
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
}`,nE=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:w1,alphahash_pars_fragment:T1,alphamap_fragment:R1,alphamap_pars_fragment:A1,alphatest_fragment:C1,alphatest_pars_fragment:P1,aomap_fragment:L1,aomap_pars_fragment:N1,batching_pars_vertex:D1,batching_vertex:I1,begin_vertex:U1,beginnormal_vertex:O1,bsdfs:F1,iridescence_fragment:k1,bumpmap_pars_fragment:z1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:G1,clipping_planes_vertex:V1,color_fragment:W1,color_pars_fragment:j1,color_pars_vertex:X1,color_vertex:Y1,common:q1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:K1,displacementmap_pars_vertex:J1,displacementmap_vertex:Q1,emissivemap_fragment:$1,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:rb,envmap_fragment:ib,envmap_common_pars_fragment:nb,envmap_pars_fragment:ab,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:sb,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:db,gradientmap_pars_fragment:hb,lightmap_pars_fragment:pb,lights_lambert_fragment:fb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:_b,lights_toon_pars_fragment:yb,lights_phong_fragment:xb,lights_phong_pars_fragment:Sb,lights_physical_fragment:bb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Eb,lights_fragment_maps:wb,lights_fragment_end:Tb,lightprobes_pars_fragment:Rb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Lb,map_fragment:Nb,map_pars_fragment:Db,map_particle_fragment:Ib,map_particle_pars_fragment:Ub,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Fb,morphinstance_vertex:kb,morphcolor_vertex:zb,morphnormal_vertex:Bb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Gb,normal_fragment_begin:Vb,normal_fragment_maps:Wb,normal_pars_fragment:jb,normal_pars_vertex:Xb,normal_vertex:Yb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Jb,iridescence_pars_fragment:Qb,opaque_fragment:$b,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:rM,dithering_fragment:iM,dithering_pars_fragment:nM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:lM,shadowmap_vertex:cM,shadowmask_pars_fragment:uM,skinbase_vertex:dM,skinning_pars_vertex:hM,skinning_vertex:pM,skinnormal_vertex:fM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:vM,tonemapping_pars_fragment:_M,transmission_fragment:yM,transmission_pars_fragment:xM,uv_pars_fragment:SM,uv_pars_vertex:bM,uv_vertex:MM,worldpos_vertex:EM,background_vert:wM,background_frag:TM,backgroundCube_vert:RM,backgroundCube_frag:AM,cube_vert:CM,cube_frag:PM,depth_vert:LM,depth_frag:NM,distance_vert:DM,distance_frag:IM,equirect_vert:UM,equirect_frag:OM,linedashed_vert:FM,linedashed_frag:kM,meshbasic_vert:zM,meshbasic_frag:BM,meshlambert_vert:HM,meshlambert_frag:GM,meshmatcap_vert:VM,meshmatcap_frag:WM,meshnormal_vert:jM,meshnormal_frag:XM,meshphong_vert:YM,meshphong_frag:qM,meshphysical_vert:ZM,meshphysical_frag:KM,meshtoon_vert:JM,meshtoon_frag:QM,points_vert:$M,points_frag:eE,shadow_vert:tE,shadow_frag:rE,sprite_vert:iE,sprite_frag:nE},pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_i={basic:{uniforms:mr([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:mr([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:mr([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:mr([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:mr([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:mr([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:mr([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:mr([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:mr([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:mr([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:mr([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:mr([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:mr([pe.lights,pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};_i.physical={uniforms:mr([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ll={r:0,b:0,g:0},aE=new Mt,j0=new je;j0.set(-1,0,0,0,1,0,0,0,1);function oE(t,e,r,i,n,a){const o=new Ge(0);let s=n===!0?0:1,l,c,h=null,p=0,u=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=e.get(M,x)}return M}function m(v){let M=!1;const x=f(v);x===null?g(o,s):x&&x.isColor&&(g(x,1),M=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?r.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(v,M){const x=f(M);x&&(x.isCubeTexture||x.mapping===Mc)?(c===void 0&&(c=new Ht(new _s(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Qa(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(j0),c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,(h!==x||p!==x.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ht(new Ec(2,2),new yr({name:"BackgroundMaterial",uniforms:Qa(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(ll,B0(t)),r.buffers.color.setClear(ll.r,ll.g,ll.b,M,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),s=M,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(v){s=v,g(o,s)},render:m,addToRenderList:b,dispose:d}}function sE(t,e){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,o=!1;function s(U,k,Y,N,q){let $=!1;const Q=p(U,N,Y,k);a!==Q&&(a=Q,c(a.object)),$=f(U,N,Y,q),$&&m(U,N,Y,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(U,k,Y,N),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function h(U){return t.deleteVertexArray(U)}function p(U,k,Y,N){const q=N.wireframe===!0;let $=i[k.id];$===void 0&&($={},i[k.id]=$);const Q=U.isInstancedMesh===!0?U.id:0;let G=$[Q];G===void 0&&(G={},$[Q]=G);let B=G[Y.id];B===void 0&&(B={},G[Y.id]=B);let W=B[q];return W===void 0&&(W=u(l()),B[q]=W),W}function u(U){const k=[],Y=[],N=[];for(let q=0;q<r;q++)k[q]=0,Y[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,k,Y,N){const q=a.attributes,$=k.attributes;let Q=0;const G=Y.getAttributes();for(const B in G)if(G[B].location>=0){const W=q[B];let O=$[B];if(O===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),W===void 0||W.attribute!==O||O&&W.data!==O.data)return!0;Q++}return a.attributesNum!==Q||a.index!==N}function m(U,k,Y,N){const q={},$=k.attributes;let Q=0;const G=Y.getAttributes();for(const B in G)if(G[B].location>=0){let W=$[B];W===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const O={};O.attribute=W,W&&W.data&&(O.data=W.data),q[B]=O,Q++}a.attributes=q,a.attributesNum=Q,a.index=N}function b(){const U=a.newAttributes;for(let k=0,Y=U.length;k<Y;k++)U[k]=0}function g(U){d(U,0)}function d(U,k){const Y=a.newAttributes,N=a.enabledAttributes,q=a.attributeDivisors;Y[U]=1,N[U]===0&&(t.enableVertexAttribArray(U),N[U]=1),q[U]!==k&&(t.vertexAttribDivisor(U,k),q[U]=k)}function v(){const U=a.newAttributes,k=a.enabledAttributes;for(let Y=0,N=k.length;Y<N;Y++)k[Y]!==U[Y]&&(t.disableVertexAttribArray(Y),k[Y]=0)}function M(U,k,Y,N,q,$,Q){Q===!0?t.vertexAttribIPointer(U,k,Y,q,$):t.vertexAttribPointer(U,k,Y,N,q,$)}function x(U,k,Y,N){b();const q=N.attributes,$=Y.getAttributes(),Q=k.defaultAttributeValues;for(const G in $){const B=$[G];if(B.location>=0){let W=q[G];if(W===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){const O=W.normalized,fe=W.itemSize,ve=e.get(W);if(ve===void 0)continue;const Pe=ve.buffer,De=ve.type,Ve=ve.bytesPerElement,K=De===t.INT||De===t.UNSIGNED_INT||W.gpuType===hp;if(W.isInterleavedBufferAttribute){const ee=W.data,Me=ee.stride,Ue=W.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)d(B.location+_e,ee.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<B.locationSize;_e++)g(B.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let _e=0;_e<B.locationSize;_e++)M(B.location+_e,fe/B.locationSize,De,O,Me*Ve,(Ue+fe/B.locationSize*_e)*Ve,K)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<B.locationSize;ee++)d(B.location+ee,W.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<B.locationSize;ee++)g(B.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ee=0;ee<B.locationSize;ee++)M(B.location+ee,fe/B.locationSize,De,O,fe*Ve,fe/B.locationSize*ee*Ve,K)}}else if(Q!==void 0){const O=Q[G];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(B.location,O);break;case 3:t.vertexAttrib3fv(B.location,O);break;case 4:t.vertexAttrib4fv(B.location,O);break;default:t.vertexAttrib1fv(B.location,O)}}}}v()}function E(){R();for(const U in i){const k=i[U];for(const Y in k){const N=k[Y];for(const q in N){const $=N[q];for(const Q in $)h($[Q].object),delete $[Q];delete N[q]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const k=i[U.id];for(const Y in k){const N=k[Y];for(const q in N){const $=N[q];for(const Q in $)h($[Q].object),delete $[Q];delete N[q]}}delete i[U.id]}function T(U){for(const k in i){const Y=i[k];for(const N in Y){const q=Y[N];if(q[U.id]===void 0)continue;const $=q[U.id];for(const Q in $)h($[Q].object),delete $[Q];delete q[U.id]}}}function y(U){for(const k in i){const Y=i[k],N=U.isInstancedMesh===!0?U.id:0,q=Y[N];if(q!==void 0){for(const $ in q){const Q=q[$];for(const G in Q)h(Q[G].object),delete Q[G];delete q[$]}delete Y[N],Object.keys(Y).length===0&&delete i[k]}}}function R(){C(),o=!0,a!==n&&(a=n,c(a.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:R,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function lE(t,e,r){let i;function n(l){i=l}function a(l,c){t.drawArrays(i,l,c),r.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),r.update(c,i,h))}function s(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let p=0;for(let u=0;u<h;u++)p+=c[u];r.update(p,i,1)}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cE(t,e,r,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const y=T===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ur&&T!==xi&&!y&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp";const h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=r.logarithmicDepthBuffer===!0,u=r.reversedDepthBuffer===!0&&e.has("EXT_clip_control");r.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:E,samples:w}}function uE(t){const e=this;let r=null,i=0,n=!1,a=!1;const o=new Ui,s=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const f=p.length!==0||u||i!==0||n;return n=u,i=p.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){r=h(p,u,0)},this.setState=function(p,u,f){const m=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!n||m===null||m.length===0||a&&!g)a?h(null):c();else{const v=a?0:i,M=v*4;let x=d.clippingState||null;l.value=x,x=h(m,u,M,f);for(let E=0;E!==M;++E)x[E]=r[E];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,f,m){const b=p!==null?p.length:0;let g=null;if(b!==0){if(g=l.value,m!==!0||g===null){const d=f+b*4,v=u.matrixWorldInverse;s.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,x=f;M!==b;++M,x+=4)o.copy(p[M]).applyMatrix4(v,s),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Ia=4,dE=6,hE=20,pE=256,yo=new V0,_m=new Ge;let Tu=null,Ru=0,Au=0,Cu=!1;const fE=new F,Fn=new F;class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,r=0,i=.1,n=100,a={}){const{size:o=256,position:s=fE}=a;Tu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,s),r>0&&this._blur(l,0,0,r),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Ru,Au),this._renderer.xr.enabled=Cu,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Qn||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:sr,minFilter:sr,generateMipmaps:!1,type:Ti,format:oi,colorSpace:rc,depthBuffer:!1},n=xm(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,r,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mE(a)),this._blurMaterial=vE(a,e,r),this._ggxMaterial=gE(a,e,r)}return n}_compileMaterial(e){const r=new Ht(new _r,e);this._renderer.compile(r,yo)}_sceneToCubeUV(e,r,i,n,a){const o=new Ir(90,1,r,i),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,p=c.toneMapping;c.getClearColor(_m),c.toneMapping=Ei,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(n),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new _s,new Da({name:"PMREM.Background",side:lr,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,f=u.material;let m=!1;const b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,m=!0):(f.color.copy(_m),m=!0);for(let g=0;g<6;g++){const d=g%3;d===0?(o.up.set(0,s[g],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+l[g],a.y,a.z)):d===1?(o.up.set(0,0,s[g]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+l[g],a.z)):(o.up.set(0,s[g],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+l[g]));const v=this._cubeSize;_a(n,d*v,g>2?v:0,v,v),c.setRenderTarget(n),m&&c.render(u,o),c.render(e,o)}c.toneMapping=p,c.autoClear=h,e.background=b}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===Qn||e.mapping===Ja;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const a=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;_a(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(o,yo)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);r.autoClear=i}_applyGGXFilter(e,r,i){const n=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=r/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,f=p*u,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-Ia?i-m+Ia:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-r,_a(a,g,d,3*b,2*b),n.setRenderTarget(a),n.render(s,yo),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-i,_a(e,g,d,3*b,2*b),n.setRenderTarget(e),n.render(s,yo)}_blur(e,r,i,n){const a=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,a,r,i,o),this._blurPass(a,e,i,i,o)}_blurPass(e,r,i,n,a){const o=this._renderer,s=this._blurMaterial,l=this._lodMeshes[n];l.material=s;const c=s.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],p=3*h*(n>this._lodMax-Ia?n-this._lodMax+Ia:0),u=4*(this._cubeSize-h);_a(r,p,u,3*h,2*h),o.setRenderTarget(r),o.render(l,yo)}}function mE(t){const e=[],r=[];let i=t;const n=t-Ia+1+dE;for(let a=0;a<n;a++){const o=Math.pow(2,i);e.push(o);const s=1/(o-2),l=-s,c=1+s,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,m=new Float32Array(f*u*p),b=new Float32Array(f*u*p);for(let d=0;d<p;d++){const v=d%3*2/3-1,M=d>2?0:-1,x=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(x,f*u*d);for(let E=0;E<u;E++){const w=h[E*2]*2-1,T=h[E*2+1]*2-1;d===0?Fn.set(1,T,w):d===1?Fn.set(-w,1,-T):d===2?Fn.set(-w,T,1):d===3?Fn.set(-1,T,-w):d===4?Fn.set(-w,-1,T):Fn.set(w,T,-1),Fn.toArray(b,(d*u+E)*f)}}const g=new _r;g.setAttribute("position",new ui(m,f)),g.setAttribute("outputDirection",new ui(b,f)),r.push(new Ht(g,null)),i>Ia&&i--}return{lodMeshes:r,sizeLods:e}}function xm(t,e,r){const i=new ci(t,e,r);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function gE(t,e,r){return new yr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vE(t,e,r){return new yr({name:"SphericalGaussianBlur",defines:{SAMPLES:hE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Sm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class X0 extends ci{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new k0(n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new _s(5,5,5),a=new yr({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:lr,blending:zi});a.uniforms.tEquirect.value=r;const o=new Ht(n,a),s=r.minFilter;return r.minFilter===Vn&&(r.minFilter=sr),new y1(1,10,this).update(e,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,r=!0,i=!0,n=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(r,i,n);e.setRenderTarget(a)}}function _E(t){let e=new WeakMap,r=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===$c||f===eu)if(e.has(u)){const m=e.get(u).texture;return s(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const b=new X0(m.height);return b.fromEquirectangularTexture(t,u),e.set(u,b),u.addEventListener("dispose",c),s(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,m=f===$c||f===eu,b=f===Qn||f===Ja;if(m||b){let g=r.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new ym(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,r.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new ym(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,r.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function s(u,f){return f===$c?u.mapping=Qn:f===eu&&(u.mapping=Ja),u}function l(u){let f=0;const m=6;for(let b=0;b<m;b++)u[b]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=r.get(f);m!==void 0&&(r.delete(f),m.dispose())}function p(){e=new WeakMap,r=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:p}}function yE(t){const e={};function r(i){if(e[i]!==void 0)return e[i];const n=t.getExtension(i);return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const n=r(i);return n===null&&Ga("WebGLRenderer: "+i+" extension not supported."),n}}}function xE(t,e,r,i){const n={},a=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete n[u.id];const f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,r.memory.geometries--}function s(p,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,r.memory.geometries++),u}function l(p){const u=p.attributes;for(const f in u)e.update(u[f],t.ARRAY_BUFFER)}function c(p){const u=[],f=p.index,m=p.attributes.position;let b=0;if(m===void 0)return;if(f!==null){const v=f.array;b=f.version;for(let M=0,x=v.length;M<x;M+=3){const E=v[M+0],w=v[M+1],T=v[M+2];u.push(E,w,w,T,T,E)}}else{const v=m.array;b=m.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const E=M+0,w=M+1,T=M+2;u.push(E,w,w,T,T,E)}}const g=new(m.count>=65535?U0:I0)(u,1);g.version=b;const d=a.get(p);d&&e.remove(d),a.set(p,g)}function h(p){const u=a.get(p);if(u){const f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:h}}function SE(t,e,r){let i;function n(p){i=p}let a,o;function s(p){a=p.type,o=p.bytesPerElement}function l(p,u){t.drawElements(i,u,a,p*o),r.update(u,i,1)}function c(p,u,f){f!==0&&(t.drawElementsInstanced(i,u,a,p*o,f),r.update(u,i,f))}function h(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,f);let m=0;for(let b=0;b<f;b++)m+=u[b];r.update(m,i,1)}this.setMode=n,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bE(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(r.calls++,o){case t.TRIANGLES:r.triangles+=s*(a/3);break;case t.LINES:r.lines+=s*(a/2);break;case t.LINE_STRIP:r.lines+=s*(a-1);break;case t.LINE_LOOP:r.lines+=s*a;break;case t.POINTS:r.points+=s*a;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function ME(t,e,r){const i=new WeakMap,n=new It;function a(o,s,l){const c=o.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(s);if(u===void 0||u.count!==p){let f=function(){y.dispose(),i.delete(s),s.removeEventListener("dispose",f)};u!==void 0&&u.texture.dispose();const m=s.morphAttributes.position!==void 0,b=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],v=s.morphAttributes.normal||[],M=s.morphAttributes.color||[];let x=0;m===!0&&(x=1),b===!0&&(x=2),g===!0&&(x=3);let E=s.attributes.position.count*x,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*p),y=new P0(T,E,w,p);y.type=xi,y.needsUpdate=!0;const R=x*4;for(let C=0;C<p;C++){const U=d[C],k=v[C],Y=M[C],N=E*w*4*C;for(let q=0;q<U.count;q++){const $=q*R;m===!0&&(n.fromBufferAttribute(U,q),T[N+$+0]=n.x,T[N+$+1]=n.y,T[N+$+2]=n.z,T[N+$+3]=0),b===!0&&(n.fromBufferAttribute(k,q),T[N+$+4]=n.x,T[N+$+5]=n.y,T[N+$+6]=n.z,T[N+$+7]=0),g===!0&&(n.fromBufferAttribute(Y,q),T[N+$+8]=n.x,T[N+$+9]=n.y,T[N+$+10]=n.z,T[N+$+11]=Y.itemSize===4?n.w:1)}}u={count:p,texture:y,size:new ke(E,w)},i.set(s,u),s.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,r);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];const m=s.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:a}}function EE(t,e,r,i,n){let a=new WeakMap;function o(c){const h=n.render.frame,p=c.geometry,u=e.get(c,p);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(r.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&r.update(c.instanceColor,t.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function s(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),r.remove(h.instanceMatrix),h.instanceColor!==null&&r.remove(h.instanceColor)}return{update:o,dispose:s}}const wE={[u0]:"LINEAR_TONE_MAPPING",[d0]:"REINHARD_TONE_MAPPING",[h0]:"CINEON_TONE_MAPPING",[p0]:"ACES_FILMIC_TONE_MAPPING",[m0]:"AGX_TONE_MAPPING",[g0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function TE(t,e,r,i,n,a){const o=new ci(e,r,{type:t,depthBuffer:n,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let s=null,l=null;const c=new _r;c.setAttribute("position",new dr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dr([0,2,0,0,2,0],2));const h=new d1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ht(c,h),u=new V0(-1,1,1,-1,0,1);let f=null,m=null,b=!1,g,d=null,v=[],M=!1;this.setSize=function(x,E){o.setSize(x,E),s!==null&&s.setSize(x,E),l!==null&&l.setSize(x,E);for(let w=0;w<v.length;w++){const T=v[w];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){v=x,M=v.length>0&&v[0].isRenderPass===!0;const E=o.width,w=o.height;v.length>0&&s===null&&(s=new ci(E,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new ci(E,w,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){const y=v[T];y.setSize&&y.setSize(E,w)}},this.begin=function(x,E){if(b||x.toneMapping===Ei&&v.length===0)return!1;if(d=E,E!==null){const w=E.width,T=E.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return M===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Ei,!0},this.hasRenderPass=function(){return M},this.end=function(x,E){x.toneMapping=g,b=!0;let w=o,T=s;for(let y=0;y<v.length;y++){const R=v[y];R.enabled!==!1&&(R.render(x,T,w,E),R.needsSwap!==!1&&(w=T,T=T===s?l:s))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},Qe.getTransfer(f)===at&&(h.defines.SRGB_TRANSFER="");const y=wE[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(d),x.render(p,u),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Y0=new cr,fh=new ls(1,1),q0=new P0,Z0=new zS,K0=new k0,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Rm=new Float32Array(4);function ro(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=Mm[n];if(a===void 0&&(a=new Float32Array(n),Mm[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function Wt(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function jt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function Tc(t,e){let r=Em[e];r===void 0&&(r=new Int32Array(e),Em[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function RE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function AE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Wt(r,e))return;t.uniform2fv(this.addr,e),jt(r,e)}}function CE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Wt(r,e))return;t.uniform3fv(this.addr,e),jt(r,e)}}function PE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Wt(r,e))return;t.uniform4fv(this.addr,e),jt(r,e)}}function LE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Wt(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(r,e)}else{if(Wt(r,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),jt(r,i)}}function NE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Wt(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(r,e)}else{if(Wt(r,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),jt(r,i)}}function DE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Wt(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(r,e)}else{if(Wt(r,i))return;wm.set(i),t.uniformMatrix4fv(this.addr,!1,wm),jt(r,i)}}function IE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function UE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Wt(r,e))return;t.uniform2iv(this.addr,e),jt(r,e)}}function OE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Wt(r,e))return;t.uniform3iv(this.addr,e),jt(r,e)}}function FE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Wt(r,e))return;t.uniform4iv(this.addr,e),jt(r,e)}}function kE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function zE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Wt(r,e))return;t.uniform2uiv(this.addr,e),jt(r,e)}}function BE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Wt(r,e))return;t.uniform3uiv(this.addr,e),jt(r,e)}}function HE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Wt(r,e))return;t.uniform4uiv(this.addr,e),jt(r,e)}}function GE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(fh.compareFunction=r.isReversedDepthBuffer()?yp:_p,a=fh):a=Y0,r.setTexture2D(e||a,n)}function VE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||Z0,n)}function WE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||K0,n)}function jE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||q0,n)}function XE(t){switch(t){case 5126:return RE;case 35664:return AE;case 35665:return CE;case 35666:return PE;case 35674:return LE;case 35675:return NE;case 35676:return DE;case 5124:case 35670:return IE;case 35667:case 35671:return UE;case 35668:case 35672:return OE;case 35669:case 35673:return FE;case 5125:return kE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return jE}}function YE(t,e){t.uniform1fv(this.addr,e)}function qE(t,e){const r=ro(e,this.size,2);t.uniform2fv(this.addr,r)}function ZE(t,e){const r=ro(e,this.size,3);t.uniform3fv(this.addr,r)}function KE(t,e){const r=ro(e,this.size,4);t.uniform4fv(this.addr,r)}function JE(t,e){const r=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function QE(t,e){const r=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function $E(t,e){const r=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function ew(t,e){t.uniform1iv(this.addr,e)}function tw(t,e){t.uniform2iv(this.addr,e)}function rw(t,e){t.uniform3iv(this.addr,e)}function iw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function aw(t,e){t.uniform2uiv(this.addr,e)}function ow(t,e){t.uniform3uiv(this.addr,e)}function sw(t,e){t.uniform4uiv(this.addr,e)}function lw(t,e,r){const i=this.cache,n=e.length,a=Tc(r,n);Wt(i,a)||(t.uniform1iv(this.addr,a),jt(i,a));let o;this.type===t.SAMPLER_2D_SHADOW?o=fh:o=Y0;for(let s=0;s!==n;++s)r.setTexture2D(e[s]||o,a[s])}function cw(t,e,r){const i=this.cache,n=e.length,a=Tc(r,n);Wt(i,a)||(t.uniform1iv(this.addr,a),jt(i,a));for(let o=0;o!==n;++o)r.setTexture3D(e[o]||Z0,a[o])}function uw(t,e,r){const i=this.cache,n=e.length,a=Tc(r,n);Wt(i,a)||(t.uniform1iv(this.addr,a),jt(i,a));for(let o=0;o!==n;++o)r.setTextureCube(e[o]||K0,a[o])}function dw(t,e,r){const i=this.cache,n=e.length,a=Tc(r,n);Wt(i,a)||(t.uniform1iv(this.addr,a),jt(i,a));for(let o=0;o!==n;++o)r.setTexture2DArray(e[o]||q0,a[o])}function hw(t){switch(t){case 5126:return YE;case 35664:return qE;case 35665:return ZE;case 35666:return KE;case 35674:return JE;case 35675:return QE;case 35676:return $E;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return rw;case 35669:case 35673:return iw;case 5125:return nw;case 36294:return aw;case 36295:return ow;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}class pw{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=XE(r.type)}}class fw{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=hw(r.type)}}class mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,r[s.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function gw(t,e,r){const i=t.name,n=i.length;for(Pu.lastIndex=0;;){const a=Pu.exec(i),o=Pu.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Am(r,c===void 0?new pw(s,t,e):new fw(s,t,e));break}else{let h=r.map[s];h===void 0&&(h=new mw(s),Am(r,h)),r=h}}}class Cl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=e.getActiveUniform(r,o),l=e.getUniformLocation(r,s.name);gw(s,l,this)}const n=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):a.push(o);n.length>0&&(this.seq=n.concat(a))}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,o=r.length;a!==o;++a){const s=r[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in r&&i.push(o)}return i}}function Cm(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const vw=37297;let _w=0;function yw(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${r[o]}`)}return i.join(`
`)}const Pm=new je;function xw(t){Qe._getMatrix(Pm,Qe.workingColorSpace,t);const e=`mat3( ${Pm.elements.map(r=>r.toFixed(4))} )`;switch(Qe.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lm(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=(t.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+yw(t.getShaderSource(e),o)}else return n}function Sw(t,e){const r=xw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}const bw={[u0]:"Linear",[d0]:"Reinhard",[h0]:"Cineon",[p0]:"ACESFilmic",[m0]:"AgX",[g0]:"Neutral",[f0]:"Custom"};function Mw(t,e){const r=bw[e];return r===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const cl=new F;function Ew(){Qe.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),r=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function Tw(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function Rw(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return r}function Ao(t){return t!==""}function Nm(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(Aw,Pw)}const Cw=new Map;function Pw(t,e){let r=Ye[e];if(r===void 0){const i=Cw.get(e);if(i!==void 0)r=Ye[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(r)}const Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(Lw,Nw)}function Nw(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dw={[Ml]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Iw(t){return Dw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uw={[Qn]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function Ow(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Uw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fw={[Ja]:"ENVMAP_MODE_REFRACTION"};function kw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Fw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zw={[c0]:"ENVMAP_BLENDING_MULTIPLY",[mS]:"ENVMAP_BLENDING_MIX",[gS]:"ENVMAP_BLENDING_ADD"};function Bw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":zw[t.combine]||"ENVMAP_BLENDING_NONE"}function Hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function Gw(t,e,r,i){const n=t.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const l=Iw(r),c=Ow(r),h=kw(r),p=Bw(r),u=Hw(r),f=ww(r),m=Tw(a),b=n.createProgram();let g,d,v=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(g=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,m].filter(Ao).join(`
`),d.length>0&&(d+=`
`)):(g=[Um(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,m,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexNormals?"#define HAS_NORMAL":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),d=[Um(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,m,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+h:"",r.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.retroreflection?"#define USE_RETROREFLECTION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas||r.batchingColor?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Ei?"#define TONE_MAPPING":"",r.toneMapping!==Ei?Ye.tonemapping_pars_fragment:"",r.toneMapping!==Ei?Mw("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Sw("linearToOutputTexel",r.outputColorSpace),Ew(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ao).join(`
`)),o=mh(o),o=Nm(o,r),o=Dm(o,r),s=mh(s),s=Nm(s,r),s=Dm(s,r),o=Im(o),s=Im(s),r.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",r.glslVersion===Gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+g+o,x=v+d+s,E=Cm(n,n.VERTEX_SHADER,M),w=Cm(n,n.FRAGMENT_SHADER,x);n.attachShader(b,E),n.attachShader(b,w),r.index0AttributeName!==void 0?n.bindAttribLocation(b,0,r.index0AttributeName):r.hasPositionAttribute===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function T(U){if(t.debug.checkShaderErrors){const k=n.getProgramInfoLog(b)||"",Y=n.getShaderInfoLog(E)||"",N=n.getShaderInfoLog(w)||"",q=k.trim(),$=Y.trim(),Q=N.trim();let G=!0,B=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,b,E,w);else{const W=Lm(n,E,"vertex"),O=Lm(n,w,"fragment");tt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+W+`
`+O)}else q!==""?Oe("WebGLProgram: Program Info Log:",q):($===""||Q==="")&&(B=!1);B&&(U.diagnostics={runnable:G,programLog:q,vertexShader:{log:$,prefix:g},fragmentShader:{log:Q,prefix:d}})}n.deleteShader(E),n.deleteShader(w),y=new Cl(n,b),R=Rw(n,b)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let C=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(b,vw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=_w++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=w,this}let Vw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,r,i){const n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new jw(e),r.set(e,i)),i}}class jw{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function Xw(t){return t===$n||t===ec||t===tc}function Yw(t,e,r,i,n,a){const o=new Sp,s=new Ww,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,C,U,k,Y){const N=U.fog,q=k.geometry,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||$,Q),B=G&&G.mapping===Mc?G.image.height:null,W=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const O=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=O!==void 0?O.length:0;let ve=0;q.morphAttributes.position!==void 0&&(ve=1),q.morphAttributes.normal!==void 0&&(ve=2),q.morphAttributes.color!==void 0&&(ve=3);let Pe,De,Ve,K;if(W){const Xe=_i[W];Pe=Xe.vertexShader,De=Xe.fragmentShader}else{Pe=y.vertexShader,De=y.fragmentShader;const Xe=s.getVertexShaderStage(y),Fe=s.getFragmentShaderStage(y);s.update(y,Xe,Fe),Ve=Xe.id,K=Fe.id}const ee=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Re=!!y.map,et=!!y.matcap,We=!!G,Be=!!y.aoMap,Ut=!!y.lightMap,_t=!!y.bumpMap&&y.wireframe===!1,dt=!!y.normalMap,Ct=!!y.displacementMap,Ot=!!y.emissiveMap,mt=!!y.metalnessMap,wt=!!y.roughnessMap,D=y.anisotropy>0,Pt=y.clearcoat>0,nt=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,j=y.transmission>0,J=D&&!!y.anisotropyMap,de=Pt&&!!y.clearcoatMap,he=Pt&&!!y.clearcoatNormalMap,I=Pt&&!!y.clearcoatRoughnessMap,le=_&&!!y.iridescenceMap,ce=_&&!!y.iridescenceThicknessMap,ye=z&&!!y.sheenColorMap,ne=z&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Te=!!y.specularColorMap,Ie=!!y.specularIntensityMap,He=j&&!!y.transmissionMap,P=j&&!!y.thicknessMap,re=!!y.gradientMap,ae=!!y.alphaMap,ge=y.alphaTest>0,xe=!!y.alphaHash,te=!!y.extensions;let ie=Ei;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ie=t.toneMapping);const se={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:Pe,fragmentShader:De,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:et,envMap:We,envMapMode:We&&G.mapping,envMapCubeUVHeight:B,aoMap:Be,lightMap:Ut,bumpMap:_t,normalMap:dt,displacementMap:Ct,emissiveMap:Ot,normalMapObjectSpace:dt&&y.normalMapType===yS,normalMapTangentSpace:dt&&y.normalMapType===uh,packedNormalMap:dt&&y.normalMapType===uh&&Xw(y.normalMap.format),metalnessMap:mt,roughnessMap:wt,anisotropy:D,anisotropyMap:J,clearcoat:Pt,clearcoatMap:de,clearcoatNormalMap:he,clearcoatRoughnessMap:I,dispersion:nt,retroreflection:A,iridescence:_,iridescenceMap:le,iridescenceThicknessMap:ce,sheen:z,sheenColorMap:ye,sheenRoughnessMap:ne,specularMap:Le,specularColorMap:Te,specularIntensityMap:Ie,transmission:j,transmissionMap:He,thicknessMap:P,gradientMap:re,opaque:y.transparent===!1&&y.blending===ko&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:ge,alphaHash:xe,combine:y.combine,mapUv:Re&&m(y.map.channel),aoMapUv:Be&&m(y.aoMap.channel),lightMapUv:Ut&&m(y.lightMap.channel),bumpMapUv:_t&&m(y.bumpMap.channel),normalMapUv:dt&&m(y.normalMap.channel),displacementMapUv:Ct&&m(y.displacementMap.channel),emissiveMapUv:Ot&&m(y.emissiveMap.channel),metalnessMapUv:mt&&m(y.metalnessMap.channel),roughnessMapUv:wt&&m(y.roughnessMap.channel),anisotropyMapUv:J&&m(y.anisotropyMap.channel),clearcoatMapUv:de&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ne&&m(y.sheenRoughnessMap.channel),specularMapUv:Le&&m(y.specularMap.channel),specularColorMapUv:Te&&m(y.specularColorMap.channel),specularIntensityMapUv:Ie&&m(y.specularIntensityMap.channel),transmissionMapUv:He&&m(y.transmissionMap.channel),thicknessMapUv:P&&m(y.thicknessMap.channel),alphaMapUv:ae&&m(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(dt||D),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Re||ae),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ve,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Ot&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jr,flipSided:y.side===lr,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:te&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&y.extensions.multiDraw===!0||_e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)R.push(C),R.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(d(R,y),v(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function d(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function v(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){const R=f[y.type];let C;if(R){const U=_i[R];C=l1.clone(U.uniforms)}else C=y.uniforms;return C}function x(y,R){let C=h.get(R);return C!==void 0?++C.usedTimes:(C=new Gw(t,R,y,n),c.push(C),h.set(R,C)),C}function E(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){s.remove(y)}function T(){s.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function qw(){let t=new WeakMap;function e(o){return t.has(o)}function r(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function n(o,s,l){t.get(o)[s]=l}function a(){t=new WeakMap}return{has:e,get:r,remove:i,update:n,dispose:a}}function Zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fm(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function s(u,f,m,b,g,d){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:d},t[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=g,v.group=d),e++,v}function l(u,f,m,b,g,d,v){v.reversedDepth===!0&&(g=-g);const M=s(u,f,m,b,g,d);m.transmission>0?i.push(M):m.transparent===!0?n.push(M):r.push(M)}function c(u,f,m,b,g,d){const v=s(u,f,m,b,g,d);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):r.unshift(v)}function h(u,f){r.length>1&&r.sort(u||Zw),i.length>1&&i.sort(f||Om),n.length>1&&n.sort(f||Om)}function p(){for(let u=e,f=t.length;u<f;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:l,unshift:c,finish:p,sort:h}}function Kw(){let t=new WeakMap;function e(i,n){const a=t.get(i);let o;return a===void 0?(o=new Fm,t.set(i,[o])):n>=a.length?(o=new Fm,a.push(o)):o=a[n],o}function r(){t=new WeakMap}return{get:e,dispose:r}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"SunLight":case"DirectionalLight":r={direction:new F,color:new Ge};break;case"SpotLight":r={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":r={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":r={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=r,r}}}function Qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"SunLight":case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let $w=0;function eT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tT(t){const e=new Jw,r=Qw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const n=new F,a=new Mt,o=new Mt;function s(c){let h=0,p=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,m=0,b=0,g=0,d=0,v=0,M=0,x=0,E=0,w=0,T=0,y=0,R=0,C=0;c.sort(eT);for(let k=0,Y=c.length;k<Y;k++){const N=c[k],q=N.color,$=N.intensity,Q=N.distance;let G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===$n?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=q.r*$,p+=q.g*$,u+=q.b*$;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],$);C++}else if(N.isSunLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,O=r.get(N);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[m]=O,i.sunShadowMap[m]=G;const fe=W.getViewportCount();for(let ve=0;ve<fe;ve++)i.sunShadowMatrix[b+ve]=W.getMatrix(ve),i.sunShadowCascade[b+ve]=W._cascadeData[ve];b+=fe,m++}i.sun[f]=B,f++}else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,O=r.get(N);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[g]=O,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=N.shadow.matrix,E++}i.directional[g]=B,g++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(q).multiplyScalar($),B.distance=Q,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[v]=B;const W=N.shadow;if(N.map&&(i.spotLightMap[y]=N.map,y++,W.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[v]=W.matrix,N.castShadow){const O=r.get(N);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=G,T++}v++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(q).multiplyScalar($),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=B,M++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const W=N.shadow,O=r.get(N);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[d]=O,i.pointShadowMap[d]=G,i.pointShadowMatrix[d]=N.shadow.matrix,w++}i.point[d]=B,d++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar($),B.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[x]=B,x++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==M||U.hemiLength!==x||U.numSunShadows!==m||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==T||U.numSpotMaps!==y||U.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=d,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,U.sunLength=f,U.directionalLength=g,U.pointLength=d,U.spotLength=v,U.rectAreaLength=M,U.hemiLength=x,U.numSunShadows=m,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=T,U.numSpotMaps=y,U.numLightProbes=C,i.version=$w++)}function l(c,h){let p=0,u=0,f=0,m=0,b=0,g=0;const d=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const x=c[v];if(x.isSunLight){const E=i.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),p++}else if(x.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(d),u++}else if(x.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const E=i.rectArea[b];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),o.identity(),a.copy(x.matrixWorld),a.premultiply(d),o.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),b++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:s,setupView:l,state:i}}function km(t){const e=new tT(t),r=[],i=[],n=[];function a(u){p.camera=u,r.length=0,i.length=0,n.length=0}function o(u){r.push(u)}function s(u){i.push(u)}function l(u){n.push(u)}function c(){e.setup(r)}function h(u){e.setupView(r,u)}const p={lightsArray:r,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:s,pushLightProbeGrid:l}}function rT(t){let e=new WeakMap;function r(n,a=0){const o=e.get(n);let s;return o===void 0?(s=new km(t),e.set(n,[s])):a>=o.length?(s=new km(t),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:r,dispose:i}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
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
}`,aT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],oT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],zm=new Mt,xo=new F,Lu=new F;function sT(t,e,r){let i=new bp;const n=new ke,a=new ke,o=new It,s=new p1,l=new f1,c={},h=r.maxTextureSize,p={[Mn]:lr,[lr]:Mn,[jr]:jr},u=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:iT,fragmentShader:nT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new _r;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ht(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let d=this.type;this.render=function(w,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Kx&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);const R=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=d!==this.type;Y&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=w.length;N<q;N++){const $=w[N],Q=$.shadow;if(Q===void 0){Oe("WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;n.copy(Q.mapSize);const G=Q.getFrameExtents();n.multiply(G),a.copy(Q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/G.x),n.x=a.x*G.x,Q.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/G.y),n.y=a.y*G.y,Q.mapSize.y=a.y));const B=t.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=B,Q.map===null||Y===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===To){if($.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new ci(n.x,n.y,{format:$n,type:Ti,minFilter:sr,magFilter:sr,generateMipmaps:!1}),Q.map.texture.name=$.name+".shadowMap",Q.map.depthTexture=new ls(n.x,n.y,xi),Q.map.depthTexture.name=$.name+".shadowMapDepth",Q.map.depthTexture.format=ji,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Qt,Q.map.depthTexture.magFilter=Qt}else $.isPointLight?(Q.map=new X0(n.x),Q.map.depthTexture=new o1(n.x,wi)):(Q.map=new ci(n.x,n.y),Q.map.depthTexture=new ls(n.x,n.y,wi)),Q.map.depthTexture.name=$.name+".shadowMap",Q.map.depthTexture.format=ji,this.type===Ml?(Q.map.depthTexture.compareFunction=B?yp:_p,Q.map.depthTexture.minFilter=sr,Q.map.depthTexture.magFilter=sr):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Qt,Q.map.depthTexture.magFilter=Qt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==n.x||Q.map.height!==n.y)&&Q.map.setSize(n.x,n.y);const W=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();$.isPointLight!==!0&&Q.updateMatrices($,y);for(let O=0;O<W;O++){const fe=Q.getCamera(O);if($.isPointLight){const ve=Q.camera,Pe=Q.matrix,De=$.distance||ve.far;De!==ve.far&&(ve.far=De,ve.updateProjectionMatrix()),xo.setFromMatrixPosition($.matrixWorld),ve.position.copy(xo),Lu.copy(ve.position),Lu.add(aT[O]),ve.up.copy(oT[O]),ve.lookAt(Lu),ve.updateMatrixWorld(),Pe.makeTranslation(-xo.x,-xo.y,-xo.z),zm.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(zm,ve.coordinateSystem,ve.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)t.setRenderTarget(Q.map,O),t.clear();else{O===0&&(t.setRenderTarget(Q.map),t.clear());const ve=Q.getViewport(O);o.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),k.viewport(o)}i=Q.getFrustum(O),x(T,y,fe,$,this.type)}Q.isPointLightShadow!==!0&&this.type===To&&v(Q,y),Q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(R,C,U)};function v(w,T){const y=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ci(n.x,n.y,{format:$n,type:Ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,y,u,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,y,f,b,null)}function M(w,T,y,R){let C=null;const U=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)C=U;else if(C=y.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const k=C.uuid,Y=T.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let q=N[Y];q===void 0&&(q=C.clone(),N[Y]=q,T.addEventListener("dispose",E)),C=q}if(C.visible=T.visible,C.wireframe=T.wireframe,R===To?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:p[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=t.properties.get(C);k.light=y}return C}function x(w,T,y,R,C){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===To)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const k=e.update(w),Y=w.material;if(Array.isArray(Y)){const N=k.groups;for(let q=0,$=N.length;q<$;q++){const Q=N[q],G=Y[Q.materialIndex];if(G&&G.visible){const B=M(w,G,R,C);w.onBeforeShadow(t,w,T,y,k,B,Q),t.renderBufferDirect(y,null,k,B,w,Q),w.onAfterShadow(t,w,T,y,k,B,Q)}}}else if(Y.visible){const N=M(w,Y,R,C);w.onBeforeShadow(t,w,T,y,k,N,null),t.renderBufferDirect(y,null,k,N,w,null),w.onAfterShadow(t,w,T,y,k,N,null)}}const U=w.children;for(let k=0,Y=U.length;k<Y;k++)x(U[k],T,y,R,C)}function E(w){w.target.removeEventListener("dispose",E);for(const T in c){const y=c[T],R=w.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function lT(t,e){function r(){let P=!1;const re=new It;let ae=null;const ge=new It(0,0,0,0);return{setMask:function(xe){ae!==xe&&!P&&(t.colorMask(xe,xe,xe,xe),ae=xe)},setLocked:function(xe){P=xe},setClear:function(xe,te,ie,se,Xe){Xe===!0&&(xe*=se,te*=se,ie*=se),re.set(xe,te,ie,se),ge.equals(re)===!1&&(t.clearColor(xe,te,ie,se),ge.copy(re))},reset:function(){P=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let P=!1,re=!1,ae=null,ge=null,xe=null;return{setReversed:function(te){if(re!==te){const ie=e.get("EXT_clip_control");te?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),re=te;const se=xe;xe=null,this.setClear(se)}},getReversed:function(){return re},setTest:function(te){te?ee(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(te){ae!==te&&!P&&(t.depthMask(te),ae=te)},setFunc:function(te){if(re&&(te=LS[te]),ge!==te){switch(te){case Td:t.depthFunc(t.NEVER);break;case Rd:t.depthFunc(t.ALWAYS);break;case Ad:t.depthFunc(t.LESS);break;case ns:t.depthFunc(t.LEQUAL);break;case Cd:t.depthFunc(t.EQUAL);break;case Pd:t.depthFunc(t.GEQUAL);break;case Ld:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=te}},setLocked:function(te){P=te},setClear:function(te){xe!==te&&(xe=te,re&&(te=1-te),t.clearDepth(te))},reset:function(){P=!1,ae=null,ge=null,xe=null,re=!1}}}function n(){let P=!1,re=null,ae=null,ge=null,xe=null,te=null,ie=null,se=null,Xe=null;return{setTest:function(Fe){P||(Fe?ee(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(Fe){re!==Fe&&!P&&(t.stencilMask(Fe),re=Fe)},setFunc:function(Fe,qe,Ce){(ae!==Fe||ge!==qe||xe!==Ce)&&(t.stencilFunc(Fe,qe,Ce),ae=Fe,ge=qe,xe=Ce)},setOp:function(Fe,qe,Ce){(te!==Fe||ie!==qe||se!==Ce)&&(t.stencilOp(Fe,qe,Ce),te=Fe,ie=qe,se=Ce)},setLocked:function(Fe){P=Fe},setClear:function(Fe){Xe!==Fe&&(t.clearStencil(Fe),Xe=Fe)},reset:function(){P=!1,re=null,ae=null,ge=null,xe=null,te=null,ie=null,se=null,Xe=null}}}const a=new r,o=new i,s=new n,l=new WeakMap,c=new WeakMap;let h={},p={},u={},f=new WeakMap,m=[],b=null,g=!1,d=null,v=null,M=null,x=null,E=null,w=null,T=null,y=new Ge(0,0,0),R=0,C=!1,U=null,k=null,Y=null,N=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,G=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),Q=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Q=G>=2);let W=null,O={};const fe=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Pe=new It().fromArray(fe),De=new It().fromArray(ve);function Ve(P,re,ae,ge){const xe=new Uint8Array(4),te=t.createTexture();t.bindTexture(P,te),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ie=0;ie<ae;ie++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(re+ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return te}const K={};K[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ee(t.DEPTH_TEST),o.setFunc(ns),_t(!1),dt(zf),ee(t.CULL_FACE),Be(zi);function ee(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Me(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ue(P,re){return u[P]!==re?(t.bindFramebuffer(P,re),u[P]=re,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=re),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=re),!0):!1}function _e(P,re){let ae=m,ge=!1;if(P){ae=f.get(re),ae===void 0&&(ae=[],f.set(re,ae));const xe=P.textures;if(ae.length!==xe.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let te=0,ie=xe.length;te<ie;te++)ae[te]=t.COLOR_ATTACHMENT0+te;ae.length=xe.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function Re(P){return b!==P?(t.useProgram(P),b=P,!0):!1}const et={[ya]:t.FUNC_ADD,[Qx]:t.FUNC_SUBTRACT,[$x]:t.FUNC_REVERSE_SUBTRACT};et[eS]=t.MIN,et[tS]=t.MAX;const We={[rS]:t.ZERO,[iS]:t.ONE,[nS]:t.SRC_COLOR,[s0]:t.SRC_ALPHA,[uS]:t.SRC_ALPHA_SATURATE,[lS]:t.DST_COLOR,[oS]:t.DST_ALPHA,[aS]:t.ONE_MINUS_SRC_COLOR,[l0]:t.ONE_MINUS_SRC_ALPHA,[cS]:t.ONE_MINUS_DST_COLOR,[sS]:t.ONE_MINUS_DST_ALPHA,[dS]:t.CONSTANT_COLOR,[hS]:t.ONE_MINUS_CONSTANT_COLOR,[pS]:t.CONSTANT_ALPHA,[fS]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(P,re,ae,ge,xe,te,ie,se,Xe,Fe){if(P===zi){g===!0&&(Me(t.BLEND),g=!1);return}if(g===!1&&(ee(t.BLEND),g=!0),P!==Jx){if(P!==d||Fe!==C){if((v!==ya||E!==ya)&&(t.blendEquation(t.FUNC_ADD),v=ya,E=ya),Fe)switch(P){case ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case is:t.blendFunc(t.ONE,t.ONE);break;case Bf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",P);break}else switch(P){case ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bf:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",P);break}M=null,x=null,w=null,T=null,y.set(0,0,0),R=0,d=P,C=Fe}return}xe=xe||re,te=te||ae,ie=ie||ge,(re!==v||xe!==E)&&(t.blendEquationSeparate(et[re],et[xe]),v=re,E=xe),(ae!==M||ge!==x||te!==w||ie!==T)&&(t.blendFuncSeparate(We[ae],We[ge],We[te],We[ie]),M=ae,x=ge,w=te,T=ie),(se.equals(y)===!1||Xe!==R)&&(t.blendColor(se.r,se.g,se.b,Xe),y.copy(se),R=Xe),d=P,C=!1}function Ut(P,re){P.side===jr?Me(t.CULL_FACE):ee(t.CULL_FACE);let ae=P.side===lr;re&&(ae=!ae),_t(ae),P.blending===ko&&P.transparent===!1?Be(zi):Be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),a.setMask(P.colorWrite);const ge=P.stencilWrite;s.setTest(ge),ge&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function _t(P){U!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),U=P)}function dt(P){P!==qx?(ee(t.CULL_FACE),P!==k&&(P===zf?t.cullFace(t.BACK):P===Zx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),k=P}function Ct(P){P!==Y&&(Q&&t.lineWidth(P),Y=P)}function Ot(P,re,ae){P?(ee(t.POLYGON_OFFSET_FILL),(N!==re||q!==ae)&&(N=re,q=ae,o.getReversed()&&(re=-re),t.polygonOffset(re,ae))):Me(t.POLYGON_OFFSET_FILL)}function mt(P){P?ee(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function wt(P){P===void 0&&(P=t.TEXTURE0+$-1),W!==P&&(t.activeTexture(P),W=P)}function D(P,re,ae){ae===void 0&&(W===null?ae=t.TEXTURE0+$-1:ae=W);let ge=O[ae];ge===void 0&&(ge={type:void 0,texture:void 0},O[ae]=ge),(ge.type!==P||ge.texture!==re)&&(W!==ae&&(t.activeTexture(ae),W=ae),t.bindTexture(P,re||K[P]),ge.type=P,ge.texture=re)}function Pt(){const P=O[W];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function _(){try{t.texSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function z(){try{t.texSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function de(){try{t.texStorage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function he(){try{t.texStorage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function I(){try{t.texImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function le(){try{t.texImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function ce(P){return p[P]!==void 0?p[P]:t.getParameter(P)}function ye(P,re){p[P]!==re&&(t.pixelStorei(P,re),p[P]=re)}function ne(P){Pe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Pe.copy(P))}function Le(P){De.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),De.copy(P))}function Te(P,re){let ae=c.get(re);ae===void 0&&(ae=new WeakMap,c.set(re,ae));let ge=ae.get(P);ge===void 0&&(ge=t.getUniformBlockIndex(re,P.name),ae.set(P,ge))}function Ie(P,re){const ae=c.get(re).get(P);l.get(re)!==ae&&(t.uniformBlockBinding(re,ae,P.__bindingPointIndex),l.set(re,ae))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},W=null,O={},u={},f=new WeakMap,m=[],b=null,g=!1,d=null,v=null,M=null,x=null,E=null,w=null,T=null,y=new Ge(0,0,0),R=0,C=!1,U=null,k=null,Y=null,N=null,q=null,Pe.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ee,disable:Me,bindFramebuffer:Ue,drawBuffers:_e,useProgram:Re,setBlending:Be,setMaterial:Ut,setFlipSided:_t,setCullFace:dt,setLineWidth:Ct,setPolygonOffset:Ot,setScissorTest:mt,activeTexture:wt,bindTexture:D,unbindTexture:Pt,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:I,texImage3D:le,pixelStorei:ye,getParameter:ce,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:de,texStorage3D:he,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:j,compressedTexSubImage3D:J,scissor:ne,viewport:Le,reset:He}}function cT(t,e,r,i,n,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,p=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,_){return m?new OffscreenCanvas(A,_):nc("canvas")}function g(A,_,z){let j=1;const J=nt(A);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const de=Math.floor(j*J.width),he=Math.floor(j*J.height);u===void 0&&(u=b(de,he));const I=_?b(de,he):u;return I.width=de,I.height=he,I.getContext("2d").drawImage(A,0,0,de,he),Oe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+he+")."),I}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function d(A){return A.generateMipmaps}function v(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,_,z,j,J,de=!1){if(A!==null){if(t[A]!==void 0)return t[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;j&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===t.RED&&(z===t.FLOAT&&(I=t.R32F),z===t.HALF_FLOAT&&(I=t.R16F),z===t.UNSIGNED_BYTE&&(I=t.R8),z===t.UNSIGNED_SHORT&&he&&(I=he.R16_EXT),z===t.SHORT&&he&&(I=he.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.R8UI),z===t.UNSIGNED_SHORT&&(I=t.R16UI),z===t.UNSIGNED_INT&&(I=t.R32UI),z===t.BYTE&&(I=t.R8I),z===t.SHORT&&(I=t.R16I),z===t.INT&&(I=t.R32I)),_===t.RG&&(z===t.FLOAT&&(I=t.RG32F),z===t.HALF_FLOAT&&(I=t.RG16F),z===t.UNSIGNED_BYTE&&(I=t.RG8),z===t.UNSIGNED_SHORT&&he&&(I=he.RG16_EXT),z===t.SHORT&&he&&(I=he.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RG8UI),z===t.UNSIGNED_SHORT&&(I=t.RG16UI),z===t.UNSIGNED_INT&&(I=t.RG32UI),z===t.BYTE&&(I=t.RG8I),z===t.SHORT&&(I=t.RG16I),z===t.INT&&(I=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RGB8UI),z===t.UNSIGNED_SHORT&&(I=t.RGB16UI),z===t.UNSIGNED_INT&&(I=t.RGB32UI),z===t.BYTE&&(I=t.RGB8I),z===t.SHORT&&(I=t.RGB16I),z===t.INT&&(I=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(I=t.RGBA16UI),z===t.UNSIGNED_INT&&(I=t.RGBA32UI),z===t.BYTE&&(I=t.RGBA8I),z===t.SHORT&&(I=t.RGBA16I),z===t.INT&&(I=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&he&&(I=he.RGB16_EXT),z===t.SHORT&&he&&(I=he.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(I=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(I=t.R11F_G11F_B10F)),_===t.RGBA){const le=de?ic:Qe.getTransfer(J);z===t.FLOAT&&(I=t.RGBA32F),z===t.HALF_FLOAT&&(I=t.RGBA16F),z===t.UNSIGNED_BYTE&&(I=le===at?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&he&&(I=he.RGBA16_EXT),z===t.SHORT&&he&&(I=he.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(I=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(I=t.RGB5_A1)}return(I===t.R16F||I===t.R32F||I===t.RG16F||I===t.RG32F||I===t.RGBA16F||I===t.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function E(A,_){let z;return A?_===null||_===wi||_===os?z=t.DEPTH24_STENCIL8:_===xi?z=t.DEPTH32F_STENCIL8:_===as&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===os?z=t.DEPTH_COMPONENT24:_===xi?z=t.DEPTH_COMPONENT32F:_===as&&(z=t.DEPTH_COMPONENT16),z}function w(A,_){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==sr?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(A){const _=A.target;_.removeEventListener("dispose",y),U(_)}function R(A){const _=i.get(A);if(_.__webglInit===void 0)return;const z=A.source,j=f.get(z);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(A),Object.keys(j).length===0&&f.delete(z)}i.remove(A)}function C(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const z=A.source,j=f.get(z);delete j[_.__cacheKey],o.memory.textures--}function U(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)t.deleteFramebuffer(_.__webglFramebuffer[j][J]);else t.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)t.deleteFramebuffer(_.__webglFramebuffer[j]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,J=z.length;j<J;j++){const de=i.get(z[j]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(A)}let k=0;function Y(){k=0}function N(){return k}function q(A){k=A}function $(){const A=k;return A>=n.maxTextures&&Oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),k+=1,A}function Q(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function G(A,_){const z=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);r.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function B(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Me(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);r.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function W(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Me(z,A,_);return}r.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function O(A,_){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ue(z,A,_);return}r.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const fe={[Cr]:t.REPEAT,[At]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},ve={[Qt]:t.NEAREST,[vS]:t.NEAREST_MIPMAP_NEAREST,[ks]:t.NEAREST_MIPMAP_LINEAR,[sr]:t.LINEAR,[tu]:t.LINEAR_MIPMAP_NEAREST,[Vn]:t.LINEAR_MIPMAP_LINEAR},Pe={[SS]:t.NEVER,[TS]:t.ALWAYS,[bS]:t.LESS,[_p]:t.LEQUAL,[MS]:t.EQUAL,[yp]:t.GEQUAL,[ES]:t.GREATER,[wS]:t.NOTEQUAL};function De(A,_){if(_.type===xi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sr||_.magFilter===tu||_.magFilter===ks||_.magFilter===Vn||_.minFilter===sr||_.minFilter===tu||_.minFilter===ks||_.minFilter===Vn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,fe[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,fe[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,fe[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ve[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==ks&&_.minFilter!==Vn||_.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ve(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const j=_.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const de=Q(_);if(de!==A.__cacheKey){J[de]===void 0&&(J[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[de].usedTimes++;const he=J[A.__cacheKey];he!==void 0&&(J[A.__cacheKey].usedTimes--,he.usedTimes===0&&C(_)),A.__cacheKey=de,A.__webglTexture=J[de].texture}return z}function K(A,_,z){return Math.floor(Math.floor(A/z)/_)}function ee(A,_,z,j){const J=A.updateRanges;if(J.length===0)r.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{J.sort((ce,ye)=>ce.start-ye.start);let de=0;for(let ce=1;ce<J.length;ce++){const ye=J[de],ne=J[ce],Le=ye.start+ye.count,Te=K(ne.start,_.width,4),Ie=K(ye.start,_.width,4);ne.start<=Le+1&&Te===Ie&&K(ne.start+ne.count-1,_.width,4)===Te?ye.count=Math.max(ye.count,ne.start+ne.count-ye.start):(++de,J[de]=ne)}J.length=de+1;const he=r.getParameter(t.UNPACK_ROW_LENGTH),I=r.getParameter(t.UNPACK_SKIP_PIXELS),le=r.getParameter(t.UNPACK_SKIP_ROWS);r.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ce=0,ye=J.length;ce<ye;ce++){const ne=J[ce],Le=Math.floor(ne.start/4),Te=Math.ceil(ne.count/4),Ie=Le%_.width,He=Math.floor(Le/_.width),P=Te;r.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(t.UNPACK_SKIP_ROWS,He),r.texSubImage2D(t.TEXTURE_2D,0,Ie,He,P,1,z,j,_.data)}A.clearUpdateRanges(),r.pixelStorei(t.UNPACK_ROW_LENGTH,he),r.pixelStorei(t.UNPACK_SKIP_PIXELS,I),r.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function Me(A,_,z){let j=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=t.TEXTURE_3D);const J=Ve(A,_),de=_.source;r.bindTexture(j,A.__webglTexture,t.TEXTURE0+z);const he=i.get(de);if(de.version!==he.__version||J===!0){if(r.activeTexture(t.TEXTURE0+z),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){const re=Qe.getPrimaries(Qe.workingColorSpace),ae=_.colorSpace===un?null:Qe.getPrimaries(_.colorSpace),ge=_.colorSpace===un||re===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}r.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let I=g(_.image,!1,n.maxTextureSize);I=Pt(_,I);const le=a.convert(_.format,_.colorSpace),ce=a.convert(_.type);let ye=x(_.internalFormat,le,ce,_.normalized,_.colorSpace,_.isVideoTexture);De(j,_);let ne;const Le=_.mipmaps,Te=_.isVideoTexture!==!0,Ie=he.__version===void 0||J===!0,He=de.dataReady,P=w(_,I);if(_.isDepthTexture)ye=E(_.format===Wn,_.type),Ie&&(Te?r.texStorage2D(t.TEXTURE_2D,1,ye,I.width,I.height):r.texImage2D(t.TEXTURE_2D,0,ye,I.width,I.height,0,le,ce,null));else if(_.isDataTexture)if(Le.length>0){Te&&Ie&&r.texStorage2D(t.TEXTURE_2D,P,ye,Le[0].width,Le[0].height);for(let re=0,ae=Le.length;re<ae;re++)ne=Le[re],Te?He&&r.texSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,le,ce,ne.data):r.texImage2D(t.TEXTURE_2D,re,ye,ne.width,ne.height,0,le,ce,ne.data);_.generateMipmaps=!1}else Te?(Ie&&r.texStorage2D(t.TEXTURE_2D,P,ye,I.width,I.height),He&&ee(_,I,le,ce)):r.texImage2D(t.TEXTURE_2D,0,ye,I.width,I.height,0,le,ce,I.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Te&&Ie&&r.texStorage3D(t.TEXTURE_2D_ARRAY,P,ye,Le[0].width,Le[0].height,I.depth);for(let re=0,ae=Le.length;re<ae;re++)if(ne=Le[re],_.format!==oi)if(le!==null)if(Te){if(He)if(_.layerUpdates.size>0){const ge=vm(ne.width,ne.height,_.format,_.type);for(const xe of _.layerUpdates){const te=ne.data.subarray(xe*ge/ne.data.BYTES_PER_ELEMENT,(xe+1)*ge/ne.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,xe,ne.width,ne.height,1,le,te)}}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,I.depth,le,ne.data)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,ye,ne.width,ne.height,I.depth,0,ne.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?He&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,I.depth,le,ce,ne.data):r.texImage3D(t.TEXTURE_2D_ARRAY,re,ye,ne.width,ne.height,I.depth,0,le,ce,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Te&&Ie&&r.texStorage2D(t.TEXTURE_2D,P,ye,Le[0].width,Le[0].height);for(let re=0,ae=Le.length;re<ae;re++)ne=Le[re],_.format!==oi?le!==null?Te?He&&r.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,le,ne.data):r.compressedTexImage2D(t.TEXTURE_2D,re,ye,ne.width,ne.height,0,ne.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?He&&r.texSubImage2D(t.TEXTURE_2D,re,0,0,ne.width,ne.height,le,ce,ne.data):r.texImage2D(t.TEXTURE_2D,re,ye,ne.width,ne.height,0,le,ce,ne.data)}else if(_.isDataArrayTexture)if(Te){if(Ie&&r.texStorage3D(t.TEXTURE_2D_ARRAY,P,ye,I.width,I.height,I.depth),He)if(_.layerUpdates.size>0){const re=vm(I.width,I.height,_.format,_.type);for(const ae of _.layerUpdates){const ge=I.data.subarray(ae*re/I.data.BYTES_PER_ELEMENT,(ae+1)*re/I.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,I.width,I.height,1,le,ce,ge)}_.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,le,ce,I.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,I.width,I.height,I.depth,0,le,ce,I.data);else if(_.isData3DTexture)Te?(Ie&&r.texStorage3D(t.TEXTURE_3D,P,ye,I.width,I.height,I.depth),He&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,le,ce,I.data)):r.texImage3D(t.TEXTURE_3D,0,ye,I.width,I.height,I.depth,0,le,ce,I.data);else if(_.isFramebufferTexture){if(Ie)if(Te)r.texStorage2D(t.TEXTURE_2D,P,ye,I.width,I.height);else{let re=I.width,ae=I.height;for(let ge=0;ge<P;ge++)r.texImage2D(t.TEXTURE_2D,ge,ye,re,ae,0,le,ce,null),re>>=1,ae>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),I.parentNode!==re){re.appendChild(I),p.add(_),re.onpaint=ae=>{const ge=ae.changedElements;for(const xe of p)ge.includes(xe.image)&&(xe.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,I);else{const ae=t.RGBA,ge=t.RGBA,xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ae,ge,xe,I)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Te&&Ie){const re=nt(Le[0]);r.texStorage2D(t.TEXTURE_2D,P,ye,re.width,re.height)}for(let re=0,ae=Le.length;re<ae;re++)ne=Le[re],Te?He&&r.texSubImage2D(t.TEXTURE_2D,re,0,0,le,ce,ne):r.texImage2D(t.TEXTURE_2D,re,ye,le,ce,ne);_.generateMipmaps=!1}else if(Te){if(Ie){const re=nt(I);r.texStorage2D(t.TEXTURE_2D,P,ye,re.width,re.height)}He&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,le,ce,I)}else r.texImage2D(t.TEXTURE_2D,0,ye,le,ce,I);d(_)&&v(j),he.__version=de.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ue(A,_,z){if(_.image.length!==6)return;const j=Ve(A,_),J=_.source;r.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const de=i.get(J);if(J.version!==de.__version||j===!0){r.activeTexture(t.TEXTURE0+z);const he=Qe.getPrimaries(Qe.workingColorSpace),I=_.colorSpace===un?null:Qe.getPrimaries(_.colorSpace),le=_.colorSpace===un||he===I?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,ye=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let te=0;te<6;te++)!ce&&!ye?ne[te]=g(_.image[te],!0,n.maxCubemapSize):ne[te]=ye?_.image[te].image:_.image[te],ne[te]=Pt(_,ne[te]);const Le=ne[0],Te=a.convert(_.format,_.colorSpace),Ie=a.convert(_.type),He=x(_.internalFormat,Te,Ie,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,re=de.__version===void 0||j===!0,ae=J.dataReady;let ge=w(_,Le);De(t.TEXTURE_CUBE_MAP,_);let xe;if(ce){P&&re&&r.texStorage2D(t.TEXTURE_CUBE_MAP,ge,He,Le.width,Le.height);for(let te=0;te<6;te++){xe=ne[te].mipmaps;for(let ie=0;ie<xe.length;ie++){const se=xe[ie];_.format!==oi?Te!==null?P?ae&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,0,0,se.width,se.height,Te,se.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,He,se.width,se.height,0,se.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ae&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,0,0,se.width,se.height,Te,Ie,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,He,se.width,se.height,0,Te,Ie,se.data)}}}else{if(xe=_.mipmaps,P&&re){xe.length>0&&ge++;const te=nt(ne[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,ge,He,te.width,te.height)}for(let te=0;te<6;te++)if(ye){P?ae&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ne[te].width,ne[te].height,Te,Ie,ne[te].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ne[te].width,ne[te].height,0,Te,Ie,ne[te].data);for(let ie=0;ie<xe.length;ie++){const se=xe[ie].image[te].image;P?ae&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,0,0,se.width,se.height,Te,Ie,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,He,se.width,se.height,0,Te,Ie,se.data)}}else{P?ae&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,Ie,ne[te]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Te,Ie,ne[te]);for(let ie=0;ie<xe.length;ie++){const se=xe[ie];P?ae&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,0,0,Te,Ie,se.image[te]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,He,Te,Ie,se.image[te])}}}d(_)&&v(t.TEXTURE_CUBE_MAP),de.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function _e(A,_,z,j,J,de){const he=a.convert(z.format,z.colorSpace),I=a.convert(z.type),le=x(z.internalFormat,he,I,z.normalized,z.colorSpace),ce=i.get(_),ye=i.get(z);if(ye.__renderTarget=_,!ce.__hasExternalTextures){const ne=Math.max(1,_.width>>de),Le=Math.max(1,_.height>>de);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?r.texImage3D(J,de,le,ne,Le,_.depth,0,he,I,null):r.texImage2D(J,de,le,ne,Le,0,he,I,null)}r.bindFramebuffer(t.FRAMEBUFFER,A),wt(_)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,J,ye.__webglTexture,0,mt(_)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,J,ye.__webglTexture,de),r.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(A,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,de=E(_.stencilBuffer,J),he=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(_)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),de,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),de,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,de,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,A)}else{const j=_.textures;for(let J=0;J<j.length;J++){const de=j[J],he=a.convert(de.format,de.colorSpace),I=a.convert(de.type),le=x(de.internalFormat,he,I,de.normalized,de.colorSpace);wt(_)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),le,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function et(A,_,z){const j=_.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),r.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),De(t.TEXTURE_CUBE_MAP,_.depthTexture);const ce=a.convert(_.depthTexture.format),ye=a.convert(_.depthTexture.type);let ne;_.depthTexture.format===ji?ne=t.DEPTH_COMPONENT24:_.depthTexture.format===Wn&&(ne=t.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ne,_.width,_.height,0,ce,ye,null)}}else G(_.depthTexture,0);const de=J.__webglTexture,he=mt(_),I=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,le=_.depthTexture.format===Wn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ji)wt(_)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,I,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,le,I,de,0);else if(_.depthTexture.format===Wn)wt(_)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,I,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,le,I,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(A){const _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)et(_.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?et(_.__webglFramebuffer[0],A,0):et(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(r.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=t.createRenderbuffer(),Re(_.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?r.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):r.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Re(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}r.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(A,_,z){const j=i.get(A);_!==void 0&&_e(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&We(A)}function Ut(A){const _=A.texture,z=i.get(A),j=i.get(_);A.addEventListener("dispose",y);const J=A.textures,de=A.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=_.version,o.memory.textures++),de){z.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[I]=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[I][le]=t.createFramebuffer()}else z.__webglFramebuffer[I]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)z.__webglFramebuffer[I]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(he)for(let I=0,le=J.length;I<le;I++){const ce=i.get(J[I]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&wt(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let I=0;I<J.length;I++){const le=J[I];z.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[I]);const ce=a.convert(le.format,le.colorSpace),ye=a.convert(le.type),ne=x(le.internalFormat,ce,ye,le.normalized,le.colorSpace,A.isXRRenderTarget===!0),Le=mt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ne,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.RENDERBUFFER,z.__webglColorRenderbuffer[I])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(z.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){r.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),De(t.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)_e(z.__webglFramebuffer[I][le],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+I,le);else _e(z.__webglFramebuffer[I],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);d(_)&&v(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(he){for(let I=0,le=J.length;I<le;I++){const ce=J[I],ye=i.get(ce);let ne=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(ne,ye.__webglTexture),De(ne,ce),_e(z.__webglFramebuffer,A,ce,t.COLOR_ATTACHMENT0+I,ne,0),d(ce)&&v(ne)}r.unbindTexture()}else{let I=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(I=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(I,j.__webglTexture),De(I,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)_e(z.__webglFramebuffer[le],A,_,t.COLOR_ATTACHMENT0,I,le);else _e(z.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,I,0);d(_)&&v(I),r.unbindTexture()}A.depthBuffer&&We(A)}function _t(A){const _=A.textures;for(let z=0,j=_.length;z<j;z++){const J=_[z];if(d(J)){const de=M(A),he=i.get(J).__webglTexture;r.bindTexture(de,he),v(de),r.unbindTexture()}}}const dt=[],Ct=[];function Ot(A){if(A.samples>0){if(wt(A)===!1){const _=A.textures,z=A.width,j=A.height;let J=t.COLOR_BUFFER_BIT;const de=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(A),I=_.length>1;if(I)for(let ce=0;ce<_.length;ce++)r.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const le=A.texture.mipmaps;le&&le.length>0?r.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):r.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),I){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const ye=i.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,z,j,0,0,z,j,J,t.NEAREST),l===!0&&(dt.length=0,Ct.length=0,dt.push(t.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(dt.push(de),Ct.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ct)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),I)for(let ce=0;ce<_.length;ce++){r.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const ye=i.get(_[ce]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,ye,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function mt(A){return Math.min(n.maxSamples,A.samples)}function wt(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){const _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Pt(A,_){const z=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==rc&&z!==un&&(Qe.getTransfer(z)===at?(j!==oi||J!==Ur)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),_}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.getTextureUnits=N,this.setTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return r.buffers.depth.getReversed()}}function uT(t,e){function r(i,n=un){let a;const o=Qe.getTransfer(n);if(i===Ur)return t.UNSIGNED_BYTE;if(i===pp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===x0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_0)return t.BYTE;if(i===y0)return t.SHORT;if(i===as)return t.UNSIGNED_SHORT;if(i===hp)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ti)return t.HALF_FLOAT;if(i===b0)return t.ALPHA;if(i===M0)return t.RGB;if(i===oi)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Wn)return t.DEPTH_STENCIL;if(i===E0)return t.RED;if(i===mp)return t.RED_INTEGER;if(i===$n)return t.RG;if(i===gp)return t.RG_INTEGER;if(i===vp)return t.RGBA_INTEGER;if(i===El||i===wl||i===Tl||i===Rl)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===El)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===El)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Ud||i===Od||i===Fd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===zd||i===Bd||i===Hd||i===Gd||i===ec||i===Vd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kd||i===zd)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hd)return a.COMPRESSED_R11_EAC;if(i===Gd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return a.COMPRESSED_RG11_EAC;if(i===Vd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wd||i===jd||i===Xd||i===Yd||i===qd||i===Zd||i===Kd||i===Jd||i===Qd||i===$d||i===eh||i===th||i===rh||i===ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$d)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nh||i===ah||i===oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===nh)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sh||i===lh||i===tc||i===ch)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===sh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ch)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
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

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r){if(this.texture===null){const i=new z0(e.texture);(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new yr({vertexShader:dT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Ht(new Ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fT extends Cn{constructor(e,r){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,m=null;const b=typeof XRWebGLBinding<"u",g=new pT,d={},v=r.getContextAttributes();let M=null,x=null;const E=[],w=[],T=new ke;let y=null,R=null;const C=new Ir;C.viewport=new It;const U=new Ir;U.viewport=new It;const k=[C,U],Y=new x1;let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new cu,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new cu,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new cu,E[K]=ee),ee.getHandSpace()};function $(K){const ee=w.indexOf(K.inputSource);if(ee===-1)return;const Me=E[ee];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||o),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",Q),n.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){const ee=w[K];ee!==null&&(w[K]=null,E[K].disconnect(ee))}N=null,q=null,g.reset();for(const K in d)delete d[K];if(e.setRenderTarget(M),f=null,u=null,p=null,n=null,x=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),R!==null){const K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(n,r)),p},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",Q),n.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await r.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Me=null,Ue=null;v.depth&&(Ue=v.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,ee=v.stencil?Wn:ji,Me=v.stencil?os:wi);const _e={colorFormat:r.RGBA8,depthFormat:Ue,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(_e),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ci(u.textureWidth,u.textureHeight,{format:oi,type:Ur,depthTexture:new ls(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,r,ee),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:oi,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),Ve.setContext(n),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let ee=0;ee<K.removed.length;ee++){const Me=K.removed[ee],Ue=w.indexOf(Me);Ue>=0&&(w[Ue]=null,E[Ue].disconnect(Me))}for(let ee=0;ee<K.added.length;ee++){const Me=K.added[ee];let Ue=w.indexOf(Me);if(Ue===-1){for(let Re=0;Re<E.length;Re++)if(Re>=w.length){w.push(Me),Ue=Re;break}else if(w[Re]===null){w[Re]=Me,Ue=Re;break}if(Ue===-1)break}const _e=E[Ue];_e&&_e.connect(Me)}}const B=new F,W=new F;function O(K,ee,Me){B.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(Me.matrixWorld);const Ue=B.distanceTo(W),_e=ee.projectionMatrix.elements,Re=Me.projectionMatrix.elements,et=_e[14]/(_e[10]-1),We=_e[14]/(_e[10]+1),Be=(_e[9]+1)/_e[5],Ut=(_e[9]-1)/_e[5],_t=(_e[8]-1)/_e[0],dt=(Re[8]+1)/Re[0],Ct=et*_t,Ot=et*dt,mt=Ue/(-_t+dt),wt=mt*-_t;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const D=et+mt,Pt=We+mt,nt=Ct-wt,A=Ot+(Ue-wt),_=Be*We/Pt*D,z=Ut*We/Pt*D;K.projectionMatrix.makePerspective(nt,A,_,z,D,Pt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let ee=K.near,Me=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),Y.near=U.near=C.near=ee,Y.far=U.far=C.far=Me,(N!==Y.near||q!==Y.far)&&(n.updateRenderState({depthNear:Y.near,depthFar:Y.far}),N=Y.near,q=Y.far),Y.layers.mask=K.layers.mask|6,C.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;const Ue=K.parent,_e=Y.cameras;fe(Y,Ue);for(let Re=0;Re<_e.length;Re++)fe(_e[Re],Ue);_e.length===2?O(Y,C,U):Y.projectionMatrix.copy(C.projectionMatrix),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),ve(K,Y,Ue)};function ve(K,ee,Me){Me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=dh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(K){return d[K]};let Pe=null;function De(K,ee){if(h=ee.getViewerPose(c||o),m=ee,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ue=!1;Me.length!==Y.cameras.length&&(Y.cameras.length=0,Ue=!0);for(let Re=0;Re<Me.length;Re++){const et=Me[Re];let We=null;if(f!==null)We=f.getViewport(et);else{const Ut=p.getViewSubImage(u,et);We=Ut.viewport,Re===0&&(e.setRenderTargetTextures(x,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(x))}let Be=k[Re];Be===void 0&&(Be=new Ir,Be.layers.enable(Re),Be.viewport=new It,k[Re]=Be),Be.matrix.fromArray(et.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(et.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Re===0&&(Y.matrix.copy(Be.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ue===!0&&Y.cameras.push(Be)}const _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){p=i.getBinding();const Re=p.getDepthInformation(Me[0]);Re&&Re.isValid&&Re.texture&&g.init(Re,n.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),p=i.getBinding();for(let Re=0;Re<Me.length;Re++){const et=Me[Re].camera;if(et){let We=d[et];We||(We=new z0,d[et]=We);const Be=p.getCameraImage(et);We.sourceTexture=Be}}}}for(let Me=0;Me<E.length;Me++){const Ue=w[Me],_e=E[Me];Ue!==null&&_e!==void 0&&_e.update(Ue,ee,c||o)}Pe&&Pe(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ve=new W0;Ve.setAnimationLoop(De),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}}const mT=new Mt,J0=new je;J0.set(-1,0,0,0,1,0,0,0,1);function gT(t,e){function r(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,B0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function n(g,d,v,M,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(g,d):d.isMeshLambertMaterial?(a(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(g,d),p(g,d)):d.isMeshPhongMaterial?(a(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(g,d),u(g,d),d.isMeshPhysicalMaterial&&f(g,d,x)):d.isMeshMatcapMaterial?(a(g,d),m(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),b(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&s(g,d)):d.isPointsMaterial?l(g,d,v,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,r(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,r(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,r(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===lr&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,r(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===lr&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,r(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,r(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,r(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(J0),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,r(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,r(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,r(d.map,g.mapTransform))}function s(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=M*.5,d.map&&(g.map.value=d.map,r(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,r(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,r(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,r(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,r(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,r(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,r(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,r(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,r(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,r(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,r(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===lr&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,r(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,r(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,r(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,r(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,r(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,r(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,r(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function vT(t,e,r,i){let n={},a={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const w=E.program;i.uniformBlockBinding(x,w)}function c(x,E){let w=n[x.id];w===void 0&&(g(x),w=h(x),n[x.id]=w,x.addEventListener("dispose",v));const T=E.program;i.updateUBOMapping(x,T);const y=e.render.frame;a[x.id]!==y&&(u(x),a[x.id]=y)}function h(x){const E=p();x.__bindingPointIndex=E;const w=t.createBuffer(),T=x.__size,y=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,T,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function p(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const E=n[x.id],w=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let y=0,R=w.length;y<R;y++){const C=w[y];if(Array.isArray(C))for(let U=0,k=C.length;U<k;U++)f(C[U],y,U,T);else f(C,y,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(x,E,w,T){if(b(x,E,w,T)===!0){const y=x.__offset,R=x.value;if(Array.isArray(R)){let C=0;for(let U=0;U<R.length;U++){const k=R[U],Y=d(k);m(k,x.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,x.__data)}}function m(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function b(x,E,w,T){const y=x.value,R=E+"_"+w;if(T[R]===void 0)return typeof y=="number"||typeof y=="boolean"?T[R]=y:ArrayBuffer.isView(y)?T[R]=y.slice():T[R]=y.clone(),!0;{const C=T[R];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(x){const E=x.uniforms;let w=0;const T=16;for(let R=0,C=E.length;R<C;R++){const U=Array.isArray(E[R])?E[R]:[E[R]];for(let k=0,Y=U.length;k<Y;k++){const N=U[k],q=Array.isArray(N.value)?N.value:[N.value];for(let $=0,Q=q.length;$<Q;$++){const G=q[$],B=d(G),W=w%T,O=W%B.boundary,fe=W+O;w+=O,fe!==0&&T-fe<B.storage&&(w+=T-fe),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=B.storage}}}const y=w%T;return y>0&&(w+=T-y),x.__size=w,x.__cache={},this}function d(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function M(){for(const x in n)t.deleteBuffer(n[x]);o=[],n={},a={}}return{bind:l,update:c,dispose:M}}const _T=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function yT(){return mi===null&&(mi=new t1(_T,16,16,$n,Ti),mi.name="DFG_LUT",mi.minFilter=sr,mi.magFilter=sr,mi.wrapS=At,mi.wrapT=At,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class xT{constructor(e={}){const{canvas:r=CS(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ur}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const b=f,g=new Set([vp,gp,mp]),d=new Set([Ur,wi,as,os,pp,fp]),v=new Uint32Array(4),M=new Int32Array(4),x=new F;let E=null,w=null;const T=[],y=[];let R=null;this.domElement=r,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1,k=null,Y=null,N=null,q=null;this._outputColorSpace=yt;let $=0,Q=0,G=null,B=-1,W=null;const O=new It,fe=new It;let ve=null;const Pe=new Ge(0);let De=0,Ve=r.width,K=r.height,ee=1,Me=null,Ue=null;const _e=new It(0,0,Ve,K),Re=new It(0,0,Ve,K);let et=!1;const We=new bp;let Be=!1,Ut=!1;const _t=new Mt,dt=new F,Ct=new It,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return G===null?ee:1}let D=i;function Pt(S,L){return r.getContext(S,L)}let nt,A,_,z,j,J,de,he,I,le,ce,ye,ne,Le,Te,Ie,He,P,re,ae,ge,xe,te;try{const S={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${dp}`),r.addEventListener("webglcontextlost",Xe,!1),r.addEventListener("webglcontextrestored",Fe,!1),r.addEventListener("webglcontextcreationerror",qe,!1),D===null){const L="webgl2";if(D=Pt(L,S),D===null)throw Pt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(S){throw r.removeEventListener("webglcontextlost",Xe,!1),r.removeEventListener("webglcontextrestored",Fe,!1),r.removeEventListener("webglcontextcreationerror",qe,!1),tt("WebGLRenderer: "+S.message),S}function ie(){nt=new yE(D),nt.init(),ge=new uT(D,nt),A=new cE(D,nt,e,ge),_=new lT(D,nt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),N=D.createFramebuffer(),q=D.createFramebuffer(),z=new bE(D),j=new qw,J=new cT(D,nt,_,j,A,ge,z),de=new _E(C),he=new E1(D),xe=new sE(D,he),I=new xE(D,he,z,xe),le=new EE(D,I,he,xe,z),P=new ME(D,A,J),Te=new uE(j),ce=new Yw(C,de,nt,A,xe,Te),ye=new gT(C,j),ne=new Kw,Le=new rT(nt),He=new oE(C,de,_,le,m,l),Ie=new sT(C,le,A),te=new vT(D,z,A,_),re=new lE(D,nt,z),ae=new SE(D,nt,z),z.programs=ce.programs,C.capabilities=A,C.extensions=nt,C.properties=j,C.renderLists=ne,C.shadowMap=Ie,C.state=_,C.info=z}b!==Ur&&(R=new TE(b,r.width,r.height,s,n,a));const se=new fT(C,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(Ve,K,!1))},this.getSize=function(S){return S.set(Ve,K)},this.setSize=function(S,L,Z=!0){if(se.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=S,K=L,r.width=Math.floor(S*ee),r.height=Math.floor(L*ee),Z===!0&&(r.style.width=S+"px",r.style.height=L+"px"),R!==null&&R.setSize(r.width,r.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Ve*ee,K*ee).floor()},this.setDrawingBufferSize=function(S,L,Z){Ve=S,K=L,ee=Z,r.width=Math.floor(S*Z),r.height=Math.floor(L*Z),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(b===Ur){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,L,Z,V){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,L,Z,V),_.viewport(O.copy(_e).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,L,Z,V){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,L,Z,V),_.scissor(fe.copy(Re).multiplyScalar(ee).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){_.setScissorTest(et=S)},this.setOpaqueSort=function(S){Me=S},this.setTransparentSort=function(S){Ue=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,Z=!0){let V=0;if(S){let H=!1;if(G!==null){const ue=G.texture.format;H=g.has(ue)}if(H){const ue=G.texture.type,me=d.has(ue),Se=He.getClearColor(),Ee=He.getClearAlpha(),Ne=Se.r,Ze=Se.g,$e=Se.b;me?(v[0]=Ne,v[1]=Ze,v[2]=$e,v[3]=Ee,D.clearBufferuiv(D.COLOR,0,v)):(M[0]=Ne,M[1]=Ze,M[2]=$e,M[3]=Ee,D.clearBufferiv(D.COLOR,0,M))}else V|=D.COLOR_BUFFER_BIT}L&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){r.removeEventListener("webglcontextlost",Xe,!1),r.removeEventListener("webglcontextrestored",Fe,!1),r.removeEventListener("webglcontextcreationerror",qe,!1),He.dispose(),ne.dispose(),Le.dispose(),j.dispose(),de.dispose(),le.dispose(),xe.dispose(),te.dispose(),ce.dispose(),se.dispose(),se.removeEventListener("sessionstart",Kt),se.removeEventListener("sessionend",pr),Xt.stop()};function Xe(S){S.preventDefault(),Wf("WebGLRenderer: Context Lost."),U=!0}function Fe(){Wf("WebGLRenderer: Context Restored."),U=!1;const S=z.autoReset,L=Ie.enabled,Z=Ie.autoUpdate,V=Ie.needsUpdate,H=Ie.type;ie(),z.autoReset=S,Ie.enabled=L,Ie.autoUpdate=Z,Ie.needsUpdate=V,Ie.type=H}function qe(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ce(S){const L=S.target;L.removeEventListener("dispose",Ce),Lt(L)}function Lt(S){it(S),j.remove(S)}function it(S){const L=j.get(S).programs;L!==void 0&&(L.forEach(function(Z){ce.releaseProgram(Z)}),S.isShaderMaterial&&ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,Z,V,H,ue){L===null&&(L=Ot);const me=H.isMesh&&H.matrixWorld.determinantAffine()<0,Se=e_(S,L,Z,V,H);_.setMaterial(V,me);let Ee=Z.index,Ne=1;if(V.wireframe===!0){if(Ee=I.getWireframeAttribute(Z),Ee===void 0)return;Ne=2}const Ze=Z.drawRange,$e=Z.attributes.position;let Ae=Ze.start*Ne,lt=(Ze.start+Ze.count)*Ne;ue!==null&&(Ae=Math.max(Ae,ue.start*Ne),lt=Math.min(lt,(ue.start+ue.count)*Ne)),Ee!==null?(Ae=Math.max(Ae,0),lt=Math.min(lt,Ee.count)):$e!=null&&(Ae=Math.max(Ae,0),lt=Math.min(lt,$e.count));const Ft=lt-Ae;if(Ft<0||Ft===1/0)return;xe.setup(H,V,Se,Z,Ee);let ht,pt=re;if(Ee!==null&&(ht=he.get(Ee),pt=ae,pt.setIndex(ht)),H.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*wt()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(H.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),_.setLineWidth(Tt*wt()),H.isLineSegments?pt.setMode(D.LINES):H.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else H.isPoints?pt.setMode(D.POINTS):H.isSprite&&pt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Tt=H._multiDrawStarts,we=H._multiDrawCounts,fr=H._multiDrawCount,Nn=Ee?he.get(Ee).bytesPerElement:1,Hr=j.get(V).currentProgram.getUniforms();for(let hi=0;hi<fr;hi++)Hr.setValue(D,"_gl_DrawID",hi),pt.render(Tt[hi]/Nn,we[hi])}else if(H.isInstancedMesh)pt.renderInstances(Ae,Ft,H.count);else if(Z.isInstancedBufferGeometry){const Tt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Tt);pt.renderInstances(Ae,Ft,we)}else pt.render(Ae,Ft)};function Ri(S,L,Z,V){k!==null&&S.isNodeMaterial&&k.setObject(V,S),Be===!0&&Te.setState(S,Z,!1),S.transparent===!0&&S.side===jr&&S.forceSinglePass===!1?(S.side=lr,S.needsUpdate=!0,xs(S,L,V),S.side=Mn,S.needsUpdate=!0,xs(S,L,V),S.side=jr):xs(S,L,V)}this.compile=function(S,L,Z=null){Z===null&&(Z=S),k!==null&&k.renderStart(S,L,Z),w=Le.get(Z),w.init(L),y.push(w),Z.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==Z&&S.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),Ut=this.localClippingEnabled,Be=Te.init(this.clippingPlanes,Ut),Be===!0&&Te.setGlobalState(this.clippingPlanes,L),k!==null&&Ie.render(w.state.shadowsArray,Z,L);const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const Se=ue[me];Ri(Se,Z,L,H),V.add(Se)}else Ri(ue,Z,L,H),V.add(ue)}),w=y.pop(),k!==null&&k.renderEnd(),V},this.compileAsync=function(S,L,Z=null){const V=this.compile(S,L,Z);return new Promise(H=>{function ue(){if(V.forEach(function(me){const Se=j.get(me).currentProgram;(Se===void 0||Se.isReady())&&V.delete(me)}),V.size===0){H(S);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tr=null;function ys(S){tr&&tr(S)}function Kt(){Xt.stop()}function pr(){Xt.start()}const Xt=new W0;Xt.setAnimationLoop(ys),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(S){tr=S,se.setAnimationLoop(S),S===null?Xt.stop():Xt.start()},se.addEventListener("sessionstart",Kt),se.addEventListener("sessionend",pr),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(S,L);const Z=se.enabled===!0&&se.isPresenting===!0,V=R!==null&&(G===null||Z)&&R.begin(C,G);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,L,G),w=Le.get(S,y.length),w.init(L),w.state.textureUnits=J.getTextureUnits(),y.push(w),_t.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),We.setFromProjectionMatrix(_t,Si,L.reversedDepth),Ut=this.localClippingEnabled,Be=Te.init(this.clippingPlanes,Ut),E=ne.get(S,T.length),E.init(),T.push(E),se.enabled===!0&&se.isPresenting===!0){const ue=C.xr.getDepthSensingMesh();ue!==null&&qi(ue,L,-1/0,C.sortObjects)}qi(S,L,0,C.sortObjects),E.finish(),k!==null&&k.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Me,Ue),mt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,mt&&He.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Te.beginShadows();const H=w.state.shadowsArray;if(Ie.render(H,S,L),Be===!0&&Te.endShadows(),(V&&R.hasRenderPass())===!1){const ue=E.opaque,me=E.transmissive;if(w.setupLights(),L.isArrayCamera){const Se=L.cameras;if(me.length>0)for(let Ee=0,Ne=Se.length;Ee<Ne;Ee++){const Ze=Se[Ee];Zi(ue,me,S,Ze)}mt&&He.render(S);for(let Ee=0,Ne=Se.length;Ee<Ne;Ee++){const Ze=Se[Ee];Pn(E,S,Ze,Ze.viewport)}}else me.length>0&&Zi(ue,me,S,L),mt&&He.render(S),Pn(E,S,L)}G!==null&&Q===0&&(J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G)),V&&R.end(C),S.isScene===!0&&S.onAfterRender(C,S,L),xe.resetDefaultState(),B=-1,W=null,y.pop(),y.length>0?(w=y[y.length-1],J.setTextureUnits(w.state.textureUnits),Be===!0&&Te.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,k!==null&&k.renderEnd()};function qi(S,L,Z,V){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(We)){V&&Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const ue=le.update(S),me=S.material;me.visible&&E.push(S,ue,me,Z,Ct.z,null,L)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(We))){const ue=le.update(S),me=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ct.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ct.copy(ue.boundingSphere.center)),Ct.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(me)){const Se=ue.groups;for(let Ee=0,Ne=Se.length;Ee<Ne;Ee++){const Ze=Se[Ee],$e=me[Ze.materialIndex];$e&&$e.visible&&E.push(S,ue,$e,Z,Ct.z,Ze,L)}}else me.visible&&E.push(S,ue,me,Z,Ct.z,null,L)}}const H=S.children;for(let ue=0,me=H.length;ue<me;ue++)qi(H[ue],L,Z,V)}function Pn(S,L,Z,V){const{opaque:H,transmissive:ue,transparent:me}=S;w.setupLightsView(Z),Be===!0&&Te.setGlobalState(C.clippingPlanes,Z),V&&_.viewport(O.copy(V)),H.length>0&&Ln(H,L,Z),ue.length>0&&Ln(ue,L,Z),me.length>0&&Ln(me,L,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Zi(S,L,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const $e=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new ci(1,1,{generateMipmaps:!0,type:$e?Ti:Ur,minFilter:Vn,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const H=w.state.transmissionRenderTarget[V.id],ue=V.viewport||O;H.setSize(ue.z*C.transmissionResolutionScale,ue.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(H),C.getClearColor(Pe),De=C.getClearAlpha(),De<1&&C.setClearColor(16777215,.5),C.clear(),mt&&He.render(Z);const Ne=C.toneMapping;C.toneMapping=Ei;const Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Be===!0&&Te.setGlobalState(C.clippingPlanes,V),Ln(S,Z,V),J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H),nt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ae=0,lt=L.length;Ae<lt;Ae++){const Ft=L[Ae],{object:ht,geometry:pt,material:Tt,group:we}=Ft;if(Tt.side===jr&&ht.layers.test(V.layers)){const fr=Tt.side;Tt.side=lr,Tt.needsUpdate=!0,Ep(ht,Z,V,pt,Tt,we),Tt.side=fr,Tt.needsUpdate=!0,$e=!0}}$e===!0&&(J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H))}C.setRenderTarget(me,Se,Ee),C.setClearColor(Pe,De),Ze!==void 0&&(V.viewport=Ze),C.toneMapping=Ne}function Ln(S,L,Z){const V=L.isScene===!0?L.overrideMaterial:null;for(let H=0,ue=S.length;H<ue;H++){const me=S[H],{object:Se,geometry:Ee,group:Ne}=me;let Ze=me.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),Se.layers.test(Z.layers)&&Ep(Se,L,Z,Ee,Ze,Ne)}}function Ep(S,L,Z,V,H,ue){k!==null&&H.isNodeMaterial&&k.setObject(S,H),S.onBeforeRender(C,L,Z,V,H,ue),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,L,Z,V,S,ue),H.transparent===!0&&H.side===jr&&H.forceSinglePass===!1?(H.side=lr,H.needsUpdate=!0,C.renderBufferDirect(Z,L,V,H,S,ue),H.side=Mn,H.needsUpdate=!0,C.renderBufferDirect(Z,L,V,H,S,ue),H.side=jr):C.renderBufferDirect(Z,L,V,H,S,ue),S.onAfterRender(C,L,Z,V,H,ue)}function xs(S,L,Z){L.isScene!==!0&&(L=Ot);const V=j.get(S),H=w.state.lights,ue=w.state.shadowsArray,me=H.state.version,Se=ce.getParameters(S,H.state,ue,L,Z,w.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(Se);let Ne=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;const Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=de.get(S.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Ce),Ne=new Map,V.programs=Ne);let $e=Ne.get(Ee);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===me)return Tp(S,Se),$e}else Se.uniforms=ce.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,Z,Se),S.onBeforeCompile(Se,C),$e=ce.acquireProgram(Se,Ee),Ne.set(Ee,$e),V.uniforms=Se.uniforms;const Ae=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Te.uniform),Tp(S,Se),V.needsLights=r_(S),V.lightsStateVersion=me,V.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=$e,V.uniformsList=null,$e}function wp(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Cl.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Tp(S,L){const Z=j.get(S);Z.outputColorSpace=L.outputColorSpace,Z.batching=L.batching,Z.batchingColor=L.batchingColor,Z.instancing=L.instancing,Z.instancingColor=L.instancingColor,Z.instancingMorph=L.instancingMorph,Z.skinning=L.skinning,Z.morphTargets=L.morphTargets,Z.morphNormals=L.morphNormals,Z.morphColors=L.morphColors,Z.morphTargetsCount=L.morphTargetsCount,Z.numClippingPlanes=L.numClippingPlanes,Z.numIntersection=L.numClipIntersection,Z.vertexAlphas=L.vertexAlphas,Z.vertexTangents=L.vertexTangents,Z.toneMapping=L.toneMapping}function $0(S,L){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){const H=S[Z];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function e_(S,L,Z,V,H){L.isScene!==!0&&(L=Ot),J.resetTextureUnits();const ue=L.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,Se=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qe.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=de.get(V.envMap||me,Ee),Ze=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Ft=!!Z.morphAttributes.color;let ht=Ei;V.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ht=C.toneMapping);const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=pt!==void 0?pt.length:0,we=j.get(V),fr=w.state.lights;if(Be===!0&&(Ut===!0||S!==W)){const ut=S===W&&V.id===B;Te.setState(V,S,ut)}let Nn=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==fr.state.version||we.outputColorSpace!==Se||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ne||V.fog===!0&&we.fog!==ue||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Te.numPlanes||we.numIntersection!==Te.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==$e||we.morphTargets!==Ae||we.morphNormals!==lt||we.morphColors!==Ft||we.toneMapping!==ht||we.morphTargetsCount!==Tt||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Nn=!0):(Nn=!0,we.__version=V.version);let Hr=we.currentProgram;Nn===!0&&(Hr=xs(V,L,H),k&&V.isNodeMaterial&&k.onUpdateProgram(V,Hr,we));let hi=!1,Ki=!1,ia=!1;const ct=Hr.getUniforms(),Nt=we.uniforms;if(_.useProgram(Hr.program)&&(hi=!0,Ki=!0,ia=!0),V.id!==B&&(B=V.id,Ki=!0),we.needsLights){const ut=$0(w.state.lightProbeGridArray,H);we.lightProbeGrid!==ut&&(we.lightProbeGrid=ut,Ki=!0)}if(hi||W!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",S.projectionMatrix),ct.setValue(D,"viewMatrix",S.matrixWorldInverse);const ut=ct.map.cameraPosition;ut!==void 0&&ut.setValue(D,dt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,Ki=!0,ia=!0)}if(we.needsLights&&(fr.state.sunShadowMap.length>0&&ct.setValue(D,"sunShadowMap",fr.state.sunShadowMap,J),fr.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",fr.state.directionalShadowMap,J),fr.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",fr.state.spotShadowMap,J),fr.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",fr.state.pointShadowMap,J)),H.isSkinnedMesh){ct.setOptional(D,H,"bindMatrix"),ct.setOptional(D,H,"bindMatrixInverse");const ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ct.setValue(D,"boneTexture",ut.boneTexture,J))}H.isBatchedMesh&&(ct.setOptional(D,H,"batchingTexture"),ct.setValue(D,"batchingTexture",H._matricesTexture,J),ct.setOptional(D,H,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",H._indirectTexture,J),ct.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",H._colorsTexture,J));const Ji=Z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&P.update(H,Z,Hr),(Ki||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,ct.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(Nt.envMapIntensity.value=L.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=yT()),Ki){if(ct.setValue(D,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&t_(Nt,ia),ue&&V.fog===!0&&ye.refreshFogUniforms(Nt,ue),ye.refreshMaterialUniforms(Nt,V,ee,K,w.state.transmissionRenderTarget[S.id]),we.needsLights&&we.lightProbeGrid){const ut=we.lightProbeGrid;Nt.probesSH.value=ut.texture,Nt.probesMin.value.copy(ut.boundingBox.min),Nt.probesMax.value.copy(ut.boundingBox.max),Nt.probesResolution.value.copy(ut.resolution)}Cl.upload(D,wp(we),Nt,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cl.upload(D,wp(we),Nt,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(D,"center",H.center),ct.setValue(D,"modelViewMatrix",H.modelViewMatrix),ct.setValue(D,"normalMatrix",H.normalMatrix),ct.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ut=V.uniformsGroups;for(let io=0,na=ut.length;io<na;io++){const Ap=ut[io];te.update(Ap,Hr),te.bind(Ap,Hr)}}return Hr}function t_(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function r_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(S,L,Z){const V=j.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=L,j.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const Z=j.get(S);Z.__webglFramebuffer=L,Z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,Z=0){G=S,$=L,Q=Z;let V=null,H=!1,ue=!1;if(S){const me=j.get(S);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),O.copy(S.viewport),fe.copy(S.scissor),ve=S.scissorTest,_.viewport(O),_.scissor(fe),_.setScissorTest(ve),B=-1;return}else if(me.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(me.__hasExternalTextures)J.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(me.__boundDepthTexture!==Ne){if(Ne!==null&&j.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ue=!0);const Ee=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?V=Ee[L][Z]:V=Ee[L],H=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?V=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[Z]:V=Ee,O.copy(S.viewport),fe.copy(S.scissor),ve=S.scissorTest}else O.copy(_e).multiplyScalar(ee).floor(),fe.copy(Re).multiplyScalar(ee).floor(),ve=et;if(Z!==0&&(V=Y),_.bindFramebuffer(D.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(O),_.scissor(fe),_.setScissorTest(ve),H){const me=j.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,Z)}else if(ue){const me=L;for(let Se=0;Se<S.textures.length;Se++){const Ee=j.get(S.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,Z,me)}}else if(S!==null&&Z!==0){const me=j.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,Z)}B=-1};function Rp(S){const L=j.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=A.textureFormatReadable(S.format),L.__typeReadable=A.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,Z,V,H,ue,me,Se=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){_.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ne=S.textures[Se],Ze=Ne.format,$e=Ne.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);const Ae=Rp(Ne);if(Ae.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-V&&Z>=0&&Z<=S.height-H&&D.readPixels(L,Z,V,H,ge.convert(Ze),ge.convert($e),ue)}finally{const Ne=G!==null?j.get(G).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,L,Z,V,H,ue,me,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(L>=0&&L<=S.width-V&&Z>=0&&Z<=S.height-H){_.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ne=S.textures[Se],Ze=Ne.format,$e=Ne.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);const Ae=Rp(Ne);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(L,Z,V,H,ge.convert(Ze),ge.convert($e),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ft=G!==null?j.get(G).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ft);const ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await PS(D,ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(lt),D.deleteSync(ht),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,Z=0){const V=Math.pow(2,-Z),H=Math.floor(S.image.width*V),ue=Math.floor(S.image.height*V),me=L!==null?L.x:0,Se=L!==null?L.y:0;J.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,me,Se,H,ue),_.unbindTexture()},this.copyTextureToTexture=function(S,L,Z=null,V=null,H=0,ue=0){let me,Se,Ee,Ne,Ze,$e,Ae,lt,Ft;const ht=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(Z!==null)me=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,Ze=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const Nt=Math.pow(2,-H);me=Math.floor(ht.width*Nt),Se=Math.floor(ht.height*Nt),S.isDataArrayTexture?Ee=ht.depth:S.isData3DTexture?Ee=Math.floor(ht.depth*Nt):Ee=1,Ne=0,Ze=0,$e=0}V!==null?(Ae=V.x,lt=V.y,Ft=V.z):(Ae=0,lt=0,Ft=0);const pt=ge.convert(L.format),Tt=ge.convert(L.type);let we;L.isData3DTexture?(J.setTexture3D(L,0),we=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(J.setTexture2DArray(L,0),we=D.TEXTURE_2D_ARRAY):(J.setTexture2D(L,0),we=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const fr=_.getParameter(D.UNPACK_ROW_LENGTH),Nn=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Hr=_.getParameter(D.UNPACK_SKIP_PIXELS),hi=_.getParameter(D.UNPACK_SKIP_ROWS),Ki=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),_.pixelStorei(D.UNPACK_SKIP_IMAGES,$e);const ia=S.isDataArrayTexture||S.isData3DTexture,ct=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const Nt=j.get(S),Ji=j.get(L),ut=j.get(Nt.__renderTarget),io=j.get(Ji.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let na=0;na<Ee;na++)ia&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(S).__webglTexture,H,$e+na),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(L).__webglTexture,ue,Ft+na)),D.blitFramebuffer(Ne,Ze,me,Se,Ae,lt,me,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||j.has(S)){const Nt=j.get(S),Ji=j.get(L);_.bindFramebuffer(D.READ_FRAMEBUFFER,N),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,q);for(let ut=0;ut<Ee;ut++)ia?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,H,$e+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,H),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ji.__webglTexture,ue,Ft+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ji.__webglTexture,ue),H!==0?D.blitFramebuffer(Ne,Ze,me,Se,Ae,lt,me,Se,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(we,ue,Ae,lt,Ft+ut,Ne,Ze,me,Se):D.copyTexSubImage2D(we,ue,Ae,lt,Ne,Ze,me,Se);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(we,ue,Ae,lt,Ft,me,Se,Ee,pt,Tt,ht.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(we,ue,Ae,lt,Ft,me,Se,Ee,pt,ht.data):D.texSubImage3D(we,ue,Ae,lt,Ft,me,Se,Ee,pt,Tt,ht):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Ae,lt,me,Se,pt,Tt,ht.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Ae,lt,ht.width,ht.height,pt,ht.data):D.texSubImage2D(D.TEXTURE_2D,ue,Ae,lt,me,Se,pt,Tt,ht);_.pixelStorei(D.UNPACK_ROW_LENGTH,fr),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nn),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Hr),_.pixelStorei(D.UNPACK_SKIP_ROWS,hi),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ki),ue===0&&L.generateMipmaps&&D.generateMipmap(we),_.unbindTexture()},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){$=0,Q=0,G=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),r.unpackColorSpace=Qe._getUnpackColorSpace()}}const Bm={type:"change"},Mp={type:"start"},Q0={type:"end"},ul=new vs,Hm=new Ui,ST=Math.cos(70*DS.DEG2RAD),Bt=new F,Mr=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6;class bT extends b1{constructor(e,r=null){super(e,r),this.state=ot.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ha.ROTATE,MIDDLE:Ha.DOLLY,RIGHT:Ha.PAN},this.touches={ONE:Na.ROTATE,TWO:Na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new En,this._lastTargetPosition=new F,this._quat=new En().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gm,this._sphericalDelta=new gm,this._scale=1,this._panOffset=new F,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new F,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ET.bind(this),this._onPointerDown=MT.bind(this),this._onPointerUp=wT.bind(this),this._onContextMenu=NT.bind(this),this._onMouseWheel=AT.bind(this),this._onKeyDown=CT.bind(this),this._onTouchStart=PT.bind(this),this._onTouchMove=LT.bind(this),this._onMouseDown=TT.bind(this),this._onMouseMove=RT.bind(this),this._interceptControlDown=DT.bind(this),this._interceptControlUp=IT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ot.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bm),this.update(),this.state=ot.NONE}pan(e,r){this._pan(e,r),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const r=this.object.position;Bt.copy(r).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Mr:i>Math.PI&&(i-=Mr),n<-Math.PI?n+=Mr:n>Math.PI&&(n-=Mr),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),r.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=Bt.length();o=this._clampDistance(s*this._scale);const l=s-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const s=new F(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<ST?this.object.lookAt(this.target):(Hm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(Hm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent(Bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mr/60*this.autoRotateSpeed*e:Mr/60/60*this.autoRotateSpeed}_getZoomScale(e){const r=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*r)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,r){Bt.setFromMatrixColumn(r,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,r){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(r,1):(Bt.setFromMatrixColumn(r,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,r){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Bt.copy(n).sub(this.target);let a=Bt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*r*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(r*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,r){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=r-i.top,o=i.width,s=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(Mr*this._rotateDelta.x/r.clientHeight),this._rotateUp(Mr*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let r=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mr*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),r=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mr*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),r=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mr*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),r=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mr*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),r=!0;break}r&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(Mr*this._rotateDelta.x/r.clientHeight),this._rotateUp(Mr*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+r.x)*.5,s=(e.pageY+r.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId){this._pointers.splice(r,1);return}}_isTrackingPointer(e){for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId)return!0;return!1}_trackPointer(e){let r=this._pointerPositions[e.pointerId];r===void 0&&(r=new ke,this._pointerPositions[e.pointerId]=r),r.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const r=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[r]}_customWheelEvent(e){const r=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(r){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function MT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ET(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function wT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],r=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:r.x,pageY:r.y});break}}function TT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ha.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ot.DOLLY;break;case Ha.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}break;case Ha.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Mp)}function RT(t){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function AT(t){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(t.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Q0))}function CT(t){this.enabled!==!1&&this._handleKeyDown(t)}function PT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Na.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ot.TOUCH_ROTATE;break;case Na.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Na.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ot.TOUCH_DOLLY_PAN;break;case Na.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Mp)}function LT(t){switch(this._trackPointer(t),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ot.NONE}}function NT(t){this.enabled!==!1&&t.preventDefault()}function DT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gi=[{id:"sun",name:"Sun",type:"star",order:0,descriptor:"The heart of our solar system",introduction:"The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.",facts:["Accounts for 99.86% of the mass in the solar system.","Surface temperature is about 5,500 degrees Celsius.","Light from the Sun takes 8 minutes and 20 seconds to reach Earth."],color:"#FFD700",gradient:"radial-gradient(circle at 30% 30%, #fff, #FFD700 40%, #ff8c00 80%, #8b0000)",size:90,distance:0,orbitSpeed:0},{id:"mercury",name:"Mercury",type:"planet",order:1,descriptor:"The swift planet",introduction:"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth.",facts:["Has no moons or rings.","A year on Mercury is just 88 Earth days.","Temperatures fluctuate from 430°C during the day to -180°C at night."],color:"#B0C4DE",gradient:"radial-gradient(circle at 30% 30%, #fff, #B0C4DE 50%, #708090)",size:8,distance:60,orbitSpeed:4.1},{id:"venus",name:"Venus",type:"planet",order:2,descriptor:"Earth's toxic twin",introduction:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and its thick atmosphere traps heat in a runaway greenhouse effect.",facts:["The hottest planet in our solar system.","Spins backwards compared to most other planets.","Has a surface pressure 90 times that of Earth."],color:"#DEB887",gradient:"radial-gradient(circle at 30% 30%, #fff, #DEB887 50%, #8B4513)",size:14,distance:90,orbitSpeed:1.6},{id:"earth",name:"Earth",type:"planet",order:3,descriptor:"Our home planet",introduction:"Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.",facts:["The only planet known to harbor life.","Its atmosphere is 78% nitrogen and 21% oxygen.","Has one moon and no rings."],color:"#4E55D8",gradient:"radial-gradient(circle at 30% 30%, #fff, #4E55D8 40%, #000080)",size:16,distance:130,orbitSpeed:1},{id:"mars",name:"Mars",type:"planet",order:4,descriptor:"The red planet",introduction:"Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.",facts:["Home to Olympus Mons, the largest volcano in the solar system.","Has two small moons, Phobos and Deimos.","Often appears red due to iron oxide (rust) on its surface."],color:"#CD5C5C",gradient:"radial-gradient(circle at 30% 30%, #ffc0cb, #CD5C5C 50%, #800000)",size:9,distance:170,orbitSpeed:.53},{id:"jupiter",name:"Jupiter",type:"planet",order:5,descriptor:"The giant planet",introduction:"Jupiter has a long history of surprising scientists. It is more than twice as massive as all the other planets combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth.",facts:["The largest planet in our solar system.","Has a faint ring system and 95 recognized moons.","Rotates completely in about 10 hours."],color:"#DAA520",gradient:"linear-gradient(to bottom, #DAA520 0%, #D2691E 20%, #DAA520 40%, #F5DEB3 60%, #D2691E 80%, #DAA520 100%)",size:56,distance:250,orbitSpeed:.08},{id:"saturn",name:"Saturn",type:"planet",order:6,descriptor:"The ringed jewel",introduction:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular or as complicated as Saturn's.",facts:["Has the most extensive ring system of any planet.","Could float in water because it is mostly made of gas.","Has 146 known moons."],color:"#F4A460",gradient:"linear-gradient(to bottom, #F5DEB3 0%, #F4A460 30%, #D2B48C 70%, #F4A460 100%)",size:46,distance:330,orbitSpeed:.03},{id:"uranus",name:"Uranus",type:"planet",order:7,descriptor:"The tilted planet",introduction:"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope and rotates on its side.",facts:["Rotates at a nearly 90-degree angle from the plane of its orbit.","An ice giant with a blue-green color from methane gas.","Has 13 faint rings."],color:"#87CEEB",gradient:"radial-gradient(circle at 30% 30%, #fff, #87CEEB 60%, #4682B4)",size:24,distance:400,orbitSpeed:.012},{id:"neptune",name:"Neptune",type:"planet",order:8,descriptor:"The windy world",introduction:"Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet not visible to the naked eye.",facts:["The first planet located through mathematical calculations.","Has winds that can reach up to 1,200 miles per hour.","Takes 165 Earth years to orbit the Sun once."],color:"#4169E1",gradient:"radial-gradient(circle at 30% 30%, #fff, #4169E1 50%, #00008B)",size:22,distance:460,orbitSpeed:.006}],qr=new Map;function UT(t=42){const e=new Uint8Array(512);let r=t;const i=()=>(r=r*16807%2147483647,(r-1)/2147483646),n=new Uint8Array(256);for(let l=0;l<256;l++)n[l]=l;for(let l=255;l>0;l--){const c=Math.floor(i()*(l+1)),h=n[l];n[l]=n[c],n[c]=h}for(let l=0;l<512;l++)e[l]=n[l&255];const a=l=>l*l*l*(l*(l*6-15)+10),o=(l,c,h)=>c+l*(h-c),s=(l,c,h)=>{const p=l&3,u=p<2?c:h,f=p<2?h:c;return(p&1?-u:u)+(p&2?-f:f)};return function(l,c){const h=Math.floor(l)&255,p=Math.floor(c)&255,u=l-Math.floor(l),f=c-Math.floor(c),m=a(u),b=a(f),g=e[h]+p,d=e[g],v=e[g+1],M=e[h+1]+p,x=e[M],E=e[M+1];return o(b,o(m,s(e[d],u,f),s(e[x],u-1,f)),o(m,s(e[v],u,f-1),s(e[E],u-1,f-1)))}}const OT=UT(1337);function Xi(t,e,r=5){let i=0,n=.5,a=1;for(let o=0;o<r;o++)i+=OT(t*a,e*a)*n,a*=2,n*=.5;return i}function FT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createImageData(2048,1024),i=r.data;for(let a=0;a<1024;a++){const o=a/1024,s=Math.sin(o*Math.PI);for(let l=0;l<2048;l++){const c=(a*2048+l)*4,h=l/2048,p=Xi(h*36,o*18,4),u=Xi(h*90,o*45,3),f=.72+p*.18+u*.1,m=Math.min(255,Math.floor(255*f*(.95+s*.05))),b=Math.min(255,Math.floor(185*f*f+35)),g=Math.min(255,Math.floor(60*f*f*f));i[c]=m,i[c+1]=b,i[c+2]=g,i[c+3]=255}}e.putImageData(r,0,0),[{x:2048*.28,y:1024*.42,r:24},{x:2048*.31,y:1024*.44,r:16},{x:2048*.33,y:1024*.41,r:11},{x:2048*.68,y:1024*.58,r:28},{x:2048*.71,y:1024*.6,r:18},{x:2048*.65,y:1024*.56,r:12},{x:2048*.82,y:1024*.38,r:19},{x:2048*.85,y:1024*.39,r:14},{x:2048*.14,y:1024*.62,r:15}].forEach(a=>{const o=e.createRadialGradient(a.x,a.y,a.r*.8,a.x,a.y,a.r*2.2);o.addColorStop(0,"rgba(255, 245, 180, 0.45)"),o.addColorStop(.5,"rgba(255, 210, 100, 0.2)"),o.addColorStop(1,"rgba(255, 150, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(a.x,a.y,a.r*2.2,0,Math.PI*2),e.fill();const s=e.createRadialGradient(a.x,a.y,a.r*.35,a.x,a.y,a.r);s.addColorStop(0,"#5a1d04"),s.addColorStop(.7,"#8f380c"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.beginPath(),e.arc(a.x,a.y,a.r,0,Math.PI*2),e.fill();const l=e.createRadialGradient(a.x,a.y,0,a.x,a.y,a.r*.45);l.addColorStop(0,"#1c0800"),l.addColorStop(.8,"#320e02"),l.addColorStop(1,"#5a1d04"),e.fillStyle=l,e.beginPath(),e.arc(a.x,a.y,a.r*.45,0,Math.PI*2),e.fill()});const n=new Jr(t);return n.wrapS=Cr,n.wrapT=At,n.colorSpace=yt,n}function Gm(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createImageData(2048,1024),i=r.data;for(let o=0;o<1024;o++)for(let s=0;s<2048;s++){const l=(o*2048+s)*4,c=s/2048,h=o/1024,p=Xi(c*14,h*14,5)*.5+.5,u=Xi(c*60,h*60,3)*.15,f=Math.max(0,Math.min(255,Math.floor((p*.7+u+.3)*155)));i[l]=Math.min(255,f+6),i[l+1]=Math.min(255,f+4),i[l+2]=f,i[l+3]=255}e.putImageData(r,0,0),[{x:2048*.35,y:1024*.45,r:140,depth:.3},{x:2048*.72,y:1024*.58,r:110,depth:.25},{x:2048*.18,y:1024*.7,r:90,depth:.2},{x:2048*.85,y:1024*.32,r:95,depth:.22}].forEach(o=>{const s=e.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);s.addColorStop(0,"rgba(55, 53, 50, 0.7)"),s.addColorStop(.7,"rgba(75, 73, 70, 0.4)"),s.addColorStop(.95,"rgba(175, 172, 168, 0.5)"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.beginPath(),e.arc(o.x,o.y,o.r,0,Math.PI*2),e.fill()});const n=o=>{const s=Math.sin(o++)*1e4;return s-Math.floor(s)};for(let o=0;o<400;o++){const s=n(o*3)*2048,l=n(o*3+1)*1024,c=3+Math.pow(n(o*3+2),2.5)*45;e.strokeStyle="rgba(220, 218, 215, 0.6)",e.lineWidth=Math.max(1,c*.12),e.beginPath(),e.arc(s,l,c,Math.PI*.7,Math.PI*1.7),e.stroke();const h=e.createRadialGradient(s+c*.25,l+c*.2,0,s,l,c);if(h.addColorStop(0,"rgba(30, 28, 26, 0.75)"),h.addColorStop(.75,"rgba(60, 58, 55, 0.4)"),h.addColorStop(1,"transparent"),e.fillStyle=h,e.beginPath(),e.arc(s,l,c,0,Math.PI*2),e.fill(),c>25&&n(o+99)>.5){const p=8+Math.floor(n(o)*10);e.strokeStyle="rgba(235, 235, 230, 0.28)",e.lineWidth=1;for(let u=0;u<p;u++){const f=u/p*Math.PI*2+n(u)*.3,m=c*(2.5+n(u*2)*5);e.beginPath(),e.moveTo(s,l),e.lineTo(s+Math.cos(f)*m,l+Math.sin(f)*m),e.stroke()}}}const a=new Jr(t);return a.wrapS=Cr,a.wrapT=At,a.colorSpace=yt,a}function kT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createImageData(2048,1024),i=r.data;for(let a=0;a<1024;a++){const o=a/1024,s=Math.abs(o-.5)*2;for(let l=0;l<2048;l++){const c=(a*2048+l)*4,h=l/2048,p=Math.sin(h*Math.PI*4-s*1.5)*.08,u=Xi(h*8+p,o*12,4),f=232-s*25+u*18,m=212-s*32+u*16,b=175-s*45+u*14;i[c]=Math.max(0,Math.min(255,Math.floor(f))),i[c+1]=Math.max(0,Math.min(255,Math.floor(m))),i[c+2]=Math.max(0,Math.min(255,Math.floor(b))),i[c+3]=255}}e.putImageData(r,0,0),e.lineWidth=18;for(let a=0;a<40;a++){const o=a/40*1024;e.strokeStyle=a%2===0?"rgba(255, 248, 230, 0.12)":"rgba(180, 145, 100, 0.08)",e.beginPath(),e.moveTo(0,o),e.bezierCurveTo(2048*.33,o+Math.sin(a)*25,2048*.66,o-Math.cos(a)*25,2048,o),e.stroke()}const n=new Jr(t);return n.wrapS=Cr,n.wrapT=At,n.colorSpace=yt,n}function zT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#0c2242"),r.addColorStop(.5,"#071833"),r.addColorStop(1,"#0c2242"),e.fillStyle=r,e.fillRect(0,0,2048,1024);const i=(s,l,c,h="rgba(20, 95, 140, 0.45)")=>{e.lineJoin="round",e.lineCap="round",e.lineWidth=14,e.strokeStyle=h,e.beginPath(),e.moveTo(s[0][0],s[0][1]);for(let p=1;p<s.length;p++)e.lineTo(s[p][0],s[p][1]);e.closePath(),e.stroke(),e.beginPath(),e.moveTo(s[0][0],s[0][1]);for(let p=1;p<s.length;p++)e.lineTo(s[p][0],s[p][1]);e.closePath(),e.fillStyle=l,e.fill(),e.save(),e.clip();for(let p=0;p<20;p++){const u=s[0][0]+(Math.random()-.5)*300,f=s[0][1]+(Math.random()-.5)*200,m=40+Math.random()*80,b=e.createRadialGradient(u,f,0,u,f,m);b.addColorStop(0,c),b.addColorStop(1,"transparent"),e.fillStyle=b,e.beginPath(),e.arc(u,f,m,0,Math.PI*2),e.fill()}e.restore()};i([[360,240],[480,200],[580,220],[680,260],[640,340],[580,420],[540,460],[480,520],[420,480],[380,400],[340,320]],"#2d5e2a","#8a7a40"),i([[540,540],[640,580],[700,640],[660,760],[600,860],[560,880],[540,780],[500,640]],"#255424","#4a7a30"),i([[960,260],[1080,240],[1160,280],[1140,360],[1060,400],[980,380],[940,320]],"#3e6b2c","#75783d"),i([[960,420],[1120,400],[1220,460],[1240,560],[1180,720],[1120,800],[1040,780],[960,620],[920,480]],"#8a7536","#3b5c25"),i([[1160,240],[1400,180],[1620,220],[1720,320],[1660,460],[1540,520],[1420,520],[1320,460],[1220,380]],"#406830","#94854c"),i([[1360,480],[1440,500],[1420,600],[1380,620],[1340,540]],"#4a7330","#7a7d3a"),i([[1560,640],[1700,620],[1760,700],[1720,780],[1600,780],[1540,720]],"#9e6f36","#704f26");const n=e.createLinearGradient(0,884,0,1024);n.addColorStop(0,"transparent"),n.addColorStop(.25,"rgba(235, 245, 255, 0.85)"),n.addColorStop(1,"#ffffff"),e.fillStyle=n,e.fillRect(0,884,2048,140);const a=e.createLinearGradient(0,0,0,110);a.addColorStop(0,"#ffffff"),a.addColorStop(.75,"rgba(235, 245, 255, 0.85)"),a.addColorStop(1,"transparent"),e.fillStyle=a,e.fillRect(0,0,2048,110);const o=new Jr(t);return o.wrapS=Cr,o.wrapT=At,o.colorSpace=yt,o}function BT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,2048,1024);const r=(n,a,o,s=25)=>{const l=e.createRadialGradient(n,a,0,n,a,o*1.5);l.addColorStop(0,"rgba(255, 210, 110, 0.85)"),l.addColorStop(.4,"rgba(240, 170, 70, 0.45)"),l.addColorStop(.8,"rgba(200, 120, 30, 0.15)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.arc(n,a,o*1.5,0,Math.PI*2),e.fill();for(let c=0;c<s;c++){const h=Math.random()*Math.PI*2,p=Math.pow(Math.random(),1.8)*o,u=n+Math.cos(h)*p,f=a+Math.sin(h)*p;e.fillStyle=Math.random()>.3?"#fff5cc":"#ffcc66",e.fillRect(u,f,1.5,1.5)}};r(560,340,45,60),r(510,360,35,40),r(420,380,30,35),r(480,440,25,30),r(1020,290,35,50),r(1070,310,38,55),r(1060,360,28,35),r(1180,270,24,25),r(1660,390,45,65),r(1560,360,38,50),r(1580,430,40,55),r(1540,480,35,45),r(1380,490,40,55),r(1360,540,32,40),r(650,720,35,45),r(580,780,26,30),r(1700,740,24,30),r(1120,760,20,25),r(1080,430,22,28),e.strokeStyle="rgba(255, 190, 90, 0.25)",e.lineWidth=1,e.beginPath(),e.moveTo(560,340),e.lineTo(510,360),e.lineTo(480,440),e.lineTo(420,380),e.moveTo(1020,290),e.lineTo(1070,310),e.lineTo(1180,270),e.stroke();const i=new Jr(t);return i.wrapS=Cr,i.wrapT=At,i.colorSpace=yt,i}function HT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createImageData(2048,1024),i=r.data;for(let a=0;a<1024;a++){const o=a/1024,s=Math.exp(-Math.pow((o-.5)/.08,2))*.45,l=Math.exp(-Math.pow((o-.32)/.12,2))*.4,c=Math.exp(-Math.pow((o-.68)/.12,2))*.4,h=Math.max(.1,s+l+c);for(let p=0;p<2048;p++){const u=(a*2048+p)*4,f=p/2048,m=Xi(f*10,o*8,5),b=Xi(f*32,o*24,3)*.25,g=m+b+h*.5;if(g>.42){const d=Math.min(255,Math.floor((g-.42)*450));i[u]=255,i[u+1]=255,i[u+2]=255,i[u+3]=d}else i[u]=0,i[u+1]=0,i[u+2]=0,i[u+3]=0}}e.putImageData(r,0,0),[{x:2048*.38,y:1024*.38,r:60},{x:2048*.78,y:1024*.36,r:75},{x:2048*.62,y:1024*.65,r:55}].forEach(a=>{e.save(),e.translate(a.x,a.y);for(let o=0;o<3;o++){e.beginPath();const s=o/3*Math.PI*2;for(let l=0;l<25;l++){const c=l/25*a.r,h=s+l*.25,p=Math.cos(h)*c,u=Math.sin(h)*c;l===0?e.moveTo(p,u):e.lineTo(p,u)}e.strokeStyle="rgba(255, 255, 255, 0.75)",e.lineWidth=14,e.stroke()}e.fillStyle="rgba(0, 0, 0, 0.8)",e.beginPath(),e.arc(0,0,6,0,Math.PI*2),e.fill(),e.restore()});const n=new Jr(t);return n.wrapS=Cr,n.wrapT=At,n}function GT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createImageData(2048,1024),i=r.data;for(let s=0;s<1024;s++)for(let l=0;l<2048;l++){const c=(s*2048+l)*4,h=l/2048,p=s/1024,u=Xi(h*12,p*10,5)*.5+.5,f=Xi(h*40,p*35,3)*.15,m=u+f,b=Math.min(255,Math.floor(180+m*45)),g=Math.min(255,Math.floor(80+m*35)),d=Math.min(255,Math.floor(45+m*20));i[c]=b,i[c+1]=g,i[c+2]=d,i[c+3]=255}e.putImageData(r,0,0),[{x:2048*.58,y:1024*.52,rx:160,ry:90,rot:.2},{x:2048*.32,y:1024*.38,rx:220,ry:110,rot:-.1},{x:2048*.82,y:1024*.62,rx:190,ry:85,rot:.15}].forEach(s=>{const l=e.createRadialGradient(s.x,s.y,0,s.x,s.y,s.rx);l.addColorStop(0,"rgba(85, 38, 22, 0.7)"),l.addColorStop(.7,"rgba(125, 55, 32, 0.4)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(s.x,s.y,s.rx,s.ry,s.rot,0,Math.PI*2),e.fill()}),e.strokeStyle="rgba(65, 25, 15, 0.8)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(2048*.35,1024*.54),e.bezierCurveTo(2048*.42,1024*.52,2048*.48,1024*.57,2048*.56,1024*.55),e.stroke(),[{x:2048*.24,y:1024*.46,r:42},{x:2048*.3,y:1024*.42,r:24},{x:2048*.28,y:1024*.48,r:24},{x:2048*.26,y:1024*.54,r:24}].forEach(s=>{const l=e.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r);l.addColorStop(0,"#552212"),l.addColorStop(.3,"#c2623e"),l.addColorStop(.85,"#9e4a2b"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.arc(s.x,s.y,s.r,0,Math.PI*2),e.fill(),e.fillStyle="#2c0f06",e.beginPath(),e.arc(s.x,s.y,s.r*.2,0,Math.PI*2),e.fill()});const n=e.createLinearGradient(0,0,0,75);n.addColorStop(0,"#ffffff"),n.addColorStop(.65,"rgba(255, 240, 235, 0.9)"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.fillRect(0,0,2048,75);const a=e.createLinearGradient(0,959,0,1024);a.addColorStop(0,"transparent"),a.addColorStop(.35,"rgba(255, 240, 235, 0.9)"),a.addColorStop(1,"#ffffff"),e.fillStyle=a,e.fillRect(0,959,2048,65);const o=new Jr(t);return o.wrapS=Cr,o.wrapT=At,o.colorSpace=yt,o}function VT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=[{pos:0,color:"#685444"},{pos:.12,color:"#87705b"},{pos:.22,color:"#d8c5ad"},{pos:.3,color:"#a25e36"},{pos:.36,color:"#eedec9"},{pos:.43,color:"#883d1c"},{pos:.5,color:"#f3e6d2"},{pos:.58,color:"#994a24"},{pos:.67,color:"#ebd7bd"},{pos:.76,color:"#8b5b3f"},{pos:.88,color:"#9f8570"},{pos:1,color:"#625042"}],i=e.createLinearGradient(0,0,0,1024);r.forEach(p=>i.addColorStop(p.pos,p.color)),e.fillStyle=i,e.fillRect(0,0,2048,1024);for(let p=0;p<90;p++){const u=Math.random()*1024;e.beginPath(),e.moveTo(0,u);for(let f=0;f<=2048;f+=30){const m=Math.sin(f*.04+p*2)*5+Math.cos(f*.08+p)*3;e.lineTo(f,u+m)}e.strokeStyle=Math.random()>.45?"rgba(255, 240, 220, 0.22)":"rgba(110, 45, 18, 0.18)",e.lineWidth=3+Math.random()*8,e.stroke()}const n=2048*.68,a=1024*.63,o=85,s=48,l=e.createRadialGradient(n,a,0,n,a,o*1.3);l.addColorStop(0,"#ebd8c2"),l.addColorStop(.8,"rgba(240, 225, 205, 0.5)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(n,a,o*1.25,s*1.2,.05,0,Math.PI*2),e.fill();const c=e.createRadialGradient(n,a,o*.2,n,a,o);c.addColorStop(0,"#b83416"),c.addColorStop(.6,"#d95228"),c.addColorStop(.9,"#ea8c62"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.ellipse(n,a,o,s,.05,0,Math.PI*2),e.fill(),e.fillStyle="#8f1f06",e.beginPath(),e.ellipse(n,a,o*.35,s*.35,.05,0,Math.PI*2),e.fill();for(let p=0;p<7;p++){const u=(307.2+p*292.57142857142856)%2048,f=1024*.74,m=e.createRadialGradient(u,f,0,u,f,16);m.addColorStop(0,"#ffffff"),m.addColorStop(.7,"rgba(255, 250, 240, 0.85)"),m.addColorStop(1,"transparent"),e.fillStyle=m,e.beginPath(),e.ellipse(u,f,18,10,0,0,Math.PI*2),e.fill()}const h=new Jr(t);return h.wrapS=Cr,h.wrapT=At,h.colorSpace=yt,h}function WT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=[{pos:0,color:"#7a765d"},{pos:.15,color:"#b5a37f"},{pos:.32,color:"#e6d3ac"},{pos:.44,color:"#eedec0"},{pos:.5,color:"#f3e5c9"},{pos:.56,color:"#eedec0"},{pos:.68,color:"#dfcca2"},{pos:.82,color:"#c2ad83"},{pos:1,color:"#8a7959"}],i=e.createLinearGradient(0,0,0,1024);r.forEach(a=>i.addColorStop(a.pos,a.color)),e.fillStyle=i,e.fillRect(0,0,2048,1024);for(let a=0;a<60;a++){const o=Math.random()*1024;e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.strokeStyle=Math.random()>.5?"rgba(255, 252, 240, 0.12)":"rgba(130, 105, 65, 0.08)",e.lineWidth=4+Math.random()*10,e.stroke()}const n=new Jr(t);return n.wrapS=Cr,n.wrapT=At,n.colorSpace=yt,n}function jT(){if(qr.has("saturn-ring"))return qr.get("saturn-ring");const t=2048,e=64,r=document.createElement("canvas");r.width=t,r.height=e;const i=r.getContext("2d"),n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"rgba(0, 0, 0, 0)"),n.addColorStop(.06,"rgba(130, 115, 95, 0.08)"),n.addColorStop(.08,"rgba(150, 135, 110, 0.18)"),n.addColorStop(.24,"rgba(170, 150, 125, 0.28)"),n.addColorStop(.25,"rgba(10, 10, 15, 0.02)"),n.addColorStop(.27,"rgba(225, 205, 175, 0.85)"),n.addColorStop(.42,"rgba(245, 230, 200, 0.96)"),n.addColorStop(.58,"rgba(225, 205, 175, 0.88)"),n.addColorStop(.59,"rgba(5, 5, 8, 0.03)"),n.addColorStop(.66,"rgba(5, 5, 8, 0.03)"),n.addColorStop(.67,"rgba(215, 195, 168, 0.72)"),n.addColorStop(.84,"rgba(195, 178, 150, 0.65)"),n.addColorStop(.85,"rgba(10, 10, 15, 0.05)"),n.addColorStop(.87,"rgba(10, 10, 15, 0.05)"),n.addColorStop(.88,"rgba(180, 165, 140, 0.50)"),n.addColorStop(.96,"rgba(150, 135, 115, 0.22)"),n.addColorStop(.98,"rgba(120, 110, 95, 0.06)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<250;o++){const s=t*.08+Math.random()*t*.88;i.strokeStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(40, 30, 20, 0.12)",i.lineWidth=1+Math.random()*2,i.beginPath(),i.moveTo(s,0),i.lineTo(s,e),i.stroke()}const a=new Jr(r);return a.wrapS=At,a.wrapT=At,a.colorSpace=yt,qr.set("saturn-ring",a),a}function XT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#7ebdc0"),r.addColorStop(.3,"#94cbd0"),r.addColorStop(.5,"#a4d6db"),r.addColorStop(.7,"#8ec5ca"),r.addColorStop(1,"#75b3b7"),e.fillStyle=r,e.fillRect(0,0,2048,1024);for(let n=0;n<25;n++){const a=Math.random()*1024;e.fillStyle="rgba(255, 255, 255, 0.04)",e.fillRect(0,a,2048,8+Math.random()*24)}const i=new Jr(t);return i.wrapS=Cr,i.wrapT=At,i.colorSpace=yt,i}function YT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),r=e.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#1a377d"),r.addColorStop(.25,"#264eab"),r.addColorStop(.5,"#2f5fc2"),r.addColorStop(.75,"#22469e"),r.addColorStop(1,"#152d6a"),e.fillStyle=r,e.fillRect(0,0,2048,1024);for(let s=0;s<35;s++){const l=Math.random()*1024;e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(2048*.33,l+Math.sin(s)*12,2048*.66,l-Math.cos(s)*12,2048,l),e.strokeStyle=Math.random()>.5?"rgba(20, 55, 140, 0.35)":"rgba(75, 130, 240, 0.22)",e.lineWidth=6+Math.random()*16,e.stroke()}const i=2048*.62,n=1024*.42,a=e.createRadialGradient(i,n,0,i,n,55);a.addColorStop(0,"#0c1a45"),a.addColorStop(.7,"#152a65"),a.addColorStop(1,"transparent"),e.fillStyle=a,e.beginPath(),e.ellipse(i,n,55,30,.08,0,Math.PI*2),e.fill();for(let s=0;s<25;s++){const l=Math.random()*1868,c=1024*.25+Math.random()*(1024*.5),h=50+Math.random()*140;e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=2+Math.random()*3,e.beginPath(),e.moveTo(l,c),e.lineTo(l+h,c+(Math.random()-.5)*6),e.stroke()}const o=new Jr(t);return o.wrapS=Cr,o.wrapT=At,o.colorSpace=yt,o}function Du(t){if(qr.has(t))return qr.get(t);let e;switch(t){case"sun":e=FT();break;case"mercury":e=Gm();break;case"venus":e=kT();break;case"earth":e=zT();break;case"mars":e=GT();break;case"jupiter":e=VT();break;case"saturn":e=WT();break;case"uranus":e=XT();break;case"neptune":e=YT();break;default:e=Gm()}return qr.set(t,e),e}function qT(){if(qr.has("earth-night"))return qr.get("earth-night");const t=BT();return qr.set("earth-night",t),t}function ZT(){if(qr.has("earth-clouds"))return qr.get("earth-clouds");const t=HT();return qr.set("earth-clouds",t),t}const Vm={vertexShader:`
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;

    void main() {
      // Calculate world-space normal & position
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vViewDirection = normalize(cameraPosition - worldPos.xyz);

      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform vec3 uSunPosition;
    uniform float uAtmospherePower;
    uniform float uAtmosphereIntensity;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 viewDir = normalize(vViewDirection);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Camera limb Fresnel factor
      float NdotV = max(0.0, dot(normal, viewDir));
      float rim = pow(1.0 - NdotV, uAtmospherePower);

      // Sun lighting factor: bright on daylight side, smoothly dark on night side
      float NdotL = dot(normal, sunDir);
      float sunFacing = smoothstep(-0.25, 0.45, NdotL);

      // Soft twilight glow extension along terminator
      float twilight = smoothstep(-0.25, 0.05, NdotL) * (1.0 - smoothstep(-0.05, 0.35, NdotL));
      vec3 finalColor = uColor * (rim * sunFacing * uAtmosphereIntensity + twilight * rim * 0.4);

      float alpha = rim * (sunFacing * 0.95 + twilight * 0.35) * uAtmosphereIntensity;
      gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
    }
  `};function KT(t,e=3.5,r=1){return new yr({vertexShader:Vm.vertexShader,fragmentShader:Vm.fragmentShader,uniforms:{uColor:{value:t},uSunPosition:{value:new F(0,0,0)},uAtmospherePower:{value:e},uAtmosphereIntensity:{value:r}},transparent:!0,blending:is,side:Mn,depthWrite:!1})}const Wm={vertexShader:`
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vViewDirection = normalize(cameraPosition - worldPos.xyz);

      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform sampler2D uDayMap;
    uniform sampler2D uNightMap;
    uniform sampler2D uCloudMap;
    uniform vec3 uSunPosition;
    uniform float uCloudOffset;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    varying vec2 vUv;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 viewDir = normalize(vViewDirection);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Dot product for daylight vs night
      float NdotL = dot(normal, sunDir);

      // Smooth terminator transition
      float dayFactor = smoothstep(-0.12, 0.14, NdotL);
      float nightFactor = 1.0 - smoothstep(-0.18, 0.06, NdotL);

      // Day texture sample
      vec3 dayColor = texture2D(uDayMap, vUv).rgb;

      // Cloud shadow projection onto day surface
      vec2 shadowUv = vec2(vUv.x + uCloudOffset - sunDir.x * 0.003, vUv.y - sunDir.y * 0.002);
      float cloudShadowSample = texture2D(uCloudMap, shadowUv).a;
      dayColor *= mix(1.0, 0.58, cloudShadowSample * dayFactor);

      // Ocean specular reflection (sunlight glint on water)
      vec3 halfVector = normalize(sunDir + viewDir);
      float NdotH = max(0.0, dot(normal, halfVector));
      // Water detection based on blue dominance
      float isWater = smoothstep(0.05, 0.25, dayColor.b - dayColor.r * 0.8);
      float specular = pow(NdotH, 45.0) * isWater * dayFactor;
      vec3 specColor = vec3(0.95, 0.98, 1.0) * specular * 0.75;

      // Night city lights - visible ONLY on the night hemisphere
      vec3 nightLights = texture2D(uNightMap, vUv).rgb * 2.2;
      vec3 nightColor = nightLights * nightFactor;

      // Minimal ambient cosmic fill so night hemisphere is dark space, not pitch-gray
      vec3 ambientFill = dayColor * 0.04;

      vec3 finalColor = dayColor * dayFactor + specColor + nightColor + ambientFill;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};function JT(t,e,r){return new yr({vertexShader:Wm.vertexShader,fragmentShader:Wm.fragmentShader,uniforms:{uDayMap:{value:t},uNightMap:{value:e},uCloudMap:{value:r},uSunPosition:{value:new F(0,0,0)},uCloudOffset:{value:0}},roughness:.6,metalness:.05})}const jm={vertexShader:`
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform sampler2D uCloudMap;
    uniform vec3 uSunPosition;
    uniform float uCloudOffset;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Shaded by sunlight
      float NdotL = dot(normal, sunDir);
      float cloudLit = smoothstep(-0.15, 0.25, NdotL);

      vec2 movingUv = vec2(vUv.x + uCloudOffset, vUv.y);
      vec4 cloudSample = texture2D(uCloudMap, movingUv);

      // Clouds are bright white in sunlight, fading to deep shadow on night side
      vec3 cloudRgb = vec3(0.98, 0.98, 1.0) * max(0.04, cloudLit);
      float alpha = cloudSample.a * 0.88;

      gl_FragColor = vec4(cloudRgb, alpha);
    }
  `};function QT(t){return new yr({vertexShader:jm.vertexShader,fragmentShader:jm.fragmentShader,uniforms:{uCloudMap:{value:t},uSunPosition:{value:new F(0,0,0)},uCloudOffset:{value:0}},transparent:!0,depthWrite:!1})}const Xm={vertexShader:`
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform sampler2D uRingMap;
    uniform vec3 uPlanetPosition;
    uniform float uPlanetRadius;
    uniform vec3 uSunPosition;

    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Ring radial UV sampling
      vec4 ringColor = texture2D(uRingMap, vec2(vUv.x, 0.5));
      if (ringColor.a < 0.02) discard;

      // Exact mathematical ray-sphere shadow:
      // Check if the ray from this ring fragment to the Sun intersects Saturn's globe
      vec3 rayOrigin = vWorldPosition;
      vec3 rayDir = normalize(uSunPosition - rayOrigin); // Direction to Sun
      vec3 oc = rayOrigin - uPlanetPosition;

      float b = dot(rayDir, oc);
      float c = dot(oc, oc) - (uPlanetRadius * uPlanetRadius);
      float discriminant = b * b - c;

      // Shadowed if ray intersects planet sphere and intersection is towards the Sun
      float shadow = 1.0;
      if (b < 0.0 && discriminant > 0.0) {
        // In the dark shadow wedge behind Saturn!
        shadow = 0.08;
      }

      // Minimal ambient cosmic light on rings
      vec3 litColor = ringColor.rgb * shadow;
      gl_FragColor = vec4(litColor, ringColor.a);
    }
  `};function $T(t,e){return new yr({vertexShader:Xm.vertexShader,fragmentShader:Xm.fragmentShader,uniforms:{uRingMap:{value:t},uPlanetPosition:{value:new F(0,0,0)},uPlanetRadius:{value:e},uSunPosition:{value:new F(0,0,0)}},side:jr,transparent:!0,depthWrite:!0})}const Ym={vertexShader:`
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform sampler2D uSunMap;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Subtle solar plasma convection flow
      vec2 flowUv = vUv + vec2(sin(vUv.y * 30.0 + uTime * 0.3) * 0.0015, cos(vUv.x * 30.0 + uTime * 0.3) * 0.0015);
      vec3 baseSun = texture2D(uSunMap, flowUv).rgb;

      // Limb darkening on Sun's photosphere edge (real astrophysical effect: center looks hotter than edges)
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float limb = dot(vNormal, viewDir);
      float limbDarkening = 0.45 + 0.55 * pow(max(0.0, limb), 0.5);

      vec3 finalColor = baseSun * limbDarkening * 1.15;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};function e2(t){return new yr({vertexShader:Ym.vertexShader,fragmentShader:Ym.fragmentShader,uniforms:{uSunMap:{value:t},uTime:{value:0}}})}const So={sun:{id:"sun",name:"Sun",order:0,radius:11.5,distance:0,orbitSpeed:0,rotationSpeed:.003,axialTilt:.12,color:"#FFD700"},mercury:{id:"mercury",name:"Mercury",order:1,radius:1.8,distance:24,orbitSpeed:3.6,rotationSpeed:.008,axialTilt:.035,color:"#B0C4DE"},venus:{id:"venus",name:"Venus",order:2,radius:2.6,distance:35,orbitSpeed:2.1,rotationSpeed:-.005,axialTilt:3.09,color:"#DEB887",atmosphereColor:new Ge(.92,.82,.65),atmospherePower:2.8,atmosphereIntensity:1.1,atmosphereScale:1.025},earth:{id:"earth",name:"Earth",order:3,radius:2.8,distance:48,orbitSpeed:1.4,rotationSpeed:.02,axialTilt:.409,color:"#4E55D8",atmosphereColor:new Ge(.35,.65,1),atmospherePower:3.5,atmosphereIntensity:1.3,atmosphereScale:1.022},mars:{id:"mars",name:"Mars",order:4,radius:2.1,distance:62,orbitSpeed:.95,rotationSpeed:.019,axialTilt:.44,color:"#CD5C5C",atmosphereColor:new Ge(.85,.55,.38),atmospherePower:5.5,atmosphereIntensity:.65,atmosphereScale:1.014},jupiter:{id:"jupiter",name:"Jupiter",order:5,radius:6.2,distance:84,orbitSpeed:.42,rotationSpeed:.04,axialTilt:.054,color:"#DAA520",atmosphereColor:new Ge(.85,.72,.58),atmospherePower:3.5,atmosphereIntensity:.45,atmosphereScale:1.018},saturn:{id:"saturn",name:"Saturn",order:6,radius:5.2,distance:110,orbitSpeed:.28,rotationSpeed:.036,axialTilt:.466,color:"#F4A460",hasRings:!0,atmosphereColor:new Ge(.92,.82,.62),atmospherePower:3.5,atmosphereIntensity:.45,atmosphereScale:1.018},uranus:{id:"uranus",name:"Uranus",order:7,radius:3.8,distance:136,orbitSpeed:.16,rotationSpeed:-.024,axialTilt:1.706,color:"#87CEEB",atmosphereColor:new Ge(.48,.82,.85),atmospherePower:3.2,atmosphereIntensity:.75,atmosphereScale:1.02},neptune:{id:"neptune",name:"Neptune",order:8,radius:3.7,distance:162,orbitSpeed:.09,rotationSpeed:.025,axialTilt:.494,color:"#4169E1",atmosphereColor:new Ge(.2,.45,.9),atmospherePower:3.2,atmosphereIntensity:.8,atmosphereScale:1.02}},t2=({selectedId:t,onSelect:e})=>{const[r,i]=ze.useState(!1),[n,a]=ze.useState(1),[o,s]=ze.useState(null),l=ze.useRef(null),c=ze.useRef(null),h=ze.useRef(null),p=ze.useRef(null),u=ze.useRef(null),f=ze.useRef(0),m=ze.useRef(!0),b=ze.useRef(!1),g=ze.useRef(r),d=ze.useRef(n),v=ze.useRef(t),M=ze.useRef(e),x=ze.useRef(null),E=ze.useRef(null),w=ze.useRef(null),T=ze.useRef(null);ze.useEffect(()=>{g.current=r},[r]),ze.useEffect(()=>{d.current=n},[n]),ze.useEffect(()=>{v.current=t},[t]),ze.useEffect(()=>{M.current=e},[e]);const y=ze.useRef({mercury:.8,venus:2.1,earth:3.4,mars:4.8,jupiter:1.2,saturn:5.1,uranus:2.7,neptune:4.1}),R=ze.useRef(new Map),C=ze.useRef(new Map),U=ze.useRef(new Map),k=ze.useRef(null);ze.useEffect(()=>{!u.current||!p.current||(m.current=!1,b.current=!0)},[t]),ze.useEffect(()=>{const O=window.matchMedia("(prefers-reduced-motion: reduce)");O.matches&&i(!0);const fe=ve=>{ve.matches&&i(!0)};return O.addEventListener("change",fe),()=>O.removeEventListener("change",fe)},[]),ze.useEffect(()=>{const O=l.current;if(!O)return;const fe=O.clientWidth||800,ve=O.clientHeight||580,Pe=new YS;Pe.background=new Ge(131589),h.current=Pe;const De=new Ir(45,fe/ve,.5,4e3),Ve=new F(0,185,245);De.position.copy(Ve),De.lookAt(0,0,0),p.current=De;const K=new xT({antialias:!0,alpha:!1,powerPreference:"high-performance"});K.setSize(fe,ve),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.outputColorSpace=yt,O.innerHTML="",O.appendChild(K.domElement),c.current=K;const ee=new bT(De,K.domElement);ee.enableDamping=!0,ee.dampingFactor=.06,ee.minDistance=3.5,ee.maxDistance=650,ee.maxPolarAngle=Math.PI/2+.2,u.current=ee;const Me=new _1(526868,.08);Pe.add(Me);const Ue=new v1(16777215,2.8,1600,.2);Ue.position.set(0,0,0),Pe.add(Ue);const _e=2500,Re=new _r,et=new Float32Array(_e*3),We=new Float32Array(_e*3);for(let te=0;te<_e;te++){const ie=te*3,se=Math.random(),Xe=Math.random(),Fe=se*2*Math.PI,qe=Math.acos(2*Xe-1),Ce=2200+Math.random()*400;et[ie]=Ce*Math.sin(qe)*Math.cos(Fe),et[ie+1]=Ce*Math.sin(qe)*Math.sin(Fe),et[ie+2]=Ce*Math.cos(qe);const Lt=Math.random(),it=.35+Math.pow(Math.random(),3)*.65;Lt<.6?(We[ie]=.92*it,We[ie+1]=.95*it,We[ie+2]=1*it):Lt<.85?(We[ie]=.75*it,We[ie+1]=.85*it,We[ie+2]=1*it):(We[ie]=1*it,We[ie+1]=.88*it,We[ie+2]=.7*it)}Re.setAttribute("position",new ui(et,3)),Re.setAttribute("color",new ui(We,3));const Be=new F0({size:1.2,vertexColors:!0,transparent:!0,opacity:.9}),Ut=new a1(Re,Be);Pe.add(Ut);const _t=new Map,dt=new Map,Ct=new Map,Ot=So.sun,mt=Du("sun"),wt=new sn(Ot.radius,64,64),D=e2(mt);x.current=D;const Pt=new Ht(wt,D);Pt.userData={id:"sun",name:"Sun"},Pe.add(Pt),_t.set("sun",Pt);const nt=new sn(Ot.radius*1.14,48,48),A=new Da({color:16755234,transparent:!0,opacity:.18,side:lr,blending:is,depthWrite:!1}),_=new Ht(nt,A);Pe.add(_);const z=new sn(Ot.radius*1.3,48,48),j=new Da({color:16742144,transparent:!0,opacity:.08,side:lr,blending:is,depthWrite:!1}),J=new Ht(z,j);Pe.add(J);const de=["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];de.forEach(te=>{const ie=So[te];if(!ie)return;const se=[],Xe=180;for(let Kt=0;Kt<=Xe;Kt++){const pr=Kt/Xe*Math.PI*2;se.push(new F(Math.cos(pr)*ie.distance,0,Math.sin(pr)*ie.distance))}const Fe=new _r().setFromPoints(se),qe=v.current===ie.id,Ce=new O0({color:qe?10980346:16777215,transparent:!0,opacity:qe?.38:.09}),Lt=new n1(Fe,Ce);Pe.add(Lt),Ct.set(ie.id,Lt);const it=new Ro;it.rotation.z=ie.axialTilt;const Ri=new sn(ie.radius,64,64);let tr;if(ie.id==="earth"){const Kt=Du("earth"),pr=qT(),Xt=ZT(),qi=JT(Kt,pr,Xt);E.current=qi,tr=new Ht(Ri,qi);const Pn=new sn(ie.radius*1.008,64,64),Zi=QT(Xt);w.current=Zi;const Ln=new Ht(Pn,Zi);Ln.userData={isCloudLayer:!0},it.add(Ln)}else{const Kt=Du(ie.id),pr=new h1({map:Kt,roughness:ie.id==="venus"?.85:ie.id==="mercury"?.95:.72,metalness:.02});tr=new Ht(Ri,pr)}if(tr.userData={id:ie.id,name:ie.name},it.add(tr),_t.set(ie.id,tr),ie.atmosphereColor&&ie.atmosphereScale){const Kt=new sn(ie.radius*ie.atmosphereScale,48,48),pr=KT(ie.atmosphereColor,ie.atmospherePower||3.5,ie.atmosphereIntensity||1),Xt=new Ht(Kt,pr);Xt.renderOrder=3,it.add(Xt)}if(ie.hasRings){const Kt=ie.radius*1.25,pr=ie.radius*2.38,Xt=new zo(Kt,pr,128);Xt.rotateX(Math.PI/2);const qi=jT(),Pn=$T(qi,ie.radius);T.current=Pn;const Zi=new Ht(Xt,Pn);Zi.renderOrder=4,it.add(Zi)}if(ie.id==="uranus"){const Kt=new zo(ie.radius*1.22,ie.radius*1.48,64);Kt.rotateX(Math.PI/2);const pr=new Da({color:10346722,side:jr,transparent:!0,opacity:.22,depthWrite:!1}),Xt=new Ht(Kt,pr);it.add(Xt)}const ys=y.current[ie.id]||0;it.position.set(Math.cos(ys)*ie.distance,0,Math.sin(ys)*ie.distance),Pe.add(it),dt.set(ie.id,it)});const he=new zo(1,1.08,64);he.rotateX(Math.PI/2);const I=new Da({color:10980346,side:jr,transparent:!0,opacity:.75,depthWrite:!1}),le=new Ht(he,I);Pe.add(le),k.current=le,R.current=_t,C.current=dt,U.current=Ct;const ce=new S1,ye=new ke;let ne=!1,Le={x:0,y:0};const Te=te=>{ne=!1,Le={x:te.clientX,y:te.clientY}},Ie=te=>{var ie,se;Math.hypot(te.clientX-Le.x,te.clientY-Le.y)>5&&(ne=!0);const Xe=O.getBoundingClientRect();ye.x=(te.clientX-Xe.left)/Xe.width*2-1,ye.y=-((te.clientY-Xe.top)/Xe.height)*2+1,ce.setFromCamera(ye,De);const Fe=Array.from(_t.values()),qe=ce.intersectObjects(Fe,!0);if(qe.length>0){let Ce=qe[0].object;for(;Ce&&!((ie=Ce.userData)!=null&&ie.id)&&Ce.parent;)Ce=Ce.parent;if(Ce&&(se=Ce.userData)!=null&&se.id){O.style.cursor="pointer",s(Ce.userData.name);return}}O.style.cursor="grab",s(null)},He=te=>{var ie,se;if(Math.hypot(te.clientX-Le.x,te.clientY-Le.y)<6&&!ne){const Xe=O.getBoundingClientRect();ye.x=(te.clientX-Xe.left)/Xe.width*2-1,ye.y=-((te.clientY-Xe.top)/Xe.height)*2+1,ce.setFromCamera(ye,De);const Fe=Array.from(_t.values()),qe=ce.intersectObjects(Fe,!0);if(qe.length>0){let Ce=qe[0].object;for(;Ce&&!((ie=Ce.userData)!=null&&ie.id)&&Ce.parent;)Ce=Ce.parent;Ce&&(se=Ce.userData)!=null&&se.id&&M.current(Ce.userData.id)}}},P=K.domElement;P.addEventListener("pointerdown",Te),P.addEventListener("pointermove",Ie),P.addEventListener("pointerup",He);let re=performance.now(),ae=0;const ge=()=>{const te=performance.now(),ie=Math.min((te-re)/1e3,.1);re=te;const se=g.current?0:d.current;Pt.rotation.y+=Ot.rotationSpeed,_.rotation.y-=8e-4,J.rotation.y+=4e-4,x.current&&(x.current.uniforms.uTime.value=te*.001),ae+=15e-5*(se>0?se:.2),E.current&&(E.current.uniforms.uCloudOffset.value=ae),w.current&&(w.current.uniforms.uCloudOffset.value=ae),de.forEach(qe=>{const Ce=So[qe],Lt=dt.get(qe),it=_t.get(qe);if(Ce&&Lt&&it&&se>0){const Ri=Ce.orbitSpeed*.22*se*ie;y.current[qe]=(y.current[qe]+Ri)%(Math.PI*2);const tr=y.current[qe];Lt.position.x=Math.cos(tr)*Ce.distance,Lt.position.z=Math.sin(tr)*Ce.distance,it.rotation.y+=Ce.rotationSpeed*se}});const Xe=dt.get("saturn");Xe&&T.current&&T.current.uniforms.uPlanetPosition.value.copy(Xe.position);const Fe=v.current;if(k.current){if(Fe==="sun"){k.current.position.set(0,0,0);const Ce=Ot.radius*1.38;k.current.scale.set(Ce,Ce,Ce),k.current.visible=!0}else{const Ce=dt.get(Fe),Lt=So[Fe];if(Ce&&Lt){k.current.position.copy(Ce.position);const it=Lt.radius*(Lt.hasRings?2.6:1.35);k.current.scale.set(it,it,it),k.current.visible=!0}else k.current.visible=!1}const qe=1+Math.sin(te*.004)*.03;k.current.scale.multiplyScalar(qe)}if(b.current&&p.current&&u.current){let qe=new F(0,0,0),Ce=Ve;if(!m.current)if(Fe==="sun")qe.set(0,0,0),Ce=new F(0,16,28);else{const Lt=dt.get(Fe),it=So[Fe];if(Lt&&it){qe.copy(Lt.position);const Ri=it.hasRings?4.6:3.4,tr=it.radius*Ri;Ce=new F(Lt.position.x+tr*.6,Lt.position.y+tr*.45,Lt.position.z+tr*.85)}}p.current.position.lerp(Ce,.08),u.current.target.lerp(qe,.08),p.current.position.distanceTo(Ce)<.6&&(b.current=!1)}ee.update(),K.render(Pe,De),f.current=requestAnimationFrame(ge)};f.current=requestAnimationFrame(ge);const xe=new ResizeObserver(te=>{for(const ie of te){const se=ie.contentRect.width,Xe=ie.contentRect.height;se>0&&Xe>0&&(De.aspect=se/Xe,De.updateProjectionMatrix(),K.setSize(se,Xe))}});return xe.observe(O),()=>{cancelAnimationFrame(f.current),xe.disconnect(),P.removeEventListener("pointerdown",Te),P.removeEventListener("pointermove",Ie),P.removeEventListener("pointerup",He),ee.dispose(),K.dispose(),O.contains(P)&&O.removeChild(P)}},[]),ze.useEffect(()=>{U.current.forEach((O,fe)=>{const ve=t===fe,Pe=O.material;Pe&&(Pe.color.setHex(ve?10980346:16777215),Pe.opacity=ve?.38:.09)})},[t]);const Y=gi.findIndex(O=>O.id===t),N=gi[Y]||gi[3],q=ze.useCallback(()=>{const O=(Y-1+gi.length)%gi.length;e(gi[O].id)},[Y,e]),$=ze.useCallback(()=>{const O=(Y+1)%gi.length;e(gi[O].id)},[Y,e]),Q=()=>{m.current=!0,b.current=!0},G=()=>{if(u.current&&p.current){const O=new F().subVectors(u.current.target,p.current.position);p.current.position.addScaledVector(O,.22),u.current.update()}},B=()=>{if(u.current&&p.current){const O=new F().subVectors(p.current.position,u.current.target);p.current.position.addScaledVector(O,.25),u.current.update()}},W=O=>{O.key===" "||O.code==="Space"?(O.preventDefault(),i(fe=>!fe)):O.key==="ArrowLeft"?(O.preventDefault(),q()):O.key==="ArrowRight"?(O.preventDefault(),$()):(O.key==="r"||O.key==="R")&&(O.preventDefault(),Q())};return X.jsxs("section",{id:"explorer",className:"section-padding",tabIndex:0,onKeyDown:W,"aria-label":"Solar System 3D Explorer",children:[X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"16px",textAlign:"center"},children:"Your journey starts here"}),X.jsx("p",{style:{color:"var(--text-secondary)",textAlign:"center",fontSize:"1.25rem",marginBottom:"56px"},children:"Explore all eight planets and the Sun with interactive 3D controls, realistic lighting, and planetary facts."}),X.jsxs("div",{className:"explorer-wrapper",children:[X.jsxs("div",{className:"orbital-viz",children:[X.jsx("div",{ref:l,className:"three-canvas-container",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),o&&X.jsx("div",{className:"planet-hover-badge",children:o}),X.jsxs("div",{className:"top-viz-controls",children:[X.jsx("button",{onClick:G,className:"control-btn","aria-label":"Zoom in",title:"Zoom In",children:X.jsx(Wx,{size:18})}),X.jsx("button",{onClick:B,className:"control-btn","aria-label":"Zoom out",title:"Zoom Out",children:X.jsx(jx,{size:18})}),X.jsx("button",{onClick:Q,className:"control-btn","aria-label":"Reset view to overview",title:"Reset View to Overview",children:X.jsx(Hx,{size:18})})]}),X.jsxs("div",{className:"viz-controls",children:[X.jsx("button",{onClick:()=>i(!r),className:`control-btn ${r?"paused":""}`,"aria-label":r?"Resume planetary orbits":"Pause planetary orbits",title:r?"Resume":"Pause",children:r?X.jsx(Bx,{size:18}):X.jsx(zx,{size:18})}),X.jsx("div",{className:"speed-pills-group",role:"group","aria-label":"Orbit speed multiplier",children:[.5,1,2,4].map(O=>X.jsxs("button",{onClick:()=>a(O),className:`speed-pill ${n===O?"active":""}`,"aria-label":`Set speed to ${O}x`,children:[O,"x"]},O))})]}),X.jsx("div",{className:"viz-disclaimer",children:"Sizes, distances, and time are adjusted for visibility"})]}),X.jsxs("div",{className:"info-panel",children:[X.jsxs("div",{className:"info-panel-header",children:[X.jsx("div",{className:"body-order",children:N.order===0?"00":String(N.order).padStart(2,"0")}),X.jsxs("div",{style:{display:"flex",gap:"8px"},children:[X.jsx("button",{onClick:q,className:"nav-btn","aria-label":"Previous celestial body",title:"Previous (Left Arrow)",children:X.jsx(Ux,{size:20})}),X.jsx("button",{onClick:$,className:"nav-btn","aria-label":"Next celestial body",title:"Next (Right Arrow)",children:X.jsx(Ox,{size:20})})]})]}),X.jsxs("div",{className:"preview-container",children:[X.jsx("div",{style:{width:"84px",height:"84px",borderRadius:"50%",background:N.gradient,boxShadow:`inset -10px -10px 20px rgba(0,0,0,0.5), 0 10px 30px ${N.color}40`,position:"relative",flexShrink:0,transition:"background 0.3s ease"},children:N.id==="saturn"&&X.jsx("div",{className:"saturn-ring-info"})}),X.jsxs("div",{className:"preview-meta",children:[X.jsx("span",{className:"type-tag",children:N.type.toUpperCase()}),X.jsxs("span",{className:"order-tag",children:["Orbit Position: ",N.order]})]})]}),X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("h3",{style:{fontSize:"clamp(2rem, 3.5vw, 2.75rem)",marginBottom:"6px"},children:N.name}),X.jsx("p",{style:{color:"var(--accent-purple)",fontWeight:600,fontSize:"1.05rem"},children:N.descriptor})]}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"28px",fontSize:"0.98rem"},children:N.introduction}),X.jsxs("div",{style:{flexGrow:1},children:[X.jsx("h4",{style:{fontSize:"1.05rem",marginBottom:"14px",paddingBottom:"8px",borderBottom:"1px solid var(--border-subtle)"},children:"Quick Facts"}),X.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"12px"},children:N.facts.map((O,fe)=>X.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",color:"var(--text-secondary)",fontSize:"0.92rem",lineHeight:1.5},children:[X.jsx("span",{style:{color:"var(--accent-purple)",marginTop:"2px",flexShrink:0},children:"•"}),O]},fe))})]})]})]}),X.jsx("div",{className:"selector-row",role:"tablist","aria-label":"Celestial body selector",children:gi.map(O=>X.jsxs("button",{onClick:()=>e(O.id),className:`selector-btn${t===O.id?" active":""}`,role:"tab","aria-selected":t===O.id,"aria-label":`Select ${O.name}`,children:[X.jsx("span",{className:"selector-dot",style:{backgroundColor:O.color}}),O.name]},`selector-${O.id}`))})]}),X.jsx("style",{children:`
        #explorer:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 4px;
        }
        .explorer-wrapper {
          display: flex;
          flex-direction: row;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(10, 8, 30, 0.12);
          background-color: #020205;
          border: 1px solid var(--border-subtle);
          min-height: 640px;
        }
        .orbital-viz {
          flex: 1 1 65%;
          position: relative;
          overflow: hidden;
          min-height: 520px;
          background: #020205;
        }
        .three-canvas-container {
          cursor: grab;
        }
        .three-canvas-container:active {
          cursor: grabbing;
        }
        .planet-hover-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(14, 12, 28, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 6px 16px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.15s ease-out;
          z-index: 20;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .top-viz-controls {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 20;
          display: flex;
          gap: 10px;
        }
        .viz-controls {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .control-btn {
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .control-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.35);
          transform: translateY(-1px);
        }
        .control-btn:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 2px;
        }
        .control-btn.paused {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
        }
        .speed-pills-group {
          display: flex;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 3px;
          gap: 2px;
        }
        .speed-pill {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          transition: all 0.18s ease;
        }
        .speed-pill:hover {
          color: white;
        }
        .speed-pill.active {
          background-color: white;
          color: #020205;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .speed-pill:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 1px;
        }
        .viz-disclaimer {
          position: absolute;
          bottom: 24px;
          right: 24px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 20;
          pointer-events: none;
        }
        .info-panel {
          flex: 1 1 35%;
          min-width: 320px;
          background-color: var(--surface-lavender);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .info-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .body-order {
          font-size: 1.1rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: var(--text-secondary);
          opacity: 0.5;
        }
        .nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.18s ease;
          cursor: pointer;
        }
        .nav-btn:hover {
          background-color: var(--accent-purple);
          color: white;
          border-color: var(--accent-purple);
          transform: translateY(-1px);
        }
        .nav-btn:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 2px;
        }
        .preview-container {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        .preview-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: rgba(120, 56, 232, 0.12);
          color: var(--accent-purple);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          width: fit-content;
        }
        .order-tag {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .saturn-ring-info {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 175%;
          height: 42%;
          border-radius: 50%;
          border: 4px solid rgba(244, 164, 96, 0.55);
          transform: translate(-50%, -50%) rotate(24deg);
          pointer-events: none;
        }
        .selector-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        .selector-btn {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          background-color: white;
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          transition: all 0.18s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .selector-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
        .selector-btn.active {
          background-color: var(--text-primary);
          color: white;
          border-color: var(--text-primary);
          box-shadow: 0 4px 12px rgba(16, 13, 40, 0.15);
        }
        .selector-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }
        .selector-btn.active .selector-dot {
          box-shadow: 0 0 6px currentColor;
        }
        @media (max-width: 980px) {
          .explorer-wrapper {
            flex-direction: column;
            min-height: auto;
          }
          .orbital-viz {
            min-height: 440px;
            height: 52vh;
          }
          .info-panel {
            min-width: unset;
            padding: 28px 24px;
          }
          .viz-disclaimer {
            font-size: 0.7rem;
            bottom: 16px;
            right: 16px;
          }
          .viz-controls {
            bottom: 16px;
            left: 16px;
          }
          .top-viz-controls {
            top: 16px;
            right: 16px;
          }
        }
      `})]})},r2=({planet:t,onSelect:e})=>X.jsxs("button",{onClick:()=>e(t.id),style:{display:"flex",flexDirection:"column",textAlign:"left",backgroundColor:"var(--surface-lavender)",borderRadius:"24px",padding:"32px",border:"1px solid var(--border-subtle)",transition:"all var(--transition-normal)",position:"relative",overflow:"hidden",height:"100%",width:"100%"},className:"planet-card",children:[X.jsxs("div",{style:{position:"absolute",top:"24px",right:"24px",fontSize:"1.25rem",fontWeight:800,fontFamily:"var(--font-display)",color:"var(--text-secondary)",opacity:.5},children:["0",t.order]}),X.jsx("div",{style:{width:"120px",height:"120px",borderRadius:"50%",background:t.gradient,marginBottom:"24px",alignSelf:"center",position:"relative",boxShadow:`inset -12px -12px 24px rgba(0,0,0,0.4), 0 10px 20px ${t.color}40`,transition:"transform var(--transition-normal)"},className:"planet-visual",children:t.id==="saturn"&&X.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"180%",height:"40%",borderRadius:"50%",border:"8px solid rgba(244, 164, 96, 0.6)",transform:"translate(-50%, -50%) rotate(20deg)"}})}),X.jsx("h3",{style:{fontSize:"2rem",marginBottom:"8px"},children:t.name}),X.jsx("p",{style:{color:"var(--accent-purple)",fontWeight:600,fontSize:"1rem",marginBottom:"16px"},children:t.descriptor}),X.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"32px",lineHeight:1.5,flexGrow:1},children:t.facts[0]}),X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--text-primary)",fontWeight:600,marginTop:"auto"},className:"explore-link",children:["Explore Planet",X.jsx(Dx,{size:18,className:"arrow-icon",style:{transition:"transform var(--transition-fast)"}})]}),X.jsx("style",{children:`
        .planet-card:hover, .planet-card:focus-visible {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(78, 85, 216, 0.08);
          border-color: var(--accent-purple);
          outline: none;
        }
        .planet-card:hover .planet-visual, .planet-card:focus-visible .planet-visual {
          transform: scale(1.05);
        }
        .planet-card:hover .arrow-icon, .planet-card:focus-visible .arrow-icon {
          transform: translateX(4px);
        }
      `})]}),i2=()=>X.jsxs("section",{id:"discover",className:"section-padding",style:{backgroundColor:"white"},children:[X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"48px",maxWidth:"600px"},children:"There's more beyond the orbit"}),X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",alignItems:"stretch"},className:"discovery-grid",children:[X.jsxs("div",{style:{backgroundColor:"var(--text-primary)",color:"white",padding:"48px",borderRadius:"24px",gridColumn:"1 / -1",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden",minHeight:"400px"},className:"feature-card",children:[X.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:"600px"},children:[X.jsx("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",width:"64px",height:"64px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:X.jsx(Gx,{size:32,color:"#FFD700"})}),X.jsx("h3",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"Our Star, The Sun"}),X.jsx("p",{style:{fontSize:"1.25rem",opacity:.9,lineHeight:1.6},children:"The Sun is a yellow dwarf star at the center of our solar system. Its gravity holds everything together, and its energy drives weather, ocean currents, seasons, and life on Earth. Without it, our solar system would be a dark, frozen place."})]}),X.jsx("div",{style:{position:"absolute",right:"-10%",bottom:"-30%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)",zIndex:1}})]}),X.jsxs("div",{style:{backgroundColor:"var(--surface-lavender)",padding:"40px",borderRadius:"24px",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[X.jsx("div",{style:{backgroundColor:"white",width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},children:X.jsx(Fx,{size:28,color:"var(--accent-purple)"})}),X.jsx("h3",{style:{fontSize:"1.75rem",marginBottom:"16px"},children:"Worlds of Rock & Gas"}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"The inner planets—Mercury, Venus, Earth, and Mars—are dense, rocky worlds. The outer planets—Jupiter, Saturn, Uranus, and Neptune—are massive giants primarily composed of gas and ice, featuring vast atmospheres and complex ring systems."})]}),X.jsxs("div",{style:{backgroundColor:"var(--bg-page)",padding:"40px",borderRadius:"24px",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[X.jsx("div",{style:{backgroundColor:"white",width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},children:X.jsx(up,{size:28,color:"var(--accent-indigo)"})}),X.jsx("h3",{style:{fontSize:"1.75rem",marginBottom:"16px"},children:"The Immense Scale"}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"Space is overwhelmingly vast. If the Sun were a typical front door, Earth would be the size of a nickel. Neptune, the outermost planet, is so far away that sunlight takes more than 4 hours to reach it."})]})]})]}),X.jsx("style",{children:`
        @media (min-width: 992px) {
          .discovery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `})]}),n2=()=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return X.jsxs("footer",{style:{backgroundColor:"white",borderTop:"1px solid var(--border-subtle)",padding:"64px 0 32px 0"},children:[X.jsxs("div",{className:"container",style:{display:"flex",flexDirection:"column",gap:"48px"},children:[X.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"24px"},children:[X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[X.jsx(up,{style:{color:"var(--accent-purple)",width:"32px",height:"32px"}}),X.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.5rem"},children:"Solar Explorer"})]}),X.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.25rem",fontFamily:"var(--font-display)",fontWeight:500},children:"Same planet. Bigger dreams."})]}),X.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"32px",flexWrap:"wrap"},children:[X.jsx("a",{href:"#explorer",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Explore"}),X.jsx("a",{href:"#planets",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Planets"}),X.jsx("a",{href:"#discover",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Discover"})]}),X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border-subtle)",paddingTop:"32px",marginTop:"16px",flexWrap:"wrap",gap:"16px"},children:[X.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.875rem"},children:["© ",new Date().getFullYear()," Solar Explorer. Illustrative purposes only."]}),X.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--accent-purple)",fontWeight:500,fontSize:"0.875rem"},"aria-label":"Back to top",children:["Back to top",X.jsx("div",{style:{backgroundColor:"var(--surface-lavender)",padding:"8px",borderRadius:"50%",display:"flex"},children:X.jsx(Ix,{size:16})})]})]})]}),X.jsx("style",{children:`
        .footer-link:hover {
          color: var(--accent-purple) !important;
        }
      `})]})};function a2(){const[t,e]=ze.useState("earth"),r=n=>{e(n);const a=document.getElementById("explorer");if(a){const o=a.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o-80,behavior:"smooth"})}},i=gi.filter(n=>n.type==="planet");return X.jsxs(X.Fragment,{children:[X.jsx(Xx,{}),X.jsxs("main",{children:[X.jsx(Yx,{}),X.jsx(t2,{selectedId:t,onSelect:e}),X.jsx("section",{id:"planets",className:"section-padding",children:X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"48px",textAlign:"center"},children:"Meet your cosmic neighbors"}),X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px"},children:i.map(n=>X.jsx(r2,{planet:n,onSelect:r},n.id))})]})}),X.jsx(i2,{})]}),X.jsx(n2,{})]})}Iu.createRoot(document.getElementById("root")).render(X.jsx(y_.StrictMode,{children:X.jsx(a2,{})}));
