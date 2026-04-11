"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(j,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),s=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/stats-strided-dmeanlipw/dist').ndarray;function o(e){var r=e[0];return m(v(r,0),d(r),s(r,0),q(r))}a.exports=o
});var p=require("path").join,f=require('@stdlib/utils-try-require/dist'),l=require('@stdlib/assert-is-error/dist'),c=t(),i,u=f(p(__dirname,"./native.js"));l(u)?i=c:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
