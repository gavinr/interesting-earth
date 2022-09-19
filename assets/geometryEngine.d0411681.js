import{G as r}from"./geometryEngineBase.cf4f989f.js";import{hydratedAdapter as i}from"./hydrated.2565c3a9.js";import"./index.a8738f47.js";function o(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return r.extendedSpatialReferenceInfo(e)}function d(e,n){return r.clip(i,o(e),e,n)}function m(e,n){return r.cut(i,o(e),e,n)}function x(e,n){return r.contains(i,o(e),e,n)}function h(e,n){return r.crosses(i,o(e),e,n)}function w(e,n,t){return r.distance(i,o(e),e,n,t)}function A(e,n){return r.equals(i,o(e),e,n)}function E(e,n){return r.intersects(i,o(e),e,n)}function y(e,n){return r.touches(i,o(e),e,n)}function R(e,n){return r.within(i,o(e),e,n)}function I(e,n){return r.disjoint(i,o(e),e,n)}function S(e,n){return r.overlaps(i,o(e),e,n)}function V(e,n,t){return r.relate(i,o(e),e,n,t)}function v(e){return r.isSimple(i,o(e),e)}function z(e){return r.simplify(i,o(e),e)}function D(e,n=!1){return r.convexHull(i,o(e),e,n)}function H(e,n){return r.difference(i,o(e),e,n)}function L(e,n){return r.symmetricDifference(i,o(e),e,n)}function J(e,n){return r.intersect(i,o(e),e,n)}function N(e,n=null){return r.union(i,o(e),e,n)}function O(e,n,t,u,s,a){return r.offset(i,o(e),e,n,t,u,s,a)}function b(e,n,t,u=!1){return r.buffer(i,o(e),e,n,t,u)}function j(e,n,t,u,s,a){return r.geodesicBuffer(i,o(e),e,n,t,u,s,a)}function q(e,n,t=!0){return r.nearestCoordinate(i,o(e),e,n,t)}function B(e,n){return r.nearestVertex(i,o(e),e,n)}function C(e,n,t,u){return r.nearestVertices(i,o(e),e,n,t,u)}function c(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function $(e,n,t){if(e==null)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if((t=t!=null?t:c(e))==null)throw new Error("Illegal Argument Exception");const s=e.constructor.fromJSON(r.rotate(e,n,t));return s.spatialReference=u,s}function k(e,n){if(e==null)throw new Error("Illegal Argument Exception");const t=e.spatialReference;if((n=n!=null?n:c(e))==null)throw new Error("Illegal Argument Exception");const u=e.constructor.fromJSON(r.flipHorizontal(e,n));return u.spatialReference=t,u}function G(e,n){if(e==null)throw new Error("Illegal Argument Exception");const t=e.spatialReference;if((n=n!=null?n:c(e))==null)throw new Error("Illegal Argument Exception");const u=e.constructor.fromJSON(r.flipVertical(e,n));return u.spatialReference=t,u}function F(e,n,t,u){return r.generalize(i,o(e),e,n,t,u)}function K(e,n,t){return r.densify(i,o(e),e,n,t)}function M(e,n,t,u=0){return r.geodesicDensify(i,o(e),e,n,t,u)}function P(e,n){return r.planarArea(i,o(e),e,n)}function Q(e,n){return r.planarLength(i,o(e),e,n)}function T(e,n,t){return r.geodesicArea(i,o(e),e,n,t)}function U(e,n,t){return r.geodesicLength(i,o(e),e,n,t)}export{b as buffer,d as clip,x as contains,D as convexHull,h as crosses,m as cut,K as densify,H as difference,I as disjoint,w as distance,A as equals,g as extendedSpatialReferenceInfo,k as flipHorizontal,G as flipVertical,F as generalize,T as geodesicArea,j as geodesicBuffer,M as geodesicDensify,U as geodesicLength,J as intersect,E as intersects,v as isSimple,q as nearestCoordinate,B as nearestVertex,C as nearestVertices,O as offset,S as overlaps,P as planarArea,Q as planarLength,V as relate,$ as rotate,z as simplify,L as symmetricDifference,y as touches,N as union,R as within};
