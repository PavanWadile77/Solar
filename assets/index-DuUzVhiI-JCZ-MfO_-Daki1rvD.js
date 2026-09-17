(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function r_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},oc={},Km={exports:{}},Ze={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var lo=Symbol.for("react.element"),n_=Symbol.for("react.portal"),a_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),d_=Symbol.for("react.suspense"),h_=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),Pf=Symbol.iterator;function p_(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Jm={};function Qa(t,e,i){this.props=t,this.context=e,this.refs=Jm,this.updater=i||$m}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=Qa.prototype;function gh(t,e,i){this.props=t,this.context=e,this.refs=Jm,this.updater=i||$m}var vh=gh.prototype=new Qm;vh.constructor=gh;Zm(vh,Qa.prototype);vh.isPureReactComponent=!0;var Nf=Array.isArray,eg=Object.prototype.hasOwnProperty,_h={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function ig(t,e,i){var r,n={},a=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)eg.call(e,r)&&!tg.hasOwnProperty(r)&&(n[r]=e[r]);var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)n[r]===void 0&&(n[r]=o[r]);return{$$typeof:lo,type:t,key:a,ref:s,props:n,_owner:_h.current}}function m_(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function g_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var Df=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g_(""+t.key):e.toString(36)}function dl(t,e,i,r,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case lo:case n_:s=!0}}if(s)return s=t,n=n(s),t=r===""?"."+Cc(s,0):r,Nf(n)?(i="",t!=null&&(i=t.replace(Df,"$&/")+"/"),dl(n,e,i,"",function(c){return c})):n!=null&&(xh(n)&&(n=m_(n,i+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(Df,"$&/")+"/")+t)),e.push(n)),1;if(s=0,r=r===""?".":r+":",Nf(t))for(var o=0;o<t.length;o++){a=t[o];var l=r+Cc(a,o);s+=dl(a,e,i,l,n)}else if(l=p_(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=r+Cc(a,o++),s+=dl(a,e,i,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function bo(t,e,i){if(t==null)return t;var r=[],n=0;return dl(t,r,"","",function(a){return e.call(i,a,n++)}),r}function v_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yi={current:null},hl={transition:null},__={ReactCurrentDispatcher:yi,ReactCurrentBatchConfig:hl,ReactCurrentOwner:_h};function rg(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:bo,forEach:function(t,e,i){bo(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Qa;Ze.Fragment=a_;Ze.Profiler=o_;Ze.PureComponent=gh;Ze.StrictMode=s_;Ze.Suspense=d_;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Ze.act=rg;Ze.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zm({},t.props),n=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=_h.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)eg.call(e,l)&&!tg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=i;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:lo,type:t.type,key:n,ref:a,props:r,_owner:s}};Ze.createContext=function(t){return t={$$typeof:c_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};Ze.createElement=ig;Ze.createFactory=function(t){var e=ig.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:u_,render:t}};Ze.isValidElement=xh;Ze.lazy=function(t){return{$$typeof:f_,_payload:{_status:-1,_result:t},_init:v_}};Ze.memo=function(t,e){return{$$typeof:h_,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Ze.unstable_act=rg;Ze.useCallback=function(t,e){return yi.current.useCallback(t,e)};Ze.useContext=function(t){return yi.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return yi.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return yi.current.useEffect(t,e)};Ze.useId=function(){return yi.current.useId()};Ze.useImperativeHandle=function(t,e,i){return yi.current.useImperativeHandle(t,e,i)};Ze.useInsertionEffect=function(t,e){return yi.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return yi.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return yi.current.useMemo(t,e)};Ze.useReducer=function(t,e,i){return yi.current.useReducer(t,e,i)};Ze.useRef=function(t){return yi.current.useRef(t)};Ze.useState=function(t){return yi.current.useState(t)};Ze.useSyncExternalStore=function(t,e,i){return yi.current.useSyncExternalStore(t,e,i)};Ze.useTransition=function(){return yi.current.useTransition()};Ze.version="18.3.1";Km.exports=Ze;var ze=Km.exports;const x_=r_(ze);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var y_=ze,b_=Symbol.for("react.element"),S_=Symbol.for("react.fragment"),M_=Object.prototype.hasOwnProperty,E_=y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w_={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,i){var r,n={},a=null,s=null;i!==void 0&&(a=""+i),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)M_.call(e,r)&&!w_.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:b_,type:t,key:a,ref:s,props:n,_owner:E_.current}}oc.Fragment=S_;oc.jsx=ng;oc.jsxs=ng;qm.exports=oc;var X=qm.exports,Iu={},ag={exports:{}},zi={},sg={exports:{}},og={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(V,B){var W=V.length;V.push(B);e:for(;0<W;){var O=W-1>>>1,pe=V[O];if(0<n(pe,B))V[O]=B,V[W]=pe,W=O;else break e}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var B=V[0],W=V.pop();if(W!==B){V[0]=W;e:for(var O=0,pe=V.length,ve=pe>>>1;O<ve;){var Pe=2*(O+1)-1,Le=V[Pe],Ge=Pe+1,$=V[Ge];if(0>n(Le,W))Ge<pe&&0>n($,Le)?(V[O]=$,V[Ge]=W,O=Ge):(V[O]=Le,V[Pe]=W,O=Pe);else if(Ge<pe&&0>n($,W))V[O]=$,V[Ge]=W,O=Ge;else break e}}return B}function n(V,B){var W=V.sortIndex-B.sortIndex;return W!==0?W:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,f=null,u=3,p=!1,m=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(V){for(var B=i(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=V)r(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=i(c)}}function y(V){if(S=!1,M(V),!m)if(i(l)!==null)m=!0,Q(E);else{var B=i(c);B!==null&&J(y,B.startTime-V)}}function E(V,B){m=!1,S&&(S=!1,d(x),x=-1),p=!0;var W=u;try{for(M(B),f=i(l);f!==null&&(!(f.expirationTime>B)||V&&!U());){var O=f.callback;if(typeof O=="function"){f.callback=null,u=f.priorityLevel;var pe=O(f.expirationTime<=B);B=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===i(l)&&r(l),M(B)}else r(l);f=i(l)}if(f!==null)var ve=!0;else{var Pe=i(c);Pe!==null&&J(y,Pe.startTime-B),ve=!1}return ve}finally{f=null,u=W,p=!1}}var w=!1,C=null,x=-1,T=5,A=-1;function U(){return!(t.unstable_now()-A<T)}function k(){if(C!==null){var V=t.unstable_now();A=V;var B=!0;try{B=C(!0,V)}finally{B?Y():(w=!1,C=null)}}else w=!1}var Y;if(typeof v=="function")Y=function(){v(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,q=D.port2;D.port1.onmessage=k,Y=function(){q.postMessage(null)}}else Y=function(){g(k,0)};function Q(V){C=V,w||(w=!0,Y())}function J(V,B){x=g(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Q(E))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return i(l)},t.unstable_next=function(V){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var W=u;u=B;try{return V()}finally{u=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=u;u=V;try{return B()}finally{u=W}},t.unstable_scheduleCallback=function(V,B,W){var O=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?O+W:O):W=O,V){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,V={id:h++,callback:B,priorityLevel:V,startTime:W,expirationTime:pe,sortIndex:-1},W>O?(V.sortIndex=W,e(c,V),i(l)===null&&V===i(c)&&(S?(d(x),x=-1):S=!0,J(y,W-O))):(V.sortIndex=pe,e(l,V),m||p||(m=!0,Q(E))),V},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(V){var B=u;return function(){var W=u;u=B;try{return V.apply(this,arguments)}finally{u=W}}}})(og);sg.exports=og;var T_=sg.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var C_=ze,ki=T_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,zs={};function ea(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(zs[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,R_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lf={},If={};function A_(t){return Uu.call(If,t)?!0:Uu.call(Lf,t)?!1:R_.test(t)?If[t]=!0:(Lf[t]=!0,!1)}function P_(t,e,i,r){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N_(t,e,i,r){if(e===null||typeof e>"u"||P_(t,e,i,r))return!0;if(r)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bi(t,e,i,r,n,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var ei={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ei[t]=new bi(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ei[e]=new bi(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ei[t]=new bi(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ei[t]=new bi(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ei[t]=new bi(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ei[t]=new bi(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ei[t]=new bi(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ei[t]=new bi(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ei[t]=new bi(t,5,!1,t.toLowerCase(),null,!1,!1)});var yh=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yh,bh);ei[e]=new bi(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yh,bh);ei[e]=new bi(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yh,bh);ei[e]=new bi(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ei[t]=new bi(t,1,!1,t.toLowerCase(),null,!1,!1)});ei.xlinkHref=new bi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ei[t]=new bi(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,i,r){var n=ei.hasOwnProperty(e)?ei[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N_(e,i,n,r)&&(i=null),r||n===null?A_(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):n.mustUseProperty?t[n.propertyName]=i===null?n.type===3?!1:"":i:(e=n.attributeName,r=n.attributeNamespace,i===null?t.removeAttribute(e):(n=n.type,i=n===3||n===4&&i===!0?"":""+i,r?t.setAttributeNS(r,e,i):t.setAttribute(e,i))))}var Yr=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),ya=Symbol.for("react.portal"),ba=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Uf=Symbol.iterator;function ns(t){return t===null||typeof t!="object"?null:(t=Uf&&t[Uf]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Rc;function bs(t){if(Rc===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Ac=!1;function Pc(t,e){if(!t||Ac)return"";Ac=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=r.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?bs(t):""}function D_(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ba:return"Fragment";case ya:return"Portal";case Ou:return"Profiler";case Mh:return"StrictMode";case Fu:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function L_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I_(t){var e=hg(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,a=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=I_(t))}function fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=hg(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var i=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function Of(t,e){var i=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;i=bn(e.value!=null?e.value:i),t._wrapperState={initialChecked:r,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function Hu(t,e){pg(t,e);var i=bn(e.value),r=e.type;if(i!=null)r==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,i):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ff(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Vu(t,e,i){(e!=="number"||Pl(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Ss=Array.isArray;function Ua(t,e,i,r){if(t=t.options,e){e={};for(var n=0;n<i.length;n++)e["$"+i[n]]=!0;for(i=0;i<t.length;i++)n=e.hasOwnProperty("$"+t[i].value),t[i].selected!==n&&(t[i].selected=n),n&&r&&(t[i].defaultSelected=!0)}else{for(i=""+bn(i),e=null,n=0;n<t.length;n++){if(t[n].value===i){t[n].selected=!0,r&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kf(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(se(92));if(Ss(i)){if(1<i.length)throw Error(se(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:bn(i)}}function mg(t,e){var i=bn(e.value),r=bn(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),r!=null&&(t.defaultValue=""+r)}function zf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,r,n){MSApp.execUnsafeLocalFunction(function(){return t(e,i,r,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){U_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function _g(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var r=i.indexOf("--")===0,n=_g(i,e[i],r);i==="float"&&(i="cssFloat"),r?t.setProperty(i,n):t[i]=n}}var O_=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(O_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Oa=null,Fa=null;function Bf(t){if(t=ho(t)){if(typeof qu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=hc(e),qu(t.stateNode,t.type,e))}}function yg(t){Oa?Fa?Fa.push(t):Fa=[t]:Oa=t}function bg(){if(Oa){var t=Oa,e=Fa;if(Fa=Oa=null,Bf(t),e)for(t=0;t<e.length;t++)Bf(e[t])}}function Sg(t,e){return t(e)}function Mg(){}var Nc=!1;function Eg(t,e,i){if(Nc)return t(e,i);Nc=!0;try{return Sg(t,e,i)}finally{Nc=!1,(Oa!==null||Fa!==null)&&(Mg(),bg())}}function Hs(t,e){var i=t.stateNode;if(i===null)return null;var r=hc(i);if(r===null)return null;i=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(se(231,e,typeof i));return i}var Ku=!1;if(Hr)try{var as={};Object.defineProperty(as,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Ku=!1}function F_(t,e,i,r,n,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(i,c)}catch(h){this.onError(h)}}var As=!1,Nl=null,Dl=!1,$u=null,k_={onError:function(t){As=!0,Nl=t}};function z_(t,e,i,r,n,a,s,o,l){As=!1,Nl=null,F_.apply(k_,arguments)}function B_(t,e,i,r,n,a,s,o,l){if(z_.apply(this,arguments),As){if(As){var c=Nl;As=!1,Nl=null}else throw Error(se(198));Dl||(Dl=!0,$u=c)}}function ta(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hf(t){if(ta(t)!==t)throw Error(se(188))}function H_(t){var e=t.alternate;if(!e){if(e=ta(t),e===null)throw Error(se(188));return e!==t?null:t}for(var i=t,r=e;;){var n=i.return;if(n===null)break;var a=n.alternate;if(a===null){if(r=n.return,r!==null){i=r;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===i)return Hf(n),t;if(a===r)return Hf(n),e;a=a.sibling}throw Error(se(188))}if(i.return!==r.return)i=n,r=a;else{for(var s=!1,o=n.child;o;){if(o===i){s=!0,i=n,r=a;break}if(o===r){s=!0,r=n,i=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===i){s=!0,i=a,r=n;break}if(o===r){s=!0,r=a,i=n;break}o=o.sibling}if(!s)throw Error(se(189))}}if(i.alternate!==r)throw Error(se(190))}if(i.tag!==3)throw Error(se(188));return i.stateNode.current===i?t:e}function Tg(t){return t=H_(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Rg=ki.unstable_scheduleCallback,Vf=ki.unstable_cancelCallback,V_=ki.unstable_shouldYield,G_=ki.unstable_requestPaint,Lt=ki.unstable_now,W_=ki.unstable_getCurrentPriorityLevel,Ch=ki.unstable_ImmediatePriority,Ag=ki.unstable_UserBlockingPriority,Ll=ki.unstable_NormalPriority,j_=ki.unstable_LowPriority,Pg=ki.unstable_IdlePriority,lc=null,Sr=null;function X_(t){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:K_,Y_=Math.log,q_=Math.LN2;function K_(t){return t>>>=0,t===0?32:31-(Y_(t)/q_|0)|0}var wo=64,To=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var i=t.pendingLanes;if(i===0)return 0;var r=0,n=t.suspendedLanes,a=t.pingedLanes,s=i&268435455;if(s!==0){var o=s&~n;o!==0?r=Ms(o):(a&=s,a!==0&&(r=Ms(a)))}else s=i&~n,s!==0?r=Ms(s):a!==0&&(r=Ms(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(r&4&&(r|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)i=31-or(e),n=1<<i,r|=t[i],e&=~n;return r}function $_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-or(a),o=1<<s,l=n[s];l===-1?(!(o&i)||o&r)&&(n[s]=$_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ng(){var t=wo;return wo<<=1,!(wo&4194240)&&(wo=64),t}function Dc(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function co(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-or(e),t[e]=i}function J_(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<i;){var n=31-or(i),a=1<<n;e[n]=0,r[n]=-1,t[n]=-1,i&=~a}}function Rh(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-or(i),n=1<<r;n&e|t[r]&e&&(t[r]|=e),i&=~n}}var ot=0;function Dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lg,Ah,Ig,Ug,Og,Ju=!1,Co=[],fn=null,pn=null,mn=null,Vs=new Map,Gs=new Map,ln=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ss(t,e,i,r,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:a,targetContainers:[n]},e!==null&&(e=ho(e),e!==null&&Ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ex(t,e,i,r,n){switch(e){case"focusin":return fn=ss(fn,t,e,i,r,n),!0;case"dragenter":return pn=ss(pn,t,e,i,r,n),!0;case"mouseover":return mn=ss(mn,t,e,i,r,n),!0;case"pointerover":var a=n.pointerId;return Vs.set(a,ss(Vs.get(a)||null,t,e,i,r,n)),!0;case"gotpointercapture":return a=n.pointerId,Gs.set(a,ss(Gs.get(a)||null,t,e,i,r,n)),!0}return!1}function Fg(t){var e=Bn(t.target);if(e!==null){var i=ta(e);if(i!==null){if(e=i.tag,e===13){if(e=wg(i),e!==null){t.blockedOn=e,Og(t.priority,function(){Ig(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Yu=r,i.target.dispatchEvent(r),Yu=null}else return e=ho(i),e!==null&&Ah(e),t.blockedOn=i,!1;e.shift()}return!0}function Wf(t,e,i){fl(t)&&i.delete(e)}function tx(){Ju=!1,fn!==null&&fl(fn)&&(fn=null),pn!==null&&fl(pn)&&(pn=null),mn!==null&&fl(mn)&&(mn=null),Vs.forEach(Wf),Gs.forEach(Wf)}function os(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,ki.unstable_scheduleCallback(ki.unstable_NormalPriority,tx)))}function Ws(t){function e(n){return os(n,t)}if(0<Co.length){os(Co[0],t);for(var i=1;i<Co.length;i++){var r=Co[i];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&os(fn,t),pn!==null&&os(pn,t),mn!==null&&os(mn,t),Vs.forEach(e),Gs.forEach(e),i=0;i<ln.length;i++)r=ln[i],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(i=ln[0],i.blockedOn===null);)Fg(i),i.blockedOn===null&&ln.shift()}var ka=Yr.ReactCurrentBatchConfig,Ul=!0;function ix(t,e,i,r){var n=ot,a=ka.transition;ka.transition=null;try{ot=1,Ph(t,e,i,r)}finally{ot=n,ka.transition=a}}function rx(t,e,i,r){var n=ot,a=ka.transition;ka.transition=null;try{ot=4,Ph(t,e,i,r)}finally{ot=n,ka.transition=a}}function Ph(t,e,i,r){if(Ul){var n=Qu(t,e,i,r);if(n===null)Vc(t,e,r,Ol,i),Gf(t,r);else if(ex(n,t,e,i,r))r.stopPropagation();else if(Gf(t,r),e&4&&-1<Q_.indexOf(t)){for(;n!==null;){var a=ho(n);if(a!==null&&Lg(a),a=Qu(t,e,i,r),a===null&&Vc(t,e,r,Ol,i),a===n)break;n=a}n!==null&&r.stopPropagation()}else Vc(t,e,r,null,i)}}var Ol=null;function Qu(t,e,i,r){if(Ol=null,t=Th(r),t=Bn(t),t!==null)if(e=ta(t),e===null)t=null;else if(i=e.tag,i===13){if(t=wg(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case Ch:return 1;case Ag:return 4;case Ll:case j_:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var dn=null,Nh=null,pl=null;function zg(){if(pl)return pl;var t,e=Nh,i=e.length,r,n="value"in dn?dn.value:dn.textContent,a=n.length;for(t=0;t<i&&e[t]===n[t];t++);var s=i-t;for(r=1;r<=s&&e[i-r]===n[a-r];r++);return pl=n.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ro(){return!0}function jf(){return!1}function Bi(t){function e(i,r,n,a,s){this._reactName=i,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(i=t[o],this[o]=i?i(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ro:jf,this.isPropagationStopped=jf,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=Bi(es),uo=Et({},es,{view:0,detail:0}),nx=Bi(uo),Lc,Ic,ls,cc=Et({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(Lc=t.screenX-ls.screenX,Ic=t.screenY-ls.screenY):Ic=Lc=0,ls=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Xf=Bi(cc),ax=Et({},cc,{dataTransfer:0}),sx=Bi(ax),ox=Et({},uo,{relatedTarget:0}),Uc=Bi(ox),lx=Et({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Bi(lx),ux=Et({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Bi(ux),hx=Et({},es,{data:0}),Yf=Bi(hx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function Lh(){return gx}var vx=Et({},uo,{key:function(t){if(t.key){var e=fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=Bi(vx),xx=Et({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=Bi(xx),yx=Et({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),bx=Bi(yx),Sx=Et({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=Bi(Sx),Ex=Et({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=Bi(Ex),Tx=[9,13,27,32],Ih=Hr&&"CompositionEvent"in window,Ps=null;Hr&&"documentMode"in document&&(Ps=document.documentMode);var Cx=Hr&&"TextEvent"in window&&!Ps,Bg=Hr&&(!Ih||Ps&&8<Ps&&11>=Ps),Kf=" ",$f=!1;function Hg(t,e){switch(t){case"keyup":return Tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sa=!1;function Rx(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:($f=!0,Kf);case"textInput":return t=e.data,t===Kf&&$f?null:t;default:return null}}function Ax(t,e){if(Sa)return t==="compositionend"||!Ih&&Hg(t,e)?(t=zg(),pl=Nh=dn=null,Sa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Px[t.type]:e==="textarea"}function Gg(t,e,i,r){yg(r),e=Fl(e,"onChange"),0<e.length&&(i=new Dh("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var Ns=null,js=null;function Nx(t){ev(t,0)}function uc(t){var e=wa(t);if(fg(e))return t}function Dx(t,e){if(t==="change")return e}var Wg=!1;if(Hr){var Oc;if(Hr){var Fc="oninput"in document;if(!Fc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Fc=typeof Jf.oninput=="function"}Oc=Fc}else Oc=!1;Wg=Oc&&(!document.documentMode||9<document.documentMode)}function Qf(){Ns&&(Ns.detachEvent("onpropertychange",jg),js=Ns=null)}function jg(t){if(t.propertyName==="value"&&uc(js)){var e=[];Gg(e,js,t,Th(t)),Eg(Nx,e)}}function Lx(t,e,i){t==="focusin"?(Qf(),Ns=e,js=i,Ns.attachEvent("onpropertychange",jg)):t==="focusout"&&Qf()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(js)}function Ux(t,e){if(t==="click")return uc(e)}function Ox(t,e){if(t==="input"||t==="change")return uc(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dr=typeof Object.is=="function"?Object.is:Fx;function Xs(t,e){if(dr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var n=i[r];if(!Uu.call(e,n)||!dr(t[n],e[n]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var i=ep(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ep(i)}}function Xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kx(t){var e=Yg(),i=t.focusedElem,r=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Xg(i.ownerDocument.documentElement,i)){if(r!==null&&Uh(i)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=i.textContent.length,a=Math.min(r.start,n);r=r.end===void 0?a:Math.min(r.end,n),!t.extend&&a>r&&(n=r,r=a,a=n),n=tp(i,a);var s=tp(i,r);n&&s&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zx=Hr&&"documentMode"in document&&11>=document.documentMode,Ma=null,ed=null,Ds=null,td=!1;function ip(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;td||Ma==null||Ma!==Pl(r)||(r=Ma,"selectionStart"in r&&Uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&Xs(Ds,r)||(Ds=r,r=Fl(ed,"onSelect"),0<r.length&&(e=new Dh("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=Ma)))}function Ao(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Ea={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},kc={},qg={};Hr&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function dc(t){if(kc[t])return kc[t];if(!Ea[t])return t;var e=Ea[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in qg)return kc[t]=e[i];return t}var Kg=dc("animationend"),$g=dc("animationiteration"),Zg=dc("animationstart"),Jg=dc("transitionend"),Qg=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){Qg.set(t,e),ea(e,[t])}for(var zc=0;zc<rp.length;zc++){var Bc=rp[zc],Bx=Bc.toLowerCase(),Hx=Bc[0].toUpperCase()+Bc.slice(1);Tn(Bx,"on"+Hx)}Tn(Kg,"onAnimationEnd");Tn($g,"onAnimationIteration");Tn(Zg,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Jg,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function np(t,e,i){var r=t.type||"unknown-event";t.currentTarget=i,B_(r,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],n=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;np(n,o,c),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;np(n,o,c),a=l}}}if(Dl)throw t=$u,Dl=!1,$u=null,t}function gt(t,e){var i=e[sd];i===void 0&&(i=e[sd]=new Set);var r=t+"__bubble";i.has(r)||(tv(e,t,2,!1),i.add(r))}function Hc(t,e,i){var r=0;e&&(r|=4),tv(i,t,r,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[Po]){t[Po]=!0,lg.forEach(function(i){i!=="selectionchange"&&(Vx.has(i)||Hc(i,!1,t),Hc(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,Hc("selectionchange",!1,e))}}function tv(t,e,i,r){switch(kg(e)){case 1:var n=ix;break;case 4:n=rx;break;default:n=Ph}i=n.bind(null,e,i,t),n=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?t.addEventListener(e,i,{capture:!0,passive:n}):t.addEventListener(e,i,!0):n!==void 0?t.addEventListener(e,i,{passive:n}):t.addEventListener(e,i,!1)}function Vc(t,e,i,r,n){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=Bn(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}Eg(function(){var c=a,h=Th(i),f=[];e:{var u=Qg.get(t);if(u!==void 0){var p=Dh,m=t;switch(t){case"keypress":if(ml(i)===0)break e;case"keydown":case"keyup":p=_x;break;case"focusin":m="focus",p=Uc;break;case"focusout":m="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bx;break;case Kg:case $g:case Zg:p=cx;break;case Jg:p=Mx;break;case"scroll":p=nx;break;case"wheel":p=wx;break;case"copy":case"cut":case"paste":p=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qf}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?u!==null?u+"Capture":null:u;S=[];for(var v=c,M;v!==null;){M=v;var y=M.stateNode;if(M.tag===5&&y!==null&&(M=y,d!==null&&(y=Hs(v,d),y!=null&&S.push(qs(v,y,M)))),g)break;v=v.return}0<S.length&&(u=new p(u,m,null,i,h),f.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&i!==Yu&&(m=i.relatedTarget||i.fromElement)&&(Bn(m)||m[Vr]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=i.relatedTarget||i.toElement,p=c,m=m?Bn(m):null,m!==null&&(g=ta(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(S=Xf,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=qf,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?u:wa(p),M=m==null?u:wa(m),u=new S(y,v+"leave",p,i,h),u.target=g,u.relatedTarget=M,y=null,Bn(h)===c&&(S=new S(d,v+"enter",m,i,h),S.target=M,S.relatedTarget=g,y=S),g=y,p&&m)t:{for(S=p,d=m,v=0,M=S;M;M=aa(M))v++;for(M=0,y=d;y;y=aa(y))M++;for(;0<v-M;)S=aa(S),v--;for(;0<M-v;)d=aa(d),M--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=aa(S),d=aa(d)}S=null}else S=null;p!==null&&ap(f,u,p,S,!1),m!==null&&g!==null&&ap(f,g,m,S,!0)}}e:{if(u=c?wa(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=Dx;else if(Zf(u))if(Wg)E=Ox;else{E=Ix;var w=Lx}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Ux);if(E&&(E=E(t,c))){Gg(f,E,i,h);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(w=c?wa(c):window,t){case"focusin":(Zf(w)||w.contentEditable==="true")&&(Ma=w,ed=c,Ds=null);break;case"focusout":Ds=ed=Ma=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,ip(f,i,h);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":ip(f,i,h)}var C;if(Ih)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Sa?Hg(t,i)&&(x="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(x="onCompositionStart");x&&(Bg&&i.locale!=="ko"&&(Sa||x!=="onCompositionStart"?x==="onCompositionEnd"&&Sa&&(C=zg()):(dn=h,Nh="value"in dn?dn.value:dn.textContent,Sa=!0)),w=Fl(c,x),0<w.length&&(x=new Yf(x,t,null,i,h),f.push({event:x,listeners:w}),C?x.data=C:(C=Vg(i),C!==null&&(x.data=C)))),(C=Cx?Rx(t,i):Ax(t,i))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(h=new Yf("onBeforeInput","beforeinput",null,i,h),f.push({event:h,listeners:c}),h.data=C))}ev(f,e)})}function qs(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Fl(t,e){for(var i=e+"Capture",r=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Hs(t,i),a!=null&&r.unshift(qs(t,a,n)),a=Hs(t,e),a!=null&&r.push(qs(t,a,n))),t=t.return}return r}function aa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ap(t,e,i,r,n){for(var a=e._reactName,s=[];i!==null&&i!==r;){var o=i,l=o.alternate,c=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&c!==null&&(o=c,n?(l=Hs(i,a),l!=null&&s.unshift(qs(i,l,o))):n||(l=Hs(i,a),l!=null&&s.push(qs(i,l,o)))),i=i.return}s.length!==0&&t.push({event:e,listeners:s})}var Gx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Wx,"")}function No(t,e,i){if(e=sp(e),sp(t)!==e&&i)throw Error(se(425))}function kl(){}var id=null,rd=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(Yx)}:ad;function Yx(t){setTimeout(function(){throw t})}function Gc(t,e){var i=e,r=0;do{var n=i.nextSibling;if(t.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(r===0){t.removeChild(n),Ws(e);return}r--}else i!=="$"&&i!=="$?"&&i!=="$!"||r++;i=n}while(i);Ws(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),xr="__reactFiber$"+ts,Ks="__reactProps$"+ts,Vr="__reactContainer$"+ts,sd="__reactEvents$"+ts,qx="__reactListeners$"+ts,Kx="__reactHandles$"+ts;function Bn(t){var e=t[xr];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Vr]||i[xr]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=lp(t);t!==null;){if(i=t[xr])return i;t=lp(t)}return e}t=i,i=t.parentNode}return null}function ho(t){return t=t[xr]||t[Vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function hc(t){return t[Ks]||null}var od=[],Ta=-1;function Cn(t){return{current:t}}function vt(t){0>Ta||(t.current=od[Ta],od[Ta]=null,Ta--)}function pt(t,e){Ta++,od[Ta]=t.current,t.current=e}var Sn={},hi=Cn(Sn),Ti=Cn(!1),Yn=Sn;function ja(t,e){var i=t.type.contextTypes;if(!i)return Sn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in i)n[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function Ci(t){return t=t.childContextTypes,t!=null}function zl(){vt(Ti),vt(hi)}function cp(t,e,i){if(hi.current!==Sn)throw Error(se(168));pt(hi,e),pt(Ti,i)}function iv(t,e,i){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return i;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(se(108,L_(t)||"Unknown",n));return Et({},i,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sn,Yn=hi.current,pt(hi,t),pt(Ti,Ti.current),!0}function up(t,e,i){var r=t.stateNode;if(!r)throw Error(se(169));i?(t=iv(t,e,Yn),r.__reactInternalMemoizedMergedChildContext=t,vt(Ti),vt(hi),pt(hi,t)):vt(Ti),pt(Ti,i)}var Ir=null,fc=!1,Wc=!1;function rv(t){Ir===null?Ir=[t]:Ir.push(t)}function $x(t){fc=!0,rv(t)}function Rn(){if(!Wc&&Ir!==null){Wc=!0;var t=0,e=ot;try{var i=Ir;for(ot=1;t<i.length;t++){var r=i[t];do r=r(!0);while(r!==null)}Ir=null,fc=!1}catch(n){throw Ir!==null&&(Ir=Ir.slice(t+1)),Rg(Ch,Rn),n}finally{ot=e,Wc=!1}}return null}var Ca=[],Ra=0,Hl=null,Vl=0,Gi=[],Wi=0,qn=null,Or=1,Fr="";function kn(t,e){Ca[Ra++]=Vl,Ca[Ra++]=Hl,Hl=t,Vl=e}function nv(t,e,i){Gi[Wi++]=Or,Gi[Wi++]=Fr,Gi[Wi++]=qn,qn=t;var r=Or;t=Fr;var n=32-or(r)-1;r&=~(1<<n),i+=1;var a=32-or(e)+n;if(30<a){var s=n-n%5;a=(r&(1<<s)-1).toString(32),r>>=s,n-=s,Or=1<<32-or(e)+n|i<<n|r,Fr=a+t}else Or=1<<a|i<<n|r,Fr=t}function Oh(t){t.return!==null&&(kn(t,1),nv(t,1,0))}function Fh(t){for(;t===Hl;)Hl=Ca[--Ra],Ca[Ra]=null,Vl=Ca[--Ra],Ca[Ra]=null;for(;t===qn;)qn=Gi[--Wi],Gi[Wi]=null,Fr=Gi[--Wi],Gi[Wi]=null,Or=Gi[--Wi],Gi[Wi]=null}var Fi=null,Oi=null,yt=!1,nr=null;function av(t,e){var i=Xi(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function dp(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fi=t,Oi=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fi=t,Oi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=qn!==null?{id:Or,overflow:Fr}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=Xi(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Fi=t,Oi=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(yt){var e=Oi;if(e){var i=e;if(!dp(t,e)){if(ld(t))throw Error(se(418));e=gn(i.nextSibling);var r=Fi;e&&dp(t,e)?av(r,i):(t.flags=t.flags&-4097|2,yt=!1,Fi=t)}}else{if(ld(t))throw Error(se(418));t.flags=t.flags&-4097|2,yt=!1,Fi=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fi=t}function Do(t){if(t!==Fi)return!1;if(!yt)return hp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=Oi)){if(ld(t))throw sv(),Error(se(418));for(;e;)av(t,e),e=gn(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Oi=gn(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Oi=null}}else Oi=Fi?gn(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=Oi;t;)t=gn(t.nextSibling)}function Xa(){Oi=Fi=null,yt=!1}function kh(t){nr===null?nr=[t]:nr.push(t)}var Zx=Yr.ReactCurrentBatchConfig;function cs(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(se(309));var r=i.stateNode}if(!r)throw Error(se(147,t));var n=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(se(284));if(!i._owner)throw Error(se(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function ov(t){function e(d,v){if(t){var M=d.deletions;M===null?(d.deletions=[v],d.flags|=16):M.push(v)}}function i(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function r(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function n(d,v){return d=yn(d,v),d.index=0,d.sibling=null,d}function a(d,v,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<v?(d.flags|=2,v):M):(d.flags|=2,v)):(d.flags|=1048576,v)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,M,y){return v===null||v.tag!==6?(v=Zc(M,d.mode,y),v.return=d,v):(v=n(v,M),v.return=d,v)}function l(d,v,M,y){var E=M.type;return E===ba?h(d,v,M.props.children,y,M.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&fp(E)===v.type)?(y=n(v,M.props),y.ref=cs(d,v,M),y.return=d,y):(y=Sl(M.type,M.key,M.props,null,d.mode,y),y.ref=cs(d,v,M),y.return=d,y)}function c(d,v,M,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Jc(M,d.mode,y),v.return=d,v):(v=n(v,M.children||[]),v.return=d,v)}function h(d,v,M,y,E){return v===null||v.tag!==7?(v=Xn(M,d.mode,y,E),v.return=d,v):(v=n(v,M),v.return=d,v)}function f(d,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Zc(""+v,d.mode,M),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case So:return M=Sl(v.type,v.key,v.props,null,d.mode,M),M.ref=cs(d,null,v),M.return=d,M;case ya:return v=Jc(v,d.mode,M),v.return=d,v;case an:var y=v._init;return f(d,y(v._payload),M)}if(Ss(v)||ns(v))return v=Xn(v,d.mode,M,null),v.return=d,v;Lo(d,v)}return null}function u(d,v,M,y){var E=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:o(d,v,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case So:return M.key===E?l(d,v,M,y):null;case ya:return M.key===E?c(d,v,M,y):null;case an:return E=M._init,u(d,v,E(M._payload),y)}if(Ss(M)||ns(M))return E!==null?null:h(d,v,M,y,null);Lo(d,M)}return null}function p(d,v,M,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(M)||null,o(v,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case So:return d=d.get(y.key===null?M:y.key)||null,l(v,d,y,E);case ya:return d=d.get(y.key===null?M:y.key)||null,c(v,d,y,E);case an:var w=y._init;return p(d,v,M,w(y._payload),E)}if(Ss(y)||ns(y))return d=d.get(M)||null,h(v,d,y,E,null);Lo(v,y)}return null}function m(d,v,M,y){for(var E=null,w=null,C=v,x=v=0,T=null;C!==null&&x<M.length;x++){C.index>x?(T=C,C=null):T=C.sibling;var A=u(d,C,M[x],y);if(A===null){C===null&&(C=T);break}t&&C&&A.alternate===null&&e(d,C),v=a(A,v,x),w===null?E=A:w.sibling=A,w=A,C=T}if(x===M.length)return i(d,C),yt&&kn(d,x),E;if(C===null){for(;x<M.length;x++)C=f(d,M[x],y),C!==null&&(v=a(C,v,x),w===null?E=C:w.sibling=C,w=C);return yt&&kn(d,x),E}for(C=r(d,C);x<M.length;x++)T=p(C,d,x,M[x],y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?x:T.key),v=a(T,v,x),w===null?E=T:w.sibling=T,w=T);return t&&C.forEach(function(U){return e(d,U)}),yt&&kn(d,x),E}function S(d,v,M,y){var E=ns(M);if(typeof E!="function")throw Error(se(150));if(M=E.call(M),M==null)throw Error(se(151));for(var w=E=null,C=v,x=v=0,T=null,A=M.next();C!==null&&!A.done;x++,A=M.next()){C.index>x?(T=C,C=null):T=C.sibling;var U=u(d,C,A.value,y);if(U===null){C===null&&(C=T);break}t&&C&&U.alternate===null&&e(d,C),v=a(U,v,x),w===null?E=U:w.sibling=U,w=U,C=T}if(A.done)return i(d,C),yt&&kn(d,x),E;if(C===null){for(;!A.done;x++,A=M.next())A=f(d,A.value,y),A!==null&&(v=a(A,v,x),w===null?E=A:w.sibling=A,w=A);return yt&&kn(d,x),E}for(C=r(d,C);!A.done;x++,A=M.next())A=p(C,d,x,A.value,y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),v=a(A,v,x),w===null?E=A:w.sibling=A,w=A);return t&&C.forEach(function(k){return e(d,k)}),yt&&kn(d,x),E}function g(d,v,M,y){if(typeof M=="object"&&M!==null&&M.type===ba&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case So:e:{for(var E=M.key,w=v;w!==null;){if(w.key===E){if(E=M.type,E===ba){if(w.tag===7){i(d,w.sibling),v=n(w,M.props.children),v.return=d,d=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&fp(E)===w.type){i(d,w.sibling),v=n(w,M.props),v.ref=cs(d,w,M),v.return=d,d=v;break e}i(d,w);break}else e(d,w);w=w.sibling}M.type===ba?(v=Xn(M.props.children,d.mode,y,M.key),v.return=d,d=v):(y=Sl(M.type,M.key,M.props,null,d.mode,y),y.ref=cs(d,v,M),y.return=d,d=y)}return s(d);case ya:e:{for(w=M.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){i(d,v.sibling),v=n(v,M.children||[]),v.return=d,d=v;break e}else{i(d,v);break}else e(d,v);v=v.sibling}v=Jc(M,d.mode,y),v.return=d,d=v}return s(d);case an:return w=M._init,g(d,v,w(M._payload),y)}if(Ss(M))return m(d,v,M,y);if(ns(M))return S(d,v,M,y);Lo(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(i(d,v.sibling),v=n(v,M),v.return=d,d=v):(i(d,v),v=Zc(M,d.mode,y),v.return=d,d=v),s(d)):i(d,v)}return g}var Ya=ov(!0),lv=ov(!1),Gl=Cn(null),Wl=null,Aa=null,zh=null;function Bh(){zh=Aa=Wl=null}function Hh(t){var e=Gl.current;vt(Gl),t._currentValue=e}function ud(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function za(t,e){Wl=t,zh=Aa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wi=!0),t.firstContext=null)}function Ki(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},Aa===null){if(Wl===null)throw Error(se(308));Aa=t,Wl.dependencies={lanes:0,firstContext:t}}else Aa=Aa.next=t;return e}var Hn=null;function Vh(t){Hn===null?Hn=[t]:Hn.push(t)}function cv(t,e,i,r){var n=e.interleaved;return n===null?(i.next=i,Vh(e)):(i.next=n.next,n.next=i),e.interleaved=i,Gr(t,r)}function Gr(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var sn=!1;function Gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,it&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,Gr(t,i)}return n=r.interleaved,n===null?(e.next=e,Vh(r)):(e.next=n.next,n.next=e),r.interleaved=e,Gr(t,i)}function gl(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Rh(t,i)}}function pp(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var n=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};a===null?n=a=s:a=a.next=s,i=i.next}while(i!==null);a===null?n=a=e:a=a.next=e}else n=a=e;i={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function jl(t,e,i,r){var n=t.updateQueue;sn=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;s=0,h=c=l=null,o=a;do{var u=o.lane,p=o.eventTime;if((r&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,S=o;switch(u=e,p=i,S.tag){case 1:if(m=S.payload,typeof m=="function"){f=m.call(p,f,u);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,u=typeof m=="function"?m.call(p,f,u):m,u==null)break e;f=Et({},f,u);break e;case 2:sn=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=n.effects,u===null?n.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,s|=u;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;u=o,o=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(!0);if(h===null&&(l=f),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=h,e=n.shared.interleaved,e!==null){n=e;do s|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);$n|=s,t.lanes=s,t.memoizedState=f}}function mp(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],n=r.callback;if(n!==null){if(r.callback=null,r=i,typeof n!="function")throw Error(se(191,n));n.call(r)}}}var fo={},Mr=Cn(fo),$s=Cn(fo),Zs=Cn(fo);function Vn(t){if(t===fo)throw Error(se(174));return t}function Wh(t,e){switch(pt(Zs,e),pt($s,t),pt(Mr,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}vt(Mr),pt(Mr,e)}function qa(){vt(Mr),vt($s),vt(Zs)}function dv(t){Vn(Zs.current);var e=Vn(Mr.current),i=Wu(e,t.type);e!==i&&(pt($s,t),pt(Mr,i))}function jh(t){$s.current===t&&(vt(Mr),vt($s))}var bt=Cn(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Xh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var vl=Yr.ReactCurrentDispatcher,Xc=Yr.ReactCurrentBatchConfig,Kn=0,St=null,Vt=null,qt=null,Yl=!1,Ls=!1,Js=0,Jx=0;function ii(){throw Error(se(321))}function Yh(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!dr(t[i],e[i]))return!1;return!0}function qh(t,e,i,r,n,a){if(Kn=a,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?iy:ry,t=i(r,n),Ls){a=0;do{if(Ls=!1,Js=0,25<=a)throw Error(se(301));a+=1,qt=Vt=null,e.updateQueue=null,vl.current=ny,t=i(r,n)}while(Ls)}if(vl.current=ql,e=Vt!==null&&Vt.next!==null,Kn=0,qt=Vt=St=null,Yl=!1,e)throw Error(se(300));return t}function Kh(){var t=Js!==0;return Js=0,t}function vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?St.memoizedState=qt=t:qt=qt.next=t,qt}function $i(){if(Vt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=qt===null?St.memoizedState:qt.next;if(e!==null)qt=e,Vt=t;else{if(t===null)throw Error(se(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},qt===null?St.memoizedState=qt=t:qt=qt.next=t}return qt}function Qs(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=$i(),i=e.queue;if(i===null)throw Error(se(311));i.lastRenderedReducer=t;var r=Vt,n=r.baseQueue,a=i.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}r.baseQueue=n=a,i.pending=null}if(n!==null){a=n.next,r=r.baseState;var o=s=null,l=null,c=a;do{var h=c.lane;if((Kn&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=r):l=l.next=f,St.lanes|=h,$n|=h}c=c.next}while(c!==null&&c!==a);l===null?s=r:l.next=o,dr(r,e.memoizedState)||(wi=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}if(t=i.interleaved,t!==null){n=t;do a=n.lane,St.lanes|=a,$n|=a,n=n.next;while(n!==t)}else n===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function qc(t){var e=$i(),i=e.queue;if(i===null)throw Error(se(311));i.lastRenderedReducer=t;var r=i.dispatch,n=i.pending,a=e.memoizedState;if(n!==null){i.pending=null;var s=n=n.next;do a=t(a,s.action),s=s.next;while(s!==n);dr(a,e.memoizedState)||(wi=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),i.lastRenderedState=a}return[a,r]}function hv(){}function fv(t,e){var i=St,r=$i(),n=e(),a=!dr(r.memoizedState,n);if(a&&(r.memoizedState=n,wi=!0),r=r.queue,$h(gv.bind(null,i,r,t),[t]),r.getSnapshot!==e||a||qt!==null&&qt.memoizedState.tag&1){if(i.flags|=2048,eo(9,mv.bind(null,i,r,n,e),void 0,null),Kt===null)throw Error(se(349));Kn&30||pv(i,e,n)}return n}function pv(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function mv(t,e,i,r){e.value=i,e.getSnapshot=r,vv(e)&&_v(t)}function gv(t,e,i){return i(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!dr(t,i)}catch{return!0}}function _v(t){var e=Gr(t,1);e!==null&&lr(e,t,1,-1)}function gp(t){var e=vr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=ty.bind(null,St,t),[e.memoizedState,t]}function eo(t,e,i,r){return t={tag:t,create:e,destroy:i,deps:r,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t)),t}function xv(){return $i().memoizedState}function _l(t,e,i,r){var n=vr();St.flags|=t,n.memoizedState=eo(1|e,i,void 0,r===void 0?null:r)}function pc(t,e,i,r){var n=$i();r=r===void 0?null:r;var a=void 0;if(Vt!==null){var s=Vt.memoizedState;if(a=s.destroy,r!==null&&Yh(r,s.deps)){n.memoizedState=eo(e,i,a,r);return}}St.flags|=t,n.memoizedState=eo(1|e,i,a,r)}function vp(t,e){return _l(8390656,8,t,e)}function $h(t,e){return pc(2048,8,t,e)}function yv(t,e){return pc(4,2,t,e)}function bv(t,e){return pc(4,4,t,e)}function Sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,i){return i=i!=null?i.concat([t]):null,pc(4,4,Sv.bind(null,e,t),i)}function Zh(){}function Ev(t,e){var i=$i();e=e===void 0?null:e;var r=i.memoizedState;return r!==null&&e!==null&&Yh(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function wv(t,e){var i=$i();e=e===void 0?null:e;var r=i.memoizedState;return r!==null&&e!==null&&Yh(e,r[1])?r[0]:(t=t(),i.memoizedState=[t,e],t)}function Tv(t,e,i){return Kn&21?(dr(i,e)||(i=Ng(),St.lanes|=i,$n|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wi=!0),t.memoizedState=i)}function Qx(t,e){var i=ot;ot=i!==0&&4>i?i:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{ot=i,Xc.transition=r}}function Cv(){return $i().memoizedState}function ey(t,e,i){var r=xn(t);if(i={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null},Rv(t))Av(e,i);else if(i=cv(t,e,i,r),i!==null){var n=vi();lr(i,t,r,n),Pv(i,e,r)}}function ty(t,e,i){var r=xn(t),n={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Av(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,i);if(n.hasEagerState=!0,n.eagerState=o,dr(o,s)){var l=e.interleaved;l===null?(n.next=n,Vh(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}i=cv(t,e,n,r),i!==null&&(n=vi(),lr(i,t,r,n),Pv(i,e,r))}}function Rv(t){var e=t.alternate;return t===St||e!==null&&e===St}function Av(t,e){Ls=Yl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Pv(t,e,i){if(i&4194240){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Rh(t,i)}}var ql={readContext:Ki,useCallback:ii,useContext:ii,useEffect:ii,useImperativeHandle:ii,useInsertionEffect:ii,useLayoutEffect:ii,useMemo:ii,useReducer:ii,useRef:ii,useState:ii,useDebugValue:ii,useDeferredValue:ii,useTransition:ii,useMutableSource:ii,useSyncExternalStore:ii,useId:ii,unstable_isNewReconciler:!1},iy={readContext:Ki,useCallback:function(t,e){return vr().memoizedState=[t,e===void 0?null:e],t},useContext:Ki,useEffect:vp,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,_l(4194308,4,Sv.bind(null,e,t),i)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var i=vr();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var r=vr();return e=i!==void 0?i(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ey.bind(null,St,t),[r.memoizedState,t]},useRef:function(t){var e=vr();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:Zh,useDeferredValue:function(t){return vr().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=Qx.bind(null,t[1]),vr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var r=St,n=vr();if(yt){if(i===void 0)throw Error(se(407));i=i()}else{if(i=e(),Kt===null)throw Error(se(349));Kn&30||pv(r,e,i)}n.memoizedState=i;var a={value:i,getSnapshot:e};return n.queue=a,vp(gv.bind(null,r,a,t),[t]),r.flags|=2048,eo(9,mv.bind(null,r,a,i,e),void 0,null),i},useId:function(){var t=vr(),e=Kt.identifierPrefix;if(yt){var i=Fr,r=Or;i=(r&~(1<<32-or(r)-1)).toString(32)+i,e=":"+e+"R"+i,i=Js++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=Jx++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ry={readContext:Ki,useCallback:Ev,useContext:Ki,useEffect:$h,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:bv,useMemo:wv,useReducer:Yc,useRef:xv,useState:function(){return Yc(Qs)},useDebugValue:Zh,useDeferredValue:function(t){var e=$i();return Tv(e,Vt.memoizedState,t)},useTransition:function(){var t=Yc(Qs)[0],e=$i().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Cv,unstable_isNewReconciler:!1},ny={readContext:Ki,useCallback:Ev,useContext:Ki,useEffect:$h,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:bv,useMemo:wv,useReducer:qc,useRef:xv,useState:function(){return qc(Qs)},useDebugValue:Zh,useDeferredValue:function(t){var e=$i();return Vt===null?e.memoizedState=t:Tv(e,Vt.memoizedState,t)},useTransition:function(){var t=qc(Qs)[0],e=$i().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Cv,unstable_isNewReconciler:!1};function ir(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function dd(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:Et({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var mc={isMounted:function(t){return(t=t._reactInternals)?ta(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var r=vi(),n=xn(t),a=kr(r,n);a.payload=e,i!=null&&(a.callback=i),e=vn(t,a,n),e!==null&&(lr(e,t,n,r),gl(e,t,n))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=vi(),n=xn(t),a=kr(r,n);a.tag=1,a.payload=e,i!=null&&(a.callback=i),e=vn(t,a,n),e!==null&&(lr(e,t,n,r),gl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=vi(),r=xn(t),n=kr(i,r);n.tag=2,e!=null&&(n.callback=e),e=vn(t,n,r),e!==null&&(lr(e,t,r,i),gl(e,t,r))}};function _p(t,e,i,r,n,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,s):e.prototype&&e.prototype.isPureReactComponent?!Xs(i,r)||!Xs(n,a):!0}function Nv(t,e,i){var r=!1,n=Sn,a=e.contextType;return typeof a=="object"&&a!==null?a=Ki(a):(n=Ci(e)?Yn:hi.current,r=e.contextTypes,a=(r=r!=null)?ja(t,n):Sn),e=new e(i,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function xp(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function hd(t,e,i,r){var n=t.stateNode;n.props=i,n.state=t.memoizedState,n.refs={},Gh(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=Ki(a):(a=Ci(e)?Yn:hi.current,n.context=ja(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(dd(t,e,a,i),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&mc.enqueueReplaceState(n,n.state,null),jl(t,i,n,r),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function Ka(t,e){try{var i="",r=e;do i+=D_(r),r=r.return;while(r);var n=i}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Kc(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var ay=typeof WeakMap=="function"?WeakMap:Map;function Dv(t,e,i){i=kr(-1,i),i.tag=3,i.payload={element:null};var r=e.value;return i.callback=function(){$l||($l=!0,Sd=r),fd(t,e)},i}function Lv(t,e,i){i=kr(-1,i),i.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;i.payload=function(){return r(n)},i.callback=function(){fd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(i.callback=function(){fd(t,e),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),i}function yp(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new ay;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(i)||(n.add(i),t=xy.bind(null,t,e,i),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,i,r,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=kr(-1,1),e.tag=2,vn(i,e,1))),i.lanes|=1),t)}var sy=Yr.ReactCurrentOwner,wi=!1;function gi(t,e,i,r){e.child=t===null?lv(e,null,i,r):Ya(e,t.child,i,r)}function Mp(t,e,i,r,n){i=i.render;var a=e.ref;return za(e,n),r=qh(t,e,i,r,a,n),i=Kh(),t!==null&&!wi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Wr(t,e,n)):(yt&&i&&Oh(e),e.flags|=1,gi(t,e,r,n),e.child)}function Ep(t,e,i,r,n){if(t===null){var a=i.type;return typeof a=="function"&&!sf(a)&&a.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=a,Iv(t,e,a,r,n)):(t=Sl(i.type,null,r,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var s=a.memoizedProps;if(i=i.compare,i=i!==null?i:Xs,i(s,r)&&t.ref===e.ref)return Wr(t,e,n)}return e.flags|=1,t=yn(a,r),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,i,r,n){if(t!==null){var a=t.memoizedProps;if(Xs(a,r)&&t.ref===e.ref)if(wi=!1,e.pendingProps=r=a,(t.lanes&n)!==0)t.flags&131072&&(wi=!0);else return e.lanes=t.lanes,Wr(t,e,n)}return pd(t,e,i,r,n)}function Uv(t,e,i){var r=e.pendingProps,n=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Na,Li),Li|=i;else{if(!(i&1073741824))return t=a!==null?a.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Na,Li),Li|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:i,pt(Na,Li),Li|=r}else a!==null?(r=a.baseLanes|i,e.memoizedState=null):r=i,pt(Na,Li),Li|=r;return gi(t,e,n,i),e.child}function Ov(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,i,r,n){var a=Ci(i)?Yn:hi.current;return a=ja(e,a),za(e,n),i=qh(t,e,i,r,a,n),r=Kh(),t!==null&&!wi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Wr(t,e,n)):(yt&&r&&Oh(e),e.flags|=1,gi(t,e,i,n),e.child)}function wp(t,e,i,r,n){if(Ci(i)){var a=!0;Bl(e)}else a=!1;if(za(e,n),e.stateNode===null)xl(t,e),Nv(e,i,r),hd(e,i,r,n),r=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=i.contextType;typeof c=="object"&&c!==null?c=Ki(c):(c=Ci(i)?Yn:hi.current,c=ja(e,c));var h=i.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==c)&&xp(e,s,r,c),sn=!1;var u=e.memoizedState;s.state=u,jl(e,r,s,n),l=e.memoizedState,o!==r||u!==l||Ti.current||sn?(typeof h=="function"&&(dd(e,i,h,r),l=e.memoizedState),(o=sn||_p(e,i,o,r,u,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,uv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ir(e.type,o),s.props=c,f=e.pendingProps,u=s.context,l=i.contextType,typeof l=="object"&&l!==null?l=Ki(l):(l=Ci(i)?Yn:hi.current,l=ja(e,l));var p=i.getDerivedStateFromProps;(h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||u!==l)&&xp(e,s,r,l),sn=!1,u=e.memoizedState,s.state=u,jl(e,r,s,n);var m=e.memoizedState;o!==f||u!==m||Ti.current||sn?(typeof p=="function"&&(dd(e,i,p,r),m=e.memoizedState),(c=sn||_p(e,i,c,r,u,m,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),s.props=r,s.state=m,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,i,r,a,n)}function md(t,e,i,r,n,a){Ov(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return n&&up(e,i,!1),Wr(t,e,a);r=e.stateNode,sy.current=e;var o=s&&typeof i.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ya(e,t.child,null,a),e.child=Ya(e,null,o,a)):gi(t,e,o,a),e.memoizedState=r.state,n&&up(e,i,!0),e.child}function Fv(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),Wh(t,e.containerInfo)}function Tp(t,e,i,r,n){return Xa(),kh(n),e.flags|=256,gi(t,e,i,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,i){var r=e.pendingProps,n=bt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(n&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),pt(bt,n&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,a?(r=e.mode,a=e.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=_c(s,r,0,null),t=Xn(t,r,i,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=vd(i),e.memoizedState=gd,t):Jh(e,s));if(n=t.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return oy(t,e,s,r,o,n,i);if(a){a=r.fallback,s=e.mode,n=t.child,o=n.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yn(n,l),r.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=yn(o,a):(a=Xn(a,s,i,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,s=t.child.memoizedState,s=s===null?vd(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~i,e.memoizedState=gd,r}return a=t.child,t=a.sibling,r=yn(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=i),r.return=e,r.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,i,r){return r!==null&&kh(r),Ya(e,t.child,null,i),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oy(t,e,i,r,n,a,s){if(i)return e.flags&256?(e.flags&=-257,r=Kc(Error(se(422))),Io(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,n=e.mode,r=_c({mode:"visible",children:r.children},n,0,null),a=Xn(a,n,s,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Ya(e,t.child,null,s),e.child.memoizedState=vd(s),e.memoizedState=gd,a);if(!(e.mode&1))return Io(t,e,s,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(se(419)),r=Kc(a,r,void 0),Io(t,e,s,r)}if(o=(s&t.childLanes)!==0,wi||o){if(r=Kt,r!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|s)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,Gr(t,n),lr(r,t,n,-1))}return af(),r=Kc(Error(se(421))),Io(t,e,s,r)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=yy.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,Oi=gn(n.nextSibling),Fi=e,yt=!0,nr=null,t!==null&&(Gi[Wi++]=Or,Gi[Wi++]=Fr,Gi[Wi++]=qn,Or=t.id,Fr=t.overflow,qn=e),e=Jh(e,r.children),e.flags|=4096,e)}function Cp(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ud(t.return,e,i)}function $c(t,e,i,r,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=i,a.tailMode=n)}function zv(t,e,i){var r=e.pendingProps,n=r.revealOrder,a=r.tail;if(gi(t,e,r.children,i),r=bt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,i,e);else if(t.tag===19)Cp(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pt(bt,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(i=e.child,n=null;i!==null;)t=i.alternate,t!==null&&Xl(t)===null&&(n=i),i=i.sibling;i=n,i===null?(n=e.child,e.child=null):(n=i.sibling,i.sibling=null),$c(e,!1,n,i,a);break;case"backwards":for(i=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Xl(t)===null){e.child=n;break}t=n.sibling,n.sibling=i,i=n,n=t}$c(e,!0,i,null,a);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wr(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),$n|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,i=yn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=yn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function ly(t,e,i){switch(e.tag){case 3:Fv(e),Xa();break;case 5:dv(e);break;case 1:Ci(e.type)&&Bl(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;pt(Gl,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pt(bt,bt.current&1),e.flags|=128,null):i&e.child.childLanes?kv(t,e,i):(pt(bt,bt.current&1),t=Wr(t,e,i),t!==null?t.sibling:null);pt(bt,bt.current&1);break;case 19:if(r=(i&e.childLanes)!==0,t.flags&128){if(r)return zv(t,e,i);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),pt(bt,bt.current),r)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,i)}return Wr(t,e,i)}var Bv,_d,Hv,Vv;Bv=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};_d=function(){};Hv=function(t,e,i,r){var n=t.memoizedProps;if(n!==r){t=e.stateNode,Vn(Mr.current);var a=null;switch(i){case"input":n=Bu(t,n),r=Bu(t,r),a=[];break;case"select":n=Et({},n,{value:void 0}),r=Et({},r,{value:void 0}),a=[];break;case"textarea":n=Gu(t,n),r=Gu(t,r),a=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}ju(i,r);var s;i=null;for(c in n)if(!r.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var o=n[c];for(s in o)o.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zs.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(o=n!=null?n[c]:void 0,r.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(i||(i={}),i[s]=l[s])}else i||(a||(a=[]),a.push(c,i)),i=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}i&&(a=a||[]).push("style",i);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Vv=function(t,e,i,r){i!==r&&(e.flags|=4)};function us(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ri(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var n=t.child;n!==null;)i|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)i|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function cy(t,e,i){var r=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ri(e),null;case 1:return Ci(e.type)&&zl(),ri(e),null;case 3:return r=e.stateNode,qa(),vt(Ti),vt(hi),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Do(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nr!==null&&(wd(nr),nr=null))),_d(t,e),ri(e),null;case 5:jh(e);var n=Vn(Zs.current);if(i=e.type,t!==null&&e.stateNode!=null)Hv(t,e,i,r,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(se(166));return ri(e),null}if(t=Vn(Mr.current),Do(e)){r=e.stateNode,i=e.type;var a=e.memoizedProps;switch(r[xr]=e,r[Ks]=a,t=(e.mode&1)!==0,i){case"dialog":gt("cancel",r),gt("close",r);break;case"iframe":case"object":case"embed":gt("load",r);break;case"video":case"audio":for(n=0;n<Es.length;n++)gt(Es[n],r);break;case"source":gt("error",r);break;case"img":case"image":case"link":gt("error",r),gt("load",r);break;case"details":gt("toggle",r);break;case"input":Of(r,a),gt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},gt("invalid",r);break;case"textarea":kf(r,a),gt("invalid",r)}ju(i,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&No(r.textContent,o,t),n=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&No(r.textContent,o,t),n=["children",""+o]):zs.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&gt("scroll",r)}switch(i){case"input":Mo(r),Ff(r,a,!0);break;case"textarea":Mo(r),zf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=kl)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(i,{is:r.is}):(t=s.createElement(i),i==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,i),t[xr]=e,t[Ks]=r,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Xu(i,r),i){case"dialog":gt("cancel",t),gt("close",t),n=r;break;case"iframe":case"object":case"embed":gt("load",t),n=r;break;case"video":case"audio":for(n=0;n<Es.length;n++)gt(Es[n],t);n=r;break;case"source":gt("error",t),n=r;break;case"img":case"image":case"link":gt("error",t),gt("load",t),n=r;break;case"details":gt("toggle",t),n=r;break;case"input":Of(t,r),n=Bu(t,r),gt("invalid",t);break;case"option":n=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},n=Et({},r,{value:void 0}),gt("invalid",t);break;case"textarea":kf(t,r),n=Gu(t,r),gt("invalid",t);break;default:n=r}ju(i,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?xg(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):a==="children"?typeof l=="string"?(i!=="textarea"||l!=="")&&Bs(t,l):typeof l=="number"&&Bs(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(zs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&gt("scroll",t):l!=null&&Sh(t,a,l,s))}switch(i){case"input":Mo(t),Ff(t,r,!1);break;case"textarea":Mo(t),zf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Ua(t,!!r.multiple,a,!1):r.defaultValue!=null&&Ua(t,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=kl)}switch(i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ri(e),null;case 6:if(t&&e.stateNode!=null)Vv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(se(166));if(i=Vn(Zs.current),Vn(Mr.current),Do(e)){if(r=e.stateNode,i=e.memoizedProps,r[xr]=e,(a=r.nodeValue!==i)&&(t=Fi,t!==null))switch(t.tag){case 3:No(r.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,i,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(i.nodeType===9?i:i.ownerDocument).createTextNode(r),r[xr]=e,e.stateNode=r}return ri(e),null;case 13:if(vt(bt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Oi!==null&&e.mode&1&&!(e.flags&128))sv(),Xa(),e.flags|=98560,a=!1;else if(a=Do(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(se(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[xr]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ri(e),a=!1}else nr!==null&&(wd(nr),nr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Gt===0&&(Gt=3):af())),e.updateQueue!==null&&(e.flags|=4),ri(e),null);case 4:return qa(),_d(t,e),t===null&&Ys(e.stateNode.containerInfo),ri(e),null;case 10:return Hh(e.type._context),ri(e),null;case 17:return Ci(e.type)&&zl(),ri(e),null;case 19:if(vt(bt),a=e.memoizedState,a===null)return ri(e),null;if(r=(e.flags&128)!==0,s=a.rendering,s===null)if(r)us(a,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Xl(t),s!==null){for(e.flags|=128,us(a,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=i,i=e.child;i!==null;)a=i,t=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return pt(bt,bt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Lt()>$a&&(e.flags|=128,r=!0,us(a,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(s),t!==null){if(e.flags|=128,r=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!yt)return ri(e),null}else 2*Lt()-a.renderingStartTime>$a&&i!==1073741824&&(e.flags|=128,r=!0,us(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(i=a.last,i!==null?i.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Lt(),e.sibling=null,i=bt.current,pt(bt,r?i&1|2:i&1),e):(ri(e),null);case 22:case 23:return nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Li&1073741824&&(ri(e),e.subtreeFlags&6&&(e.flags|=8192)):ri(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function uy(t,e){switch(Fh(e),e.tag){case 1:return Ci(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qa(),vt(Ti),vt(hi),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(vt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Xa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(bt),null;case 4:return qa(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Uo=!1,si=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Pa(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(r){Ct(t,e,r)}else i.current=null}function Gv(t,e,i){try{i()}catch(r){Ct(t,e,r)}}var Rp=!1;function hy(t,e){if(id=Ul,t=Yg(),Uh(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var n=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break e}var s=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==i||n!==0&&f.nodeType!==3||(o=s+n),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===i&&++c===n&&(o=s),u===a&&++h===r&&(l=s),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}i=o===-1||l===-1?null:{start:o,end:l}}else i=null}i=i||{start:0,end:0}}else i=null;for(rd={focusedElem:t,selectionRange:i},Ul=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,g=m.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:ir(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Ct(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=Rp,Rp=!1,m}function Is(t,e,i){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&Gv(e,i,a)}n=n.next}while(n!==r)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var r=i.create;i.destroy=r()}i=i.next}while(i!==e)}}function xd(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xr],delete e[Ks],delete e[sd],delete e[qx],delete e[Kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,i),t=t.sibling;t!==null;)yd(t,e,i),t=t.sibling}function bd(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,i),t=t.sibling;t!==null;)bd(t,e,i),t=t.sibling}var Zt=null,rr=!1;function Jr(t,e,i){for(i=i.child;i!==null;)Xv(t,e,i),i=i.sibling}function Xv(t,e,i){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(lc,i)}catch{}switch(i.tag){case 5:si||Pa(i,e);case 6:var r=Zt,n=rr;Zt=null,Jr(t,e,i),Zt=r,rr=n,Zt!==null&&(rr?(t=Zt,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Zt.removeChild(i.stateNode));break;case 18:Zt!==null&&(rr?(t=Zt,i=i.stateNode,t.nodeType===8?Gc(t.parentNode,i):t.nodeType===1&&Gc(t,i),Ws(t)):Gc(Zt,i.stateNode));break;case 4:r=Zt,n=rr,Zt=i.stateNode.containerInfo,rr=!0,Jr(t,e,i),Zt=r,rr=n;break;case 0:case 11:case 14:case 15:if(!si&&(r=i.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Gv(i,e,s),n=n.next}while(n!==r)}Jr(t,e,i);break;case 1:if(!si&&(Pa(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=i.memoizedProps,r.state=i.memoizedState,r.componentWillUnmount()}catch(o){Ct(i,e,o)}Jr(t,e,i);break;case 21:Jr(t,e,i);break;case 22:i.mode&1?(si=(r=si)||i.memoizedState!==null,Jr(t,e,i),si=r):Jr(t,e,i);break;default:Jr(t,e,i)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new dy),e.forEach(function(r){var n=by.bind(null,t,r);i.has(r)||(i.add(r),r.then(n,n))})}}function Ji(t,e){var i=e.deletions;if(i!==null)for(var r=0;r<i.length;r++){var n=i[r];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,rr=!1;break e;case 3:Zt=o.stateNode.containerInfo,rr=!0;break e;case 4:Zt=o.stateNode.containerInfo,rr=!0;break e}o=o.return}if(Zt===null)throw Error(se(160));Xv(a,s,n),Zt=null,rr=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){Ct(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ji(e,t),fr(t),r&4){try{Is(3,t,t.return),gc(3,t)}catch(S){Ct(t,t.return,S)}try{Is(5,t,t.return)}catch(S){Ct(t,t.return,S)}}break;case 1:Ji(e,t),fr(t),r&512&&i!==null&&Pa(i,i.return);break;case 5:if(Ji(e,t),fr(t),r&512&&i!==null&&Pa(i,i.return),t.flags&32){var n=t.stateNode;try{Bs(n,"")}catch(S){Ct(t,t.return,S)}}if(r&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,s=i!==null?i.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&pg(n,a),Xu(o,s);var c=Xu(o,a);for(s=0;s<l.length;s+=2){var h=l[s],f=l[s+1];h==="style"?xg(n,f):h==="dangerouslySetInnerHTML"?vg(n,f):h==="children"?Bs(n,f):Sh(n,h,f,c)}switch(o){case"input":Hu(n,a);break;case"textarea":mg(n,a);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ua(n,!!a.multiple,p,!1):u!==!!a.multiple&&(a.defaultValue!=null?Ua(n,!!a.multiple,a.defaultValue,!0):Ua(n,!!a.multiple,a.multiple?[]:"",!1))}n[Ks]=a}catch(S){Ct(t,t.return,S)}}break;case 6:if(Ji(e,t),fr(t),r&4){if(t.stateNode===null)throw Error(se(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(S){Ct(t,t.return,S)}}break;case 3:if(Ji(e,t),fr(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Ws(e.containerInfo)}catch(S){Ct(t,t.return,S)}break;case 4:Ji(e,t),fr(t);break;case 13:Ji(e,t),fr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(tf=Lt())),r&4&&Pp(t);break;case 22:if(h=i!==null&&i.memoizedState!==null,t.mode&1?(si=(c=si)||h,Ji(e,t),si=c):Ji(e,t),fr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(f=Se=h;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:Is(4,u,u.return);break;case 1:Pa(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){r=u,i=u.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(S){Ct(r,i,S)}}break;case 5:Pa(u,u.return);break;case 22:if(u.memoizedState!==null){Dp(f);continue}}p!==null?(p.return=u,Se=p):Dp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{n=f.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=_g("display",s))}catch(S){Ct(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ct(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ji(e,t),fr(t),r&4&&Pp(t);break;case 21:break;default:Ji(e,t),fr(t)}}function fr(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(jv(i)){var r=i;break e}i=i.return}throw Error(se(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(Bs(n,""),r.flags&=-33);var a=Ap(t);bd(t,a,n);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Ap(t);yd(t,o,s);break;default:throw Error(se(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fy(t,e,i){Se=t,qv(t)}function qv(t,e,i){for(var r=(t.mode&1)!==0;Se!==null;){var n=Se,a=n.child;if(n.tag===22&&r){var s=n.memoizedState!==null||Uo;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||si;o=Uo;var c=si;if(Uo=s,(si=l)&&!c)for(Se=n;Se!==null;)s=Se,l=s.child,s.tag===22&&s.memoizedState!==null?Lp(n):l!==null?(l.return=s,Se=l):Lp(n);for(;a!==null;)Se=a,qv(a),a=a.sibling;Se=n,Uo=o,si=c}Np(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,Se=a):Np(t)}}function Np(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:si||gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!si)if(i===null)r.componentDidMount();else{var n=e.elementType===e.type?i.memoizedProps:ir(e.type,i.memoizedProps);r.componentDidUpdate(n,i.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&mp(e,a,r);break;case 3:var s=e.updateQueue;if(s!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}mp(e,s,i)}break;case 5:var o=e.stateNode;if(i===null&&e.flags&4){i=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break;case"img":l.src&&(i.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ws(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}si||e.flags&512&&xd(e)}catch(u){Ct(e,e.return,u)}}if(e===t){Se=null;break}if(i=e.sibling,i!==null){i.return=e.return,Se=i;break}Se=e.return}}function Dp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var i=e.sibling;if(i!==null){i.return=e.return,Se=i;break}Se=e.return}}function Lp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{gc(4,e)}catch(l){Ct(e,i,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(l){Ct(e,n,l)}}var a=e.return;try{xd(e)}catch(l){Ct(e,a,l)}break;case 5:var s=e.return;try{xd(e)}catch(l){Ct(e,s,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var py=Math.ceil,Kl=Yr.ReactCurrentDispatcher,Qh=Yr.ReactCurrentOwner,Yi=Yr.ReactCurrentBatchConfig,it=0,Kt=null,zt=null,Qt=0,Li=0,Na=Cn(0),Gt=0,to=null,$n=0,vc=0,ef=0,Us=null,Ei=null,tf=0,$a=1/0,Lr=null,$l=!1,Sd=null,_n=null,Oo=!1,hn=null,Zl=0,Os=0,Md=null,yl=-1,bl=0;function vi(){return it&6?Lt():yl!==-1?yl:yl=Lt()}function xn(t){return t.mode&1?it&2&&Qt!==0?Qt&-Qt:Zx.transition!==null?(bl===0&&(bl=Ng()),bl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function lr(t,e,i,r){if(50<Os)throw Os=0,Md=null,Error(se(185));co(t,i,r),(!(it&2)||t!==Kt)&&(t===Kt&&(!(it&2)&&(vc|=i),Gt===4&&cn(t,Qt)),Ri(t,r),i===1&&it===0&&!(e.mode&1)&&($a=Lt()+500,fc&&Rn()))}function Ri(t,e){var i=t.callbackNode;Z_(t,e);var r=Il(t,t===Kt?Qt:0);if(r===0)i!==null&&Vf(i),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(i!=null&&Vf(i),e===1)t.tag===0?$x(Ip.bind(null,t)):rv(Ip.bind(null,t)),Xx(function(){!(it&6)&&Rn()}),i=null;else{switch(Dg(r)){case 1:i=Ch;break;case 4:i=Ag;break;case 16:i=Ll;break;case 536870912:i=Pg;break;default:i=Ll}i=i0(i,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Kv(t,e){if(yl=-1,bl=0,it&6)throw Error(se(327));var i=t.callbackNode;if(Ba()&&t.callbackNode!==i)return null;var r=Il(t,t===Kt?Qt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jl(t,r);else{e=r;var n=it;it|=2;var a=Zv();(Kt!==t||Qt!==e)&&(Lr=null,$a=Lt()+500,jn(t,e));do try{vy();break}catch(o){$v(t,o)}while(!0);Bh(),Kl.current=a,it=n,zt!==null?e=0:(Kt=null,Qt=0,e=Gt)}if(e!==0){if(e===2&&(n=Zu(t),n!==0&&(r=n,e=Ed(t,n))),e===1)throw i=to,jn(t,0),cn(t,r),Ri(t,Lt()),i;if(e===6)cn(t,r);else{if(n=t.current.alternate,!(r&30)&&!my(n)&&(e=Jl(t,r),e===2&&(a=Zu(t),a!==0&&(r=a,e=Ed(t,a))),e===1))throw i=to,jn(t,0),cn(t,r),Ri(t,Lt()),i;switch(t.finishedWork=n,t.finishedLanes=r,e){case 0:case 1:throw Error(se(345));case 2:zn(t,Ei,Lr);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=tf+500-Lt(),10<e)){if(Il(t,0)!==0)break;if(n=t.suspendedLanes,(n&r)!==r){vi(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=ad(zn.bind(null,t,Ei,Lr),e);break}zn(t,Ei,Lr);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,n=-1;0<r;){var s=31-or(r);a=1<<s,s=e[s],s>n&&(n=s),r&=~a}if(r=n,r=Lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*py(r/1960))-r,10<r){t.timeoutHandle=ad(zn.bind(null,t,Ei,Lr),r);break}zn(t,Ei,Lr);break;case 5:zn(t,Ei,Lr);break;default:throw Error(se(329))}}}return Ri(t,Lt()),t.callbackNode===i?Kv.bind(null,t):null}function Ed(t,e){var i=Us;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=Ei,Ei=i,e!==null&&wd(e)),t}function wd(t){Ei===null?Ei=t:Ei.push.apply(Ei,t)}function my(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var r=0;r<i.length;r++){var n=i[r],a=n.getSnapshot;n=n.value;try{if(!dr(a(),n))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~ef,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-or(e),r=1<<i;t[i]=-1,e&=~r}}function Ip(t){if(it&6)throw Error(se(327));Ba();var e=Il(t,0);if(!(e&1))return Ri(t,Lt()),null;var i=Jl(t,e);if(t.tag!==0&&i===2){var r=Zu(t);r!==0&&(e=r,i=Ed(t,r))}if(i===1)throw i=to,jn(t,0),cn(t,e),Ri(t,Lt()),i;if(i===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,Ei,Lr),Ri(t,Lt()),null}function rf(t,e){var i=it;it|=1;try{return t(e)}finally{it=i,it===0&&($a=Lt()+500,fc&&Rn())}}function Zn(t){hn!==null&&hn.tag===0&&!(it&6)&&Ba();var e=it;it|=1;var i=Yi.transition,r=ot;try{if(Yi.transition=null,ot=1,t)return t()}finally{ot=r,Yi.transition=i,it=e,!(it&6)&&Rn()}}function nf(){Li=Na.current,vt(Na)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,jx(i)),zt!==null)for(i=zt.return;i!==null;){var r=i;switch(Fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:qa(),vt(Ti),vt(hi),Xh();break;case 5:jh(r);break;case 4:qa();break;case 13:vt(bt);break;case 19:vt(bt);break;case 10:Hh(r.type._context);break;case 22:case 23:nf()}i=i.return}if(Kt=t,zt=t=yn(t.current,null),Qt=Li=e,Gt=0,to=null,ef=vc=$n=0,Ei=Us=null,Hn!==null){for(e=0;e<Hn.length;e++)if(i=Hn[e],r=i.interleaved,r!==null){i.interleaved=null;var n=r.next,a=i.pending;if(a!==null){var s=a.next;a.next=n,r.next=s}i.pending=r}Hn=null}return t}function $v(t,e){do{var i=zt;try{if(Bh(),vl.current=ql,Yl){for(var r=St.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}Yl=!1}if(Kn=0,qt=Vt=St=null,Ls=!1,Js=0,Qh.current=null,i===null||i.return===null){Gt=1,to=e,zt=null;break}e:{var a=t,s=i.return,o=i,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=bp(s);if(p!==null){p.flags&=-257,Sp(p,s,o,a,e),p.mode&1&&yp(a,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var S=new Set;S.add(l),e.updateQueue=S}else m.add(l);break e}else{if(!(e&1)){yp(a,c,e),af();break e}l=Error(se(426))}}else if(yt&&o.mode&1){var g=bp(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Sp(g,s,o,a,e),kh(Ka(l,o));break e}}a=l=Ka(l,o),Gt!==4&&(Gt=2),Us===null?Us=[a]:Us.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=Dv(a,l,e);pp(a,d);break e;case 1:o=l;var v=a.type,M=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(_n===null||!_n.has(M)))){a.flags|=65536,e&=-e,a.lanes|=e;var y=Lv(a,o,e);pp(a,y);break e}}a=a.return}while(a!==null)}Qv(i)}catch(E){e=E,zt===i&&i!==null&&(zt=i=i.return);continue}break}while(!0)}function Zv(){var t=Kl.current;return Kl.current=ql,t===null?ql:t}function af(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||!($n&268435455)&&!(vc&268435455)||cn(Kt,Qt)}function Jl(t,e){var i=it;it|=2;var r=Zv();(Kt!==t||Qt!==e)&&(Lr=null,jn(t,e));do try{gy();break}catch(n){$v(t,n)}while(!0);if(Bh(),it=i,Kl.current=r,zt!==null)throw Error(se(261));return Kt=null,Qt=0,Gt}function gy(){for(;zt!==null;)Jv(zt)}function vy(){for(;zt!==null&&!V_();)Jv(zt)}function Jv(t){var e=t0(t.alternate,t,Li);t.memoizedProps=t.pendingProps,e===null?Qv(t):zt=e,Qh.current=null}function Qv(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=uy(i,e),i!==null){i.flags&=32767,zt=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(i=cy(i,e,Li),i!==null){zt=i;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function zn(t,e,i){var r=ot,n=Yi.transition;try{Yi.transition=null,ot=1,_y(t,e,i,r)}finally{Yi.transition=n,ot=r}return null}function _y(t,e,i,r){do Ba();while(hn!==null);if(it&6)throw Error(se(327));i=t.finishedWork;var n=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var a=i.lanes|i.childLanes;if(J_(t,a),t===Kt&&(zt=Kt=null,Qt=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Oo||(Oo=!0,i0(Ll,function(){return Ba(),null})),a=(i.flags&15990)!==0,i.subtreeFlags&15990||a){a=Yi.transition,Yi.transition=null;var s=ot;ot=1;var o=it;it|=4,Qh.current=null,hy(t,i),Yv(i,t),kx(rd),Ul=!!id,rd=id=null,t.current=i,fy(i),G_(),it=o,ot=s,Yi.transition=a}else t.current=i;if(Oo&&(Oo=!1,hn=t,Zl=n),a=t.pendingLanes,a===0&&(_n=null),X_(i.stateNode),Ri(t,Lt()),e!==null)for(r=t.onRecoverableError,i=0;i<e.length;i++)n=e[i],r(n.value,{componentStack:n.stack,digest:n.digest});if($l)throw $l=!1,t=Sd,Sd=null,t;return Zl&1&&t.tag!==0&&Ba(),a=t.pendingLanes,a&1?t===Md?Os++:(Os=0,Md=t):Os=0,Rn(),null}function Ba(){if(hn!==null){var t=Dg(Zl),e=Yi.transition,i=ot;try{if(Yi.transition=null,ot=16>t?16:t,hn===null)var r=!1;else{if(t=hn,hn=null,Zl=0,it&6)throw Error(se(331));var n=it;for(it|=4,Se=t.current;Se!==null;){var a=Se,s=a.child;if(Se.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:Is(8,h,a)}var f=h.child;if(f!==null)f.return=h,Se=f;else for(;Se!==null;){h=Se;var u=h.sibling,p=h.return;if(Wv(h),h===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var m=a.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Se=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,Se=s;else e:for(;Se!==null;){if(a=Se,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Is(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Se=d;break e}Se=a.return}}var v=t.current;for(Se=v;Se!==null;){s=Se;var M=s.child;if(s.subtreeFlags&2064&&M!==null)M.return=s,Se=M;else e:for(s=v;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gc(9,o)}}catch(E){Ct(o,o.return,E)}if(o===s){Se=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Se=y;break e}Se=o.return}}if(it=n,Rn(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(lc,t)}catch{}r=!0}return r}finally{ot=i,Yi.transition=e}}return!1}function Up(t,e,i){e=Ka(i,e),e=Dv(t,e,1),t=vn(t,e,1),e=vi(),t!==null&&(co(t,1,e),Ri(t,e))}function Ct(t,e,i){if(t.tag===3)Up(t,t,i);else for(;e!==null;){if(e.tag===3){Up(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){t=Ka(i,t),t=Lv(e,t,1),e=vn(e,t,1),t=vi(),e!==null&&(co(e,1,t),Ri(e,t));break}}e=e.return}}function xy(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),e=vi(),t.pingedLanes|=t.suspendedLanes&i,Kt===t&&(Qt&i)===i&&(Gt===4||Gt===3&&(Qt&130023424)===Qt&&500>Lt()-tf?jn(t,0):ef|=i),Ri(t,e)}function e0(t,e){e===0&&(t.mode&1?(e=To,To<<=1,!(To&130023424)&&(To=4194304)):e=1);var i=vi();t=Gr(t,e),t!==null&&(co(t,e,i),Ri(t,i))}function yy(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),e0(t,i)}function by(t,e){var i=0;switch(t.tag){case 13:var r=t.stateNode,n=t.memoizedState;n!==null&&(i=n.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(e),e0(t,i)}var t0;t0=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ti.current)wi=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return wi=!1,ly(t,e,i);wi=!!(t.flags&131072)}else wi=!1,yt&&e.flags&1048576&&nv(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xl(t,e),t=e.pendingProps;var n=ja(e,hi.current);za(e,i),n=qh(null,e,r,t,n,i);var a=Kh();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ci(r)?(a=!0,Bl(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Gh(e),n.updater=mc,e.stateNode=n,n._reactInternals=e,hd(e,r,t,i),e=md(null,e,r,!0,a,i)):(e.tag=0,yt&&a&&Oh(e),gi(null,e,n,i),e=e.child),e;case 16:r=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=My(r),t=ir(r,t),n){case 0:e=pd(null,e,r,t,i);break e;case 1:e=wp(null,e,r,t,i);break e;case 11:e=Mp(null,e,r,t,i);break e;case 14:e=Ep(null,e,r,ir(r.type,t),i);break e}throw Error(se(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:ir(r,n),pd(t,e,r,n,i);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:ir(r,n),wp(t,e,r,n,i);case 3:e:{if(Fv(e),t===null)throw Error(se(387));r=e.pendingProps,a=e.memoizedState,n=a.element,uv(t,e),jl(e,r,null,i);var s=e.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=Ka(Error(se(423)),e),e=Tp(t,e,r,i,n);break e}else if(r!==n){n=Ka(Error(se(424)),e),e=Tp(t,e,r,i,n);break e}else for(Oi=gn(e.stateNode.containerInfo.firstChild),Fi=e,yt=!0,nr=null,i=lv(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Xa(),r===n){e=Wr(t,e,i);break e}gi(t,e,r,i)}e=e.child}return e;case 5:return dv(e),t===null&&cd(e),r=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,s=n.children,nd(r,n)?s=null:a!==null&&nd(r,a)&&(e.flags|=32),Ov(t,e),gi(t,e,s,i),e.child;case 6:return t===null&&cd(e),null;case 13:return kv(t,e,i);case 4:return Wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ya(e,null,r,i):gi(t,e,r,i),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:ir(r,n),Mp(t,e,r,n,i);case 7:return gi(t,e,e.pendingProps,i),e.child;case 8:return gi(t,e,e.pendingProps.children,i),e.child;case 12:return gi(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(r=e.type._context,n=e.pendingProps,a=e.memoizedProps,s=n.value,pt(Gl,r._currentValue),r._currentValue=s,a!==null)if(dr(a.value,s)){if(a.children===n.children&&!Ti.current){e=Wr(t,e,i);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=kr(-1,i&-i),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}a.lanes|=i,l=a.alternate,l!==null&&(l.lanes|=i),ud(a.return,i,e),o.lanes|=i;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(se(341));s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),ud(s,i,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}gi(t,e,n.children,i),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,za(e,i),n=Ki(n),r=r(n),e.flags|=1,gi(t,e,r,i),e.child;case 14:return r=e.type,n=ir(r,e.pendingProps),n=ir(r.type,n),Ep(t,e,r,n,i);case 15:return Iv(t,e,e.type,e.pendingProps,i);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:ir(r,n),xl(t,e),e.tag=1,Ci(r)?(t=!0,Bl(e)):t=!1,za(e,i),Nv(e,r,n),hd(e,r,n,i),md(null,e,r,!0,t,i);case 19:return zv(t,e,i);case 22:return Uv(t,e,i)}throw Error(se(156,e.tag))};function i0(t,e){return Rg(t,e)}function Sy(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(t,e,i,r){return new Sy(t,e,i,r)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function My(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===wh)return 14}return 2}function yn(t,e){var i=t.alternate;return i===null?(i=Xi(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Sl(t,e,i,r,n,a){var s=2;if(r=t,typeof t=="function")sf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ba:return Xn(i.children,n,a,e);case Mh:s=8,n|=8;break;case Ou:return t=Xi(12,i,e,n|2),t.elementType=Ou,t.lanes=a,t;case Fu:return t=Xi(13,i,e,n),t.elementType=Fu,t.lanes=a,t;case ku:return t=Xi(19,i,e,n),t.elementType=ku,t.lanes=a,t;case dg:return _c(i,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:s=10;break e;case ug:s=9;break e;case Eh:s=11;break e;case wh:s=14;break e;case an:s=16,r=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Xi(s,i,e,n),e.elementType=t,e.type=r,e.lanes=a,e}function Xn(t,e,i,r){return t=Xi(7,t,r,e),t.lanes=i,t}function _c(t,e,i,r){return t=Xi(22,t,r,e),t.elementType=dg,t.lanes=i,t.stateNode={isHidden:!1},t}function Zc(t,e,i){return t=Xi(6,t,null,e),t.lanes=i,t}function Jc(t,e,i){return e=Xi(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ey(t,e,i,r,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function of(t,e,i,r,n,a,s,o,l){return t=new Ey(t,e,i,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Xi(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(a),t}function wy(t,e,i){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ya,key:r==null?null:""+r,children:t,containerInfo:e,implementation:i}}function r0(t){if(!t)return Sn;t=t._reactInternals;e:{if(ta(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ci(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var i=t.type;if(Ci(i))return iv(t,i,e)}return e}function n0(t,e,i,r,n,a,s,o,l){return t=of(i,r,!0,t,n,a,s,o,l),t.context=r0(null),i=t.current,r=vi(),n=xn(i),a=kr(r,n),a.callback=e??null,vn(i,a,n),t.current.lanes=n,co(t,n,r),Ri(t,r),t}function xc(t,e,i,r){var n=e.current,a=vi(),s=xn(n);return i=r0(i),e.context===null?e.context=i:e.pendingContext=i,e=kr(a,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(n,e,s),t!==null&&(lr(t,n,s,a),gl(t,n,s)),s}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function lf(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function Ty(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}yc.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));xc(t,e,null,null)};yc.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){xc(null,t,null,null)}),e[Vr]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ug();t={blockedOn:null,target:t,priority:e};for(var i=0;i<ln.length&&e!==0&&e<ln[i].priority;i++);ln.splice(i,0,t),i===0&&Fg(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function Cy(t,e,i,r,n){if(n){if(typeof r=="function"){var a=r;r=function(){var c=Ql(s);a.call(c)}}var s=n0(e,r,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=s,t[Vr]=s.current,Ys(t.nodeType===8?t.parentNode:t),Zn(),s}for(;n=t.lastChild;)t.removeChild(n);if(typeof r=="function"){var o=r;r=function(){var c=Ql(l);o.call(c)}}var l=of(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[Vr]=l.current,Ys(t.nodeType===8?t.parentNode:t),Zn(function(){xc(e,l,i,r)}),l}function Sc(t,e,i,r,n){var a=i._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=Ql(s);o.call(l)}}xc(e,s,t,n)}else s=Cy(i,e,t,n,r);return Ql(s)}Lg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=Ms(e.pendingLanes);i!==0&&(Rh(e,i|1),Ri(e,Lt()),!(it&6)&&($a=Lt()+500,Rn()))}break;case 13:Zn(function(){var r=Gr(t,1);if(r!==null){var n=vi();lr(r,t,1,n)}}),lf(t,1)}};Ah=function(t){if(t.tag===13){var e=Gr(t,134217728);if(e!==null){var i=vi();lr(e,t,134217728,i)}lf(t,134217728)}};Ig=function(t){if(t.tag===13){var e=xn(t),i=Gr(t,e);if(i!==null){var r=vi();lr(i,t,e,r)}lf(t,e)}};Ug=function(){return ot};Og=function(t,e){var i=ot;try{return ot=t,e()}finally{ot=i}};qu=function(t,e,i){switch(e){case"input":if(Hu(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var n=hc(r);if(!n)throw Error(se(90));fg(r),Hu(r,n)}}}break;case"textarea":mg(t,i);break;case"select":e=i.value,e!=null&&Ua(t,!!i.multiple,e,!1)}};Sg=rf;Mg=Zn;var Ry={usingClientEntryPoint:!1,Events:[ho,wa,hc,yg,bg,rf]},ds={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{lc=Fo.inject(Ay),Sr=Fo}catch{}}zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;zi.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(se(200));return wy(t,e,null,i)};zi.createRoot=function(t,e){if(!uf(t))throw Error(se(299));var i=!1,r="",n=a0;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=of(t,1,!1,null,null,i,!1,r,n),t[Vr]=e.current,Ys(t.nodeType===8?t.parentNode:t),new cf(e)};zi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};zi.flushSync=function(t){return Zn(t)};zi.hydrate=function(t,e,i){if(!bc(e))throw Error(se(200));return Sc(null,t,e,!0,i)};zi.hydrateRoot=function(t,e,i){if(!uf(t))throw Error(se(405));var r=i!=null&&i.hydratedSources||null,n=!1,a="",s=a0;if(i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),e=n0(e,null,t,1,i??null,n,!1,a,s),t[Vr]=e.current,Ys(t),r)for(t=0;t<r.length;t++)i=r[t],n=i._getVersion,n=n(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,n]:e.mutableSourceEagerHydrationData.push(i,n);return new yc(e)};zi.render=function(t,e,i){if(!bc(e))throw Error(se(200));return Sc(null,t,e,!1,i)};zi.unmountComponentAtNode=function(t){if(!bc(t))throw Error(se(40));return t._reactRootContainer?(Zn(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vr]=null})}),!0):!1};zi.unstable_batchedUpdates=rf;zi.unstable_renderSubtreeIntoContainer=function(t,e,i,r){if(!bc(i))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Sc(t,e,i,!1,r)};zi.version="18.3.1-next-f1338f8080-20240426";function s0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s0)}catch(t){console.error(t)}}s0(),ag.exports=zi;var Py=ag.exports,kp=Py;Iu.createRoot=kp.createRoot,Iu.hydrateRoot=kp.hydrateRoot;/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var Ny={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pi=(t,e)=>{const i=ze.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:l,...c},h)=>ze.createElement("svg",{ref:h,...Ny,width:n,height:n,stroke:r,strokeWidth:s?Number(a)*24/Number(n):a,className:["lucide",`lucide-${Dy(t)}`,o].join(" "),...c},[...e.map(([f,u])=>ze.createElement(f,u)),...Array.isArray(l)?l:[l]]));return i.displayName=`${t}`,i};/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ly=Pi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Iy=Pi("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uy=Pi("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oy=Pi("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fy=Pi("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ky=Pi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const df=Pi("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zy=Pi("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const By=Pi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hy=Pi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vy=Pi("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gy=Pi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wy=Pi("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
* @license lucide-react v0.363.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jy=Pi("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Xy=()=>{const[t,e]=ze.useState(!1),[i,r]=ze.useState(!1);ze.useEffect(()=>{const a=()=>{e(window.scrollY>10)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const n=()=>{r(!1)};return X.jsxs("header",{className:`site-header${t?" scrolled":""}`,children:[X.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[X.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"8px"},"aria-label":"Solar Explorer Home",children:[X.jsx(df,{style:{color:"var(--accent-purple)"}}),X.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.25rem"},children:"Solar Explorer"})]}),X.jsxs("nav",{className:"desktop-nav",children:[X.jsx("a",{href:"#explorer",className:"header-nav-link",children:"Explore"}),X.jsx("a",{href:"#planets",className:"header-nav-link",children:"Planets"}),X.jsx("a",{href:"#discover",className:"header-nav-link",children:"Discover"}),X.jsx("a",{href:"#explorer",className:"btn-primary",style:{padding:"10px 24px",fontSize:"1rem"},children:"Start Exploring"})]}),X.jsx("button",{className:"mobile-nav-toggle",onClick:()=>r(!i),"aria-expanded":i,"aria-label":"Toggle navigation menu",children:i?X.jsx(Gy,{}):X.jsx(ky,{})})]}),i&&X.jsxs("nav",{className:"mobile-nav",role:"navigation",children:[X.jsx("a",{href:"#explorer",onClick:n,children:"Explore"}),X.jsx("a",{href:"#planets",onClick:n,children:"Planets"}),X.jsx("a",{href:"#discover",onClick:n,children:"Discover"}),X.jsx("a",{href:"#explorer",onClick:n,className:"btn-primary",style:{alignSelf:"flex-start"},children:"Start Exploring"})]}),X.jsx("style",{children:`
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
      `})]})},Yy=()=>X.jsxs("section",{style:{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",paddingTop:"80px",overflow:"hidden"},children:[X.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap-reverse",gap:"48px",position:"relative",zIndex:2},children:[X.jsxs("div",{style:{flex:"1 1 500px",maxWidth:"650px",padding:"40px 0"},children:[X.jsx("div",{style:{color:"var(--accent-purple)",fontWeight:600,letterSpacing:"0.1em",marginBottom:"16px",fontSize:"1rem",fontFamily:"var(--font-display)"},children:"A JOURNEY BEYOND EARTH"}),X.jsxs("h1",{style:{fontSize:"clamp(4rem, 8vw, 7rem)",lineHeight:1,marginBottom:"24px",textTransform:"uppercase"},children:[X.jsx("div",{style:{color:"#100D28"},children:"EXPLORE THE"}),X.jsx("div",{className:"text-gradient",children:"SOLAR SYSTEM"})]}),X.jsx("p",{style:{fontSize:"1.25rem",color:"var(--text-secondary)",marginBottom:"40px",maxWidth:"520px",lineHeight:1.5},children:"Discover incredible worlds, follow their orbits, and explore the wonders of our cosmic neighborhood."}),X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",marginBottom:"32px"},children:[X.jsx("a",{href:"#explorer",className:"btn-primary",children:"Start Exploring"}),X.jsx("a",{href:"#planets",className:"btn-secondary",children:"Meet the Planets"})]}),X.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.875rem",fontWeight:500,display:"flex",alignItems:"center",gap:"12px"},children:[X.jsx("span",{children:"8 planets"}),X.jsx("span",{style:{color:"var(--border-subtle)"},children:"•"}),X.jsx("span",{children:"1 star"}),X.jsx("span",{style:{color:"var(--border-subtle)"},children:"•"}),X.jsx("span",{children:"Endless discovery"})]})]}),X.jsx("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:X.jsx("div",{style:{width:"100%",maxWidth:"600px",aspectRatio:"1/1",borderRadius:"50%",overflow:"hidden",boxShadow:"0 30px 60px rgba(78, 85, 216, 0.15)",border:"8px solid white",position:"relative",transform:"translateX(5%)",animation:"float 6s ease-in-out infinite"},children:X.jsx("img",{src:"/Solar/hero-artwork.jpg",alt:"Artistic rendering of the solar system",style:{width:"100%",height:"100%",objectFit:"cover"}})})})]}),X.jsx("div",{style:{position:"absolute",top:"-10%",right:"-10%",width:"60vw",height:"60vw",borderRadius:"50%",background:"radial-gradient(circle, rgba(240,236,252,0.8) 0%, rgba(250,249,255,0) 70%)",zIndex:0,pointerEvents:"none"}}),X.jsx("style",{children:`
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
*/const hf="186",Ha={ROTATE:0,DOLLY:1,PAN:2},Da={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qy=0,zp=1,Ky=2,Ml=1,$y=2,ws=3,Mn=0,li=1,ji=2,zr=0,Fs=1,io=2,Bp=3,Hp=4,Zy=5,xa=100,Jy=101,Qy=102,eb=103,tb=104,ib=200,rb=201,nb=202,ab=203,o0=204,l0=205,sb=206,ob=207,lb=208,cb=209,ub=210,db=211,hb=212,fb=213,pb=214,Td=0,Cd=1,Rd=2,ro=3,Ad=4,Pd=5,Nd=6,Dd=7,c0=0,mb=1,gb=2,Er=0,u0=1,d0=2,h0=3,f0=4,p0=5,m0=6,g0=7,v0=300,Jn=301,Za=302,Qc=303,eu=304,Mc=306,Ai=1e3,Rt=1001,Ld=1002,Jt=1003,vb=1004,ko=1005,oi=1006,tu=1007,Gn=1008,Ui=1009,_0=1010,x0=1011,no=1012,ff=1013,wr=1014,yr=1015,Tr=1016,pf=1017,mf=1018,ao=1020,y0=35902,b0=35899,S0=1021,M0=1022,sr=1023,jr=1026,Wn=1027,E0=1028,gf=1029,Qn=1030,vf=1031,_f=1033,El=33776,wl=33777,Tl=33778,Cl=33779,Id=35840,Ud=35841,Od=35842,Fd=35843,kd=36196,zd=37492,Bd=37496,Hd=37488,Vd=37489,ec=37490,Gd=37491,Wd=37808,jd=37809,Xd=37810,Yd=37811,qd=37812,Kd=37813,$d=37814,Zd=37815,Jd=37816,Qd=37817,eh=37818,th=37819,ih=37820,rh=37821,nh=36492,ah=36494,sh=36495,oh=36283,lh=36284,tc=36285,ch=36286,_b=3200,uh=0,xb=1,un="",xt="srgb",ic="srgb-linear",rc="linear",at="srgb",iu=7680,yb=519,bb=512,Sb=513,Mb=514,xf=515,Eb=516,wb=517,yf=518,Tb=519,Cb=35044,Vp="300 es",br=2e3,so=2001;function Rb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ab(){const t=nc("canvas");return t.style.display="block",t}const Gp={};function Wp(...t){const e="THREE."+t.shift();console.log(e,...t)}function w0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=w0(t);const e="THREE."+t.shift();{const i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function tt(...t){t=w0(t);const e="THREE."+t.shift();{const i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Va(...t){const e=t.join(" ");e in Gp||(Gp[e]=!0,Oe(...t))}function Pb(t,e,i){return new Promise(function(r,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:r()}}setTimeout(a,i)})}const Nb={[Td]:Cd,[Rd]:Nd,[Ad]:Dd,[ro]:Pd,[Cd]:Td,[Nd]:Rd,[Dd]:Ad,[Pd]:ro};class An{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const a=n.indexOf(i);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,dh=180/Math.PI;function po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ni[t&255]+ni[t>>8&255]+ni[t>>16&255]+ni[t>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[i&63|128]+ni[i>>8&255]+"-"+ni[i>>16&255]+ni[i>>24&255]+ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]).toLowerCase()}function $e(t,e,i){return Math.max(e,Math.min(i,t))}function Db(t,e){return(t%e+e)%e}function ru(t,e,i){return(1-i)*t+i*e}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lb={DEG2RAD:Rl},T0=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),n=this.x-t.x,a=this.y-t.y;return this.x=n*i-a*r+t.x,this.y=n*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};T0.prototype.isVector2=!0;let ke=T0;class En{constructor(e=0,i=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=n}static slerpFlat(e,i,r,n,a,s,o){let l=r[n+0],c=r[n+1],h=r[n+2],f=r[n+3],u=a[s+0],p=a[s+1],m=a[s+2],S=a[s+3];if(f!==S||l!==u||c!==p||h!==m){let g=l*u+c*p+h*m+f*S;g<0&&(u=-u,p=-p,m=-m,S=-S,g=-g);let d=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);d=Math.sin(d*v)/M,o=Math.sin(o*v)/M,l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+S*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[i]=l,e[i+1]=c,e[i+2]=h,e[i+3]=f}static multiplyQuaternionsFlat(e,i,r,n,a,s){const o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],f=a[s],u=a[s+1],p=a[s+2],m=a[s+3];return e[i]=o*m+h*f+l*p-c*u,e[i+1]=l*m+h*u+c*f-o*p,e[i+2]=c*m+h*p+o*u-l*f,e[i+3]=h*m-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,n){return this._x=e,this._y=i,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),f=o(a/2),u=l(r/2),p=l(n/2),m=l(a/2);switch(s){case"XYZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"YZX":this._x=u*h*f+c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f-u*p*m;break;case"XZY":this._x=u*h*f-c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f+u*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],n=i[4],a=i[8],s=i[1],o=i[5],l=i[9],c=i[2],h=i[6],f=i[10],u=r+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(r>o&&r>f){const p=2*Math.sqrt(1+r-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-r-f);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-r-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,i/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,n=e._y,a=e._z,s=e._w,o=i._x,l=i._y,c=i._z,h=i._w;return this._x=r*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-r*c,this._z=a*h+s*c+r*l-n*o,this._w=s*h-r*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,i){let r=e._x,n=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(r=-r,n=-n,a=-a,s=-s,o=-o);let l=1-i;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,i=Math.sin(i*c)/h,this._x=this._x*l+r*i,this._y=this._y*l+n*i,this._z=this._z*l+a*i,this._w=this._w*l+s*i,this._onChangeCallback()}else this._x=this._x*l+r*i,this._y=this._y*l+n*i,this._z=this._z*l+a*i,this._w=this._w*l+s*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(i),a*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const C0=class{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6]*r,this.y=n[1]*e+n[4]*i+n[7]*r,this.z=n[2]*e+n[5]*i+n[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,n=t.elements,a=1/(n[3]*e+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*e+n[4]*i+n[8]*r+n[12])*a,this.y=(n[1]*e+n[5]*i+n[9]*r+n[13])*a,this.z=(n[2]*e+n[6]*i+n[10]*r+n[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,n=t.x,a=t.y,s=t.z,o=t.w,l=2*(a*r-s*i),c=2*(s*e-n*r),h=2*(n*i-a*e);return this.x=e+o*l+a*h-s*c,this.y=i+o*c+s*l-n*h,this.z=r+o*h+n*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,n=t.elements;return this.x=n[0]*e+n[4]*i+n[8]*r,this.y=n[1]*e+n[5]*i+n[9]*r,this.z=n[2]*e+n[6]*i+n[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,n=t.z,a=e.x,s=e.y,o=e.z;return this.x=r*o-n*s,this.y=n*a-i*o,this.z=i*s-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nu.copy(this).projectOnVector(t),this.sub(nu)}reflect(t){return this.sub(nu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};C0.prototype.isVector3=!0;let F=C0;const nu=new F,jp=new En,R0=class{constructor(t,e,i,r,n,a,s,o,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,n,a,s,o,l)}set(t,e,i,r,n,a,s,o,l){const c=this.elements;return c[0]=t,c[1]=r,c[2]=s,c[3]=e,c[4]=n,c[5]=o,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,n=this.elements,a=i[0],s=i[3],o=i[6],l=i[1],c=i[4],h=i[7],f=i[2],u=i[5],p=i[8],m=r[0],S=r[3],g=r[6],d=r[1],v=r[4],M=r[7],y=r[2],E=r[5],w=r[8];return n[0]=a*m+s*d+o*y,n[3]=a*S+s*v+o*E,n[6]=a*g+s*M+o*w,n[1]=l*m+c*d+h*y,n[4]=l*S+c*v+h*E,n[7]=l*g+c*M+h*w,n[2]=f*m+u*d+p*y,n[5]=f*S+u*v+p*E,n[8]=f*g+u*M+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],l=t[7],c=t[8];return e*a*c-e*s*l-i*n*c+i*s*o+r*n*l-r*a*o}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],l=t[7],c=t[8],h=c*a-s*l,f=s*o-c*n,u=l*n-a*o,p=e*h+i*f+r*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(r*l-c*i)*m,t[2]=(s*i-r*a)*m,t[3]=f*m,t[4]=(c*e-r*o)*m,t[5]=(r*n-s*e)*m,t[6]=u*m,t[7]=(i*o-l*e)*m,t[8]=(a*e-i*n)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,n,a,s){const o=Math.cos(n),l=Math.sin(n);return this.set(i*o,i*l,-i*(o*a+l*s)+a+t,-r*l,r*o,-r*(-l*a+o*s)+s+e,0,0,1),this}scale(t,e){return Va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(au.makeScale(t,e)),this}rotate(t){return Va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(au.makeRotation(-t)),this}translate(t,e){return Va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(au.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};R0.prototype.isMatrix3=!0;let je=R0;const au=new je,Xp=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){const t={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===at&&(n.r=Br(n.r),n.g=Br(n.g),n.b=Br(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(n.r=Ga(n.r),n.g=Ga(n.g),n.b=Ga(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===un?rc:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return Va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return Va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[ic]:{primaries:e,whitePoint:r,transfer:rc,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:r,transfer:at,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),t}const Je=Ib();function Br(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let sa;class Ub{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{sa===void 0&&(sa=nc("canvas")),sa.width=e.width,sa.height=e.height;const n=sa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=sa}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=Br(a[s]/255)*255;return r.putImageData(n,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Br(i[r]/255)*255):i[r]=Br(i[r]);return{data:i,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ob=0;class bf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(su(n[s].image)):a.push(su(n[s]))}else a=su(n);r.url=a}return i||(e.images[this.uuid]=r),r}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ub.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Fb=0;const ou=new F;class ci extends An{constructor(e=ci.DEFAULT_IMAGE,i=ci.DEFAULT_MAPPING,r=Rt,n=Rt,a=oi,s=Gn,o=sr,l=Ui,c=ci.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=po(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){Oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const n=this[i];if(n===void 0){Oe(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=v0;ci.DEFAULT_ANISOTROPY=1;const A0=class{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,n=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*n,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*n,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*n,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,n;const a=t.elements,s=a[0],o=a[4],l=a[8],c=a[1],h=a[5],f=a[9],u=a[2],p=a[6],m=a[10];if(Math.abs(o-c)<.01&&Math.abs(l-u)<.01&&Math.abs(f-p)<.01){if(Math.abs(o+c)<.1&&Math.abs(l+u)<.1&&Math.abs(f+p)<.1&&Math.abs(s+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(s+1)/2,d=(h+1)/2,v=(m+1)/2,M=(o+c)/4,y=(l+u)/4,E=(f+p)/4;return g>d&&g>v?g<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(g),r=M/i,n=y/i):d>v?d<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(d),i=M/r,n=E/r):v<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(v),i=y/n,r=E/n),this.set(i,r,n,e),this}let S=Math.sqrt((p-f)*(p-f)+(l-u)*(l-u)+(c-o)*(c-o));return Math.abs(S)<.001&&(S=1),this.x=(p-f)/S,this.y=(l-u)/S,this.z=(c-o)/S,this.w=Math.acos((s+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this.w=$e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this.w=$e(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};A0.prototype.isVector4=!0;let It=A0;class kb extends An{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new It(0,0,e,i),this.scissorTest=!1,this.viewport=new It(0,0,e,i),this.textures=[];const n={width:e,height:i,depth:r.depth},a=new ci(n),s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=i,this.textures[n].image.depth=r,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.textures[i].image);this.textures[i].source=new bf(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends kb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class P0 extends ci{constructor(e=null,i=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zb extends ci{constructor(e=null,i=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const N0=class D0{constructor(e,i,r,n,a,s,o,l,c,h,f,u,p,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,a,s,o,l,c,h,f,u,p,m,S,g)}set(e,i,r,n,a,s,o,l,c,h,f,u,p,m,S,g){const d=this.elements;return d[0]=e,d[4]=i,d[8]=r,d[12]=n,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=m,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new D0().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,n=1/oa.setFromMatrixColumn(e,0).length(),a=1/oa.setFromMatrixColumn(e,1).length(),s=1/oa.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*a,i[5]=r[5]*a,i[6]=r[6]*a,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=s*h,p=s*f,m=o*h,S=o*f;i[0]=l*h,i[4]=-l*f,i[8]=c,i[1]=p+m*c,i[5]=u-S*c,i[9]=-o*l,i[2]=S-u*c,i[6]=m+p*c,i[10]=s*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,m=c*h,S=c*f;i[0]=u+S*o,i[4]=m*o-p,i[8]=s*c,i[1]=s*f,i[5]=s*h,i[9]=-o,i[2]=p*o-m,i[6]=S+u*o,i[10]=s*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,m=c*h,S=c*f;i[0]=u-S*o,i[4]=-s*f,i[8]=m+p*o,i[1]=p+m*o,i[5]=s*h,i[9]=S-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(e.order==="ZYX"){const u=s*h,p=s*f,m=o*h,S=o*f;i[0]=l*h,i[4]=m*c-p,i[8]=u*c+S,i[1]=l*f,i[5]=S*c+u,i[9]=p*c-m,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,m=o*l,S=o*c;i[0]=l*h,i[4]=S-u*f,i[8]=m*f+p,i[1]=f,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=p*f+m,i[10]=u-S*f}else if(e.order==="XZY"){const u=s*l,p=s*c,m=o*l,S=o*c;i[0]=l*h,i[4]=-f,i[8]=c*h,i[1]=u*f+S,i[5]=s*h,i[9]=p*f-m,i[2]=m*f-p,i[6]=o*h,i[10]=S*f+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bb,e,Hb)}lookAt(e,i,r){const n=this.elements;return Ni.subVectors(e,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Qr.crossVectors(r,Ni),Qr.lengthSq()===0&&(Math.abs(r.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Qr.crossVectors(r,Ni)),Qr.normalize(),zo.crossVectors(Ni,Qr),n[0]=Qr.x,n[4]=zo.x,n[8]=Ni.x,n[1]=Qr.y,n[5]=zo.y,n[9]=Ni.y,n[2]=Qr.z,n[6]=zo.z,n[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,n=i.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],f=r[5],u=r[9],p=r[13],m=r[2],S=r[6],g=r[10],d=r[14],v=r[3],M=r[7],y=r[11],E=r[15],w=n[0],C=n[4],x=n[8],T=n[12],A=n[1],U=n[5],k=n[9],Y=n[13],D=n[2],q=n[6],Q=n[10],J=n[14],V=n[3],B=n[7],W=n[11],O=n[15];return a[0]=s*w+o*A+l*D+c*V,a[4]=s*C+o*U+l*q+c*B,a[8]=s*x+o*k+l*Q+c*W,a[12]=s*T+o*Y+l*J+c*O,a[1]=h*w+f*A+u*D+p*V,a[5]=h*C+f*U+u*q+p*B,a[9]=h*x+f*k+u*Q+p*W,a[13]=h*T+f*Y+u*J+p*O,a[2]=m*w+S*A+g*D+d*V,a[6]=m*C+S*U+g*q+d*B,a[10]=m*x+S*k+g*Q+d*W,a[14]=m*T+S*Y+g*J+d*O,a[3]=v*w+M*A+y*D+E*V,a[7]=v*C+M*U+y*q+E*B,a[11]=v*x+M*k+y*Q+E*W,a[15]=v*T+M*Y+y*J+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],S=e[7],g=e[11],d=e[15],v=l*p-c*u,M=o*p-c*f,y=o*u-l*f,E=s*p-c*h,w=s*u-l*h,C=s*f-o*h;return i*(S*v-g*M+d*y)-r*(m*v-g*E+d*w)+n*(m*M-S*E+d*C)-a*(m*y-S*w+g*C)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return i*(s*h-o*c)-r*(a*h-o*l)+n*(a*c-s*l)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],S=e[13],g=e[14],d=e[15],v=i*o-r*s,M=i*l-n*s,y=i*c-a*s,E=r*l-n*o,w=r*c-a*o,C=n*c-a*l,x=h*S-f*m,T=h*g-u*m,A=h*d-p*m,U=f*g-u*S,k=f*d-p*S,Y=u*d-p*g,D=v*Y-M*k+y*U+E*A-w*T+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/D;return e[0]=(o*Y-l*k+c*U)*q,e[1]=(n*k-r*Y-a*U)*q,e[2]=(S*C-g*w+d*E)*q,e[3]=(u*w-f*C-p*E)*q,e[4]=(l*A-s*Y-c*T)*q,e[5]=(i*Y-n*A+a*T)*q,e[6]=(g*y-m*C-d*M)*q,e[7]=(h*C-u*y+p*M)*q,e[8]=(s*k-o*A+c*x)*q,e[9]=(r*A-i*k-a*x)*q,e[10]=(m*w-S*y+d*v)*q,e[11]=(f*y-h*w-p*v)*q,e[12]=(o*T-s*U-l*x)*q,e[13]=(i*U-r*T+n*x)*q,e[14]=(S*M-m*E-g*v)*q,e[15]=(h*E-f*M+u*v)*q,this}scale(e){const i=this.elements,r=e.x,n=e.y,a=e.z;return i[0]*=r,i[4]*=n,i[8]*=a,i[1]*=r,i[5]*=n,i[9]*=a,i[2]*=r,i[6]*=n,i[10]*=a,i[3]*=r,i[7]*=n,i[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),n=Math.sin(i),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){const n=this.elements,a=i._x,s=i._y,o=i._z,l=i._w,c=a+a,h=s+s,f=o+o,u=a*c,p=a*h,m=a*f,S=s*h,g=s*f,d=o*f,v=l*c,M=l*h,y=l*f,E=r.x,w=r.y,C=r.z;return n[0]=(1-(S+d))*E,n[1]=(p+y)*E,n[2]=(m-M)*E,n[3]=0,n[4]=(p-y)*w,n[5]=(1-(u+d))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(m+M)*C,n[9]=(g-v)*C,n[10]=(1-(u+S))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),i.identity(),this;let s=oa.set(n[0],n[1],n[2]).length();const o=oa.set(n[4],n[5],n[6]).length(),l=oa.set(n[8],n[9],n[10]).length();a<0&&(s=-s),Qi.copy(this);const c=1/s,h=1/o,f=1/l;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=f,Qi.elements[9]*=f,Qi.elements[10]*=f,i.setFromRotationMatrix(Qi),r.x=s,r.y=o,r.z=l,this}makePerspective(e,i,r,n,a,s,o=br,l=!1){const c=this.elements,h=2*a/(i-e),f=2*a/(r-n),u=(i+e)/(i-e),p=(r+n)/(r-n);let m,S;if(l)m=a/(s-a),S=s*a/(s-a);else if(o===br)m=-(s+a)/(s-a),S=-2*s*a/(s-a);else if(o===so)m=-s/(s-a),S=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,i,r,n,a,s,o=br,l=!1){const c=this.elements,h=2/(i-e),f=2/(r-n),u=-(i+e)/(i-e),p=-(r+n)/(r-n);let m,S;if(l)m=1/(s-a),S=s/(s-a);else if(o===br)m=-2/(s-a),S=-(s+a)/(s-a);else if(o===so)m=-1/(s-a),S=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};N0.prototype.isMatrix4=!0;let Mt=N0;const oa=new F,Qi=new Mt,Bb=new F(0,0,0),Hb=new F(1,1,1),Qr=new F,zo=new F,Ni=new F,qp=new Mt,Kp=new En;class wn{constructor(e=0,i=0,r=0,n=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],u=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vb=0;const $p=new F,la=new En,Rr=new Mt,Bo=new F,fs=new F,Gb=new F,Wb=new En,Zp=new F(1,0,0),Jp=new F(0,1,0),Qp=new F(0,0,1),em={type:"added"},jb={type:"removed"},ca={type:"childadded",child:null},lu={type:"childremoved",child:null};class ui extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new F,i=new wn,r=new En,n=new F(1,1,1);function a(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return la.setFromAxisAngle(e,i),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,i){return la.setFromAxisAngle(e,i),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,i){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Bo.copy(e):Bo.set(e,i,r);const n=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(fs,Bo,this.up):Rr.lookAt(Bo,fs,this.up),this.quaternion.setFromRotationMatrix(Rr),n&&(Rr.extractRotation(n.matrixWorld),la.setFromRotationMatrix(Rr),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),ca.child=e,this.dispatchEvent(ca),ca.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jb),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,n=e.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*r-a[8]*n,a[13]+=r-a[1]*i-a[5]*r-a[9]*n,a[14]+=n-a[2]*i-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(i){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),f=s(e.shapes),u=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),m.length>0&&(r.nodes=m)}return r.object=n,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ui.DEFAULT_UP=new F(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ts extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const g=i.getJointPose(S,r),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=i.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=i.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ts;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function uu(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}class Ve{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,i),this}setRGB(e,i,r,n=Je.workingColorSpace){return this.r=e,this.g=i,this.b=r,Je.colorSpaceToWorking(this,n),this}setHSL(e,i,r,n=Je.workingColorSpace){if(e=Db(e,1),i=$e(i,0,1),r=$e(r,0,1),i===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+i):r+i-r*i,s=2*r-a;this.r=uu(s,a,e+1/3),this.g=uu(s,a,e),this.b=uu(s,a,e-1/3)}return Je.colorSpaceToWorking(this,n),this}setStyle(e,i=xt){function r(a){a!==void 0&&parseFloat(a)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,i);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,i);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,i);break;default:Oe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,i);if(s===6)return this.setHex(parseInt(a,16),i);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xt){const r=L0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Je.workingToColorSpace(ai.copy(this),e),Math.round($e(ai.r*255,0,255))*65536+Math.round($e(ai.g*255,0,255))*256+Math.round($e(ai.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Je.workingColorSpace){Je.workingToColorSpace(ai.copy(this),i);const r=ai.r,n=ai.g,a=ai.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=h<=.5?f/(s+o):f/(2-s-o),s){case r:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-r)/f+2;break;case a:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,i=Je.workingColorSpace){return Je.workingToColorSpace(ai.copy(this),i),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=xt){Je.workingToColorSpace(ai.copy(this),e);const i=ai.r,r=ai.g,n=ai.b;return e!==xt?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,i,r){return this.getHSL(en),this.setHSL(en.h+e,en.s+i,en.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(en),e.getHSL(Ho);const r=ru(en.h,Ho.h,i),n=ru(en.s,Ho.s,i),a=ru(en.l,Ho.l,i);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*i+a[3]*r+a[6]*n,this.g=a[1]*i+a[4]*r+a[7]*n,this.b=a[2]*i+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new Ve;Ve.NAMES=L0;class Yb extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const er=new F,Ar=new F,du=new F,Pr=new F,ua=new F,da=new F,tm=new F,hu=new F,fu=new F,pu=new F,mu=new It,gu=new It,vu=new It;class ar{constructor(e=new F,i=new F,r=new F){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),er.subVectors(e,i),n.cross(er);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,i,r,n,a){er.subVectors(n,i),Ar.subVectors(r,i),du.subVectors(e,i);const s=er.dot(er),o=er.dot(Ar),l=er.dot(du),c=Ar.dot(Ar),h=Ar.dot(du),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,m=(s*h-o*l)*u;return a.set(1-p-m,m,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,i,r,n,a,s,o,l){return this.getBarycoord(e,i,r,n,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pr.x),l.addScaledVector(s,Pr.y),l.addScaledVector(o,Pr.z),l)}static getInterpolatedAttribute(e,i,r,n,a,s){return mu.setScalar(0),gu.setScalar(0),vu.setScalar(0),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),vu.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(mu,a.x),s.addScaledVector(gu,a.y),s.addScaledVector(vu,a.z),s}static isFrontFacing(e,i,r,n){return er.subVectors(r,i),Ar.subVectors(e,i),er.cross(Ar).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),er.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ar.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,a){return ar.getInterpolation(e,this.a,this.b,this.c,i,r,n,a)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,n=this.b,a=this.c;let s,o;ua.subVectors(n,r),da.subVectors(a,r),hu.subVectors(e,r);const l=ua.dot(hu),c=da.dot(hu);if(l<=0&&c<=0)return i.copy(r);fu.subVectors(e,n);const h=ua.dot(fu),f=da.dot(fu);if(h>=0&&f<=h)return i.copy(n);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),i.copy(r).addScaledVector(ua,s);pu.subVectors(e,a);const p=ua.dot(pu),m=da.dot(pu);if(m>=0&&p<=m)return i.copy(a);const S=p*c-l*m;if(S<=0&&c>=0&&m<=0)return o=c/(c-m),i.copy(r).addScaledVector(da,o);const g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return tm.subVectors(a,n),o=(f-h)/(f-h+(p-m)),i.copy(n).addScaledVector(tm,o);const d=1/(g+S+u);return s=S*d,o=u*d,i.copy(r).addScaledVector(ua,s).addScaledVector(da,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(tr.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(tr.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=tr.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(i===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,tr):tr.fromBufferAttribute(a,s),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vo.copy(r.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Go.subVectors(this.max,ps),ha.subVectors(e.a,ps),fa.subVectors(e.b,ps),pa.subVectors(e.c,ps),tn.subVectors(fa,ha),rn.subVectors(pa,fa),Ln.subVectors(ha,pa);let i=[0,-tn.z,tn.y,0,-rn.z,rn.y,0,-Ln.z,Ln.y,tn.z,0,-tn.x,rn.z,0,-rn.x,Ln.z,0,-Ln.x,-tn.y,tn.x,0,-rn.y,rn.x,0,-Ln.y,Ln.x,0];return!_u(i,ha,fa,pa,Go)||(i=[1,0,0,0,1,0,0,0,1],!_u(i,ha,fa,pa,Go))?!1:(Wo.crossVectors(tn,rn),i=[Wo.x,Wo.y,Wo.z],_u(i,ha,fa,pa,Go))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nr=[new F,new F,new F,new F,new F,new F,new F,new F],tr=new F,Vo=new mo,ha=new F,fa=new F,pa=new F,tn=new F,rn=new F,Ln=new F,ps=new F,Go=new F,Wo=new F,In=new F;function _u(t,e,i,r,n){for(let a=0,s=t.length-3;a<=s;a+=3){In.fromArray(t,a);const o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=e.dot(In),c=i.dot(In),h=r.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kt=new F,jo=new ke;let qb=0;class ur extends An{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Cb,this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=i.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)jo.fromBufferAttribute(this,i),jo.applyMatrix3(e),this.setXY(i,jo.x,jo.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)kt.fromBufferAttribute(this,i),kt.applyMatrix3(e),this.setXYZ(i,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)kt.fromBufferAttribute(this,i),kt.applyMatrix4(e),this.setXYZ(i,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)kt.fromBufferAttribute(this,i),kt.applyNormalMatrix(e),this.setXYZ(i,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)kt.fromBufferAttribute(this,i),kt.transformDirection(e),this.setXYZ(i,kt.x,kt.y,kt.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=hs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=hs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=hs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=hs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=hs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,n){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),n=Si(n,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,i,r,n,a){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),n=Si(n,this.array),a=Si(a,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class I0 extends ur{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class U0 extends ur{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class di extends ur{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Kb=new mo,ms=new F,xu=new F;class go{constructor(e=new F,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Kb.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const i=ms.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),n=(r-this.radius)*.5;this.center.addScaledVector(ms,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(xu)),this.expandByPoint(ms.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $b=0;const Vi=new Mt,yu=new ui,ma=new F,Di=new mo,gs=new mo,Yt=new F;class _i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rb(e)?U0:I0)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new je().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,r){return Vi.makeTranslation(e,i,r),this.applyMatrix4(Vi),this}scale(e,i,r){return Vi.makeScale(e,i,r),this.applyMatrix4(Vi),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new di(r,3))}else{const r=Math.min(e.length,i.count);for(let n=0;n<r;n++){const a=e[n];i.setXYZ(n,a.x,a.y,a.z||0)}e.length>i.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){const a=i[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const r=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),i)for(let a=0,s=i.length;a<s;a++){const o=i[a];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Di.min,gs.min),Di.expandByPoint(Yt),Yt.addVectors(Di.max,gs.max),Di.expandByPoint(Yt)):(Di.expandByPoint(gs.min),Di.expandByPoint(gs.max))}Di.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)Yt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(Yt));if(i)for(let a=0,s=i.length;a<s;a++){const o=i[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(ma.fromBufferAttribute(e,c),Yt.add(ma)),n=Math.max(n,r.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,n=i.normal,a=i.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ur(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let x=0;x<r.count;x++)o[x]=new F,l[x]=new F;const c=new F,h=new F,f=new F,u=new ke,p=new ke,m=new ke,S=new F,g=new F;function d(x,T,A){c.fromBufferAttribute(r,x),h.fromBufferAttribute(r,T),f.fromBufferAttribute(r,A),u.fromBufferAttribute(a,x),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,A),h.sub(c),f.sub(c),p.sub(u),m.sub(u);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(S.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),o[x].add(S),o[T].add(S),o[A].add(S),l[x].add(g),l[T].add(g),l[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,T=v.length;x<T;++x){const A=v[x],U=A.start,k=A.count;for(let Y=U,D=U+k;Y<D;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new F,y=new F,E=new F,w=new F;function C(x){E.fromBufferAttribute(n,x),w.copy(E);const T=o[x];M.copy(T),M.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(w,T);const A=y.dot(l[x])<0?-1:1;s.setXYZW(x,M.x,M.y,M.z,A)}for(let x=0,T=v.length;x<T;++x){const A=v[x],U=A.start,k=A.count;for(let Y=U,D=U+k;Y<D;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ur(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);const n=new F,a=new F,s=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(i,m),a.fromBufferAttribute(i,S),s.fromBufferAttribute(i,g),h.subVectors(s,a),f.subVectors(n,a),h.cross(f),o.fromBufferAttribute(r,m),l.fromBufferAttribute(r,S),c.fromBufferAttribute(r,g),o.add(h),l.add(h),c.add(h),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(S,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)n.fromBufferAttribute(i,u+0),a.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,a),f.subVectors(n,a),h.cross(f),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Yt.fromBufferAttribute(e,i),Yt.normalize(),e.setXYZ(i,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let d=0;d<h;d++)u[m++]=c[p++]}return new ur(u,h,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);i.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(i))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new F,Zb=new F,Jb=new je;class Ur{constructor(e=new F(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,n){return this.normal.set(e,i,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const n=bu.subVectors(r,i).cross(Zb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const n=e.delta(bu),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(s<0||s>1)?null:i.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Jb.getNormalMatrix(e),n=this.coplanarPoint(bu).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Qb=0;class ia extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=po(),this.name="",this.type="Material",this.blending=Fs,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=o0,this.blendDst=l0,this.blendEquation=xa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=iu,this.stencilZFail=iu,this.stencilZPass=iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){Oe(`Material: parameter '${i}' has value of undefined.`);continue}const n=this[i];if(n===void 0){Oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector2&&r&&r.isVector2||n&&n.isEuler&&r&&r.isEuler||n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(i){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ur().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ke().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const n=i.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=i[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dr=new F,Su=new F,Xo=new F,Yo=new F;class vo{constructor(e=new F,i=new F(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dr)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Dr.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Dr.copy(this.origin).addScaledVector(this.direction,i),Dr.distanceToSquared(e))}distanceSqToSegment(e,i,r,n){Su.copy(e).add(i).multiplyScalar(.5),Xo.copy(i).sub(e).normalize(),Yo.copy(this.origin).sub(Su);const a=e.distanceTo(i)*.5,s=-this.direction.dot(Xo),o=Yo.dot(this.direction),l=-Yo.dot(Xo),c=Yo.lengthSq(),h=Math.abs(1-s*s);let f,u,p,m;if(h>0)if(f=s*l-o,u=s*o-l,m=a*h,f>=0)if(u>=-m)if(u<=m){const S=1/h;f*=S,u*=S,p=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=a,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-s*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(f=Math.max(0,-(s*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+u*(u+2*l)+c);else u=s>0?-a:a,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Su).addScaledVector(Xo,u),p}intersectSphere(e,i){if(e.radius<0)return null;Dr.subVectors(e.center,this.origin);const r=Dr.dot(this.direction),n=Dr.dot(Dr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,i)}intersectsBox(e){return this.intersectBox(e,Dr)!==null}intersectTriangle(e,i,r,n,a){const s=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-s.x,u=e.y-s.y,p=e.z-s.z,m=i.x-s.x,S=i.y-s.y,g=i.z-s.z,d=r.x-s.x,v=r.y-s.y,M=r.z-s.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let C,x,T,A,U,k,Y,D,q,Q,J,V;if(y>=E&&y>=w?(T=l,k=f,q=m,V=d,l>=0?(C=c,x=h,A=u,U=p,Y=S,D=g,Q=v,J=M):(C=h,x=c,A=p,U=u,Y=g,D=S,Q=M,J=v)):E>=w?(T=c,k=u,q=S,V=v,c>=0?(C=h,x=l,A=p,U=f,Y=g,D=m,Q=M,J=d):(C=l,x=h,A=f,U=p,Y=m,D=g,Q=d,J=M)):(T=h,k=p,q=g,V=M,h>=0?(C=l,x=c,A=f,U=u,Y=m,D=S,Q=d,J=v):(C=c,x=l,A=u,U=f,Y=S,D=m,Q=v,J=d)),T===0)return null;const B=C/T,W=x/T,O=1/T,pe=A-B*k,ve=U-W*k,Pe=Y-B*q,Le=D-W*q,Ge=Q-B*V,$=J-W*V,ee=Ge*Le-$*Pe,Me=pe*$-ve*Ge,Ue=Pe*ve-Le*pe;if(n){if(ee<0||Me<0||Ue<0)return null}else if((ee<0||Me<0||Ue<0)&&(ee>0||Me>0||Ue>0))return null;const _e=ee+Me+Ue;if(_e===0)return null;const Ce=O*(ee*k+Me*q+Ue*V);return(_e>0?Ce<0:Ce>0)?null:this.at(Ce/_e,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class La extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const im=new Mt,Un=new vo,qo=new go,rm=new F,Ko=new F,$o=new F,Zo=new F,Mu=new F,Jo=new F,nm=new F,Qo=new F;class Ht extends ui{constructor(e=new _i,i=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,i){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;i.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Jo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&(Mu.fromBufferAttribute(f,e),s?Jo.addScaledVector(Mu,h):Jo.addScaledVector(Mu.sub(i),h))}i.add(Jo)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qo.copy(r.boundingSphere),qo.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(qo.containsPoint(Un.origin)===!1&&(Un.intersectSphere(qo,rm)===null||Un.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(a).invert(),Un.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Un.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Un)))}_computeIntersections(e,i,r){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){const g=u[m],d=s[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);n=el(this,d,e,r,c,h,f,w,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{const m=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=m,d=S;g<d;g+=3){const v=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);n=el(this,s,e,r,c,h,f,v,M,y),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){const g=u[m],d=s[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const w=y,C=y+1,x=y+2;n=el(this,d,e,r,c,h,f,w,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,i.push(n))}}else{const m=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=m,d=S;g<d;g+=3){const v=g,M=g+1,y=g+2;n=el(this,s,e,r,c,h,f,v,M,y),n&&(n.faceIndex=Math.floor(g/3),i.push(n))}}}}function eS(t,e,i,r,n,a,s,o){let l;if(e.side===li?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===Mn,o),l===null)return null;Qo.copy(o),Qo.applyMatrix4(t.matrixWorld);const c=i.ray.origin.distanceTo(Qo);return c<i.near||c>i.far?null:{distance:c,point:Qo.clone(),object:t}}function el(t,e,i,r,n,a,s,o,l,c){t.getVertexPosition(o,Ko),t.getVertexPosition(l,$o),t.getVertexPosition(c,Zo);const h=eS(t,e,i,r,Ko,$o,Zo,nm);if(h){const f=new F;ar.getBarycoord(nm,Ko,$o,Zo,f),n&&(h.uv=ar.getInterpolatedAttribute(n,o,l,c,f,new ke)),a&&(h.uv1=ar.getInterpolatedAttribute(a,o,l,c,f,new ke)),s&&(h.normal=ar.getInterpolatedAttribute(s,o,l,c,f,new F),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};ar.getNormal(Ko,$o,Zo,u.normal),h.face=u,h.barycoord=f}return h}class tS extends ci{constructor(e=null,i=1,r=1,n,a,s,o,l,c=Jt,h=Jt,f,u){super(null,s,o,l,c,h,n,a,f,u),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const On=new go,iS=new ke(.5,.5),tl=new F;class Mf{constructor(e=new Ur,i=new Ur,r=new Ur,n=new Ur,a=new Ur,s=new Ur){this.planes=[e,i,r,n,a,s]}set(e,i,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(i),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=br,r=!1){const n=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],p=a[7],m=a[8],S=a[9],g=a[10],d=a[11],v=a[12],M=a[13],y=a[14],E=a[15];if(n[0].setComponents(c-s,p-h,d-m,E-v).normalize(),n[1].setComponents(c+s,p+h,d+m,E+v).normalize(),n[2].setComponents(c+o,p+f,d+S,E+M).normalize(),n[3].setComponents(c-o,p-f,d-S,E-M).normalize(),r)n[4].setComponents(l,u,g,y).normalize(),n[5].setComponents(c-l,p-u,d-g,E-y).normalize();else if(n[4].setComponents(c-l,p-u,d-g,E-y).normalize(),i===br)n[5].setComponents(c+l,p+u,d+g,E+y).normalize();else if(i===so)n[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),On.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const i=iS.distanceTo(e.center);return On.radius=.7071067811865476+i,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const i=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(i[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const n=i[r];if(tl.x=n.normal.x>0?e.max.x:e.min.x,tl.y=n.normal.y>0?e.max.y:e.min.y,tl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends ia{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new F,sc=new F,am=new Mt,vs=new vo,il=new go,Eu=new F,sm=new F;class rS extends ui{constructor(e=new _i,i=new O0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let n=1,a=i.count;n<a;n++)ac.fromBufferAttribute(i,n-1),sc.fromBufferAttribute(i,n),r[n]=r[n-1],r[n]+=ac.distanceTo(sc);e.setAttribute("lineDistance",new di(r,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(n),il.radius+=a,e.ray.intersectsSphere(il)===!1)return;am.copy(n).invert(),vs.copy(e.ray).applyMatrix4(am);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=r.index,f=r.attributes.position;if(h!==null){const u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=u,S=p-1;m<S;m+=c){const g=h.getX(m),d=h.getX(m+1),v=rl(this,e,vs,l,g,d,m);v&&i.push(v)}if(this.isLineLoop){const m=h.getX(p-1),S=h.getX(u),g=rl(this,e,vs,l,m,S,p-1);g&&i.push(g)}}else{const u=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let m=u,S=p-1;m<S;m+=c){const g=rl(this,e,vs,l,m,m+1,m);g&&i.push(g)}if(this.isLineLoop){const m=rl(this,e,vs,l,p-1,u,p-1);m&&i.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function rl(t,e,i,r,n,a,s){const o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,n),sc.fromBufferAttribute(o,a),i.distanceSqToSegment(ac,sc,Eu,sm)>r)return;Eu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:sm.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}class nS extends rS{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class F0 extends ia{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new Mt,hh=new vo,nl=new go,al=new F;class aS extends ui{constructor(e=new _i,i=new F0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(n),nl.radius+=a,e.ray.intersectsSphere(nl)===!1)return;om.copy(n).invert(),hh.copy(e.ray).applyMatrix4(om);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,h=r.attributes.position;if(c!==null){const f=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=f,m=u;p<m;p++){const S=c.getX(p);al.fromBufferAttribute(h,S),lm(al,S,l,n,e,i,this)}}else{const f=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=f,m=u;p<m;p++)al.fromBufferAttribute(h,p),lm(al,p,l,n,e,i,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function lm(t,e,i,r,n,a,s){const o=hh.distanceSqToPoint(t);if(o<i){const l=new F;hh.closestPointToPoint(t,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class k0 extends ci{constructor(e=[],i=Jn,r,n,a,s,o,l,c,h){super(e,i,r,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zi extends ci{constructor(e,i,r,n,a,s,o,l,c){super(e,i,r,n,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends ci{constructor(e,i,r=wr,n,a,s,o=Jt,l=Jt,c,h=jr,f=1){if(h!==jr&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:i,depth:f};super(u,n,a,s,o,l,h,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class sS extends oo{constructor(e,i=wr,r=Jn,n,a,s=Jt,o=Jt,l,c=jr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,i,r,n,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class z0 extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends _i{constructor(e=1,i=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,r,i,e,s,a,0),m("z","y","x",1,-1,r,i,-e,s,a,1),m("x","z","y",1,1,e,r,i,n,s,2),m("x","z","y",1,-1,e,r,-i,n,s,3),m("x","y","z",1,-1,e,i,r,n,a,4),m("x","y","z",-1,-1,e,i,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(h,3)),this.setAttribute("uv",new di(f,2));function m(S,g,d,v,M,y,E,w,C,x,T){const A=y/C,U=E/x,k=y/2,Y=E/2,D=w/2,q=C+1,Q=x+1;let J=0,V=0;const B=new F;for(let W=0;W<Q;W++){const O=W*U-Y;for(let pe=0;pe<q;pe++){const ve=pe*A-k;B[S]=ve*v,B[g]=O*M,B[d]=D,c.push(B.x,B.y,B.z),B[S]=0,B[g]=0,B[d]=w>0?1:-1,h.push(B.x,B.y,B.z),f.push(pe/C),f.push(1-W/x),J+=1}}for(let W=0;W<x;W++)for(let O=0;O<C;O++){const pe=u+O+q*W,ve=u+O+q*(W+1),Pe=u+(O+1)+q*(W+1),Le=u+(O+1)+q*W;l.push(pe,ve,Le),l.push(ve,Pe,Le),V+=6}o.addGroup(p,V,T),p+=V,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ec extends _i{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};const a=e/2,s=i/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,f=e/o,u=i/l,p=[],m=[],S=[],g=[];for(let d=0;d<h;d++){const v=d*u-s;for(let M=0;M<c;M++){const y=M*f-a;m.push(y,-v,0),S.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const M=v+c*d,y=v+c*(d+1),E=v+1+c*(d+1),w=v+1+c*d;p.push(M,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new di(m,3)),this.setAttribute("normal",new di(S,3)),this.setAttribute("uv",new di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class ks extends _i{constructor(e=.5,i=1,r=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:n,thetaStart:a,thetaLength:s},r=Math.max(3,r),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let f=e;const u=(i-e)/n,p=new F,m=new ke;for(let S=0;S<=n;S++){for(let g=0;g<=r;g++){const d=a+g/r*s;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/i+1)/2,m.y=(p.y/i+1)/2,h.push(m.x,m.y)}f+=u}for(let S=0;S<n;S++){const g=S*(r+1);for(let d=0;d<r;d++){const v=d+g,M=v,y=v+r+1,E=v+r+2,w=v+1;o.push(M,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new di(l,3)),this.setAttribute("normal",new di(c,3)),this.setAttribute("uv",new di(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class on extends _i{constructor(e=1,i=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const h=[],f=new F,u=new F,p=[],m=[],S=[],g=[];for(let d=0;d<=r;d++){const v=[],M=d/r,y=s+M*o,E=e*Math.cos(y),w=Math.sqrt(e*e-E*E);let C=0;d===0&&s===0?C=.5/i:d===r&&l===Math.PI&&(C=-.5/i);for(let x=0;x<=i;x++){const T=x/i,A=n+T*a;f.x=-w*Math.cos(A),f.y=E,f.z=w*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),g.push(T+C,1-M),v.push(c++)}h.push(v)}for(let d=0;d<r;d++)for(let v=0;v<i;v++){const M=h[d][v+1],y=h[d][v],E=h[d+1][v],w=h[d+1][v+1];(d!==0||s>0)&&p.push(M,y,w),(d!==r-1||l<Math.PI)&&p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new di(m,3)),this.setAttribute("normal",new di(S,3)),this.setAttribute("uv",new di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ja(t){const e={};for(const i in t){e[i]={};for(const r in t[i]){const n=t[i][r];if(cm(n))n.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone();else if(Array.isArray(n))if(cm(n[0])){const a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();e[i][r]=a}else e[i][r]=n.slice();else e[i][r]=n}}return e}function mi(t){const e={};for(let i=0;i<t.length;i++){const r=Ja(t[i]);for(const n in r)e[n]=r[n]}return e}function cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function oS(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function B0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const lS={clone:Ja,merge:mi};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=oS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?i.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?i.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[n]={type:"m4",value:a.toArray()}:i.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const n=e.uniforms[r];switch(this.uniforms[r]={},n.type){case"t":this.uniforms[r].value=i[n.value]||null;break;case"c":this.uniforms[r].value=new Ve().setHex(n.value);break;case"v2":this.uniforms[r].value=new ke().fromArray(n.value);break;case"v3":this.uniforms[r].value=new F().fromArray(n.value);break;case"v4":this.uniforms[r].value=new It().fromArray(n.value);break;case"m3":this.uniforms[r].value=new je().fromArray(n.value);break;case"m4":this.uniforms[r].value=new Mt().fromArray(n.value);break;default:this.uniforms[r].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dS extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hS extends ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fS extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pS extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class H0 extends ui{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const wu=new Mt,um=new F,dm=new F;class mS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;um.setFromMatrixPosition(e.matrixWorld),i.position.copy(um),dm.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(dm),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,n){wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,s=n?n.z/a.x:1,o=n?n.w/a.y:1,l=n?n.x/a.x:0,c=n?n.y/a.y:0;e.coordinateSystem===so||e.reversedDepth?i.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):i.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sl=new F,ol=new En,pr=new F;class V0 extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=br,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,ol,pr),pr.x===1&&pr.y===1&&pr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,pr.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(sl,ol,pr),pr.x===1&&pr.y===1&&pr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,pr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nn=new F,hm=new ke,fm=new ke;class Ii extends V0{constructor(e=50,i=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nn.x,nn.y).multiplyScalar(-e/nn.z),nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nn.x,nn.y).multiplyScalar(-e/nn.z)}getViewSize(e,i){return this.getViewBounds(e,hm,fm),i.subVectors(fm,hm)}setViewOffset(e,i,r,n,a,s){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rl*.5*this.fov)/this.zoom,r=2*i,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,i-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gS extends mS{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0}}class vS extends H0{constructor(e,i,r=0,n=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new gS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class G0 extends V0{constructor(e=-1,i=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+i,l=n-i;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _S extends H0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,va=1;class xS extends ui{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ii(ga,va,e,i);n.layers=this.layers,this.add(n);const a=new Ii(ga,va,e,i);a.layers=this.layers,this.add(a);const s=new Ii(ga,va,e,i);s.layers=this.layers,this.add(s);const o=new Ii(ga,va,e,i);o.layers=this.layers,this.add(o);const l=new Ii(ga,va,e,i);l.layers=this.layers,this.add(l);const c=new Ii(ga,va,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,n,a,s,o,l]=i;for(const c of i)this.remove(c);if(e===br)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,a),e.setRenderTarget(r,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,s),e.setRenderTarget(r,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,o),e.setRenderTarget(r,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,l),e.setRenderTarget(r,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),r.texture.generateMipmaps=S,e.setRenderTarget(r,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,r.texture.needsPMREMUpdate=!0}}class yS extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pm=new Mt;class bS{constructor(e,i,r=0,n=1/0){this.ray=new vo(e,i),this.near=r,this.far=n,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):tt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pm),this}intersectObject(e,i=!0,r=[]){return fh(e,this,r,i),r.sort(mm),r}intersectObjects(e,i=!0,r=[]){for(let n=0,a=e.length;n<a;n++)fh(e[n],this,r,i);return r.sort(mm),r}}function mm(t,e){return t.distance-e.distance}function fh(t,e,i,r){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(n=!1),n===!0&&r===!0){const a=t.children;for(let s=0,o=a.length;s<o;s++)fh(a[s],e,i,!0)}}class gm{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos($e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class SS extends An{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vm(t,e,i,r){const n=MS(r);switch(i){case S0:return t*e;case E0:return t*e/n.components*n.byteLength;case gf:return t*e/n.components*n.byteLength;case Qn:return t*e*2/n.components*n.byteLength;case vf:return t*e*2/n.components*n.byteLength;case M0:return t*e*3/n.components*n.byteLength;case sr:return t*e*4/n.components*n.byteLength;case _f:return t*e*4/n.components*n.byteLength;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Fd:return Math.max(t,16)*Math.max(e,8)/4;case Id:case Od:return Math.max(t,8)*Math.max(e,8)/2;case kd:case zd:case Hd:case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:case ec:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nh:case ah:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case oh:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MS(t){switch(t){case Ui:case _0:return{byteLength:1,components:1};case no:case x0:case Tr:return{byteLength:2,components:1};case pf:case mf:return{byteLength:2,components:4};case wr:case ff:case yr:return{byteLength:4,components:1};case y0:case b0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function W0(){let t=null,e=!1,i=null,r=null;function n(a,s){r=t.requestAnimationFrame(n),i(a,s)}return{start:function(){e!==!0&&i!==null&&t!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){i=a},setContext:function(a){t=a}}}function ES(t){const e=new WeakMap;function i(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],S=f[p];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const S=f[p];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TS=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NS=`#ifdef USE_AOMAP
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
#endif`,DS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qS=`#define PI 3.141592653589793
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
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v1=`#ifdef USE_ENVMAP
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
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S1=`PhysicalMaterial material;
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
#endif`,M1=`uniform sampler2D dfgLUT;
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
}`,E1=`
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U1=`#if defined( USE_POINTS_UV )
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
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
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
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
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
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AM=`varying vec3 vWorldDirection;
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
}`,NM=`#include <common>
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
}`,DM=`#if DEPTH_PACKING == 3200
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
}`,LM=`#define DISTANCE
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
}`,VM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,KM=`#define STANDARD
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
}`,$M=`#define STANDARD
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
}`,ZM=`#define TOON
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
}`,JM=`#define TOON
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
}`,QM=`uniform float size;
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
}`,iE=`uniform vec3 color;
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
}`,rE=`uniform float rotation;
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
}`,Ye={alphahash_fragment:wS,alphahash_pars_fragment:TS,alphamap_fragment:CS,alphamap_pars_fragment:RS,alphatest_fragment:AS,alphatest_pars_fragment:PS,aomap_fragment:NS,aomap_pars_fragment:DS,batching_pars_vertex:LS,batching_vertex:IS,begin_vertex:US,beginnormal_vertex:OS,bsdfs:FS,iridescence_fragment:kS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:jS,color_pars_vertex:XS,color_vertex:YS,common:qS,cube_uv_reflection_fragment:KS,defaultnormal_vertex:$S,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:i1,envmap_fragment:r1,envmap_common_pars_fragment:n1,envmap_pars_fragment:a1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:v1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:d1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:f1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:_1,lights_toon_pars_fragment:x1,lights_phong_fragment:y1,lights_phong_pars_fragment:b1,lights_physical_fragment:S1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:w1,lights_fragment_end:T1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:N1,map_fragment:D1,map_pars_fragment:L1,map_particle_fragment:I1,map_particle_pars_fragment:U1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:F1,morphinstance_vertex:k1,morphcolor_vertex:z1,morphnormal_vertex:B1,morphtarget_pars_vertex:H1,morphtarget_vertex:V1,normal_fragment_begin:G1,normal_fragment_maps:W1,normal_pars_fragment:j1,normal_pars_vertex:X1,normal_vertex:Y1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:Q1,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:nM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:oM,shadowmap_pars_vertex:lM,shadowmap_vertex:cM,shadowmask_pars_fragment:uM,skinbase_vertex:dM,skinning_pars_vertex:hM,skinning_vertex:fM,skinnormal_vertex:pM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:vM,tonemapping_pars_fragment:_M,transmission_fragment:xM,transmission_pars_fragment:yM,uv_pars_fragment:bM,uv_pars_vertex:SM,uv_vertex:MM,worldpos_vertex:EM,background_vert:wM,background_frag:TM,backgroundCube_vert:CM,backgroundCube_frag:RM,cube_vert:AM,cube_frag:PM,depth_vert:NM,depth_frag:DM,distance_vert:LM,distance_frag:IM,equirect_vert:UM,equirect_frag:OM,linedashed_vert:FM,linedashed_frag:kM,meshbasic_vert:zM,meshbasic_frag:BM,meshlambert_vert:HM,meshlambert_frag:VM,meshmatcap_vert:GM,meshmatcap_frag:WM,meshnormal_vert:jM,meshnormal_frag:XM,meshphong_vert:YM,meshphong_frag:qM,meshphysical_vert:KM,meshphysical_frag:$M,meshtoon_vert:ZM,meshtoon_frag:JM,points_vert:QM,points_frag:eE,shadow_vert:tE,shadow_frag:iE,sprite_vert:rE,sprite_frag:nE},fe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_r={basic:{uniforms:mi([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:mi([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:mi([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:mi([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:mi([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:mi([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:mi([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:mi([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:mi([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:mi([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:mi([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:mi([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:mi([fe.lights,fe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};_r.physical={uniforms:mi([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ll={r:0,b:0,g:0},aE=new Mt,j0=new je;j0.set(-1,0,0,0,1,0,0,0,1);function sE(t,e,i,r,n,a){const s=new Ve(0);let o=n===!0?0:1,l,c,h=null,f=0,u=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(v){let M=!1;const y=p(v);y===null?g(s,o):y&&y.isColor&&(g(y,1),M=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===Mc)?(c===void 0&&(c=new Ht(new _o(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ja(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(j0),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,(h!==y||f!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ht(new Ec(2,2),new xi({name:"BackgroundMaterial",uniforms:Ja(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(ll,B0(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,M,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,M=1){s.set(v),o=M,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(s,o)},render:m,addToRenderList:S,dispose:d}}function oE(t,e){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=u(null);let a=n,s=!1;function o(U,k,Y,D,q){let Q=!1;const J=f(U,D,Y,k);a!==J&&(a=J,c(a.object)),Q=p(U,D,Y,q),Q&&m(U,D,Y,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,y(U,k,Y,D),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function h(U){return t.deleteVertexArray(U)}function f(U,k,Y,D){const q=D.wireframe===!0;let Q=r[k.id];Q===void 0&&(Q={},r[k.id]=Q);const J=U.isInstancedMesh===!0?U.id:0;let V=Q[J];V===void 0&&(V={},Q[J]=V);let B=V[Y.id];B===void 0&&(B={},V[Y.id]=B);let W=B[q];return W===void 0&&(W=u(l()),B[q]=W),W}function u(U){const k=[],Y=[],D=[];for(let q=0;q<i;q++)k[q]=0,Y[q]=0,D[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:D,object:U,attributes:{},index:null}}function p(U,k,Y,D){const q=a.attributes,Q=k.attributes;let J=0;const V=Y.getAttributes();for(const B in V)if(V[B].location>=0){const W=q[B];let O=Q[B];if(O===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),W===void 0||W.attribute!==O||O&&W.data!==O.data)return!0;J++}return a.attributesNum!==J||a.index!==D}function m(U,k,Y,D){const q={},Q=k.attributes;let J=0;const V=Y.getAttributes();for(const B in V)if(V[B].location>=0){let W=Q[B];W===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const O={};O.attribute=W,W&&W.data&&(O.data=W.data),q[B]=O,J++}a.attributes=q,a.attributesNum=J,a.index=D}function S(){const U=a.newAttributes;for(let k=0,Y=U.length;k<Y;k++)U[k]=0}function g(U){d(U,0)}function d(U,k){const Y=a.newAttributes,D=a.enabledAttributes,q=a.attributeDivisors;Y[U]=1,D[U]===0&&(t.enableVertexAttribArray(U),D[U]=1),q[U]!==k&&(t.vertexAttribDivisor(U,k),q[U]=k)}function v(){const U=a.newAttributes,k=a.enabledAttributes;for(let Y=0,D=k.length;Y<D;Y++)k[Y]!==U[Y]&&(t.disableVertexAttribArray(Y),k[Y]=0)}function M(U,k,Y,D,q,Q,J){J===!0?t.vertexAttribIPointer(U,k,Y,q,Q):t.vertexAttribPointer(U,k,Y,D,q,Q)}function y(U,k,Y,D){S();const q=D.attributes,Q=Y.getAttributes(),J=k.defaultAttributeValues;for(const V in Q){const B=Q[V];if(B.location>=0){let W=q[V];if(W===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){const O=W.normalized,pe=W.itemSize,ve=e.get(W);if(ve===void 0)continue;const Pe=ve.buffer,Le=ve.type,Ge=ve.bytesPerElement,$=Le===t.INT||Le===t.UNSIGNED_INT||W.gpuType===ff;if(W.isInterleavedBufferAttribute){const ee=W.data,Me=ee.stride,Ue=W.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)d(B.location+_e,ee.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<B.locationSize;_e++)g(B.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let _e=0;_e<B.locationSize;_e++)M(B.location+_e,pe/B.locationSize,Le,O,Me*Ge,(Ue+pe/B.locationSize*_e)*Ge,$)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<B.locationSize;ee++)d(B.location+ee,W.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<B.locationSize;ee++)g(B.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ee=0;ee<B.locationSize;ee++)M(B.location+ee,pe/B.locationSize,Le,O,pe*Ge,pe/B.locationSize*ee*Ge,$)}}else if(J!==void 0){const O=J[V];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(B.location,O);break;case 3:t.vertexAttrib3fv(B.location,O);break;case 4:t.vertexAttrib4fv(B.location,O);break;default:t.vertexAttrib1fv(B.location,O)}}}}v()}function E(){T();for(const U in r){const k=r[U];for(const Y in k){const D=k[Y];for(const q in D){const Q=D[q];for(const J in Q)h(Q[J].object),delete Q[J];delete D[q]}}delete r[U]}}function w(U){if(r[U.id]===void 0)return;const k=r[U.id];for(const Y in k){const D=k[Y];for(const q in D){const Q=D[q];for(const J in Q)h(Q[J].object),delete Q[J];delete D[q]}}delete r[U.id]}function C(U){for(const k in r){const Y=r[k];for(const D in Y){const q=Y[D];if(q[U.id]===void 0)continue;const Q=q[U.id];for(const J in Q)h(Q[J].object),delete Q[J];delete q[U.id]}}}function x(U){for(const k in r){const Y=r[k],D=U.isInstancedMesh===!0?U.id:0,q=Y[D];if(q!==void 0){for(const Q in q){const J=q[Q];for(const V in J)h(J[V].object),delete J[V];delete q[Q]}delete Y[D],Object.keys(Y).length===0&&delete r[k]}}}function T(){A(),s=!0,a!==n&&(a=n,c(a.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function lE(t,e,i){let r;function n(l){r=l}function a(l,c){t.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(t.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];i.update(f,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function cE(t,e,i,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){return!(C!==sr&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ui&&C!==yr&&!x&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:w}}function uE(t){const e=this;let i=null,r=0,n=!1,a=!1;const s=new Ur,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||r!==0||n;return n=u,r=f.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){i=h(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!n||m===null||m.length===0||a&&!g)a?h(null):c();else{const v=a?0:r,M=v*4;let y=d.clippingState||null;l.value=y,y=h(m,u,M,p);for(let E=0;E!==M;++E)y[E]=i[E];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(f,u,p,m){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,m!==!0||g===null){const d=p+S*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,y=p;M!==S;++M,y+=4)s.copy(f[M]).applyMatrix4(v,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const Ia=4,dE=6,hE=20,fE=256,_s=new G0,_m=new Ve;let Tu=null,Cu=0,Ru=0,Au=!1;const pE=new F,Fn=new F;class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,n=100,a={}){const{size:s=256,position:o=pE}=a;Tu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,n,l,o),i>0&&this._blur(l,0,0,i),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Cu,Ru),this._renderer.xr.enabled=Au,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Jn||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Tr,format:sr,colorSpace:ic,depthBuffer:!1},n=ym(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,i,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mE(a)),this._blurMaterial=vE(a,e,i),this._ggxMaterial=gE(a,e,i)}return n}_compileMaterial(e){const i=new Ht(new _i,e);this._renderer.compile(i,_s)}_sceneToCubeUV(e,i,r,n,a){const s=new Ii(90,1,i,r),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(_m),c.toneMapping=Er,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(n),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new _o,new La({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,p=u.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(_m),m=!0);for(let g=0;g<6;g++){const d=g%3;d===0?(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+l[g],a.y,a.z)):d===1?(s.up.set(0,0,o[g]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+l[g],a.z)):(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+l[g]));const v=this._cubeSize;_a(n,d*v,g>2?v:0,v,v),c.setRenderTarget(n),m&&c.render(u,s),c.render(e,s)}c.toneMapping=f,c.autoClear=h,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,n=e.mapping===Jn||e.mapping===Za;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const a=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(i,0,0,3*l,2*l),r.setRenderTarget(i),r.render(s,_s)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);i.autoClear=r}_applyGGXFilter(e,i,r){const n=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[r];o.material=s;const l=s.uniforms,c=r/(this._lodMeshes.length-1),h=i/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:m}=this,S=this._sizeLods[r],g=3*S*(r>m-Ia?r-m+Ia:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-i,_a(a,g,d,3*S,2*S),n.setRenderTarget(a),n.render(o,_s),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-r,_a(e,g,d,3*S,2*S),n.setRenderTarget(e),n.render(o,_s)}_blur(e,i,r,n){const a=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,a,i,r,s),this._blurPass(a,e,r,r,s)}_blurPass(e,i,r,n,a){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-r;const h=this._sizeLods[n],f=3*h*(n>this._lodMax-Ia?n-this._lodMax+Ia:0),u=4*(this._cubeSize-h);_a(i,f,u,3*h,2*h),s.setRenderTarget(i),s.render(l,_s)}}function mE(t){const e=[],i=[];let r=t;const n=t-Ia+1+dE;for(let a=0;a<n;a++){const s=Math.pow(2,r);e.push(s);const o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,m=new Float32Array(p*u*f),S=new Float32Array(p*u*f);for(let d=0;d<f;d++){const v=d%3*2/3-1,M=d>2?0:-1,y=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(y,p*u*d);for(let E=0;E<u;E++){const w=h[E*2]*2-1,C=h[E*2+1]*2-1;d===0?Fn.set(1,C,w):d===1?Fn.set(-w,1,-C):d===2?Fn.set(-w,C,1):d===3?Fn.set(-1,C,-w):d===4?Fn.set(-w,-1,C):Fn.set(w,C,-1),Fn.toArray(S,(d*u+E)*p)}}const g=new _i;g.setAttribute("position",new ur(m,p)),g.setAttribute("outputDirection",new ur(S,p)),i.push(new Ht(g,null)),r>Ia&&r--}return{lodMeshes:i,sizeLods:e}}function ym(t,e,i){const r=new cr(t,e,i);return r.texture.mapping=Mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _a(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function gE(t,e,i){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function vE(t,e,i){return new xi({name:"SphericalGaussianBlur",defines:{SAMPLES:hE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function bm(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Sm(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class X0 extends cr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new k0(n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new _o(5,5,5),a=new xi({name:"CubemapFromEquirect",uniforms:Ja(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:zr});a.uniforms.tEquirect.value=i;const s=new Ht(n,a),o=i.minFilter;return i.minFilter===Gn&&(i.minFilter=oi),new xS(1,10,this).update(e,s),i.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,i=!0,r=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(i,r,n);e.setRenderTarget(a)}}function _E(t){let e=new WeakMap,i=new WeakMap,r=null;function n(u,p=!1){return u==null?null:p?s(u):a(u)}function a(u){if(u&&u.isTexture){const p=u.mapping;if(p===Qc||p===eu)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const S=new X0(m.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,m=p===Qc||p===eu,S=p===Jn||p===Za;if(m||S){let g=i.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new xm(t)),g=m?r.fromEquirectangular(u,g):r.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||S&&v&&l(v)?(r===null&&(r=new xm(t)),g=m?r.fromEquirectangular(u):r.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Qc?u.mapping=Jn:p===eu&&(u.mapping=Za),u}function l(u){let p=0;const m=6;for(let S=0;S<m;S++)u[S]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const m=i.get(p);m!==void 0&&(i.delete(p),m.dispose())}function f(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:f}}function xE(t){const e={};function i(r){if(e[r]!==void 0)return e[r];const n=t.getExtension(r);return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const n=i(r);return n===null&&Va("WebGLRenderer: "+r+" extension not supported."),n}}}function yE(t,e,i,r){const n={},a=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete n[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(f,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,i.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,m=f.attributes.position;let S=0;if(m===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let M=0,y=v.length;M<y;M+=3){const E=v[M+0],w=v[M+1],C=v[M+2];u.push(E,w,w,C,C,E)}}else{const v=m.array;S=m.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const E=M+0,w=M+1,C=M+2;u.push(E,w,w,C,C,E)}}const g=new(m.count>=65535?U0:I0)(u,1);g.version=S;const d=a.get(f);d&&e.remove(d),a.set(f,g)}function h(f){const u=a.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function bE(t,e,i){let r;function n(f){r=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,u){t.drawElements(r,u,a,f*s),i.update(u,r,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(r,u,a,f*s,p),i.update(u,r,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,a,f,0,p);let m=0;for(let S=0;S<p;S++)m+=u[S];i.update(m,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function SE(t){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(i.calls++,s){case t.TRIANGLES:i.triangles+=o*(a/3);break;case t.LINES:i.lines+=o*(a/2);break;case t.LINE_STRIP:i.lines+=o*(a-1);break;case t.LINE_LOOP:i.lines+=o*a;break;case t.POINTS:i.points+=o*a;break;default:tt("WebGLInfo: Unknown draw mode:",s);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}function ME(t,e,i){const r=new WeakMap,n=new It;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=r.get(o);if(u===void 0||u.count!==f){let p=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*w*4*f),x=new P0(C,E,w,f);x.type=yr,x.needsUpdate=!0;const T=y*4;for(let A=0;A<f;A++){const U=d[A],k=v[A],Y=M[A],D=E*w*4*A;for(let q=0;q<U.count;q++){const Q=q*T;m===!0&&(n.fromBufferAttribute(U,q),C[D+Q+0]=n.x,C[D+Q+1]=n.y,C[D+Q+2]=n.z,C[D+Q+3]=0),S===!0&&(n.fromBufferAttribute(k,q),C[D+Q+4]=n.x,C[D+Q+5]=n.y,C[D+Q+6]=n.z,C[D+Q+7]=0),g===!0&&(n.fromBufferAttribute(Y,q),C[D+Q+8]=n.x,C[D+Q+9]=n.y,C[D+Q+10]=n.z,C[D+Q+11]=Y.itemSize===4?n.w:1)}}u={count:f,texture:x,size:new ke(E,w)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,i);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:a}}function EE(t,e,i,r,n){let a=new WeakMap;function s(c){const h=n.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(i.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,t.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}const wE={[u0]:"LINEAR_TONE_MAPPING",[d0]:"REINHARD_TONE_MAPPING",[h0]:"CINEON_TONE_MAPPING",[f0]:"ACES_FILMIC_TONE_MAPPING",[m0]:"AGX_TONE_MAPPING",[g0]:"NEUTRAL_TONE_MAPPING",[p0]:"CUSTOM_TONE_MAPPING"};function TE(t,e,i,r,n,a){const s=new cr(e,i,{type:t,depthBuffer:n,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new _i;c.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new di([0,2,0,0,2,0],2));const h=new dS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ht(c,h),u=new G0(-1,1,1,-1,0,1);let p=null,m=null,S=!1,g,d=null,v=[],M=!1;this.setSize=function(y,E){s.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let w=0;w<v.length;w++){const C=v[w];C.setSize&&C.setSize(y,E)}},this.setEffects=function(y){v=y,M=v.length>0&&v[0].isRenderPass===!0;const E=s.width,w=s.height;v.length>0&&o===null&&(o=new cr(E,w,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),l=new cr(E,w,{type:Tr,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const x=v[C];x.setSize&&x.setSize(E,w)}},this.begin=function(y,E){if(S||y.toneMapping===Er&&v.length===0)return!1;if(d=E,E!==null){const w=E.width,C=E.height;(s.width!==w||s.height!==C)&&this.setSize(w,C)}return M===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Er,!0},this.hasRenderPass=function(){return M},this.end=function(y,E){y.toneMapping=g,S=!0;let w=s,C=o;for(let x=0;x<v.length;x++){const T=v[x];T.enabled!==!1&&(T.render(y,C,w,E),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,h.defines={},Je.getTransfer(p)===at&&(h.defines.SRGB_TRANSFER="");const x=wE[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(f,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Y0=new ci,ph=new oo(1,1),q0=new P0,K0=new zb,$0=new k0,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Cm=new Float32Array(4);function is(t,e,i){const r=t[0];if(r<=0||r>0)return t;const n=e*i;let a=Mm[n];if(a===void 0&&(a=new Float32Array(n),Mm[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=i,t[s].toArray(a,o)}return a}function Wt(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function jt(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Tc(t,e){let i=Em[e];i===void 0&&(i=new Int32Array(e),Em[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function CE(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function RE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wt(i,e))return;t.uniform2fv(this.addr,e),jt(i,e)}}function AE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Wt(i,e))return;t.uniform3fv(this.addr,e),jt(i,e)}}function PE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wt(i,e))return;t.uniform4fv(this.addr,e),jt(i,e)}}function NE(t,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(i,e)}else{if(Wt(i,r))return;Cm.set(r),t.uniformMatrix2fv(this.addr,!1,Cm),jt(i,r)}}function DE(t,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(i,e)}else{if(Wt(i,r))return;Tm.set(r),t.uniformMatrix3fv(this.addr,!1,Tm),jt(i,r)}}function LE(t,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(i,e)}else{if(Wt(i,r))return;wm.set(r),t.uniformMatrix4fv(this.addr,!1,wm),jt(i,r)}}function IE(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function UE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wt(i,e))return;t.uniform2iv(this.addr,e),jt(i,e)}}function OE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wt(i,e))return;t.uniform3iv(this.addr,e),jt(i,e)}}function FE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wt(i,e))return;t.uniform4iv(this.addr,e),jt(i,e)}}function kE(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function zE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wt(i,e))return;t.uniform2uiv(this.addr,e),jt(i,e)}}function BE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wt(i,e))return;t.uniform3uiv(this.addr,e),jt(i,e)}}function HE(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wt(i,e))return;t.uniform4uiv(this.addr,e),jt(i,e)}}function VE(t,e,i){const r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(ph.compareFunction=i.isReversedDepthBuffer()?yf:xf,a=ph):a=Y0,i.setTexture2D(e||a,n)}function GE(t,e,i){const r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||K0,n)}function WE(t,e,i){const r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||$0,n)}function jE(t,e,i){const r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||q0,n)}function XE(t){switch(t){case 5126:return CE;case 35664:return RE;case 35665:return AE;case 35666:return PE;case 35674:return NE;case 35675:return DE;case 35676:return LE;case 5124:case 35670:return IE;case 35667:case 35671:return UE;case 35668:case 35672:return OE;case 35669:case 35673:return FE;case 5125:return kE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return jE}}function YE(t,e){t.uniform1fv(this.addr,e)}function qE(t,e){const i=is(e,this.size,2);t.uniform2fv(this.addr,i)}function KE(t,e){const i=is(e,this.size,3);t.uniform3fv(this.addr,i)}function $E(t,e){const i=is(e,this.size,4);t.uniform4fv(this.addr,i)}function ZE(t,e){const i=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function JE(t,e){const i=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function QE(t,e){const i=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function ew(t,e){t.uniform1iv(this.addr,e)}function tw(t,e){t.uniform2iv(this.addr,e)}function iw(t,e){t.uniform3iv(this.addr,e)}function rw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function aw(t,e){t.uniform2uiv(this.addr,e)}function sw(t,e){t.uniform3uiv(this.addr,e)}function ow(t,e){t.uniform4uiv(this.addr,e)}function lw(t,e,i){const r=this.cache,n=e.length,a=Tc(i,n);Wt(r,a)||(t.uniform1iv(this.addr,a),jt(r,a));let s;this.type===t.SAMPLER_2D_SHADOW?s=ph:s=Y0;for(let o=0;o!==n;++o)i.setTexture2D(e[o]||s,a[o])}function cw(t,e,i){const r=this.cache,n=e.length,a=Tc(i,n);Wt(r,a)||(t.uniform1iv(this.addr,a),jt(r,a));for(let s=0;s!==n;++s)i.setTexture3D(e[s]||K0,a[s])}function uw(t,e,i){const r=this.cache,n=e.length,a=Tc(i,n);Wt(r,a)||(t.uniform1iv(this.addr,a),jt(r,a));for(let s=0;s!==n;++s)i.setTextureCube(e[s]||$0,a[s])}function dw(t,e,i){const r=this.cache,n=e.length,a=Tc(i,n);Wt(r,a)||(t.uniform1iv(this.addr,a),jt(r,a));for(let s=0;s!==n;++s)i.setTexture2DArray(e[s]||q0,a[s])}function hw(t){switch(t){case 5126:return YE;case 35664:return qE;case 35665:return KE;case 35666:return $E;case 35674:return ZE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return nw;case 36294:return aw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}class fw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XE(i.type)}}class pw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hw(i.type)}}class mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,i[o.id],r)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Rm(t,e){t.seq.push(e),t.map[e.id]=e}function gw(t,e,i){const r=t.name,n=r.length;for(Pu.lastIndex=0;;){const a=Pu.exec(r),s=Pu.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Rm(i,c===void 0?new fw(o,t,e):new pw(o,t,e));break}else{let h=i.map[o];h===void 0&&(h=new mw(o),Rm(i,h)),i=h}}}class Al{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const o=e.getActiveUniform(i,s),l=e.getUniformLocation(i,o.name);gw(o,l,this)}const n=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):a.push(s);n.length>0&&(this.seq=n.concat(a))}setValue(e,i,r,n){const a=this.map[i];a!==void 0&&a.setValue(e,r,n)}setOptional(e,i,r){const n=i[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,i,r,n){for(let a=0,s=i.length;a!==s;++a){const o=i[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,i){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in i&&r.push(s)}return r}}function Am(t,e,i){const r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}const vw=37297;let _w=0;function xw(t,e){const i=t.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,i.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}const Pm=new je;function yw(t){Je._getMatrix(Pm,Je.workingColorSpace,t);const e=`mat3( ${Pm.elements.map(i=>i.toFixed(4))} )`;switch(Je.getTransfer(t)){case rc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Nm(t,e,i){const r=t.getShaderParameter(e,t.COMPILE_STATUS),n=(t.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return i.toUpperCase()+`

`+n+`

`+xw(t.getShaderSource(e),s)}else return n}function bw(t,e){const i=yw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Sw={[u0]:"Linear",[d0]:"Reinhard",[h0]:"Cineon",[f0]:"ACESFilmic",[m0]:"AgX",[g0]:"Neutral",[p0]:"Custom"};function Mw(t,e){const i=Sw[e];return i===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cl=new F;function Ew(){Je.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),i=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Tw(t){const e=[];for(const i in t){const r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Cw(t,e){const i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=t.getActiveAttrib(e,n),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),i[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return i}function Cs(t){return t!==""}function Dm(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(Rw,Pw)}const Aw=new Map;function Pw(t,e){let i=Ye[e];if(i===void 0){const r=Aw.get(e);if(r!==void 0)i=Ye[r],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(i)}const Nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(Nw,Dw)}function Dw(t,e,i,r){let n="";for(let a=parseInt(e);a<parseInt(i);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Um(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Lw={[Ml]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function Iw(t){return Lw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uw={[Jn]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function Ow(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Uw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fw={[Za]:"ENVMAP_MODE_REFRACTION"};function kw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Fw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zw={[c0]:"ENVMAP_BLENDING_MULTIPLY",[mb]:"ENVMAP_BLENDING_MIX",[gb]:"ENVMAP_BLENDING_ADD"};function Bw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":zw[t.combine]||"ENVMAP_BLENDING_NONE"}function Hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Vw(t,e,i,r){const n=t.getContext(),a=i.defines;let s=i.vertexShader,o=i.fragmentShader;const l=Iw(i),c=Ow(i),h=kw(i),f=Bw(i),u=Hw(i),p=ww(i),m=Tw(a),S=n.createProgram();let g,d,v=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Cs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Cs).join(`
`),d.length>0&&(d+=`
`)):(g=[Um(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),d=[Um(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Er?"#define TONE_MAPPING":"",i.toneMapping!==Er?Ye.tonemapping_pars_fragment:"",i.toneMapping!==Er?Mw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,bw("linearToOutputTexel",i.outputColorSpace),Ew(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cs).join(`
`)),s=mh(s),s=Dm(s,i),s=Lm(s,i),o=mh(o),o=Dm(o,i),o=Lm(o,i),s=Im(s),o=Im(o),i.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",i.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+g+s,y=v+d+o,E=Am(n,n.VERTEX_SHADER,M),w=Am(n,n.FRAGMENT_SHADER,y);n.attachShader(S,E),n.attachShader(S,w),i.index0AttributeName!==void 0?n.bindAttribLocation(S,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function C(U){if(t.debug.checkShaderErrors){const k=n.getProgramInfoLog(S)||"",Y=n.getShaderInfoLog(E)||"",D=n.getShaderInfoLog(w)||"",q=k.trim(),Q=Y.trim(),J=D.trim();let V=!0,B=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,E,w);else{const W=Nm(n,E,"vertex"),O=Nm(n,w,"fragment");tt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+W+`
`+O)}else q!==""?Oe("WebGLProgram: Program Info Log:",q):(Q===""||J==="")&&(B=!1);B&&(U.diagnostics={runnable:V,programLog:q,vertexShader:{log:Q,prefix:g},fragmentShader:{log:J,prefix:d}})}n.deleteShader(E),n.deleteShader(w),x=new Al(n,S),T=Cw(n,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(S,vw)),A},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_w++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}let Gw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(r)===!1&&(n.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jw(e),i.set(e,r)),r}}class jw{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function Xw(t){return t===Qn||t===ec||t===tc}function Yw(t,e,i,r,n,a){const s=new Sf,o=new Ww,l=new Set,c=[],h=new Map,f=r.logarithmicDepthBuffer;let u=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,A,U,k,Y){const D=U.fog,q=k.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||Q,J),B=V&&V.mapping===Mc?V.image.height:null,W=p[x.type];x.precision!==null&&(u=r.getMaxPrecision(x.precision),u!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const O=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=O!==void 0?O.length:0;let ve=0;q.morphAttributes.position!==void 0&&(ve=1),q.morphAttributes.normal!==void 0&&(ve=2),q.morphAttributes.color!==void 0&&(ve=3);let Pe,Le,Ge,$;if(W){const Xe=_r[W];Pe=Xe.vertexShader,Le=Xe.fragmentShader}else{Pe=x.vertexShader,Le=x.fragmentShader;const Xe=o.getVertexShaderStage(x),Fe=o.getFragmentShaderStage(x);o.update(x,Xe,Fe),Ge=Xe.id,$=Fe.id}const ee=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Ce=!!x.map,et=!!x.matcap,We=!!V,Be=!!x.aoMap,Ut=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,At=!!x.displacementMap,Ot=!!x.emissiveMap,mt=!!x.metalnessMap,wt=!!x.roughnessMap,L=x.anisotropy>0,Pt=x.clearcoat>0,nt=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,j=x.transmission>0,Z=L&&!!x.anisotropyMap,de=Pt&&!!x.clearcoatMap,he=Pt&&!!x.clearcoatNormalMap,I=Pt&&!!x.clearcoatRoughnessMap,le=_&&!!x.iridescenceMap,ce=_&&!!x.iridescenceThicknessMap,xe=z&&!!x.sheenColorMap,ne=z&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Te=!!x.specularColorMap,Ie=!!x.specularIntensityMap,He=j&&!!x.transmissionMap,P=j&&!!x.thicknessMap,ie=!!x.gradientMap,ae=!!x.alphaMap,ge=x.alphaTest>0,ye=!!x.alphaHash,te=!!x.extensions;let re=Er;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(re=t.toneMapping);const oe={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:Le,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:et,envMap:We,envMapMode:We&&V.mapping,envMapCubeUVHeight:B,aoMap:Be,lightMap:Ut,bumpMap:_t,normalMap:dt,displacementMap:At,emissiveMap:Ot,normalMapObjectSpace:dt&&x.normalMapType===xb,normalMapTangentSpace:dt&&x.normalMapType===uh,packedNormalMap:dt&&x.normalMapType===uh&&Xw(x.normalMap.format),metalnessMap:mt,roughnessMap:wt,anisotropy:L,anisotropyMap:Z,clearcoat:Pt,clearcoatMap:de,clearcoatNormalMap:he,clearcoatRoughnessMap:I,dispersion:nt,retroreflection:R,iridescence:_,iridescenceMap:le,iridescenceThicknessMap:ce,sheen:z,sheenColorMap:xe,sheenRoughnessMap:ne,specularMap:Ne,specularColorMap:Te,specularIntensityMap:Ie,transmission:j,transmissionMap:He,thicknessMap:P,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:ge,alphaHash:ye,combine:x.combine,mapUv:Ce&&m(x.map.channel),aoMapUv:Be&&m(x.aoMap.channel),lightMapUv:Ut&&m(x.lightMap.channel),bumpMapUv:_t&&m(x.bumpMap.channel),normalMapUv:dt&&m(x.normalMap.channel),displacementMapUv:At&&m(x.displacementMap.channel),emissiveMapUv:Ot&&m(x.emissiveMap.channel),metalnessMapUv:mt&&m(x.metalnessMap.channel),roughnessMapUv:wt&&m(x.roughnessMap.channel),anisotropyMapUv:Z&&m(x.anisotropyMap.channel),clearcoatMapUv:de&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&m(x.sheenRoughnessMap.channel),specularMapUv:Ne&&m(x.specularMap.channel),specularColorMapUv:Te&&m(x.specularColorMap.channel),specularIntensityMapUv:Ie&&m(x.specularIntensityMap.channel),transmissionMapUv:He&&m(x.transmissionMap.channel),thicknessMapUv:P&&m(x.thicknessMap.channel),alphaMapUv:ae&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(dt||L),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ce||ae),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ve,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ji,flipSided:x.side===li,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:te&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&x.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)T.push(A),T.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(d(T,x),v(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function M(x){const T=p[x.type];let A;if(T){const U=_r[T];A=lS.clone(U.uniforms)}else A=x.uniforms;return A}function y(x,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new Vw(t,T,x,n),c.push(A),h.set(T,A)),A}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function qw(){let t=new WeakMap;function e(s){return t.has(s)}function i(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function r(s){t.delete(s)}function n(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:a}}function Kw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fm(){const t=[];let e=0;const i=[],r=[],n=[];function a(){e=0,i.length=0,r.length=0,n.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,S,g,d){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:d},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=s(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=g,v.group=d),e++,v}function l(u,p,m,S,g,d,v){v.reversedDepth===!0&&(g=-g);const M=o(u,p,m,S,g,d);m.transmission>0?r.push(M):m.transparent===!0?n.push(M):i.push(M)}function c(u,p,m,S,g,d){const v=o(u,p,m,S,g,d);m.transmission>0?r.unshift(v):m.transparent===!0?n.unshift(v):i.unshift(v)}function h(u,p){i.length>1&&i.sort(u||Kw),r.length>1&&r.sort(p||Om),n.length>1&&n.sort(p||Om)}function f(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:n,init:a,push:l,unshift:c,finish:f,sort:h}}function $w(){let t=new WeakMap;function e(r,n){const a=t.get(r);let s;return a===void 0?(s=new Fm,t.set(r,[s])):n>=a.length?(s=new Fm,a.push(s)):s=a[n],s}function i(){t=new WeakMap}return{get:e,dispose:i}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new Ve};break;case"SpotLight":i={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=i,i}}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}let Qw=0;function eT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tT(t){const e=new Zw,i=Jw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const n=new F,a=new Mt,s=new Mt;function o(c){let h=0,f=0,u=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let p=0,m=0,S=0,g=0,d=0,v=0,M=0,y=0,E=0,w=0,C=0,x=0,T=0,A=0;c.sort(eT);for(let k=0,Y=c.length;k<Y;k++){const D=c[k],q=D.color,Q=D.intensity,J=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Qn?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=q.r*Q,f+=q.g*Q,u+=q.b*Q;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],Q);A++}else if(D.isSunLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,O=i.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),r.sunShadow[m]=O,r.sunShadowMap[m]=V;const pe=W.getViewportCount();for(let ve=0;ve<pe;ve++)r.sunShadowMatrix[S+ve]=W.getMatrix(ve),r.sunShadowCascade[S+ve]=W._cascadeData[ve];S+=pe,m++}r.sun[p]=B,p++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,O=i.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,r.directionalShadow[g]=O,r.directionalShadowMap[g]=V,r.directionalShadowMatrix[g]=D.shadow.matrix,E++}r.directional[g]=B,g++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(q).multiplyScalar(Q),B.distance=J,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[v]=B;const W=D.shadow;if(D.map&&(r.spotLightMap[x]=D.map,x++,W.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[v]=W.matrix,D.castShadow){const O=i.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,r.spotShadow[v]=O,r.spotShadowMap[v]=V,C++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(q).multiplyScalar(Q),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[M]=B,M++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const W=D.shadow,O=i.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,r.pointShadow[d]=O,r.pointShadowMap[d]=V,r.pointShadowMatrix[d]=D.shadow.matrix,w++}r.point[d]=B,d++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(Q),B.groundColor.copy(D.groundColor).multiplyScalar(Q),r.hemi[y]=B,y++}}M>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=u;const U=r.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==M||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==A)&&(r.sun.length=p,r.directional.length=g,r.spot.length=v,r.rectArea.length=M,r.point.length=d,r.hemi.length=y,r.sunShadow.length=m,r.sunShadowMap.length=m,r.sunShadowMatrix.length=S,r.sunShadowCascade.length=S,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.directionalShadowMatrix.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+x-T,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=A,U.sunLength=p,U.directionalLength=g,U.pointLength=d,U.spotLength=v,U.rectAreaLength=M,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=A,r.version=Qw++)}function l(c,h){let f=0,u=0,p=0,m=0,S=0,g=0;const d=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const y=c[v];if(y.isSunLight){const E=r.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),f++}else if(y.isDirectionalLight){const E=r.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(d),u++}else if(y.isSpotLight){const E=r.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const E=r.rectArea[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),s.identity(),a.copy(y.matrixWorld),a.premultiply(d),s.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),S++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:r}}function km(t){const e=new tT(t),i=[],r=[],n=[];function a(u){f.camera=u,i.length=0,r.length=0,n.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){n.push(u)}function c(){e.setup(i)}function h(u){e.setupView(i,u)}const f={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function iT(t){let e=new WeakMap;function i(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new km(t),e.set(n,[o])):a>=s.length?(o=new km(t),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:i,dispose:r}}const rT=`void main() {
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
}`,aT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],sT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],zm=new Mt,xs=new F,Nu=new F;function oT(t,e,i){let r=new Mf;const n=new ke,a=new ke,s=new It,o=new fS,l=new pS,c={},h=i.maxTextureSize,f={[Mn]:li,[li]:Mn,[ji]:ji},u=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:rT,fragmentShader:nT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new _i;m.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ht(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let d=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===$y&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);const T=t.getRenderTarget(),A=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=d!==this.type;Y&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(q=>q.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,q=w.length;D<q;D++){const Q=w[D],J=Q.shadow;if(J===void 0){Oe("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const V=J.getFrameExtents();n.multiply(V),a.copy(J.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/V.x),n.x=a.x*V.x,J.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/V.y),n.y=a.y*V.y,J.mapSize.y=a.y));const B=t.state.buffers.depth.getReversed();if(J.camera._reversedDepth=B,J.map===null||Y===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ws){if(Q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new cr(n.x,n.y,{format:Qn,type:Tr,minFilter:oi,magFilter:oi,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new oo(n.x,n.y,yr),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=jr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt}else Q.isPointLight?(J.map=new X0(n.x),J.map.depthTexture=new sS(n.x,wr)):(J.map=new cr(n.x,n.y),J.map.depthTexture=new oo(n.x,n.y,wr)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=jr,this.type===Ml?(J.map.depthTexture.compareFunction=B?yf:xf,J.map.depthTexture.minFilter=oi,J.map.depthTexture.magFilter=oi):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==n.x||J.map.height!==n.y)&&J.map.setSize(n.x,n.y);const W=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Q.isPointLight!==!0&&J.updateMatrices(Q,x);for(let O=0;O<W;O++){const pe=J.getCamera(O);if(Q.isPointLight){const ve=J.camera,Pe=J.matrix,Le=Q.distance||ve.far;Le!==ve.far&&(ve.far=Le,ve.updateProjectionMatrix()),xs.setFromMatrixPosition(Q.matrixWorld),ve.position.copy(xs),Nu.copy(ve.position),Nu.add(aT[O]),ve.up.copy(sT[O]),ve.lookAt(Nu),ve.updateMatrixWorld(),Pe.makeTranslation(-xs.x,-xs.y,-xs.z),zm.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),J._frustum.setFromProjectionMatrix(zm,ve.coordinateSystem,ve.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)t.setRenderTarget(J.map,O),t.clear();else{O===0&&(t.setRenderTarget(J.map),t.clear());const ve=J.getViewport(O);s.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),k.viewport(s)}r=J.getFrustum(O),y(C,x,pe,Q,this.type)}J.isPointLightShadow!==!0&&this.type===ws&&v(J,x),J.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(T,A,U)};function v(w,C){const x=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new cr(n.x,n.y,{format:Qn,type:Tr}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,p,S,null)}function M(w,C,x,T){let A=null;const U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)A=U;else if(A=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=A.uuid,Y=C.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let q=D[Y];q===void 0&&(q=A.clone(),D[Y]=q,C.addEventListener("dispose",E)),A=q}if(A.visible=C.visible,A.wireframe=C.wireframe,T===ws?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:f[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=t.properties.get(A);k.light=x}return A}function y(w,C,x,T,A){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===ws)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const k=e.update(w),Y=w.material;if(Array.isArray(Y)){const D=k.groups;for(let q=0,Q=D.length;q<Q;q++){const J=D[q],V=Y[J.materialIndex];if(V&&V.visible){const B=M(w,V,T,A);w.onBeforeShadow(t,w,C,x,k,B,J),t.renderBufferDirect(x,null,k,B,w,J),w.onAfterShadow(t,w,C,x,k,B,J)}}}else if(Y.visible){const D=M(w,Y,T,A);w.onBeforeShadow(t,w,C,x,k,D,null),t.renderBufferDirect(x,null,k,D,w,null),w.onAfterShadow(t,w,C,x,k,D,null)}}const U=w.children;for(let k=0,Y=U.length;k<Y;k++)y(U[k],C,x,T,A)}function E(w){w.target.removeEventListener("dispose",E);for(const C in c){const x=c[C],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function lT(t,e){function i(){let P=!1;const ie=new It;let ae=null;const ge=new It(0,0,0,0);return{setMask:function(ye){ae!==ye&&!P&&(t.colorMask(ye,ye,ye,ye),ae=ye)},setLocked:function(ye){P=ye},setClear:function(ye,te,re,oe,Xe){Xe===!0&&(ye*=oe,te*=oe,re*=oe),ie.set(ye,te,re,oe),ge.equals(ie)===!1&&(t.clearColor(ye,te,re,oe),ge.copy(ie))},reset:function(){P=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let P=!1,ie=!1,ae=null,ge=null,ye=null;return{setReversed:function(te){if(ie!==te){const re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ie=te;const oe=ye;ye=null,this.setClear(oe)}},getReversed:function(){return ie},setTest:function(te){te?ee(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(te){ae!==te&&!P&&(t.depthMask(te),ae=te)},setFunc:function(te){if(ie&&(te=Nb[te]),ge!==te){switch(te){case Td:t.depthFunc(t.NEVER);break;case Cd:t.depthFunc(t.ALWAYS);break;case Rd:t.depthFunc(t.LESS);break;case ro:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case Pd:t.depthFunc(t.GEQUAL);break;case Nd:t.depthFunc(t.GREATER);break;case Dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=te}},setLocked:function(te){P=te},setClear:function(te){ye!==te&&(ye=te,ie&&(te=1-te),t.clearDepth(te))},reset:function(){P=!1,ae=null,ge=null,ye=null,ie=!1}}}function n(){let P=!1,ie=null,ae=null,ge=null,ye=null,te=null,re=null,oe=null,Xe=null;return{setTest:function(Fe){P||(Fe?ee(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(Fe){ie!==Fe&&!P&&(t.stencilMask(Fe),ie=Fe)},setFunc:function(Fe,qe,Ae){(ae!==Fe||ge!==qe||ye!==Ae)&&(t.stencilFunc(Fe,qe,Ae),ae=Fe,ge=qe,ye=Ae)},setOp:function(Fe,qe,Ae){(te!==Fe||re!==qe||oe!==Ae)&&(t.stencilOp(Fe,qe,Ae),te=Fe,re=qe,oe=Ae)},setLocked:function(Fe){P=Fe},setClear:function(Fe){Xe!==Fe&&(t.clearStencil(Fe),Xe=Fe)},reset:function(){P=!1,ie=null,ae=null,ge=null,ye=null,te=null,re=null,oe=null,Xe=null}}}const a=new i,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let h={},f={},u={},p=new WeakMap,m=[],S=null,g=!1,d=null,v=null,M=null,y=null,E=null,w=null,C=null,x=new Ve(0,0,0),T=0,A=!1,U=null,k=null,Y=null,D=null,q=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),J=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),J=V>=2);let W=null,O={};const pe=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Pe=new It().fromArray(pe),Le=new It().fromArray(ve);function Ge(P,ie,ae,ge){const ye=new Uint8Array(4),te=t.createTexture();t.bindTexture(P,te),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let re=0;re<ae;re++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ie+re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return te}const $={};$[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),s.setFunc(ro),_t(!1),dt(zp),ee(t.CULL_FACE),Be(zr);function ee(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Me(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ue(P,ie){return u[P]!==ie?(t.bindFramebuffer(P,ie),u[P]=ie,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function _e(P,ie){let ae=m,ge=!1;if(P){ae=p.get(ie),ae===void 0&&(ae=[],p.set(ie,ae));const ye=P.textures;if(ae.length!==ye.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let te=0,re=ye.length;te<re;te++)ae[te]=t.COLOR_ATTACHMENT0+te;ae.length=ye.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function Ce(P){return S!==P?(t.useProgram(P),S=P,!0):!1}const et={[xa]:t.FUNC_ADD,[Jy]:t.FUNC_SUBTRACT,[Qy]:t.FUNC_REVERSE_SUBTRACT};et[eb]=t.MIN,et[tb]=t.MAX;const We={[ib]:t.ZERO,[rb]:t.ONE,[nb]:t.SRC_COLOR,[o0]:t.SRC_ALPHA,[ub]:t.SRC_ALPHA_SATURATE,[lb]:t.DST_COLOR,[sb]:t.DST_ALPHA,[ab]:t.ONE_MINUS_SRC_COLOR,[l0]:t.ONE_MINUS_SRC_ALPHA,[cb]:t.ONE_MINUS_DST_COLOR,[ob]:t.ONE_MINUS_DST_ALPHA,[db]:t.CONSTANT_COLOR,[hb]:t.ONE_MINUS_CONSTANT_COLOR,[fb]:t.CONSTANT_ALPHA,[pb]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(P,ie,ae,ge,ye,te,re,oe,Xe,Fe){if(P===zr){g===!0&&(Me(t.BLEND),g=!1);return}if(g===!1&&(ee(t.BLEND),g=!0),P!==Zy){if(P!==d||Fe!==A){if((v!==xa||E!==xa)&&(t.blendEquation(t.FUNC_ADD),v=xa,E=xa),Fe)switch(P){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case io:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",P);break}else switch(P){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bp:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hp:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",P);break}M=null,y=null,w=null,C=null,x.set(0,0,0),T=0,d=P,A=Fe}return}ye=ye||ie,te=te||ae,re=re||ge,(ie!==v||ye!==E)&&(t.blendEquationSeparate(et[ie],et[ye]),v=ie,E=ye),(ae!==M||ge!==y||te!==w||re!==C)&&(t.blendFuncSeparate(We[ae],We[ge],We[te],We[re]),M=ae,y=ge,w=te,C=re),(oe.equals(x)===!1||Xe!==T)&&(t.blendColor(oe.r,oe.g,oe.b,Xe),x.copy(oe),T=Xe),d=P,A=!1}function Ut(P,ie){P.side===ji?Me(t.CULL_FACE):ee(t.CULL_FACE);let ae=P.side===li;ie&&(ae=!ae),_t(ae),P.blending===Fs&&P.transparent===!1?Be(zr):Be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const ge=P.stencilWrite;o.setTest(ge),ge&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function _t(P){U!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),U=P)}function dt(P){P!==qy?(ee(t.CULL_FACE),P!==k&&(P===zp?t.cullFace(t.BACK):P===Ky?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),k=P}function At(P){P!==Y&&(J&&t.lineWidth(P),Y=P)}function Ot(P,ie,ae){P?(ee(t.POLYGON_OFFSET_FILL),(D!==ie||q!==ae)&&(D=ie,q=ae,s.getReversed()&&(ie=-ie),t.polygonOffset(ie,ae))):Me(t.POLYGON_OFFSET_FILL)}function mt(P){P?ee(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function wt(P){P===void 0&&(P=t.TEXTURE0+Q-1),W!==P&&(t.activeTexture(P),W=P)}function L(P,ie,ae){ae===void 0&&(W===null?ae=t.TEXTURE0+Q-1:ae=W);let ge=O[ae];ge===void 0&&(ge={type:void 0,texture:void 0},O[ae]=ge),(ge.type!==P||ge.texture!==ie)&&(W!==ae&&(t.activeTexture(ae),W=ae),t.bindTexture(P,ie||$[P]),ge.type=P,ge.texture=ie)}function Pt(){const P=O[W];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function _(){try{t.texSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function z(){try{t.texSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function de(){try{t.texStorage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function he(){try{t.texStorage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function I(){try{t.texImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function le(){try{t.texImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function ce(P){return f[P]!==void 0?f[P]:t.getParameter(P)}function xe(P,ie){f[P]!==ie&&(t.pixelStorei(P,ie),f[P]=ie)}function ne(P){Pe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Pe.copy(P))}function Ne(P){Le.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Le.copy(P))}function Te(P,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let ge=ae.get(P);ge===void 0&&(ge=t.getUniformBlockIndex(ie,P.name),ae.set(P,ge))}function Ie(P,ie){const ae=c.get(ie).get(P);l.get(ie)!==ae&&(t.uniformBlockBinding(ie,ae,P.__bindingPointIndex),l.set(ie,ae))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,O={},u={},p=new WeakMap,m=[],S=null,g=!1,d=null,v=null,M=null,y=null,E=null,w=null,C=null,x=new Ve(0,0,0),T=0,A=!1,U=null,k=null,Y=null,D=null,q=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ee,disable:Me,bindFramebuffer:Ue,drawBuffers:_e,useProgram:Ce,setBlending:Be,setMaterial:Ut,setFlipSided:_t,setCullFace:dt,setLineWidth:At,setPolygonOffset:Ot,setScissorTest:mt,activeTexture:wt,bindTexture:L,unbindTexture:Pt,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:I,texImage3D:le,pixelStorei:xe,getParameter:ce,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:de,texStorage3D:he,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:j,compressedTexSubImage3D:Z,scissor:ne,viewport:Ne,reset:He}}function cT(t,e,i,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,_){return m?new OffscreenCanvas(R,_):nc("canvas")}function g(R,_,z){let j=1;const Z=nt(R);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const de=Math.floor(j*Z.width),he=Math.floor(j*Z.height);u===void 0&&(u=S(de,he));const I=_?S(de,he):u;return I.width=de,I.height=he,I.getContext("2d").drawImage(R,0,0,de,he),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+de+"x"+he+")."),I}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,_,z,j,Z,de=!1){if(R!==null){if(t[R]!==void 0)return t[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;j&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===t.RED&&(z===t.FLOAT&&(I=t.R32F),z===t.HALF_FLOAT&&(I=t.R16F),z===t.UNSIGNED_BYTE&&(I=t.R8),z===t.UNSIGNED_SHORT&&he&&(I=he.R16_EXT),z===t.SHORT&&he&&(I=he.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.R8UI),z===t.UNSIGNED_SHORT&&(I=t.R16UI),z===t.UNSIGNED_INT&&(I=t.R32UI),z===t.BYTE&&(I=t.R8I),z===t.SHORT&&(I=t.R16I),z===t.INT&&(I=t.R32I)),_===t.RG&&(z===t.FLOAT&&(I=t.RG32F),z===t.HALF_FLOAT&&(I=t.RG16F),z===t.UNSIGNED_BYTE&&(I=t.RG8),z===t.UNSIGNED_SHORT&&he&&(I=he.RG16_EXT),z===t.SHORT&&he&&(I=he.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RG8UI),z===t.UNSIGNED_SHORT&&(I=t.RG16UI),z===t.UNSIGNED_INT&&(I=t.RG32UI),z===t.BYTE&&(I=t.RG8I),z===t.SHORT&&(I=t.RG16I),z===t.INT&&(I=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RGB8UI),z===t.UNSIGNED_SHORT&&(I=t.RGB16UI),z===t.UNSIGNED_INT&&(I=t.RGB32UI),z===t.BYTE&&(I=t.RGB8I),z===t.SHORT&&(I=t.RGB16I),z===t.INT&&(I=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(I=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(I=t.RGBA16UI),z===t.UNSIGNED_INT&&(I=t.RGBA32UI),z===t.BYTE&&(I=t.RGBA8I),z===t.SHORT&&(I=t.RGBA16I),z===t.INT&&(I=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&he&&(I=he.RGB16_EXT),z===t.SHORT&&he&&(I=he.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(I=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(I=t.R11F_G11F_B10F)),_===t.RGBA){const le=de?rc:Je.getTransfer(Z);z===t.FLOAT&&(I=t.RGBA32F),z===t.HALF_FLOAT&&(I=t.RGBA16F),z===t.UNSIGNED_BYTE&&(I=le===at?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&he&&(I=he.RGBA16_EXT),z===t.SHORT&&he&&(I=he.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(I=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(I=t.RGB5_A1)}return(I===t.R16F||I===t.R32F||I===t.RG16F||I===t.RG32F||I===t.RGBA16F||I===t.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function E(R,_){let z;return R?_===null||_===wr||_===ao?z=t.DEPTH24_STENCIL8:_===yr?z=t.DEPTH32F_STENCIL8:_===no&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wr||_===ao?z=t.DEPTH_COMPONENT24:_===yr?z=t.DEPTH_COMPONENT32F:_===no&&(z=t.DEPTH_COMPONENT16),z}function w(R,_){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==oi?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),U(_)}function T(R){const _=r.get(R);if(_.__webglInit===void 0)return;const z=R.source,j=p.get(z);if(j){const Z=j[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(R),Object.keys(j).length===0&&p.delete(z)}r.remove(R)}function A(R){const _=r.get(R);t.deleteTexture(_.__webglTexture);const z=R.source,j=p.get(z);delete j[_.__cacheKey],s.memory.textures--}function U(R){const _=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Z=0;Z<_.__webglFramebuffer[j].length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[j][Z]);else t.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)t.deleteFramebuffer(_.__webglFramebuffer[j]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,Z=z.length;j<Z;j++){const de=r.get(z[j]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),s.memory.textures--),r.remove(z[j])}r.remove(R)}let k=0;function Y(){k=0}function D(){return k}function q(R){k=R}function Q(){const R=k;return R>=n.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),k+=1,R}function J(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function V(R,_){const z=r.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function B(R,_){const z=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Me(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function W(R,_){const z=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Me(z,R,_);return}i.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function O(R,_){const z=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ue(z,R,_);return}i.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const pe={[Ai]:t.REPEAT,[Rt]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},ve={[Jt]:t.NEAREST,[vb]:t.NEAREST_MIPMAP_NEAREST,[ko]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[tu]:t.LINEAR_MIPMAP_NEAREST,[Gn]:t.LINEAR_MIPMAP_LINEAR},Pe={[bb]:t.NEVER,[Tb]:t.ALWAYS,[Sb]:t.LESS,[xf]:t.LEQUAL,[Mb]:t.EQUAL,[yf]:t.GEQUAL,[Eb]:t.GREATER,[wb]:t.NOTEQUAL};function Le(R,_){if(_.type===yr&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===oi||_.magFilter===tu||_.magFilter===ko||_.magFilter===Gn||_.minFilter===oi||_.minFilter===tu||_.minFilter===ko||_.minFilter===Gn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,pe[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,pe[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,pe[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==ko&&_.minFilter!==Gn||_.type===yr&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const j=_.source;let Z=p.get(j);Z===void 0&&(Z={},p.set(j,Z));const de=J(_);if(de!==R.__cacheKey){Z[de]===void 0&&(Z[de]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Z[de].usedTimes++;const he=Z[R.__cacheKey];he!==void 0&&(Z[R.__cacheKey].usedTimes--,he.usedTimes===0&&A(_)),R.__cacheKey=de,R.__webglTexture=Z[de].texture}return z}function $(R,_,z){return Math.floor(Math.floor(R/z)/_)}function ee(R,_,z,j){const Z=R.updateRanges;if(Z.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{Z.sort((ce,xe)=>ce.start-xe.start);let de=0;for(let ce=1;ce<Z.length;ce++){const xe=Z[de],ne=Z[ce],Ne=xe.start+xe.count,Te=$(ne.start,_.width,4),Ie=$(xe.start,_.width,4);ne.start<=Ne+1&&Te===Ie&&$(ne.start+ne.count-1,_.width,4)===Te?xe.count=Math.max(xe.count,ne.start+ne.count-xe.start):(++de,Z[de]=ne)}Z.length=de+1;const he=i.getParameter(t.UNPACK_ROW_LENGTH),I=i.getParameter(t.UNPACK_SKIP_PIXELS),le=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ce=0,xe=Z.length;ce<xe;ce++){const ne=Z[ce],Ne=Math.floor(ne.start/4),Te=Math.ceil(ne.count/4),Ie=Ne%_.width,He=Math.floor(Ne/_.width),P=Te;i.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(t.UNPACK_SKIP_ROWS,He),i.texSubImage2D(t.TEXTURE_2D,0,Ie,He,P,1,z,j,_.data)}R.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,he),i.pixelStorei(t.UNPACK_SKIP_PIXELS,I),i.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function Me(R,_,z){let j=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=t.TEXTURE_3D);const Z=Ge(R,_),de=_.source;i.bindTexture(j,R.__webglTexture,t.TEXTURE0+z);const he=r.get(de);if(de.version!==he.__version||Z===!0){if(i.activeTexture(t.TEXTURE0+z),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){const ie=Je.getPrimaries(Je.workingColorSpace),ae=_.colorSpace===un?null:Je.getPrimaries(_.colorSpace),ge=_.colorSpace===un||ie===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}i.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let I=g(_.image,!1,n.maxTextureSize);I=Pt(_,I);const le=a.convert(_.format,_.colorSpace),ce=a.convert(_.type);let xe=y(_.internalFormat,le,ce,_.normalized,_.colorSpace,_.isVideoTexture);Le(j,_);let ne;const Ne=_.mipmaps,Te=_.isVideoTexture!==!0,Ie=he.__version===void 0||Z===!0,He=de.dataReady,P=w(_,I);if(_.isDepthTexture)xe=E(_.format===Wn,_.type),Ie&&(Te?i.texStorage2D(t.TEXTURE_2D,1,xe,I.width,I.height):i.texImage2D(t.TEXTURE_2D,0,xe,I.width,I.height,0,le,ce,null));else if(_.isDataTexture)if(Ne.length>0){Te&&Ie&&i.texStorage2D(t.TEXTURE_2D,P,xe,Ne[0].width,Ne[0].height);for(let ie=0,ae=Ne.length;ie<ae;ie++)ne=Ne[ie],Te?He&&i.texSubImage2D(t.TEXTURE_2D,ie,0,0,ne.width,ne.height,le,ce,ne.data):i.texImage2D(t.TEXTURE_2D,ie,xe,ne.width,ne.height,0,le,ce,ne.data);_.generateMipmaps=!1}else Te?(Ie&&i.texStorage2D(t.TEXTURE_2D,P,xe,I.width,I.height),He&&ee(_,I,le,ce)):i.texImage2D(t.TEXTURE_2D,0,xe,I.width,I.height,0,le,ce,I.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Te&&Ie&&i.texStorage3D(t.TEXTURE_2D_ARRAY,P,xe,Ne[0].width,Ne[0].height,I.depth);for(let ie=0,ae=Ne.length;ie<ae;ie++)if(ne=Ne[ie],_.format!==sr)if(le!==null)if(Te){if(He)if(_.layerUpdates.size>0){const ge=vm(ne.width,ne.height,_.format,_.type);for(const ye of _.layerUpdates){const te=ne.data.subarray(ye*ge/ne.data.BYTES_PER_ELEMENT,(ye+1)*ge/ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ye,ne.width,ne.height,1,le,te)}}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ne.width,ne.height,I.depth,le,ne.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,ne.width,ne.height,I.depth,0,ne.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?He&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ne.width,ne.height,I.depth,le,ce,ne.data):i.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,ne.width,ne.height,I.depth,0,le,ce,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Te&&Ie&&i.texStorage2D(t.TEXTURE_2D,P,xe,Ne[0].width,Ne[0].height);for(let ie=0,ae=Ne.length;ie<ae;ie++)ne=Ne[ie],_.format!==sr?le!==null?Te?He&&i.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ne.width,ne.height,le,ne.data):i.compressedTexImage2D(t.TEXTURE_2D,ie,xe,ne.width,ne.height,0,ne.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?He&&i.texSubImage2D(t.TEXTURE_2D,ie,0,0,ne.width,ne.height,le,ce,ne.data):i.texImage2D(t.TEXTURE_2D,ie,xe,ne.width,ne.height,0,le,ce,ne.data)}else if(_.isDataArrayTexture)if(Te){if(Ie&&i.texStorage3D(t.TEXTURE_2D_ARRAY,P,xe,I.width,I.height,I.depth),He)if(_.layerUpdates.size>0){const ie=vm(I.width,I.height,_.format,_.type);for(const ae of _.layerUpdates){const ge=I.data.subarray(ae*ie/I.data.BYTES_PER_ELEMENT,(ae+1)*ie/I.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,I.width,I.height,1,le,ce,ge)}_.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,le,ce,I.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,I.width,I.height,I.depth,0,le,ce,I.data);else if(_.isData3DTexture)Te?(Ie&&i.texStorage3D(t.TEXTURE_3D,P,xe,I.width,I.height,I.depth),He&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,le,ce,I.data)):i.texImage3D(t.TEXTURE_3D,0,xe,I.width,I.height,I.depth,0,le,ce,I.data);else if(_.isFramebufferTexture){if(Ie)if(Te)i.texStorage2D(t.TEXTURE_2D,P,xe,I.width,I.height);else{let ie=I.width,ae=I.height;for(let ge=0;ge<P;ge++)i.texImage2D(t.TEXTURE_2D,ge,xe,ie,ae,0,le,ce,null),ie>>=1,ae>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),I.parentNode!==ie){ie.appendChild(I),f.add(_),ie.onpaint=ae=>{const ge=ae.changedElements;for(const ye of f)ge.includes(ye.image)&&(ye.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,I);else{const ae=t.RGBA,ge=t.RGBA,ye=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ae,ge,ye,I)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Te&&Ie){const ie=nt(Ne[0]);i.texStorage2D(t.TEXTURE_2D,P,xe,ie.width,ie.height)}for(let ie=0,ae=Ne.length;ie<ae;ie++)ne=Ne[ie],Te?He&&i.texSubImage2D(t.TEXTURE_2D,ie,0,0,le,ce,ne):i.texImage2D(t.TEXTURE_2D,ie,xe,le,ce,ne);_.generateMipmaps=!1}else if(Te){if(Ie){const ie=nt(I);i.texStorage2D(t.TEXTURE_2D,P,xe,ie.width,ie.height)}He&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,le,ce,I)}else i.texImage2D(t.TEXTURE_2D,0,xe,le,ce,I);d(_)&&v(j),he.__version=de.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ue(R,_,z){if(_.image.length!==6)return;const j=Ge(R,_),Z=_.source;i.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const de=r.get(Z);if(Z.version!==de.__version||j===!0){i.activeTexture(t.TEXTURE0+z);const he=Je.getPrimaries(Je.workingColorSpace),I=_.colorSpace===un?null:Je.getPrimaries(_.colorSpace),le=_.colorSpace===un||he===I?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,xe=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let te=0;te<6;te++)!ce&&!xe?ne[te]=g(_.image[te],!0,n.maxCubemapSize):ne[te]=xe?_.image[te].image:_.image[te],ne[te]=Pt(_,ne[te]);const Ne=ne[0],Te=a.convert(_.format,_.colorSpace),Ie=a.convert(_.type),He=y(_.internalFormat,Te,Ie,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,ie=de.__version===void 0||j===!0,ae=Z.dataReady;let ge=w(_,Ne);Le(t.TEXTURE_CUBE_MAP,_);let ye;if(ce){P&&ie&&i.texStorage2D(t.TEXTURE_CUBE_MAP,ge,He,Ne.width,Ne.height);for(let te=0;te<6;te++){ye=ne[te].mipmaps;for(let re=0;re<ye.length;re++){const oe=ye[re];_.format!==sr?Te!==null?P?ae&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,oe.width,oe.height,Te,oe.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,He,oe.width,oe.height,0,oe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,oe.width,oe.height,Te,Ie,oe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,He,oe.width,oe.height,0,Te,Ie,oe.data)}}}else{if(ye=_.mipmaps,P&&ie){ye.length>0&&ge++;const te=nt(ne[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,ge,He,te.width,te.height)}for(let te=0;te<6;te++)if(xe){P?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ne[te].width,ne[te].height,Te,Ie,ne[te].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ne[te].width,ne[te].height,0,Te,Ie,ne[te].data);for(let re=0;re<ye.length;re++){const oe=ye[re].image[te].image;P?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,oe.width,oe.height,Te,Ie,oe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,He,oe.width,oe.height,0,Te,Ie,oe.data)}}else{P?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,Ie,ne[te]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Te,Ie,ne[te]);for(let re=0;re<ye.length;re++){const oe=ye[re];P?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,Te,Ie,oe.image[te]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,He,Te,Ie,oe.image[te])}}}d(_)&&v(t.TEXTURE_CUBE_MAP),de.__version=Z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function _e(R,_,z,j,Z,de){const he=a.convert(z.format,z.colorSpace),I=a.convert(z.type),le=y(z.internalFormat,he,I,z.normalized,z.colorSpace),ce=r.get(_),xe=r.get(z);if(xe.__renderTarget=_,!ce.__hasExternalTextures){const ne=Math.max(1,_.width>>de),Ne=Math.max(1,_.height>>de);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?i.texImage3D(Z,de,le,ne,Ne,_.depth,0,he,I,null):i.texImage2D(Z,de,le,ne,Ne,0,he,I,null)}i.bindFramebuffer(t.FRAMEBUFFER,R),wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,xe.__webglTexture,0,mt(_)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,xe.__webglTexture,de),i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const j=_.depthTexture,Z=j&&j.isDepthTexture?j.type:null,de=E(_.stencilBuffer,Z),he=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),de,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),de,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,de,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,R)}else{const j=_.textures;for(let Z=0;Z<j.length;Z++){const de=j[Z],he=a.convert(de.format,de.colorSpace),I=a.convert(de.type),le=y(de.internalFormat,he,I,de.normalized,de.colorSpace);wt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),le,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function et(R,_,z){const j=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=r.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Le(t.TEXTURE_CUBE_MAP,_.depthTexture);const ce=a.convert(_.depthTexture.format),xe=a.convert(_.depthTexture.type);let ne;_.depthTexture.format===jr?ne=t.DEPTH_COMPONENT24:_.depthTexture.format===Wn&&(ne=t.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ne,_.width,_.height,0,ce,xe,null)}}else V(_.depthTexture,0);const de=Z.__webglTexture,he=mt(_),I=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,le=_.depthTexture.format===Wn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===jr)wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,I,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,le,I,de,0);else if(_.depthTexture.format===Wn)wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,I,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,le,I,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(R){const _=r.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=j}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)et(_.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?et(_.__webglFramebuffer[0],R,0):et(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=t.createRenderbuffer(),Ce(_.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,de)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ce(_.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,de)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,_,z){const j=r.get(R);_!==void 0&&_e(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&We(R)}function Ut(R){const _=R.texture,z=r.get(R),j=r.get(_);R.addEventListener("dispose",x);const Z=R.textures,de=R.isWebGLCubeRenderTarget===!0,he=Z.length>1;if(he||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=_.version,s.memory.textures++),de){z.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[I]=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[I][le]=t.createFramebuffer()}else z.__webglFramebuffer[I]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)z.__webglFramebuffer[I]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(he)for(let I=0,le=Z.length;I<le;I++){const ce=r.get(Z[I]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&wt(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let I=0;I<Z.length;I++){const le=Z[I];z.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[I]);const ce=a.convert(le.format,le.colorSpace),xe=a.convert(le.type),ne=y(le.internalFormat,ce,xe,le.normalized,le.colorSpace,R.isXRRenderTarget===!0),Ne=mt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ne,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+I,t.RENDERBUFFER,z.__webglColorRenderbuffer[I])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){i.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Le(t.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)_e(z.__webglFramebuffer[I][le],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+I,le);else _e(z.__webglFramebuffer[I],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);d(_)&&v(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(he){for(let I=0,le=Z.length;I<le;I++){const ce=Z[I],xe=r.get(ce);let ne=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ne,xe.__webglTexture),Le(ne,ce),_e(z.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+I,ne,0),d(ce)&&v(ne)}i.unbindTexture()}else{let I=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(I=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(I,j.__webglTexture),Le(I,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)_e(z.__webglFramebuffer[le],R,_,t.COLOR_ATTACHMENT0,I,le);else _e(z.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,I,0);d(_)&&v(I),i.unbindTexture()}R.depthBuffer&&We(R)}function _t(R){const _=R.textures;for(let z=0,j=_.length;z<j;z++){const Z=_[z];if(d(Z)){const de=M(R),he=r.get(Z).__webglTexture;i.bindTexture(de,he),v(de),i.unbindTexture()}}}const dt=[],At=[];function Ot(R){if(R.samples>0){if(wt(R)===!1){const _=R.textures,z=R.width,j=R.height;let Z=t.COLOR_BUFFER_BIT;const de=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=r.get(R),I=_.length>1;if(I)for(let ce=0;ce<_.length;ce++)i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const le=R.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),I){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const xe=r.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,z,j,0,0,z,j,Z,t.NEAREST),l===!0&&(dt.length=0,At.length=0,dt.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(dt.push(de),At.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,At)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),I)for(let ce=0;ce<_.length;ce++){i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const xe=r.get(_[ce]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,xe,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function mt(R){return Math.min(n.maxSamples,R.samples)}function wt(R){const _=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(R){const _=s.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Pt(R,_){const z=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ic&&z!==un&&(Je.getTransfer(z)===at?(j!==sr||Z!==Ui)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),_}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.getTextureUnits=D,this.setTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function uT(t,e){function i(r,n=un){let a;const s=Je.getTransfer(n);if(r===Ui)return t.UNSIGNED_BYTE;if(r===pf)return t.UNSIGNED_SHORT_4_4_4_4;if(r===mf)return t.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===b0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===_0)return t.BYTE;if(r===x0)return t.SHORT;if(r===no)return t.UNSIGNED_SHORT;if(r===ff)return t.INT;if(r===wr)return t.UNSIGNED_INT;if(r===yr)return t.FLOAT;if(r===Tr)return t.HALF_FLOAT;if(r===S0)return t.ALPHA;if(r===M0)return t.RGB;if(r===sr)return t.RGBA;if(r===jr)return t.DEPTH_COMPONENT;if(r===Wn)return t.DEPTH_STENCIL;if(r===E0)return t.RED;if(r===gf)return t.RED_INTEGER;if(r===Qn)return t.RG;if(r===vf)return t.RG_INTEGER;if(r===_f)return t.RGBA_INTEGER;if(r===El||r===wl||r===Tl||r===Cl)if(s===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===El)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===El)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Ud||r===Od||r===Fd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd||r===zd||r===Bd||r===Hd||r===Vd||r===ec||r===Gd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kd||r===zd)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Bd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hd)return a.COMPRESSED_R11_EAC;if(r===Vd)return a.COMPRESSED_SIGNED_R11_EAC;if(r===ec)return a.COMPRESSED_RG11_EAC;if(r===Gd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wd||r===jd||r===Xd||r===Yd||r===qd||r===Kd||r===$d||r===Zd||r===Jd||r===Qd||r===eh||r===th||r===ih||r===rh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qd)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===th)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rh)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nh||r===ah||r===sh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===nh)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oh||r===lh||r===tc||r===ch)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===oh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ao?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}const dT=`
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

}`;class fT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new z0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new xi({vertexShader:dT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ht(new Ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends An{constructor(e,i){super();const r=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,m=null;const S=typeof XRWebGLBinding<"u",g=new fT,d={},v=i.getContextAttributes();let M=null,y=null;const E=[],w=[],C=new ke;let x=null,T=null;const A=new Ii;A.viewport=new It;const U=new Ii;U.viewport=new It;const k=[A,U],Y=new yS;let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=E[$];return ee===void 0&&(ee=new cu,E[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=E[$];return ee===void 0&&(ee=new cu,E[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=E[$];return ee===void 0&&(ee=new cu,E[$]=ee),ee.getHandSpace()};function Q($){const ee=w.indexOf($.inputSource);if(ee===-1)return;const Me=E[ee];Me!==void 0&&(Me.update($.inputSource,$.frame,c||s),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",V);for(let $=0;$<E.length;$++){const ee=w[$];ee!==null&&(w[$]=null,E[$].disconnect(ee))}D=null,q=null,g.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(M),p=null,u=null,f=null,n=null,y=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,r.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,r.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(n,i)),f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",J),n.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await i.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Me=null,Ue=null;v.depth&&(Ue=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ee=v.stencil?Wn:jr,Me=v.stencil?ao:wr);const _e={colorFormat:i.RGBA8,depthFormat:Ue,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(_e),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new cr(u.textureWidth,u.textureHeight,{format:sr,type:Ui,depthTexture:new oo(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,i,ee),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new cr(p.framebufferWidth,p.framebufferHeight,{format:sr,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Ge.setContext(n),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V($){for(let ee=0;ee<$.removed.length;ee++){const Me=$.removed[ee],Ue=w.indexOf(Me);Ue>=0&&(w[Ue]=null,E[Ue].disconnect(Me))}for(let ee=0;ee<$.added.length;ee++){const Me=$.added[ee];let Ue=w.indexOf(Me);if(Ue===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=w.length){w.push(Me),Ue=Ce;break}else if(w[Ce]===null){w[Ce]=Me,Ue=Ce;break}if(Ue===-1)break}const _e=E[Ue];_e&&_e.connect(Me)}}const B=new F,W=new F;function O($,ee,Me){B.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(Me.matrixWorld);const Ue=B.distanceTo(W),_e=ee.projectionMatrix.elements,Ce=Me.projectionMatrix.elements,et=_e[14]/(_e[10]-1),We=_e[14]/(_e[10]+1),Be=(_e[9]+1)/_e[5],Ut=(_e[9]-1)/_e[5],_t=(_e[8]-1)/_e[0],dt=(Ce[8]+1)/Ce[0],At=et*_t,Ot=et*dt,mt=Ue/(-_t+dt),wt=mt*-_t;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const L=et+mt,Pt=We+mt,nt=At-wt,R=Ot+(Ue-wt),_=Be*We/Pt*L,z=Ut*We/Pt*L;$.projectionMatrix.makePerspective(nt,R,_,z,L,Pt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let ee=$.near,Me=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),Y.near=U.near=A.near=ee,Y.far=U.far=A.far=Me,(D!==Y.near||q!==Y.far)&&(n.updateRenderState({depthNear:Y.near,depthFar:Y.far}),D=Y.near,q=Y.far),Y.layers.mask=$.layers.mask|6,A.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;const Ue=$.parent,_e=Y.cameras;pe(Y,Ue);for(let Ce=0;Ce<_e.length;Ce++)pe(_e[Ce],Ue);_e.length===2?O(Y,A,U):Y.projectionMatrix.copy(A.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),ve($,Y,Ue)};function ve($,ee,Me){Me===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=dh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function($){return d[$]};let Pe=null;function Le($,ee){if(h=ee.getViewerPose(c||s),m=ee,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ue=!1;Me.length!==Y.cameras.length&&(Y.cameras.length=0,Ue=!0);for(let Ce=0;Ce<Me.length;Ce++){const et=Me[Ce];let We=null;if(p!==null)We=p.getViewport(et);else{const Ut=f.getViewSubImage(u,et);We=Ut.viewport,Ce===0&&(e.setRenderTargetTextures(y,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(y))}let Be=k[Ce];Be===void 0&&(Be=new Ii,Be.layers.enable(Ce),Be.viewport=new It,k[Ce]=Be),Be.matrix.fromArray(et.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(et.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Ce===0&&(Y.matrix.copy(Be.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ue===!0&&Y.cameras.push(Be)}const _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){f=r.getBinding();const Ce=f.getDepthInformation(Me[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,n.renderState)}if(_e&&_e.includes("camera-access")&&S){e.state.unbindTexture(),f=r.getBinding();for(let Ce=0;Ce<Me.length;Ce++){const et=Me[Ce].camera;if(et){let We=d[et];We||(We=new z0,d[et]=We);const Be=f.getCameraImage(et);We.sourceTexture=Be}}}}for(let Me=0;Me<E.length;Me++){const Ue=w[Me],_e=E[Me];Ue!==null&&_e!==void 0&&_e.update(Ue,ee,c||s)}Pe&&Pe($,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ge=new W0;Ge.setAnimationLoop(Le),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}}const mT=new Mt,Z0=new je;Z0.set(-1,0,0,0,1,0,0,0,1);function gT(t,e){function i(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function r(g,d){d.color.getRGB(g.fogColor.value,B0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function n(g,d,v,M,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(g,d):d.isMeshLambertMaterial?(a(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(g,d),f(g,d)):d.isMeshPhongMaterial?(a(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(a(g,d),m(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),S(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,i(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,i(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===li&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,i(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===li&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,i(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,i(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Z0),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,i(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=M*.5,d.map&&(g.map.value=d.map,i(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,i(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===li&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function vT(t,e,i,r){let n={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const w=E.program;r.uniformBlockBinding(y,w)}function c(y,E){let w=n[y.id];w===void 0&&(g(y),w=h(y),n[y.id]=w,y.addEventListener("dispose",v));const C=E.program;r.updateUBOMapping(y,C);const x=e.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function h(y){const E=f();y.__bindingPointIndex=E;const w=t.createBuffer(),C=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const E=n[y.id],w=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let x=0,T=w.length;x<T;x++){const A=w[x];if(Array.isArray(A))for(let U=0,k=A.length;U<k;U++)p(A[U],x,U,C);else p(A,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,w,C){if(S(y,E,w,C)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let U=0;U<T.length;U++){const k=T[U],Y=d(k);m(k,y.__data,A),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(A+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function m(y,E,w){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,w)}function S(y,E,w,C){const x=y.value,T=E+"_"+w;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const A=C[T];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(y){const E=y.uniforms;let w=0;const C=16;for(let T=0,A=E.length;T<A;T++){const U=Array.isArray(E[T])?E[T]:[E[T]];for(let k=0,Y=U.length;k<Y;k++){const D=U[k],q=Array.isArray(D.value)?D.value:[D.value];for(let Q=0,J=q.length;Q<J;Q++){const V=q[Q],B=d(V),W=w%C,O=W%B.boundary,pe=W+O;w+=O,pe!==0&&C-pe<B.storage&&(w+=C-pe),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=B.storage}}}const x=w%C;return x>0&&(w+=C-x),y.__size=w,y.__cache={},this}function d(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",y),E}function v(y){const E=y.target;E.removeEventListener("dispose",v);const w=s.indexOf(E.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function M(){for(const y in n)t.deleteBuffer(n[y]);s=[],n={},a={}}return{bind:l,update:c,dispose:M}}const _T=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mr=null;function xT(){return mr===null&&(mr=new tS(_T,16,16,Qn,Tr),mr.name="DFG_LUT",mr.minFilter=oi,mr.magFilter=oi,mr.wrapS=Rt,mr.wrapT=Rt,mr.generateMipmaps=!1,mr.needsUpdate=!0),mr}class yT{constructor(e={}){const{canvas:i=Ab(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Ui}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=s;const S=p,g=new Set([_f,vf,gf]),d=new Set([Ui,wr,no,ao,pf,mf]),v=new Uint32Array(4),M=new Int32Array(4),y=new F;let E=null,w=null;const C=[],x=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1,k=null,Y=null,D=null,q=null;this._outputColorSpace=xt;let Q=0,J=0,V=null,B=-1,W=null;const O=new It,pe=new It;let ve=null;const Pe=new Ve(0);let Le=0,Ge=i.width,$=i.height,ee=1,Me=null,Ue=null;const _e=new It(0,0,Ge,$),Ce=new It(0,0,Ge,$);let et=!1;const We=new Mf;let Be=!1,Ut=!1;const _t=new Mt,dt=new F,At=new It,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return V===null?ee:1}let L=r;function Pt(b,N){return i.getContext(b,N)}let nt,R,_,z,j,Z,de,he,I,le,ce,xe,ne,Ne,Te,Ie,He,P,ie,ae,ge,ye,te;try{const b={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hf}`),i.addEventListener("webglcontextlost",Xe,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",qe,!1),L===null){const N="webgl2";if(L=Pt(N,b),L===null)throw Pt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(b){throw i.removeEventListener("webglcontextlost",Xe,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",qe,!1),tt("WebGLRenderer: "+b.message),b}function re(){nt=new xE(L),nt.init(),ge=new uT(L,nt),R=new cE(L,nt,e,ge),_=new lT(L,nt),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),Y=L.createFramebuffer(),D=L.createFramebuffer(),q=L.createFramebuffer(),z=new SE(L),j=new qw,Z=new cT(L,nt,_,j,R,ge,z),de=new _E(A),he=new ES(L),ye=new oE(L,he),I=new yE(L,he,z,ye),le=new EE(L,I,he,ye,z),P=new ME(L,R,Z),Te=new uE(j),ce=new Yw(A,de,nt,R,ye,Te),xe=new gT(A,j),ne=new $w,Ne=new iT(nt),He=new sE(A,de,_,le,m,l),Ie=new oT(A,le,R),te=new vT(L,z,R,_),ie=new lE(L,nt,z),ae=new bE(L,nt,z),z.programs=ce.programs,A.capabilities=R,A.extensions=nt,A.properties=j,A.renderLists=ne,A.shadowMap=Ie,A.state=_,A.info=z}S!==Ui&&(T=new TE(S,i.width,i.height,o,n,a));const oe=new pT(A,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(Ge,$,!1))},this.getSize=function(b){return b.set(Ge,$)},this.setSize=function(b,N,K=!0){if(oe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=b,$=N,i.width=Math.floor(b*ee),i.height=Math.floor(N*ee),K===!0&&(i.style.width=b+"px",i.style.height=N+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Ge*ee,$*ee).floor()},this.setDrawingBufferSize=function(b,N,K){Ge=b,$=N,ee=K,i.width=Math.floor(b*K),i.height=Math.floor(N*K),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(S===Ui){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,N,K,G){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,N,K,G),_.viewport(O.copy(_e).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,N,K,G){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,N,K,G),_.scissor(pe.copy(Ce).multiplyScalar(ee).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){_.setScissorTest(et=b)},this.setOpaqueSort=function(b){Me=b},this.setTransparentSort=function(b){Ue=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,K=!0){let G=0;if(b){let H=!1;if(V!==null){const ue=V.texture.format;H=g.has(ue)}if(H){const ue=V.texture.type,me=d.has(ue),be=He.getClearColor(),Ee=He.getClearAlpha(),De=be.r,Ke=be.g,Qe=be.b;me?(v[0]=De,v[1]=Ke,v[2]=Qe,v[3]=Ee,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=De,M[1]=Ke,M[2]=Qe,M[3]=Ee,L.clearBufferiv(L.COLOR,0,M))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Xe,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",qe,!1),He.dispose(),ne.dispose(),Ne.dispose(),j.dispose(),de.dispose(),le.dispose(),ye.dispose(),te.dispose(),ce.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",$t),oe.removeEventListener("sessionend",fi),Xt.stop()};function Xe(b){b.preventDefault(),Wp("WebGLRenderer: Context Lost."),U=!0}function Fe(){Wp("WebGLRenderer: Context Restored."),U=!1;const b=z.autoReset,N=Ie.enabled,K=Ie.autoUpdate,G=Ie.needsUpdate,H=Ie.type;re(),z.autoReset=b,Ie.enabled=N,Ie.autoUpdate=K,Ie.needsUpdate=G,Ie.type=H}function qe(b){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ae(b){const N=b.target;N.removeEventListener("dispose",Ae),Nt(N)}function Nt(b){rt(b),j.remove(b)}function rt(b){const N=j.get(b).programs;N!==void 0&&(N.forEach(function(K){ce.releaseProgram(K)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,K,G,H,ue){N===null&&(N=Ot);const me=H.isMesh&&H.matrixWorld.determinantAffine()<0,be=e_(b,N,K,G,H);_.setMaterial(G,me);let Ee=K.index,De=1;if(G.wireframe===!0){if(Ee=I.getWireframeAttribute(K),Ee===void 0)return;De=2}const Ke=K.drawRange,Qe=K.attributes.position;let Re=Ke.start*De,lt=(Ke.start+Ke.count)*De;ue!==null&&(Re=Math.max(Re,ue.start*De),lt=Math.min(lt,(ue.start+ue.count)*De)),Ee!==null?(Re=Math.max(Re,0),lt=Math.min(lt,Ee.count)):Qe!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,Qe.count));const Ft=lt-Re;if(Ft<0||Ft===1/0)return;ye.setup(H,G,be,K,Ee);let ht,ft=ie;if(Ee!==null&&(ht=he.get(Ee),ft=ae,ft.setIndex(ht)),H.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*wt()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(H.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),_.setLineWidth(Tt*wt()),H.isLineSegments?ft.setMode(L.LINES):H.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else H.isPoints?ft.setMode(L.POINTS):H.isSprite&&ft.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Tt=H._multiDrawStarts,we=H._multiDrawCounts,pi=H._multiDrawCount,Dn=Ee?he.get(Ee).bytesPerElement:1,Hi=j.get(G).currentProgram.getUniforms();for(let hr=0;hr<pi;hr++)Hi.setValue(L,"_gl_DrawID",hr),ft.render(Tt[hr]/Dn,we[hr])}else if(H.isInstancedMesh)ft.renderInstances(Re,Ft,H.count);else if(K.isInstancedBufferGeometry){const Tt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Tt);ft.renderInstances(Re,Ft,we)}else ft.render(Re,Ft)};function Cr(b,N,K,G){k!==null&&b.isNodeMaterial&&k.setObject(G,b),Be===!0&&Te.setState(b,K,!1),b.transparent===!0&&b.side===ji&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,yo(b,N,G),b.side=Mn,b.needsUpdate=!0,yo(b,N,G),b.side=ji):yo(b,N,G)}this.compile=function(b,N,K=null){K===null&&(K=b),k!==null&&k.renderStart(b,N,K),w=Ne.get(K),w.init(N),x.push(w),K.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==K&&b.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),Ut=this.localClippingEnabled,Be=Te.init(this.clippingPlanes,Ut),Be===!0&&Te.setGlobalState(this.clippingPlanes,N),k!==null&&Ie.render(w.state.shadowsArray,K,N);const G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const be=ue[me];Cr(be,K,N,H),G.add(be)}else Cr(ue,K,N,H),G.add(ue)}),w=x.pop(),k!==null&&k.renderEnd(),G},this.compileAsync=function(b,N,K=null){const G=this.compile(b,N,K);return new Promise(H=>{function ue(){if(G.forEach(function(me){const be=j.get(me).currentProgram;(be===void 0||be.isReady())&&G.delete(me)}),G.size===0){H(b);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ti=null;function xo(b){ti&&ti(b)}function $t(){Xt.stop()}function fi(){Xt.start()}const Xt=new W0;Xt.setAnimationLoop(xo),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(b){ti=b,oe.setAnimationLoop(b),b===null?Xt.stop():Xt.start()},oe.addEventListener("sessionstart",$t),oe.addEventListener("sessionend",fi),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(b,N);const K=oe.enabled===!0&&oe.isPresenting===!0,G=T!==null&&(V===null||K)&&T.begin(A,V);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,N,V),w=Ne.get(b,x.length),w.init(N),w.state.textureUnits=Z.getTextureUnits(),x.push(w),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),We.setFromProjectionMatrix(_t,br,N.reversedDepth),Ut=this.localClippingEnabled,Be=Te.init(this.clippingPlanes,Ut),E=ne.get(b,C.length),E.init(),C.push(E),oe.enabled===!0&&oe.isPresenting===!0){const ue=A.xr.getDepthSensingMesh();ue!==null&&qr(ue,N,-1/0,A.sortObjects)}qr(b,N,0,A.sortObjects),E.finish(),k!==null&&k.updateLights(w.state.lightsArray),A.sortObjects===!0&&E.sort(Me,Ue),mt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,mt&&He.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Te.beginShadows();const H=w.state.shadowsArray;if(Ie.render(H,b,N),Be===!0&&Te.endShadows(),(G&&T.hasRenderPass())===!1){const ue=E.opaque,me=E.transmissive;if(w.setupLights(),N.isArrayCamera){const be=N.cameras;if(me.length>0)for(let Ee=0,De=be.length;Ee<De;Ee++){const Ke=be[Ee];Kr(ue,me,b,Ke)}mt&&He.render(b);for(let Ee=0,De=be.length;Ee<De;Ee++){const Ke=be[Ee];Pn(E,b,Ke,Ke.viewport)}}else me.length>0&&Kr(ue,me,b,N),mt&&He.render(b),Pn(E,b,N)}V!==null&&J===0&&(Z.updateMultisampleRenderTarget(V),Z.updateRenderTargetMipmap(V)),G&&T.end(A),b.isScene===!0&&b.onAfterRender(A,b,N),ye.resetDefaultState(),B=-1,W=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),Be===!0&&Te.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,k!==null&&k.renderEnd()};function qr(b,N,K,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(We)){G&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const ue=le.update(b),me=b.material;me.visible&&E.push(b,ue,me,K,At.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(We))){const ue=le.update(b),me=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),At.copy(ue.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(me)){const be=ue.groups;for(let Ee=0,De=be.length;Ee<De;Ee++){const Ke=be[Ee],Qe=me[Ke.materialIndex];Qe&&Qe.visible&&E.push(b,ue,Qe,K,At.z,Ke,N)}}else me.visible&&E.push(b,ue,me,K,At.z,null,N)}}const H=b.children;for(let ue=0,me=H.length;ue<me;ue++)qr(H[ue],N,K,G)}function Pn(b,N,K,G){const{opaque:H,transmissive:ue,transparent:me}=b;w.setupLightsView(K),Be===!0&&Te.setGlobalState(A.clippingPlanes,K),G&&_.viewport(O.copy(G)),H.length>0&&Nn(H,N,K),ue.length>0&&Nn(ue,N,K),me.length>0&&Nn(me,N,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Kr(b,N,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Qe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new cr(1,1,{generateMipmaps:!0,type:Qe?Tr:Ui,minFilter:Gn,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const H=w.state.transmissionRenderTarget[G.id],ue=G.viewport||O;H.setSize(ue.z*A.transmissionResolutionScale,ue.w*A.transmissionResolutionScale);const me=A.getRenderTarget(),be=A.getActiveCubeFace(),Ee=A.getActiveMipmapLevel();A.setRenderTarget(H),A.getClearColor(Pe),Le=A.getClearAlpha(),Le<1&&A.setClearColor(16777215,.5),A.clear(),mt&&He.render(K);const De=A.toneMapping;A.toneMapping=Er;const Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Be===!0&&Te.setGlobalState(A.clippingPlanes,G),Nn(b,K,G),Z.updateMultisampleRenderTarget(H),Z.updateRenderTargetMipmap(H),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Re=0,lt=N.length;Re<lt;Re++){const Ft=N[Re],{object:ht,geometry:ft,material:Tt,group:we}=Ft;if(Tt.side===ji&&ht.layers.test(G.layers)){const pi=Tt.side;Tt.side=li,Tt.needsUpdate=!0,wf(ht,K,G,ft,Tt,we),Tt.side=pi,Tt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Z.updateMultisampleRenderTarget(H),Z.updateRenderTargetMipmap(H))}A.setRenderTarget(me,be,Ee),A.setClearColor(Pe,Le),Ke!==void 0&&(G.viewport=Ke),A.toneMapping=De}function Nn(b,N,K){const G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ue=b.length;H<ue;H++){const me=b[H],{object:be,geometry:Ee,group:De}=me;let Ke=me.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),be.layers.test(K.layers)&&wf(be,N,K,Ee,Ke,De)}}function wf(b,N,K,G,H,ue){k!==null&&H.isNodeMaterial&&k.setObject(b,H),b.onBeforeRender(A,N,K,G,H,ue),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(A,N,K,G,b,ue),H.transparent===!0&&H.side===ji&&H.forceSinglePass===!1?(H.side=li,H.needsUpdate=!0,A.renderBufferDirect(K,N,G,H,b,ue),H.side=Mn,H.needsUpdate=!0,A.renderBufferDirect(K,N,G,H,b,ue),H.side=ji):A.renderBufferDirect(K,N,G,H,b,ue),b.onAfterRender(A,N,K,G,H,ue)}function yo(b,N,K){N.isScene!==!0&&(N=Ot);const G=j.get(b),H=w.state.lights,ue=w.state.shadowsArray,me=H.state.version,be=ce.getParameters(b,H.state,ue,N,K,w.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(be);let De=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=de.get(b.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Ae),De=new Map,G.programs=De);let Qe=De.get(Ee);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===me)return Cf(b,be),Qe}else be.uniforms=ce.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,K,be),b.onBeforeCompile(be,A),Qe=ce.acquireProgram(be,Ee),De.set(Ee,Qe),G.uniforms=be.uniforms;const Re=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Te.uniform),Cf(b,be),G.needsLights=i_(b),G.lightsStateVersion=me,G.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.sunLights.value=H.state.sun,Re.sunLightShadows.value=H.state.sunShadow,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.sunShadowMatrix.value=H.state.sunShadowMatrix,Re.sunShadowCascade.value=H.state.sunShadowCascade,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Qe,G.uniformsList=null,Qe}function Tf(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Al.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Cf(b,N){const K=j.get(b);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function Q0(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let K=0,G=b.length;K<G;K++){const H=b[K];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function e_(b,N,K,G,H){N.isScene!==!0&&(N=Ot),Z.resetTextureUnits();const ue=N.fog,me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,be=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=de.get(G.envMap||me,Ee),Ke=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,Ft=!!K.morphAttributes.color;let ht=Er;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ht=A.toneMapping);const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=ft!==void 0?ft.length:0,we=j.get(G),pi=w.state.lights;if(Be===!0&&(Ut===!0||b!==W)){const ut=b===W&&G.id===B;Te.setState(G,b,ut)}let Dn=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==pi.state.version||we.outputColorSpace!==be||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==De||G.fog===!0&&we.fog!==ue||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Te.numPlanes||we.numIntersection!==Te.numIntersection)||we.vertexAlphas!==Ke||we.vertexTangents!==Qe||we.morphTargets!==Re||we.morphNormals!==lt||we.morphColors!==Ft||we.toneMapping!==ht||we.morphTargetsCount!==Tt||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Dn=!0):(Dn=!0,we.__version=G.version);let Hi=we.currentProgram;Dn===!0&&(Hi=yo(G,N,H),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Hi,we));let hr=!1,$r=!1,ra=!1;const ct=Hi.getUniforms(),Dt=we.uniforms;if(_.useProgram(Hi.program)&&(hr=!0,$r=!0,ra=!0),G.id!==B&&(B=G.id,$r=!0),we.needsLights){const ut=Q0(w.state.lightProbeGridArray,H);we.lightProbeGrid!==ut&&(we.lightProbeGrid=ut,$r=!0)}if(hr||W!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",b.projectionMatrix),ct.setValue(L,"viewMatrix",b.matrixWorldInverse);const ut=ct.map.cameraPosition;ut!==void 0&&ut.setValue(L,dt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,$r=!0,ra=!0)}if(we.needsLights&&(pi.state.sunShadowMap.length>0&&ct.setValue(L,"sunShadowMap",pi.state.sunShadowMap,Z),pi.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",pi.state.directionalShadowMap,Z),pi.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",pi.state.spotShadowMap,Z),pi.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",pi.state.pointShadowMap,Z)),H.isSkinnedMesh){ct.setOptional(L,H,"bindMatrix"),ct.setOptional(L,H,"bindMatrixInverse");const ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ct.setValue(L,"boneTexture",ut.boneTexture,Z))}H.isBatchedMesh&&(ct.setOptional(L,H,"batchingTexture"),ct.setValue(L,"batchingTexture",H._matricesTexture,Z),ct.setOptional(L,H,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",H._indirectTexture,Z),ct.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",H._colorsTexture,Z));const Zr=K.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&P.update(H,K,Hi),($r||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,ct.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Dt.envMapIntensity.value=N.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=xT()),$r){if(ct.setValue(L,"toneMappingExposure",A.toneMappingExposure),we.needsLights&&t_(Dt,ra),ue&&G.fog===!0&&xe.refreshFogUniforms(Dt,ue),xe.refreshMaterialUniforms(Dt,G,ee,$,w.state.transmissionRenderTarget[b.id]),we.needsLights&&we.lightProbeGrid){const ut=we.lightProbeGrid;Dt.probesSH.value=ut.texture,Dt.probesMin.value.copy(ut.boundingBox.min),Dt.probesMax.value.copy(ut.boundingBox.max),Dt.probesResolution.value.copy(ut.resolution)}Al.upload(L,Tf(we),Dt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Al.upload(L,Tf(we),Dt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(L,"center",H.center),ct.setValue(L,"modelViewMatrix",H.modelViewMatrix),ct.setValue(L,"normalMatrix",H.normalMatrix),ct.setValue(L,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const ut=G.uniformsGroups;for(let rs=0,na=ut.length;rs<na;rs++){const Af=ut[rs];te.update(Af,Hi),te.bind(Af,Hi)}}return Hi}function t_(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function i_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,N,K){const G=j.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=N,j.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const K=j.get(b);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,K=0){V=b,Q=N,J=K;let G=null,H=!1,ue=!1;if(b){const me=j.get(b);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),O.copy(b.viewport),pe.copy(b.scissor),ve=b.scissorTest,_.viewport(O),_.scissor(pe),_.setScissorTest(ve),B=-1;return}else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(me.__hasExternalTextures)Z.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(me.__boundDepthTexture!==De){if(De!==null&&j.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);const Ee=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?G=Ee[N][K]:G=Ee[N],H=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?G=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?G=Ee[K]:G=Ee,O.copy(b.viewport),pe.copy(b.scissor),ve=b.scissorTest}else O.copy(_e).multiplyScalar(ee).floor(),pe.copy(Ce).multiplyScalar(ee).floor(),ve=et;if(K!==0&&(G=Y),_.bindFramebuffer(L.FRAMEBUFFER,G)&&_.drawBuffers(b,G),_.viewport(O),_.scissor(pe),_.setScissorTest(ve),H){const me=j.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,K)}else if(ue){const me=N;for(let be=0;be<b.textures.length;be++){const Ee=j.get(b.textures[be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+be,Ee.__webglTexture,K,me)}}else if(b!==null&&K!==0){const me=j.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,K)}B=-1};function Rf(b){const N=j.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=R.textureFormatReadable(b.format),N.__typeReadable=R.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,K,G,H,ue,me,be=0){if(!(b&&b.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){_.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const De=b.textures[be],Ke=De.format,Qe=De.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);const Re=Rf(De);if(Re.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&K>=0&&K<=b.height-H&&L.readPixels(N,K,G,H,ge.convert(Ke),ge.convert(Qe),ue)}finally{const De=V!==null?j.get(V).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,N,K,G,H,ue,me,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(N>=0&&N<=b.width-G&&K>=0&&K<=b.height-H){_.bindFramebuffer(L.FRAMEBUFFER,Ee);const De=b.textures[be],Ke=De.format,Qe=De.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);const Re=Rf(De);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(N,K,G,H,ge.convert(Ke),ge.convert(Qe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ft=V!==null?j.get(V).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ft);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pb(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(lt),L.deleteSync(ht),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,K=0){const G=Math.pow(2,-K),H=Math.floor(b.image.width*G),ue=Math.floor(b.image.height*G),me=N!==null?N.x:0,be=N!==null?N.y:0;Z.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,me,be,H,ue),_.unbindTexture()},this.copyTextureToTexture=function(b,N,K=null,G=null,H=0,ue=0){let me,be,Ee,De,Ke,Qe,Re,lt,Ft;const ht=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(K!==null)me=K.max.x-K.min.x,be=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,Ke=K.min.y,Qe=K.isBox3?K.min.z:0;else{const Dt=Math.pow(2,-H);me=Math.floor(ht.width*Dt),be=Math.floor(ht.height*Dt),b.isDataArrayTexture?Ee=ht.depth:b.isData3DTexture?Ee=Math.floor(ht.depth*Dt):Ee=1,De=0,Ke=0,Qe=0}G!==null?(Re=G.x,lt=G.y,Ft=G.z):(Re=0,lt=0,Ft=0);const ft=ge.convert(N.format),Tt=ge.convert(N.type);let we;N.isData3DTexture?(Z.setTexture3D(N,0),we=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),we=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),we=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const pi=_.getParameter(L.UNPACK_ROW_LENGTH),Dn=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Hi=_.getParameter(L.UNPACK_SKIP_PIXELS),hr=_.getParameter(L.UNPACK_SKIP_ROWS),$r=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,De),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);const ra=b.isDataArrayTexture||b.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Dt=j.get(b),Zr=j.get(N),ut=j.get(Dt.__renderTarget),rs=j.get(Zr.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let na=0;na<Ee;na++)ra&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,j.get(b).__webglTexture,H,Qe+na),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,j.get(N).__webglTexture,ue,Ft+na)),L.blitFramebuffer(De,Ke,me,be,Re,lt,me,be,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||j.has(b)){const Dt=j.get(b),Zr=j.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,q);for(let ut=0;ut<Ee;ut++)ra?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,H,Qe+ut):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,H),ct?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zr.__webglTexture,ue,Ft+ut):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zr.__webglTexture,ue),H!==0?L.blitFramebuffer(De,Ke,me,be,Re,lt,me,be,L.COLOR_BUFFER_BIT,L.NEAREST):ct?L.copyTexSubImage3D(we,ue,Re,lt,Ft+ut,De,Ke,me,be):L.copyTexSubImage2D(we,ue,Re,lt,De,Ke,me,be);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(we,ue,Re,lt,Ft,me,be,Ee,ft,Tt,ht.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(we,ue,Re,lt,Ft,me,be,Ee,ft,ht.data):L.texSubImage3D(we,ue,Re,lt,Ft,me,be,Ee,ft,Tt,ht):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Re,lt,me,be,ft,Tt,ht.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Re,lt,ht.width,ht.height,ft,ht.data):L.texSubImage2D(L.TEXTURE_2D,ue,Re,lt,me,be,ft,Tt,ht);_.pixelStorei(L.UNPACK_ROW_LENGTH,pi),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dn),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Hi),_.pixelStorei(L.UNPACK_SKIP_ROWS,hr),_.pixelStorei(L.UNPACK_SKIP_IMAGES,$r),ue===0&&N.generateMipmaps&&L.generateMipmap(we),_.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Q=0,J=0,V=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),i.unpackColorSpace=Je._getUnpackColorSpace()}}const Bm={type:"change"},Ef={type:"start"},J0={type:"end"},ul=new vo,Hm=new Ur,bT=Math.cos(70*Lb.DEG2RAD),Bt=new F,Mi=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6;class ST extends SS{constructor(e,i=null){super(e,i),this.state=st.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ha.ROTATE,MIDDLE:Ha.DOLLY,RIGHT:Ha.PAN},this.touches={ONE:Da.ROTATE,TWO:Da.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new En,this._lastTargetPosition=new F,this._quat=new En().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gm,this._sphericalDelta=new gm,this._scale=1,this._panOffset=new F,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new F,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ET.bind(this),this._onPointerDown=MT.bind(this),this._onPointerUp=wT.bind(this),this._onContextMenu=DT.bind(this),this._onMouseWheel=RT.bind(this),this._onKeyDown=AT.bind(this),this._onTouchStart=PT.bind(this),this._onTouchMove=NT.bind(this),this._onMouseDown=TT.bind(this),this._onMouseMove=CT.bind(this),this._interceptControlDown=LT.bind(this),this._interceptControlUp=IT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=st.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bm),this.update(),this.state=st.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Bt.copy(i).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(r)&&isFinite(n)&&(r<-Math.PI?r+=Mi:r>Math.PI&&(r-=Mi),n<-Math.PI?n+=Mi:n>Math.PI&&(n-=Mi),r<=n?this._spherical.theta=Math.max(r,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+n)/2?Math.max(r,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),i.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Bt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<bT?this.object.lookAt(this.target):(Hm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(Hm,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(Bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mi/60*this.autoRotateSpeed*e:Mi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Bt.setFromMatrixColumn(i,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,i){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(i,1):(Bt.setFromMatrixColumn(i,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Bt.copy(n).sub(this.target);let a=Bt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*i*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),n=e-r.left,a=i-r.top,s=r.width,o=r.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Mi*this._rotateDelta.x/i.clientHeight),this._rotateUp(Mi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateStart.set(r,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._panStart.set(r,n)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,n=e.pageY-i.y,a=Math.sqrt(r*r+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),n=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Mi*this._rotateDelta.x/i.clientHeight),this._rotateUp(Mi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._panEnd.set(r,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,n=e.pageY-i.y,a=Math.sqrt(r*r+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+i.x)*.5,o=(e.pageY+i.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ke,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function MT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ET(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function wT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(J0),this.state=st.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function TT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ha.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=st.DOLLY;break;case Ha.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}break;case Ha.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Ef)}function CT(t){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function RT(t){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(t.preventDefault(),this.dispatchEvent(Ef),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(J0))}function AT(t){this.enabled!==!1&&this._handleKeyDown(t)}function PT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Da.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=st.TOUCH_ROTATE;break;case Da.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Da.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=st.TOUCH_DOLLY_PAN;break;case Da.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Ef)}function NT(t){switch(this._trackPointer(t),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=st.NONE}}function DT(t){this.enabled!==!1&&t.preventDefault()}function LT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gr=[{id:"sun",name:"Sun",type:"star",order:0,descriptor:"The heart of our solar system",introduction:"The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.",facts:["Accounts for 99.86% of the mass in the solar system.","Surface temperature is about 5,500 degrees Celsius.","Light from the Sun takes 8 minutes and 20 seconds to reach Earth."],color:"#FFD700",gradient:"radial-gradient(circle at 30% 30%, #fff, #FFD700 40%, #ff8c00 80%, #8b0000)",size:90,distance:0,orbitSpeed:0},{id:"mercury",name:"Mercury",type:"planet",order:1,descriptor:"The swift planet",introduction:"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth.",facts:["Has no moons or rings.","A year on Mercury is just 88 Earth days.","Temperatures fluctuate from 430°C during the day to -180°C at night."],color:"#B0C4DE",gradient:"radial-gradient(circle at 30% 30%, #fff, #B0C4DE 50%, #708090)",size:8,distance:60,orbitSpeed:4.1},{id:"venus",name:"Venus",type:"planet",order:2,descriptor:"Earth's toxic twin",introduction:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and its thick atmosphere traps heat in a runaway greenhouse effect.",facts:["The hottest planet in our solar system.","Spins backwards compared to most other planets.","Has a surface pressure 90 times that of Earth."],color:"#DEB887",gradient:"radial-gradient(circle at 30% 30%, #fff, #DEB887 50%, #8B4513)",size:14,distance:90,orbitSpeed:1.6},{id:"earth",name:"Earth",type:"planet",order:3,descriptor:"Our home planet",introduction:"Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.",facts:["The only planet known to harbor life.","Its atmosphere is 78% nitrogen and 21% oxygen.","Has one moon and no rings."],color:"#4E55D8",gradient:"radial-gradient(circle at 30% 30%, #fff, #4E55D8 40%, #000080)",size:16,distance:130,orbitSpeed:1},{id:"mars",name:"Mars",type:"planet",order:4,descriptor:"The red planet",introduction:"Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.",facts:["Home to Olympus Mons, the largest volcano in the solar system.","Has two small moons, Phobos and Deimos.","Often appears red due to iron oxide (rust) on its surface."],color:"#CD5C5C",gradient:"radial-gradient(circle at 30% 30%, #ffc0cb, #CD5C5C 50%, #800000)",size:9,distance:170,orbitSpeed:.53},{id:"jupiter",name:"Jupiter",type:"planet",order:5,descriptor:"The giant planet",introduction:"Jupiter has a long history of surprising scientists. It is more than twice as massive as all the other planets combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth.",facts:["The largest planet in our solar system.","Has a faint ring system and 95 recognized moons.","Rotates completely in about 10 hours."],color:"#DAA520",gradient:"linear-gradient(to bottom, #DAA520 0%, #D2691E 20%, #DAA520 40%, #F5DEB3 60%, #D2691E 80%, #DAA520 100%)",size:56,distance:250,orbitSpeed:.08},{id:"saturn",name:"Saturn",type:"planet",order:6,descriptor:"The ringed jewel",introduction:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular or as complicated as Saturn's.",facts:["Has the most extensive ring system of any planet.","Could float in water because it is mostly made of gas.","Has 146 known moons."],color:"#F4A460",gradient:"linear-gradient(to bottom, #F5DEB3 0%, #F4A460 30%, #D2B48C 70%, #F4A460 100%)",size:46,distance:330,orbitSpeed:.03},{id:"uranus",name:"Uranus",type:"planet",order:7,descriptor:"The tilted planet",introduction:"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope and rotates on its side.",facts:["Rotates at a nearly 90-degree angle from the plane of its orbit.","An ice giant with a blue-green color from methane gas.","Has 13 faint rings."],color:"#87CEEB",gradient:"radial-gradient(circle at 30% 30%, #fff, #87CEEB 60%, #4682B4)",size:24,distance:400,orbitSpeed:.012},{id:"neptune",name:"Neptune",type:"planet",order:8,descriptor:"The windy world",introduction:"Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet not visible to the naked eye.",facts:["The first planet located through mathematical calculations.","Has winds that can reach up to 1,200 miles per hour.","Takes 165 Earth years to orbit the Sun once."],color:"#4169E1",gradient:"radial-gradient(circle at 30% 30%, #fff, #4169E1 50%, #00008B)",size:22,distance:460,orbitSpeed:.006}],qi=new Map;function UT(t=42){const e=new Uint8Array(512);let i=t;const r=()=>(i=i*16807%2147483647,(i-1)/2147483646),n=new Uint8Array(256);for(let l=0;l<256;l++)n[l]=l;for(let l=255;l>0;l--){const c=Math.floor(r()*(l+1)),h=n[l];n[l]=n[c],n[c]=h}for(let l=0;l<512;l++)e[l]=n[l&255];const a=l=>l*l*l*(l*(l*6-15)+10),s=(l,c,h)=>c+l*(h-c),o=(l,c,h)=>{const f=l&3,u=f<2?c:h,p=f<2?h:c;return(f&1?-u:u)+(f&2?-p:p)};return function(l,c){const h=Math.floor(l)&255,f=Math.floor(c)&255,u=l-Math.floor(l),p=c-Math.floor(c),m=a(u),S=a(p),g=e[h]+f,d=e[g],v=e[g+1],M=e[h+1]+f,y=e[M],E=e[M+1];return s(S,s(m,o(e[d],u,p),o(e[y],u-1,p)),s(m,o(e[v],u,p-1),o(e[E],u-1,p-1)))}}const OT=UT(1337);function Xr(t,e,i=5){let r=0,n=.5,a=1;for(let s=0;s<i;s++)r+=OT(t*a,e*a)*n,a*=2,n*=.5;return r}function FT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createImageData(2048,1024),r=i.data;for(let a=0;a<1024;a++){const s=a/1024,o=Math.sin(s*Math.PI);for(let l=0;l<2048;l++){const c=(a*2048+l)*4,h=l/2048,f=Xr(h*36,s*18,4),u=Xr(h*90,s*45,3),p=.72+f*.18+u*.1,m=Math.min(255,Math.floor(255*p*(.95+o*.05))),S=Math.min(255,Math.floor(185*p*p+35)),g=Math.min(255,Math.floor(60*p*p*p));r[c]=m,r[c+1]=S,r[c+2]=g,r[c+3]=255}}e.putImageData(i,0,0),[{x:2048*.28,y:1024*.42,r:24},{x:2048*.31,y:1024*.44,r:16},{x:2048*.33,y:1024*.41,r:11},{x:2048*.68,y:1024*.58,r:28},{x:2048*.71,y:1024*.6,r:18},{x:2048*.65,y:1024*.56,r:12},{x:2048*.82,y:1024*.38,r:19},{x:2048*.85,y:1024*.39,r:14},{x:2048*.14,y:1024*.62,r:15}].forEach(a=>{const s=e.createRadialGradient(a.x,a.y,a.r*.8,a.x,a.y,a.r*2.2);s.addColorStop(0,"rgba(255, 245, 180, 0.45)"),s.addColorStop(.5,"rgba(255, 210, 100, 0.2)"),s.addColorStop(1,"rgba(255, 150, 0, 0)"),e.fillStyle=s,e.beginPath(),e.arc(a.x,a.y,a.r*2.2,0,Math.PI*2),e.fill();const o=e.createRadialGradient(a.x,a.y,a.r*.35,a.x,a.y,a.r);o.addColorStop(0,"#5a1d04"),o.addColorStop(.7,"#8f380c"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.beginPath(),e.arc(a.x,a.y,a.r,0,Math.PI*2),e.fill();const l=e.createRadialGradient(a.x,a.y,0,a.x,a.y,a.r*.45);l.addColorStop(0,"#1c0800"),l.addColorStop(.8,"#320e02"),l.addColorStop(1,"#5a1d04"),e.fillStyle=l,e.beginPath(),e.arc(a.x,a.y,a.r*.45,0,Math.PI*2),e.fill()});const n=new Zi(t);return n.wrapS=Ai,n.wrapT=Rt,n.colorSpace=xt,n}function Vm(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createImageData(2048,1024),r=i.data;for(let s=0;s<1024;s++)for(let o=0;o<2048;o++){const l=(s*2048+o)*4,c=o/2048,h=s/1024,f=Xr(c*14,h*14,5)*.5+.5,u=Xr(c*60,h*60,3)*.15,p=Math.max(0,Math.min(255,Math.floor((f*.7+u+.3)*155)));r[l]=Math.min(255,p+6),r[l+1]=Math.min(255,p+4),r[l+2]=p,r[l+3]=255}e.putImageData(i,0,0),[{x:2048*.35,y:1024*.45,r:140,depth:.3},{x:2048*.72,y:1024*.58,r:110,depth:.25},{x:2048*.18,y:1024*.7,r:90,depth:.2},{x:2048*.85,y:1024*.32,r:95,depth:.22}].forEach(s=>{const o=e.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r);o.addColorStop(0,"rgba(55, 53, 50, 0.7)"),o.addColorStop(.7,"rgba(75, 73, 70, 0.4)"),o.addColorStop(.95,"rgba(175, 172, 168, 0.5)"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.beginPath(),e.arc(s.x,s.y,s.r,0,Math.PI*2),e.fill()});const n=s=>{const o=Math.sin(s++)*1e4;return o-Math.floor(o)};for(let s=0;s<400;s++){const o=n(s*3)*2048,l=n(s*3+1)*1024,c=3+Math.pow(n(s*3+2),2.5)*45;e.strokeStyle="rgba(220, 218, 215, 0.6)",e.lineWidth=Math.max(1,c*.12),e.beginPath(),e.arc(o,l,c,Math.PI*.7,Math.PI*1.7),e.stroke();const h=e.createRadialGradient(o+c*.25,l+c*.2,0,o,l,c);if(h.addColorStop(0,"rgba(30, 28, 26, 0.75)"),h.addColorStop(.75,"rgba(60, 58, 55, 0.4)"),h.addColorStop(1,"transparent"),e.fillStyle=h,e.beginPath(),e.arc(o,l,c,0,Math.PI*2),e.fill(),c>25&&n(s+99)>.5){const f=8+Math.floor(n(s)*10);e.strokeStyle="rgba(235, 235, 230, 0.28)",e.lineWidth=1;for(let u=0;u<f;u++){const p=u/f*Math.PI*2+n(u)*.3,m=c*(2.5+n(u*2)*5);e.beginPath(),e.moveTo(o,l),e.lineTo(o+Math.cos(p)*m,l+Math.sin(p)*m),e.stroke()}}}const a=new Zi(t);return a.wrapS=Ai,a.wrapT=Rt,a.colorSpace=xt,a}function kT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createImageData(2048,1024),r=i.data;for(let a=0;a<1024;a++){const s=a/1024,o=Math.abs(s-.5)*2;for(let l=0;l<2048;l++){const c=(a*2048+l)*4,h=l/2048,f=Math.sin(h*Math.PI*4-o*1.5)*.08,u=Xr(h*8+f,s*12,4),p=232-o*25+u*18,m=212-o*32+u*16,S=175-o*45+u*14;r[c]=Math.max(0,Math.min(255,Math.floor(p))),r[c+1]=Math.max(0,Math.min(255,Math.floor(m))),r[c+2]=Math.max(0,Math.min(255,Math.floor(S))),r[c+3]=255}}e.putImageData(i,0,0),e.lineWidth=18;for(let a=0;a<40;a++){const s=a/40*1024;e.strokeStyle=a%2===0?"rgba(255, 248, 230, 0.12)":"rgba(180, 145, 100, 0.08)",e.beginPath(),e.moveTo(0,s),e.bezierCurveTo(2048*.33,s+Math.sin(a)*25,2048*.66,s-Math.cos(a)*25,2048,s),e.stroke()}const n=new Zi(t);return n.wrapS=Ai,n.wrapT=Rt,n.colorSpace=xt,n}function zT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#0c2242"),i.addColorStop(.5,"#071833"),i.addColorStop(1,"#0c2242"),e.fillStyle=i,e.fillRect(0,0,2048,1024);const r=(o,l,c,h="rgba(20, 95, 140, 0.45)")=>{e.lineJoin="round",e.lineCap="round",e.lineWidth=14,e.strokeStyle=h,e.beginPath(),e.moveTo(o[0][0],o[0][1]);for(let f=1;f<o.length;f++)e.lineTo(o[f][0],o[f][1]);e.closePath(),e.stroke(),e.beginPath(),e.moveTo(o[0][0],o[0][1]);for(let f=1;f<o.length;f++)e.lineTo(o[f][0],o[f][1]);e.closePath(),e.fillStyle=l,e.fill(),e.save(),e.clip();for(let f=0;f<20;f++){const u=o[0][0]+(Math.random()-.5)*300,p=o[0][1]+(Math.random()-.5)*200,m=40+Math.random()*80,S=e.createRadialGradient(u,p,0,u,p,m);S.addColorStop(0,c),S.addColorStop(1,"transparent"),e.fillStyle=S,e.beginPath(),e.arc(u,p,m,0,Math.PI*2),e.fill()}e.restore()};r([[360,240],[480,200],[580,220],[680,260],[640,340],[580,420],[540,460],[480,520],[420,480],[380,400],[340,320]],"#2d5e2a","#8a7a40"),r([[540,540],[640,580],[700,640],[660,760],[600,860],[560,880],[540,780],[500,640]],"#255424","#4a7a30"),r([[960,260],[1080,240],[1160,280],[1140,360],[1060,400],[980,380],[940,320]],"#3e6b2c","#75783d"),r([[960,420],[1120,400],[1220,460],[1240,560],[1180,720],[1120,800],[1040,780],[960,620],[920,480]],"#8a7536","#3b5c25"),r([[1160,240],[1400,180],[1620,220],[1720,320],[1660,460],[1540,520],[1420,520],[1320,460],[1220,380]],"#406830","#94854c"),r([[1360,480],[1440,500],[1420,600],[1380,620],[1340,540]],"#4a7330","#7a7d3a"),r([[1560,640],[1700,620],[1760,700],[1720,780],[1600,780],[1540,720]],"#9e6f36","#704f26");const n=e.createLinearGradient(0,884,0,1024);n.addColorStop(0,"transparent"),n.addColorStop(.25,"rgba(235, 245, 255, 0.85)"),n.addColorStop(1,"#ffffff"),e.fillStyle=n,e.fillRect(0,884,2048,140);const a=e.createLinearGradient(0,0,0,110);a.addColorStop(0,"#ffffff"),a.addColorStop(.75,"rgba(235, 245, 255, 0.85)"),a.addColorStop(1,"transparent"),e.fillStyle=a,e.fillRect(0,0,2048,110);const s=new Zi(t);return s.wrapS=Ai,s.wrapT=Rt,s.colorSpace=xt,s}function BT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,2048,1024);const i=(n,a,s,o=25)=>{const l=e.createRadialGradient(n,a,0,n,a,s*1.5);l.addColorStop(0,"rgba(255, 210, 110, 0.85)"),l.addColorStop(.4,"rgba(240, 170, 70, 0.45)"),l.addColorStop(.8,"rgba(200, 120, 30, 0.15)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.arc(n,a,s*1.5,0,Math.PI*2),e.fill();for(let c=0;c<o;c++){const h=Math.random()*Math.PI*2,f=Math.pow(Math.random(),1.8)*s,u=n+Math.cos(h)*f,p=a+Math.sin(h)*f;e.fillStyle=Math.random()>.3?"#fff5cc":"#ffcc66",e.fillRect(u,p,1.5,1.5)}};i(560,340,45,60),i(510,360,35,40),i(420,380,30,35),i(480,440,25,30),i(1020,290,35,50),i(1070,310,38,55),i(1060,360,28,35),i(1180,270,24,25),i(1660,390,45,65),i(1560,360,38,50),i(1580,430,40,55),i(1540,480,35,45),i(1380,490,40,55),i(1360,540,32,40),i(650,720,35,45),i(580,780,26,30),i(1700,740,24,30),i(1120,760,20,25),i(1080,430,22,28),e.strokeStyle="rgba(255, 190, 90, 0.25)",e.lineWidth=1,e.beginPath(),e.moveTo(560,340),e.lineTo(510,360),e.lineTo(480,440),e.lineTo(420,380),e.moveTo(1020,290),e.lineTo(1070,310),e.lineTo(1180,270),e.stroke();const r=new Zi(t);return r.wrapS=Ai,r.wrapT=Rt,r.colorSpace=xt,r}function HT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createImageData(2048,1024),r=i.data;for(let a=0;a<1024;a++){const s=a/1024,o=Math.exp(-Math.pow((s-.5)/.08,2))*.45,l=Math.exp(-Math.pow((s-.32)/.12,2))*.4,c=Math.exp(-Math.pow((s-.68)/.12,2))*.4,h=Math.max(.1,o+l+c);for(let f=0;f<2048;f++){const u=(a*2048+f)*4,p=f/2048,m=Xr(p*10,s*8,5),S=Xr(p*32,s*24,3)*.25,g=m+S+h*.5;if(g>.42){const d=Math.min(255,Math.floor((g-.42)*450));r[u]=255,r[u+1]=255,r[u+2]=255,r[u+3]=d}else r[u]=0,r[u+1]=0,r[u+2]=0,r[u+3]=0}}e.putImageData(i,0,0),[{x:2048*.38,y:1024*.38,r:60},{x:2048*.78,y:1024*.36,r:75},{x:2048*.62,y:1024*.65,r:55}].forEach(a=>{e.save(),e.translate(a.x,a.y);for(let s=0;s<3;s++){e.beginPath();const o=s/3*Math.PI*2;for(let l=0;l<25;l++){const c=l/25*a.r,h=o+l*.25,f=Math.cos(h)*c,u=Math.sin(h)*c;l===0?e.moveTo(f,u):e.lineTo(f,u)}e.strokeStyle="rgba(255, 255, 255, 0.75)",e.lineWidth=14,e.stroke()}e.fillStyle="rgba(0, 0, 0, 0.8)",e.beginPath(),e.arc(0,0,6,0,Math.PI*2),e.fill(),e.restore()});const n=new Zi(t);return n.wrapS=Ai,n.wrapT=Rt,n}function VT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createImageData(2048,1024),r=i.data;for(let o=0;o<1024;o++)for(let l=0;l<2048;l++){const c=(o*2048+l)*4,h=l/2048,f=o/1024,u=Xr(h*12,f*10,5)*.5+.5,p=Xr(h*40,f*35,3)*.15,m=u+p,S=Math.min(255,Math.floor(180+m*45)),g=Math.min(255,Math.floor(80+m*35)),d=Math.min(255,Math.floor(45+m*20));r[c]=S,r[c+1]=g,r[c+2]=d,r[c+3]=255}e.putImageData(i,0,0),[{x:2048*.58,y:1024*.52,rx:160,ry:90,rot:.2},{x:2048*.32,y:1024*.38,rx:220,ry:110,rot:-.1},{x:2048*.82,y:1024*.62,rx:190,ry:85,rot:.15}].forEach(o=>{const l=e.createRadialGradient(o.x,o.y,0,o.x,o.y,o.rx);l.addColorStop(0,"rgba(85, 38, 22, 0.7)"),l.addColorStop(.7,"rgba(125, 55, 32, 0.4)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(o.x,o.y,o.rx,o.ry,o.rot,0,Math.PI*2),e.fill()}),e.strokeStyle="rgba(65, 25, 15, 0.8)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(2048*.35,1024*.54),e.bezierCurveTo(2048*.42,1024*.52,2048*.48,1024*.57,2048*.56,1024*.55),e.stroke(),[{x:2048*.24,y:1024*.46,r:42},{x:2048*.3,y:1024*.42,r:24},{x:2048*.28,y:1024*.48,r:24},{x:2048*.26,y:1024*.54,r:24}].forEach(o=>{const l=e.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);l.addColorStop(0,"#552212"),l.addColorStop(.3,"#c2623e"),l.addColorStop(.85,"#9e4a2b"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.arc(o.x,o.y,o.r,0,Math.PI*2),e.fill(),e.fillStyle="#2c0f06",e.beginPath(),e.arc(o.x,o.y,o.r*.2,0,Math.PI*2),e.fill()});const n=e.createLinearGradient(0,0,0,75);n.addColorStop(0,"#ffffff"),n.addColorStop(.65,"rgba(255, 240, 235, 0.9)"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.fillRect(0,0,2048,75);const a=e.createLinearGradient(0,959,0,1024);a.addColorStop(0,"transparent"),a.addColorStop(.35,"rgba(255, 240, 235, 0.9)"),a.addColorStop(1,"#ffffff"),e.fillStyle=a,e.fillRect(0,959,2048,65);const s=new Zi(t);return s.wrapS=Ai,s.wrapT=Rt,s.colorSpace=xt,s}function GT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=[{pos:0,color:"#685444"},{pos:.12,color:"#87705b"},{pos:.22,color:"#d8c5ad"},{pos:.3,color:"#a25e36"},{pos:.36,color:"#eedec9"},{pos:.43,color:"#883d1c"},{pos:.5,color:"#f3e6d2"},{pos:.58,color:"#994a24"},{pos:.67,color:"#ebd7bd"},{pos:.76,color:"#8b5b3f"},{pos:.88,color:"#9f8570"},{pos:1,color:"#625042"}],r=e.createLinearGradient(0,0,0,1024);i.forEach(f=>r.addColorStop(f.pos,f.color)),e.fillStyle=r,e.fillRect(0,0,2048,1024);for(let f=0;f<90;f++){const u=Math.random()*1024;e.beginPath(),e.moveTo(0,u);for(let p=0;p<=2048;p+=30){const m=Math.sin(p*.04+f*2)*5+Math.cos(p*.08+f)*3;e.lineTo(p,u+m)}e.strokeStyle=Math.random()>.45?"rgba(255, 240, 220, 0.22)":"rgba(110, 45, 18, 0.18)",e.lineWidth=3+Math.random()*8,e.stroke()}const n=2048*.68,a=1024*.63,s=85,o=48,l=e.createRadialGradient(n,a,0,n,a,s*1.3);l.addColorStop(0,"#ebd8c2"),l.addColorStop(.8,"rgba(240, 225, 205, 0.5)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(n,a,s*1.25,o*1.2,.05,0,Math.PI*2),e.fill();const c=e.createRadialGradient(n,a,s*.2,n,a,s);c.addColorStop(0,"#b83416"),c.addColorStop(.6,"#d95228"),c.addColorStop(.9,"#ea8c62"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.ellipse(n,a,s,o,.05,0,Math.PI*2),e.fill(),e.fillStyle="#8f1f06",e.beginPath(),e.ellipse(n,a,s*.35,o*.35,.05,0,Math.PI*2),e.fill();for(let f=0;f<7;f++){const u=(307.2+f*292.57142857142856)%2048,p=1024*.74,m=e.createRadialGradient(u,p,0,u,p,16);m.addColorStop(0,"#ffffff"),m.addColorStop(.7,"rgba(255, 250, 240, 0.85)"),m.addColorStop(1,"transparent"),e.fillStyle=m,e.beginPath(),e.ellipse(u,p,18,10,0,0,Math.PI*2),e.fill()}const h=new Zi(t);return h.wrapS=Ai,h.wrapT=Rt,h.colorSpace=xt,h}function WT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=[{pos:0,color:"#7a765d"},{pos:.15,color:"#b5a37f"},{pos:.32,color:"#e6d3ac"},{pos:.44,color:"#eedec0"},{pos:.5,color:"#f3e5c9"},{pos:.56,color:"#eedec0"},{pos:.68,color:"#dfcca2"},{pos:.82,color:"#c2ad83"},{pos:1,color:"#8a7959"}],r=e.createLinearGradient(0,0,0,1024);i.forEach(a=>r.addColorStop(a.pos,a.color)),e.fillStyle=r,e.fillRect(0,0,2048,1024);for(let a=0;a<60;a++){const s=Math.random()*1024;e.beginPath(),e.moveTo(0,s),e.lineTo(2048,s),e.strokeStyle=Math.random()>.5?"rgba(255, 252, 240, 0.12)":"rgba(130, 105, 65, 0.08)",e.lineWidth=4+Math.random()*10,e.stroke()}const n=new Zi(t);return n.wrapS=Ai,n.wrapT=Rt,n.colorSpace=xt,n}function jT(){if(qi.has("saturn-ring"))return qi.get("saturn-ring");const t=2048,e=64,i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d"),n=r.createLinearGradient(0,0,t,0);n.addColorStop(0,"rgba(0, 0, 0, 0)"),n.addColorStop(.06,"rgba(130, 115, 95, 0.08)"),n.addColorStop(.08,"rgba(150, 135, 110, 0.18)"),n.addColorStop(.24,"rgba(170, 150, 125, 0.28)"),n.addColorStop(.25,"rgba(10, 10, 15, 0.02)"),n.addColorStop(.27,"rgba(225, 205, 175, 0.85)"),n.addColorStop(.42,"rgba(245, 230, 200, 0.96)"),n.addColorStop(.58,"rgba(225, 205, 175, 0.88)"),n.addColorStop(.59,"rgba(5, 5, 8, 0.03)"),n.addColorStop(.66,"rgba(5, 5, 8, 0.03)"),n.addColorStop(.67,"rgba(215, 195, 168, 0.72)"),n.addColorStop(.84,"rgba(195, 178, 150, 0.65)"),n.addColorStop(.85,"rgba(10, 10, 15, 0.05)"),n.addColorStop(.87,"rgba(10, 10, 15, 0.05)"),n.addColorStop(.88,"rgba(180, 165, 140, 0.50)"),n.addColorStop(.96,"rgba(150, 135, 115, 0.22)"),n.addColorStop(.98,"rgba(120, 110, 95, 0.06)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),r.fillStyle=n,r.fillRect(0,0,t,e);for(let s=0;s<250;s++){const o=t*.08+Math.random()*t*.88;r.strokeStyle=Math.random()>.5?"rgba(255, 255, 255, 0.08)":"rgba(40, 30, 20, 0.12)",r.lineWidth=1+Math.random()*2,r.beginPath(),r.moveTo(o,0),r.lineTo(o,e),r.stroke()}const a=new Zi(i);return a.wrapS=Rt,a.wrapT=Rt,a.colorSpace=xt,qi.set("saturn-ring",a),a}function XT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#7ebdc0"),i.addColorStop(.3,"#94cbd0"),i.addColorStop(.5,"#a4d6db"),i.addColorStop(.7,"#8ec5ca"),i.addColorStop(1,"#75b3b7"),e.fillStyle=i,e.fillRect(0,0,2048,1024);for(let n=0;n<25;n++){const a=Math.random()*1024;e.fillStyle="rgba(255, 255, 255, 0.04)",e.fillRect(0,a,2048,8+Math.random()*24)}const r=new Zi(t);return r.wrapS=Ai,r.wrapT=Rt,r.colorSpace=xt,r}function YT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#1a377d"),i.addColorStop(.25,"#264eab"),i.addColorStop(.5,"#2f5fc2"),i.addColorStop(.75,"#22469e"),i.addColorStop(1,"#152d6a"),e.fillStyle=i,e.fillRect(0,0,2048,1024);for(let o=0;o<35;o++){const l=Math.random()*1024;e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(2048*.33,l+Math.sin(o)*12,2048*.66,l-Math.cos(o)*12,2048,l),e.strokeStyle=Math.random()>.5?"rgba(20, 55, 140, 0.35)":"rgba(75, 130, 240, 0.22)",e.lineWidth=6+Math.random()*16,e.stroke()}const r=2048*.62,n=1024*.42,a=e.createRadialGradient(r,n,0,r,n,55);a.addColorStop(0,"#0c1a45"),a.addColorStop(.7,"#152a65"),a.addColorStop(1,"transparent"),e.fillStyle=a,e.beginPath(),e.ellipse(r,n,55,30,.08,0,Math.PI*2),e.fill();for(let o=0;o<25;o++){const l=Math.random()*1868,c=1024*.25+Math.random()*(1024*.5),h=50+Math.random()*140;e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=2+Math.random()*3,e.beginPath(),e.moveTo(l,c),e.lineTo(l+h,c+(Math.random()-.5)*6),e.stroke()}const s=new Zi(t);return s.wrapS=Ai,s.wrapT=Rt,s.colorSpace=xt,s}function Lu(t){if(qi.has(t))return qi.get(t);let e;switch(t){case"sun":e=FT();break;case"mercury":e=Vm();break;case"venus":e=kT();break;case"earth":e=zT();break;case"mars":e=VT();break;case"jupiter":e=GT();break;case"saturn":e=WT();break;case"uranus":e=XT();break;case"neptune":e=YT();break;default:e=Vm()}return qi.set(t,e),e}function qT(){if(qi.has("earth-night"))return qi.get("earth-night");const t=BT();return qi.set("earth-night",t),t}function KT(){if(qi.has("earth-clouds"))return qi.get("earth-clouds");const t=HT();return qi.set("earth-clouds",t),t}const Gm={vertexShader:`
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
  `};function $T(t,e=3.5,i=1){return new xi({vertexShader:Gm.vertexShader,fragmentShader:Gm.fragmentShader,uniforms:{uColor:{value:t},uSunPosition:{value:new F(0,0,0)},uAtmospherePower:{value:e},uAtmosphereIntensity:{value:i}},transparent:!0,blending:io,side:Mn,depthWrite:!1})}const Wm={vertexShader:`
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
  `};function ZT(t,e,i){return new xi({vertexShader:Wm.vertexShader,fragmentShader:Wm.fragmentShader,uniforms:{uDayMap:{value:t},uNightMap:{value:e},uCloudMap:{value:i},uSunPosition:{value:new F(0,0,0)},uCloudOffset:{value:0}},roughness:.6,metalness:.05})}const jm={vertexShader:`
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
  `};function JT(t){return new xi({vertexShader:jm.vertexShader,fragmentShader:jm.fragmentShader,uniforms:{uCloudMap:{value:t},uSunPosition:{value:new F(0,0,0)},uCloudOffset:{value:0}},transparent:!0,depthWrite:!1})}const Xm={vertexShader:`
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
  `};function QT(t,e){return new xi({vertexShader:Xm.vertexShader,fragmentShader:Xm.fragmentShader,uniforms:{uRingMap:{value:t},uPlanetPosition:{value:new F(0,0,0)},uPlanetRadius:{value:e},uSunPosition:{value:new F(0,0,0)}},side:ji,transparent:!0,depthWrite:!0})}const Ym={vertexShader:`
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
  `};function e2(t){return new xi({vertexShader:Ym.vertexShader,fragmentShader:Ym.fragmentShader,uniforms:{uSunMap:{value:t},uTime:{value:0}}})}const ys={sun:{id:"sun",name:"Sun",order:0,radius:11.5,distance:0,orbitSpeed:0,rotationSpeed:.003,axialTilt:.12,color:"#FFD700"},mercury:{id:"mercury",name:"Mercury",order:1,radius:1.8,distance:24,orbitSpeed:3.6,rotationSpeed:.008,axialTilt:.035,color:"#B0C4DE"},venus:{id:"venus",name:"Venus",order:2,radius:2.6,distance:35,orbitSpeed:2.1,rotationSpeed:-.005,axialTilt:3.09,color:"#DEB887",atmosphereColor:new Ve(.92,.82,.65),atmospherePower:2.8,atmosphereIntensity:1.1,atmosphereScale:1.025},earth:{id:"earth",name:"Earth",order:3,radius:2.8,distance:48,orbitSpeed:1.4,rotationSpeed:.02,axialTilt:.409,color:"#4E55D8",atmosphereColor:new Ve(.35,.65,1),atmospherePower:3.5,atmosphereIntensity:1.3,atmosphereScale:1.022},mars:{id:"mars",name:"Mars",order:4,radius:2.1,distance:62,orbitSpeed:.95,rotationSpeed:.019,axialTilt:.44,color:"#CD5C5C",atmosphereColor:new Ve(.85,.55,.38),atmospherePower:5.5,atmosphereIntensity:.65,atmosphereScale:1.014},jupiter:{id:"jupiter",name:"Jupiter",order:5,radius:6.2,distance:84,orbitSpeed:.42,rotationSpeed:.04,axialTilt:.054,color:"#DAA520",atmosphereColor:new Ve(.85,.72,.58),atmospherePower:3.5,atmosphereIntensity:.45,atmosphereScale:1.018},saturn:{id:"saturn",name:"Saturn",order:6,radius:5.2,distance:110,orbitSpeed:.28,rotationSpeed:.036,axialTilt:.466,color:"#F4A460",hasRings:!0,atmosphereColor:new Ve(.92,.82,.62),atmospherePower:3.5,atmosphereIntensity:.45,atmosphereScale:1.018},uranus:{id:"uranus",name:"Uranus",order:7,radius:3.8,distance:136,orbitSpeed:.16,rotationSpeed:-.024,axialTilt:1.706,color:"#87CEEB",atmosphereColor:new Ve(.48,.82,.85),atmospherePower:3.2,atmosphereIntensity:.75,atmosphereScale:1.02},neptune:{id:"neptune",name:"Neptune",order:8,radius:3.7,distance:162,orbitSpeed:.09,rotationSpeed:.025,axialTilt:.494,color:"#4169E1",atmosphereColor:new Ve(.2,.45,.9),atmospherePower:3.2,atmosphereIntensity:.8,atmosphereScale:1.02}},t2=({selectedId:t,onSelect:e})=>{const[i,r]=ze.useState(!1),[n,a]=ze.useState(1),[s,o]=ze.useState(null),l=ze.useRef(null),c=ze.useRef(null),h=ze.useRef(null),f=ze.useRef(null),u=ze.useRef(null),p=ze.useRef(0),m=ze.useRef(!0),S=ze.useRef(!1),g=ze.useRef(i),d=ze.useRef(n),v=ze.useRef(t),M=ze.useRef(e),y=ze.useRef(null),E=ze.useRef(null),w=ze.useRef(null),C=ze.useRef(null);ze.useEffect(()=>{g.current=i},[i]),ze.useEffect(()=>{d.current=n},[n]),ze.useEffect(()=>{v.current=t},[t]),ze.useEffect(()=>{M.current=e},[e]);const x=ze.useRef({mercury:.8,venus:2.1,earth:3.4,mars:4.8,jupiter:1.2,saturn:5.1,uranus:2.7,neptune:4.1}),T=ze.useRef(new Map),A=ze.useRef(new Map),U=ze.useRef(new Map),k=ze.useRef(null);ze.useEffect(()=>{!u.current||!f.current||(m.current=!1,S.current=!0)},[t]),ze.useEffect(()=>{const O=window.matchMedia("(prefers-reduced-motion: reduce)");O.matches&&r(!0);const pe=ve=>{ve.matches&&r(!0)};return O.addEventListener("change",pe),()=>O.removeEventListener("change",pe)},[]),ze.useEffect(()=>{const O=l.current;if(!O)return;const pe=O.clientWidth||800,ve=O.clientHeight||580,Pe=new Yb;Pe.background=new Ve(131589),h.current=Pe;const Le=new Ii(45,pe/ve,.5,4e3),Ge=new F(0,185,245);Le.position.copy(Ge),Le.lookAt(0,0,0),f.current=Le;const $=new yT({antialias:!0,alpha:!1,powerPreference:"high-performance"});$.setSize(pe,ve),$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.outputColorSpace=xt,O.innerHTML="",O.appendChild($.domElement),c.current=$;const ee=new ST(Le,$.domElement);ee.enableDamping=!0,ee.dampingFactor=.06,ee.minDistance=3.5,ee.maxDistance=650,ee.maxPolarAngle=Math.PI/2+.2,u.current=ee;const Me=new _S(526868,.08);Pe.add(Me);const Ue=new vS(16777215,2.8,1600,.2);Ue.position.set(0,0,0),Pe.add(Ue);const _e=2500,Ce=new _i,et=new Float32Array(_e*3),We=new Float32Array(_e*3);for(let te=0;te<_e;te++){const re=te*3,oe=Math.random(),Xe=Math.random(),Fe=oe*2*Math.PI,qe=Math.acos(2*Xe-1),Ae=2200+Math.random()*400;et[re]=Ae*Math.sin(qe)*Math.cos(Fe),et[re+1]=Ae*Math.sin(qe)*Math.sin(Fe),et[re+2]=Ae*Math.cos(qe);const Nt=Math.random(),rt=.35+Math.pow(Math.random(),3)*.65;Nt<.6?(We[re]=.92*rt,We[re+1]=.95*rt,We[re+2]=1*rt):Nt<.85?(We[re]=.75*rt,We[re+1]=.85*rt,We[re+2]=1*rt):(We[re]=1*rt,We[re+1]=.88*rt,We[re+2]=.7*rt)}Ce.setAttribute("position",new ur(et,3)),Ce.setAttribute("color",new ur(We,3));const Be=new F0({size:1.2,vertexColors:!0,transparent:!0,opacity:.9}),Ut=new aS(Ce,Be);Pe.add(Ut);const _t=new Map,dt=new Map,At=new Map,Ot=ys.sun,mt=Lu("sun"),wt=new on(Ot.radius,64,64),L=e2(mt);y.current=L;const Pt=new Ht(wt,L);Pt.userData={id:"sun",name:"Sun"},Pe.add(Pt),_t.set("sun",Pt);const nt=new on(Ot.radius*1.14,48,48),R=new La({color:16755234,transparent:!0,opacity:.18,side:li,blending:io,depthWrite:!1}),_=new Ht(nt,R);Pe.add(_);const z=new on(Ot.radius*1.3,48,48),j=new La({color:16742144,transparent:!0,opacity:.08,side:li,blending:io,depthWrite:!1}),Z=new Ht(z,j);Pe.add(Z);const de=["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];de.forEach(te=>{const re=ys[te];if(!re)return;const oe=[],Xe=180;for(let $t=0;$t<=Xe;$t++){const fi=$t/Xe*Math.PI*2;oe.push(new F(Math.cos(fi)*re.distance,0,Math.sin(fi)*re.distance))}const Fe=new _i().setFromPoints(oe),qe=v.current===re.id,Ae=new O0({color:qe?10980346:16777215,transparent:!0,opacity:qe?.38:.09}),Nt=new nS(Fe,Ae);Pe.add(Nt),At.set(re.id,Nt);const rt=new Ts;rt.rotation.z=re.axialTilt;const Cr=new on(re.radius,64,64);let ti;if(re.id==="earth"){const $t=Lu("earth"),fi=qT(),Xt=KT(),qr=ZT($t,fi,Xt);E.current=qr,ti=new Ht(Cr,qr);const Pn=new on(re.radius*1.008,64,64),Kr=JT(Xt);w.current=Kr;const Nn=new Ht(Pn,Kr);Nn.userData={isCloudLayer:!0},rt.add(Nn)}else{const $t=Lu(re.id),fi=new hS({map:$t,roughness:re.id==="venus"?.85:re.id==="mercury"?.95:.72,metalness:.02});ti=new Ht(Cr,fi)}if(ti.userData={id:re.id,name:re.name},rt.add(ti),_t.set(re.id,ti),re.atmosphereColor&&re.atmosphereScale){const $t=new on(re.radius*re.atmosphereScale,48,48),fi=$T(re.atmosphereColor,re.atmospherePower||3.5,re.atmosphereIntensity||1),Xt=new Ht($t,fi);Xt.renderOrder=3,rt.add(Xt)}if(re.hasRings){const $t=re.radius*1.25,fi=re.radius*2.38,Xt=new ks($t,fi,128);Xt.rotateX(Math.PI/2);const qr=jT(),Pn=QT(qr,re.radius);C.current=Pn;const Kr=new Ht(Xt,Pn);Kr.renderOrder=4,rt.add(Kr)}if(re.id==="uranus"){const $t=new ks(re.radius*1.22,re.radius*1.48,64);$t.rotateX(Math.PI/2);const fi=new La({color:10346722,side:ji,transparent:!0,opacity:.22,depthWrite:!1}),Xt=new Ht($t,fi);rt.add(Xt)}const xo=x.current[re.id]||0;rt.position.set(Math.cos(xo)*re.distance,0,Math.sin(xo)*re.distance),Pe.add(rt),dt.set(re.id,rt)});const he=new ks(1,1.08,64);he.rotateX(Math.PI/2);const I=new La({color:10980346,side:ji,transparent:!0,opacity:.75,depthWrite:!1}),le=new Ht(he,I);Pe.add(le),k.current=le,T.current=_t,A.current=dt,U.current=At;const ce=new bS,xe=new ke;let ne=!1,Ne={x:0,y:0};const Te=te=>{ne=!1,Ne={x:te.clientX,y:te.clientY}},Ie=te=>{var re,oe;Math.hypot(te.clientX-Ne.x,te.clientY-Ne.y)>5&&(ne=!0);const Xe=O.getBoundingClientRect();xe.x=(te.clientX-Xe.left)/Xe.width*2-1,xe.y=-((te.clientY-Xe.top)/Xe.height)*2+1,ce.setFromCamera(xe,Le);const Fe=Array.from(_t.values()),qe=ce.intersectObjects(Fe,!0);if(qe.length>0){let Ae=qe[0].object;for(;Ae&&!((re=Ae.userData)!=null&&re.id)&&Ae.parent;)Ae=Ae.parent;if(Ae&&(oe=Ae.userData)!=null&&oe.id){O.style.cursor="pointer",o(Ae.userData.name);return}}O.style.cursor="grab",o(null)},He=te=>{var re,oe;if(Math.hypot(te.clientX-Ne.x,te.clientY-Ne.y)<6&&!ne){const Xe=O.getBoundingClientRect();xe.x=(te.clientX-Xe.left)/Xe.width*2-1,xe.y=-((te.clientY-Xe.top)/Xe.height)*2+1,ce.setFromCamera(xe,Le);const Fe=Array.from(_t.values()),qe=ce.intersectObjects(Fe,!0);if(qe.length>0){let Ae=qe[0].object;for(;Ae&&!((re=Ae.userData)!=null&&re.id)&&Ae.parent;)Ae=Ae.parent;Ae&&(oe=Ae.userData)!=null&&oe.id&&M.current(Ae.userData.id)}}},P=$.domElement;P.addEventListener("pointerdown",Te),P.addEventListener("pointermove",Ie),P.addEventListener("pointerup",He);let ie=performance.now(),ae=0;const ge=()=>{const te=performance.now(),re=Math.min((te-ie)/1e3,.1);ie=te;const oe=g.current?0:d.current;Pt.rotation.y+=Ot.rotationSpeed,_.rotation.y-=8e-4,Z.rotation.y+=4e-4,y.current&&(y.current.uniforms.uTime.value=te*.001),ae+=15e-5*(oe>0?oe:.2),E.current&&(E.current.uniforms.uCloudOffset.value=ae),w.current&&(w.current.uniforms.uCloudOffset.value=ae),de.forEach(qe=>{const Ae=ys[qe],Nt=dt.get(qe),rt=_t.get(qe);if(Ae&&Nt&&rt&&oe>0){const Cr=Ae.orbitSpeed*.22*oe*re;x.current[qe]=(x.current[qe]+Cr)%(Math.PI*2);const ti=x.current[qe];Nt.position.x=Math.cos(ti)*Ae.distance,Nt.position.z=Math.sin(ti)*Ae.distance,rt.rotation.y+=Ae.rotationSpeed*oe}});const Xe=dt.get("saturn");Xe&&C.current&&C.current.uniforms.uPlanetPosition.value.copy(Xe.position);const Fe=v.current;if(k.current){if(Fe==="sun"){k.current.position.set(0,0,0);const Ae=Ot.radius*1.38;k.current.scale.set(Ae,Ae,Ae),k.current.visible=!0}else{const Ae=dt.get(Fe),Nt=ys[Fe];if(Ae&&Nt){k.current.position.copy(Ae.position);const rt=Nt.radius*(Nt.hasRings?2.6:1.35);k.current.scale.set(rt,rt,rt),k.current.visible=!0}else k.current.visible=!1}const qe=1+Math.sin(te*.004)*.03;k.current.scale.multiplyScalar(qe)}if(S.current&&f.current&&u.current){let qe=new F(0,0,0),Ae=Ge;if(!m.current)if(Fe==="sun")qe.set(0,0,0),Ae=new F(0,16,28);else{const Nt=dt.get(Fe),rt=ys[Fe];if(Nt&&rt){qe.copy(Nt.position);const Cr=rt.hasRings?4.6:3.4,ti=rt.radius*Cr;Ae=new F(Nt.position.x+ti*.6,Nt.position.y+ti*.45,Nt.position.z+ti*.85)}}f.current.position.lerp(Ae,.08),u.current.target.lerp(qe,.08),f.current.position.distanceTo(Ae)<.6&&(S.current=!1)}ee.update(),$.render(Pe,Le),p.current=requestAnimationFrame(ge)};p.current=requestAnimationFrame(ge);const ye=new ResizeObserver(te=>{for(const re of te){const oe=re.contentRect.width,Xe=re.contentRect.height;oe>0&&Xe>0&&(Le.aspect=oe/Xe,Le.updateProjectionMatrix(),$.setSize(oe,Xe))}});return ye.observe(O),()=>{cancelAnimationFrame(p.current),ye.disconnect(),P.removeEventListener("pointerdown",Te),P.removeEventListener("pointermove",Ie),P.removeEventListener("pointerup",He),ee.dispose(),$.dispose(),O.contains(P)&&O.removeChild(P)}},[]),ze.useEffect(()=>{U.current.forEach((O,pe)=>{const ve=t===pe,Pe=O.material;Pe&&(Pe.color.setHex(ve?10980346:16777215),Pe.opacity=ve?.38:.09)})},[t]);const Y=gr.findIndex(O=>O.id===t),D=gr[Y]||gr[3],q=ze.useCallback(()=>{const O=(Y-1+gr.length)%gr.length;e(gr[O].id)},[Y,e]),Q=ze.useCallback(()=>{const O=(Y+1)%gr.length;e(gr[O].id)},[Y,e]),J=()=>{m.current=!0,S.current=!0},V=()=>{if(u.current&&f.current){const O=new F().subVectors(u.current.target,f.current.position);f.current.position.addScaledVector(O,.22),u.current.update()}},B=()=>{if(u.current&&f.current){const O=new F().subVectors(f.current.position,u.current.target);f.current.position.addScaledVector(O,.25),u.current.update()}},W=O=>{O.key===" "||O.code==="Space"?(O.preventDefault(),r(pe=>!pe)):O.key==="ArrowLeft"?(O.preventDefault(),q()):O.key==="ArrowRight"?(O.preventDefault(),Q()):(O.key==="r"||O.key==="R")&&(O.preventDefault(),J())};return X.jsxs("section",{id:"explorer",className:"section-padding",tabIndex:0,onKeyDown:W,"aria-label":"Solar System 3D Explorer",children:[X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"16px",textAlign:"center"},children:"Your journey starts here"}),X.jsx("p",{style:{color:"var(--text-secondary)",textAlign:"center",fontSize:"1.25rem",marginBottom:"56px"},children:"Explore all eight planets and the Sun with interactive 3D controls, realistic lighting, and planetary facts."}),X.jsxs("div",{className:"explorer-wrapper",children:[X.jsxs("div",{className:"orbital-viz",children:[X.jsx("div",{ref:l,className:"three-canvas-container",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),s&&X.jsx("div",{className:"planet-hover-badge",children:s}),X.jsxs("div",{className:"top-viz-controls",children:[X.jsx("button",{onClick:V,className:"control-btn","aria-label":"Zoom in",title:"Zoom In",children:X.jsx(Wy,{size:18})}),X.jsx("button",{onClick:B,className:"control-btn","aria-label":"Zoom out",title:"Zoom Out",children:X.jsx(jy,{size:18})}),X.jsx("button",{onClick:J,className:"control-btn","aria-label":"Reset view to overview",title:"Reset View to Overview",children:X.jsx(Hy,{size:18})})]}),X.jsxs("div",{className:"viz-controls",children:[X.jsx("button",{onClick:()=>r(!i),className:`control-btn ${i?"paused":""}`,"aria-label":i?"Resume planetary orbits":"Pause planetary orbits",title:i?"Resume":"Pause",children:i?X.jsx(By,{size:18}):X.jsx(zy,{size:18})}),X.jsx("div",{className:"speed-pills-group",role:"group","aria-label":"Orbit speed multiplier",children:[.5,1,2,4].map(O=>X.jsxs("button",{onClick:()=>a(O),className:`speed-pill ${n===O?"active":""}`,"aria-label":`Set speed to ${O}x`,children:[O,"x"]},O))})]}),X.jsx("div",{className:"viz-disclaimer",children:"Sizes, distances, and time are adjusted for visibility"})]}),X.jsxs("div",{className:"info-panel",children:[X.jsxs("div",{className:"info-panel-header",children:[X.jsx("div",{className:"body-order",children:D.order===0?"00":String(D.order).padStart(2,"0")}),X.jsxs("div",{style:{display:"flex",gap:"8px"},children:[X.jsx("button",{onClick:q,className:"nav-btn","aria-label":"Previous celestial body",title:"Previous (Left Arrow)",children:X.jsx(Uy,{size:20})}),X.jsx("button",{onClick:Q,className:"nav-btn","aria-label":"Next celestial body",title:"Next (Right Arrow)",children:X.jsx(Oy,{size:20})})]})]}),X.jsxs("div",{className:"preview-container",children:[X.jsx("div",{style:{width:"84px",height:"84px",borderRadius:"50%",background:D.gradient,boxShadow:`inset -10px -10px 20px rgba(0,0,0,0.5), 0 10px 30px ${D.color}40`,position:"relative",flexShrink:0,transition:"background 0.3s ease"},children:D.id==="saturn"&&X.jsx("div",{className:"saturn-ring-info"})}),X.jsxs("div",{className:"preview-meta",children:[X.jsx("span",{className:"type-tag",children:D.type.toUpperCase()}),X.jsxs("span",{className:"order-tag",children:["Orbit Position: ",D.order]})]})]}),X.jsxs("div",{style:{marginBottom:"20px"},children:[X.jsx("h3",{style:{fontSize:"clamp(2rem, 3.5vw, 2.75rem)",marginBottom:"6px"},children:D.name}),X.jsx("p",{style:{color:"var(--accent-purple)",fontWeight:600,fontSize:"1.05rem"},children:D.descriptor})]}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"28px",fontSize:"0.98rem"},children:D.introduction}),X.jsxs("div",{style:{flexGrow:1},children:[X.jsx("h4",{style:{fontSize:"1.05rem",marginBottom:"14px",paddingBottom:"8px",borderBottom:"1px solid var(--border-subtle)"},children:"Quick Facts"}),X.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"12px"},children:D.facts.map((O,pe)=>X.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",color:"var(--text-secondary)",fontSize:"0.92rem",lineHeight:1.5},children:[X.jsx("span",{style:{color:"var(--accent-purple)",marginTop:"2px",flexShrink:0},children:"•"}),O]},pe))})]})]})]}),X.jsx("div",{className:"selector-row",role:"tablist","aria-label":"Celestial body selector",children:gr.map(O=>X.jsxs("button",{onClick:()=>e(O.id),className:`selector-btn${t===O.id?" active":""}`,role:"tab","aria-selected":t===O.id,"aria-label":`Select ${O.name}`,children:[X.jsx("span",{className:"selector-dot",style:{backgroundColor:O.color}}),O.name]},`selector-${O.id}`))})]}),X.jsx("style",{children:`
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
      `})]})},i2=({planet:t,onSelect:e})=>X.jsxs("button",{onClick:()=>e(t.id),style:{display:"flex",flexDirection:"column",textAlign:"left",backgroundColor:"var(--surface-lavender)",borderRadius:"24px",padding:"32px",border:"1px solid var(--border-subtle)",transition:"all var(--transition-normal)",position:"relative",overflow:"hidden",height:"100%",width:"100%"},className:"planet-card",children:[X.jsxs("div",{style:{position:"absolute",top:"24px",right:"24px",fontSize:"1.25rem",fontWeight:800,fontFamily:"var(--font-display)",color:"var(--text-secondary)",opacity:.5},children:["0",t.order]}),X.jsx("div",{style:{width:"120px",height:"120px",borderRadius:"50%",background:t.gradient,marginBottom:"24px",alignSelf:"center",position:"relative",boxShadow:`inset -12px -12px 24px rgba(0,0,0,0.4), 0 10px 20px ${t.color}40`,transition:"transform var(--transition-normal)"},className:"planet-visual",children:t.id==="saturn"&&X.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"180%",height:"40%",borderRadius:"50%",border:"8px solid rgba(244, 164, 96, 0.6)",transform:"translate(-50%, -50%) rotate(20deg)"}})}),X.jsx("h3",{style:{fontSize:"2rem",marginBottom:"8px"},children:t.name}),X.jsx("p",{style:{color:"var(--accent-purple)",fontWeight:600,fontSize:"1rem",marginBottom:"16px"},children:t.descriptor}),X.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"32px",lineHeight:1.5,flexGrow:1},children:t.facts[0]}),X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--text-primary)",fontWeight:600,marginTop:"auto"},className:"explore-link",children:["Explore Planet",X.jsx(Ly,{size:18,className:"arrow-icon",style:{transition:"transform var(--transition-fast)"}})]}),X.jsx("style",{children:`
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
      `})]}),r2=()=>X.jsxs("section",{id:"discover",className:"section-padding",style:{backgroundColor:"white"},children:[X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"48px",maxWidth:"600px"},children:"There's more beyond the orbit"}),X.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",alignItems:"stretch"},className:"discovery-grid",children:[X.jsxs("div",{style:{backgroundColor:"var(--text-primary)",color:"white",padding:"48px",borderRadius:"24px",gridColumn:"1 / -1",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden",minHeight:"400px"},className:"feature-card",children:[X.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:"600px"},children:[X.jsx("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",width:"64px",height:"64px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:X.jsx(Vy,{size:32,color:"#FFD700"})}),X.jsx("h3",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"Our Star, The Sun"}),X.jsx("p",{style:{fontSize:"1.25rem",opacity:.9,lineHeight:1.6},children:"The Sun is a yellow dwarf star at the center of our solar system. Its gravity holds everything together, and its energy drives weather, ocean currents, seasons, and life on Earth. Without it, our solar system would be a dark, frozen place."})]}),X.jsx("div",{style:{position:"absolute",right:"-10%",bottom:"-30%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)",zIndex:1}})]}),X.jsxs("div",{style:{backgroundColor:"var(--surface-lavender)",padding:"40px",borderRadius:"24px",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[X.jsx("div",{style:{backgroundColor:"white",width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},children:X.jsx(Fy,{size:28,color:"var(--accent-purple)"})}),X.jsx("h3",{style:{fontSize:"1.75rem",marginBottom:"16px"},children:"Worlds of Rock & Gas"}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"The inner planets—Mercury, Venus, Earth, and Mars—are dense, rocky worlds. The outer planets—Jupiter, Saturn, Uranus, and Neptune—are massive giants primarily composed of gas and ice, featuring vast atmospheres and complex ring systems."})]}),X.jsxs("div",{style:{backgroundColor:"var(--bg-page)",padding:"40px",borderRadius:"24px",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[X.jsx("div",{style:{backgroundColor:"white",width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},children:X.jsx(df,{size:28,color:"var(--accent-indigo)"})}),X.jsx("h3",{style:{fontSize:"1.75rem",marginBottom:"16px"},children:"The Immense Scale"}),X.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:"Space is overwhelmingly vast. If the Sun were a typical front door, Earth would be the size of a nickel. Neptune, the outermost planet, is so far away that sunlight takes more than 4 hours to reach it."})]})]})]}),X.jsx("style",{children:`
        @media (min-width: 992px) {
          .discovery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `})]}),n2=()=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return X.jsxs("footer",{style:{backgroundColor:"white",borderTop:"1px solid var(--border-subtle)",padding:"64px 0 32px 0"},children:[X.jsxs("div",{className:"container",style:{display:"flex",flexDirection:"column",gap:"48px"},children:[X.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"24px"},children:[X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[X.jsx(df,{style:{color:"var(--accent-purple)",width:"32px",height:"32px"}}),X.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.5rem"},children:"Solar Explorer"})]}),X.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.25rem",fontFamily:"var(--font-display)",fontWeight:500},children:"Same planet. Bigger dreams."})]}),X.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"32px",flexWrap:"wrap"},children:[X.jsx("a",{href:"#explorer",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Explore"}),X.jsx("a",{href:"#planets",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Planets"}),X.jsx("a",{href:"#discover",style:{color:"var(--text-secondary)",fontWeight:500},className:"footer-link",children:"Discover"})]}),X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border-subtle)",paddingTop:"32px",marginTop:"16px",flexWrap:"wrap",gap:"16px"},children:[X.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.875rem"},children:["© ",new Date().getFullYear()," Solar Explorer. Illustrative purposes only."]}),X.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--accent-purple)",fontWeight:500,fontSize:"0.875rem"},"aria-label":"Back to top",children:["Back to top",X.jsx("div",{style:{backgroundColor:"var(--surface-lavender)",padding:"8px",borderRadius:"50%",display:"flex"},children:X.jsx(Iy,{size:16})})]})]})]}),X.jsx("style",{children:`
        .footer-link:hover {
          color: var(--accent-purple) !important;
        }
      `})]})};function a2(){const[t,e]=ze.useState("earth"),i=n=>{e(n);const a=document.getElementById("explorer");if(a){const s=a.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:s-80,behavior:"smooth"})}},r=gr.filter(n=>n.type==="planet");return X.jsxs(X.Fragment,{children:[X.jsx(Xy,{}),X.jsxs("main",{children:[X.jsx(Yy,{}),X.jsx(t2,{selectedId:t,onSelect:e}),X.jsx("section",{id:"planets",className:"section-padding",children:X.jsxs("div",{className:"container",children:[X.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",marginBottom:"48px",textAlign:"center"},children:"Meet your cosmic neighbors"}),X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px"},children:r.map(n=>X.jsx(i2,{planet:n,onSelect:i},n.id))})]})}),X.jsx(r2,{})]}),X.jsx(n2,{})]})}Iu.createRoot(document.getElementById("root")).render(X.jsx(x_.StrictMode,{children:X.jsx(a2,{})}));
