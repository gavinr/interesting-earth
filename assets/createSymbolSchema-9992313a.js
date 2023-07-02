import{E as c,S}from"./TileInfoView-b5d908d2.js";import{f as h,_ as V,A as b}from"./SymbolProcessor-42c7e361.js";import"./index-4b03b1b0.js";import"./cimAnalyzer-9a5eb2c3.js";import"./TileClipper-ae6eca9e.js";import"./definitions-bc94d273.js";import"./number-e491b09e.js";import"./BidiEngine-9a40f2f4.js";import"./diffUtils-3c37f4e6.js";import"./Pipeline-2bd66142.js";import"./QueryEngine-75e718c4.js";import"./normalizeUtils-1bd513d6.js";import"./normalizeUtilsCommon-a78292a0.js";import"./WhereClause-40a2a5ab.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-d3077f8c.js";import"./generateRendererUtils-77922da6.js";import"./FieldsIndex-06c42f48.js";import"./StreamFeatureManager-140d5c90.js";import"./quickselect-70c375a5.js";import"./arcadeTimeUtils-cf7e2dfd.js";import"./centroid-8e8cfa47.js";import"./ogcFeatureUtils-81a58dfc.js";import"./geojson-5528191c.js";import"./clientSideDefaults-76ae825d.js";import"./defaultsJSON-59981e75.js";import"./query-af06498b.js";import"./pbfQueryUtils-8c741d64.js";import"./pbf-18997bde.js";import"./queryZScale-2a8227ea.js";import"./Query-cdee9722.js";import"./createConnection-cea53b95.js";import"./geohashUtils-77d8429b.js";import"./tileUtils-880426c1.js";import"./TurboLine-659445c1.js";import"./Rect-98da58d6.js";import"./GeometryUtils-0258f920.js";function u(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function y(e){return b(e)}function ne(e,r,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...u(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const o=e.toJSON(),i=h(c.LABEL,{...r,placement:o.labelPlacement});return{materialKey:t?y(i):i,hash:e.hash(),...o,labelPlacement:o.labelPlacement}}function x(e,r,t){const o=h(c.FILL,r),i=t?y(o):o,m=e.clone(),a=m.outline,s=V(r.symbologyType);s||(m.outline=null);const p={materialKey:i,hash:m.hash(),...u(m)};if(s)return p;const l=[];if(l.push(p),a){const n=h(c.LINE,{...r,isOutline:!0}),f={materialKey:t?y(n):n,hash:a.hash(),...u(a)};l.push(f)}return{type:"composite-symbol",layers:l,hash:l.reduce((n,f)=>f.hash+n,"")}}function K(e,r,t){const o=V(r.symbologyType)?S.DEFAULT:r.symbologyType,i=h(c.LINE,{...r,symbologyType:o}),m=t?y(i):i,a=e.clone(),s=a.marker;a.marker=null;const p=[];if(p.push({materialKey:m,hash:a.hash(),...u(a)}),s){const l=h(c.MARKER,r),n=t?y(l):l;s.color=s.color??a.color,p.push({materialKey:n,hash:s.hash(),lineWidth:a.width,...u(s)})}return{type:"composite-symbol",layers:p,hash:p.reduce((l,n)=>n.hash+l,"")}}function g(e,r,t){const o=h(c.MARKER,r),i=t?y(o):o,m=u(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const o=h(c.TEXT,r),i=t?y(o):o,m=u(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}export{ne as createSymbolSchema};