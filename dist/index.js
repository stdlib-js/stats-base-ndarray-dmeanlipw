"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var t=v(function(x,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-dmeanlipw/dist').ndarray;function p(e){var r=e[0];return o(s(r,0),m(r),q(r,0),d(r))}a.exports=p
});var f=require("path").join,l=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,u=l(f(__dirname,"./native.js"));c(u)?i=g:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
