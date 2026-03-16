"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=f(function(k,c){
var I=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),O=require('@stdlib/constants-float64-two-pi/dist'),P=require('@stdlib/constants-float64-pinf/dist'),a=require('@stdlib/math-base-assert-is-nan/dist');function A(r,e,t){var n,v,i;return a(r)||a(e)||a(t)||e<=0||t<0?NaN:t===0?r===e?P:0:r<=0||!isFinite(r)?0:(n=q(t/O),v=-t/(2*e*e),i=r-e,n/(r*q(r))*I(v*i*i/r))}c.exports=A
});var y=f(function(w,N){
var B=require('@stdlib/utils-constant-function/dist'),T=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,s=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),W=require('@stdlib/math-base-special-exp/dist'),_=require('@stdlib/constants-float64-two-pi/dist');function g(r,e){var t,n;if(s(r)||s(e)||r<=0||e<0)return B(NaN);if(e===0)return T(r);return t=p(e/_),n=-e/(2*r*r),v;function v(i){var u;return s(i)?NaN:i<=0||!isFinite(i)?0:(u=i-r,t/(i*p(i))*W(n*u*u/i))}}N.exports=g
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=o(),h=y();R(F,"factory",h);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
