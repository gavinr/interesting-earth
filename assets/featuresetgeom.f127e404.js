import{q as p}from"./arcadeUtils.ed7e1563.js";import{oW as m,oE as R,oA as f,os as s,pb as o}from"./index.a8738f47.js";import{g as c,d as w}from"./SpatialFilter.9fe0e954.js";import{h as S,w as A,A as g,x as E,O as F,p as v,g as d}from"./geometryEngineAsync.011168d0.js";import"./WhereClause.d715e7d1.js";function l(e){return e instanceof s}function i(e,a,r,u){return u(e,a,async function(h,t,n){if(n.length<2)throw new Error("Missing Parameters");if((n=m(n))[0]===null&&n[1]===null)return!1;if(o(n[0])){if(n[1]instanceof s)return new w({parentfeatureset:n[0],relation:r,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new Error("Spatial Relation cannot accept this parameter type")}if(l(n[0])){if(l(n[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return d(p(n[0]),p(n[1]));case"esriSpatialRelIntersects":return d(n[0],n[1]);case"esriSpatialRelContains":return v(n[0],n[1]);case"esriSpatialRelOverlaps":return F(n[0],n[1]);case"esriSpatialRelWithin":return E(n[0],n[1]);case"esriSpatialRelTouches":return g(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new Error("Unrecognised Relationship")}if(o(n[1]))return new w({parentfeatureset:n[1],relation:r,relationGeom:n[0]});if(n[1]===null)return!1;throw new Error("Spatial Relation cannot accept this parameter type")}if(n[0]!==null)throw new Error("Spatial Relation cannot accept this parameter type");return o(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof s||n[1]===null)&&void 0})}function W(e){e.mode==="async"&&(e.functions.intersects=function(a,r){return i(a,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(a,r){return i(a,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(a,r){return i(a,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(a,r){return i(a,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(a,r){return i(a,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(a,r){return i(a,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(a,r){return i(a,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(a,r){return e.standardFunctionAsync(a,r,function(u,h,t){if(t=m(t),R(t,3,3),l(t[0])&&l(t[1]))return S(t[0],t[1],f(t[2]));if(t[0]instanceof s&&t[1]===null||t[1]instanceof s&&t[0]===null)return!1;if(o(t[0])&&t[1]===null)return new c({parentfeatureset:t[0]});if(o(t[1])&&t[0]===null)return new c({parentfeatureset:t[1]});if(o(t[0])&&t[1]instanceof s)return t[0].relate(t[1],f(t[2]));if(o(t[1])&&t[0]instanceof s)return t[1].relate(t[0],f(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new Error("Illegal Argument")})})}export{W as registerFunctions};