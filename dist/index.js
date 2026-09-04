"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=f(function(k,c){
var I=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),O=require('@stdlib/constants-float64-two-pi/dist'),P=require('@stdlib/constants-float64-pinf/dist'),a=require('@stdlib/math-base-assert-is-nan/dist');function A(e,r,t){var n,u,i;return a(e)||a(r)||a(t)||r<=0||t<0?NaN:t===0?e===r?P:0:e<=0||!isFinite(e)?0:(n=q(t/O),u=-.5*t,i=(e-r)/r,n/(e*q(e))*I(u/e*i*i))}c.exports=A
});var y=f(function(w,N){
var B=require('@stdlib/utils-constant-function/dist'),T=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,s=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),W=require('@stdlib/math-base-special-exp/dist'),_=require('@stdlib/constants-float64-two-pi/dist');function g(e,r){var t,n;if(s(e)||s(r)||e<=0||r<0)return B(NaN);if(r===0)return T(e);return t=p(r/_),n=-.5*r,u;function u(i){var v;return s(i)?NaN:i<=0||!isFinite(i)?0:(v=(i-e)/e,t/(i*p(i))*W(n/i*v*v))}}N.exports=g
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=o(),h=y();R(F,"factory",h);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
