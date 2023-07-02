import{ai as g,aj as f,al as J,c8 as K,b4 as Q,iH as X,iI as Y,dk as z,iJ as k,gW as A,iK as d,iL as D,iM as V,iN as tt,iO as nt,go as I,e_ as w,eZ as N,iP as et,iQ as ot,b3 as rt,iR as O,iS as $,fU as S,iT as at,iU as it,h4 as x,iV as st,ev as T,ga as P,ap as lt,g2 as L,iW as ct,iX as W,iY as ut,iF as v,iZ as pt,i_ as gt,i$ as ft,j0 as ht,j1 as yt,j2 as mt,h6 as xt,c2 as At,gn as $t,j3 as wt,j4 as vt}from"./index-4b03b1b0.js";import{m as bt}from"./MeshGeoreferencedRelativeVertexSpace-01dadcff.js";import{m as Mt,p as Rt}from"./MeshLocalVertexSpace-e2febaf3.js";var b;let p=b=class extends K{constructor(t){super(t),this.translation=Q(),this.rotationAxis=X(Y),this.rotationAngle=0,this.scale=z(1,1,1)}get rotation(){return k(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=A(d(t)),this.rotationAngle=D(t)}get localMatrix(){const t=w();return V(_,d(this.rotation),tt(this.rotation)),nt(t,_,this.translation,this.scale),t}get localMatrixInverse(){return I(w(),this.localMatrix)}applyLocal(t,n){return N(n,t,this.localMatrix)}applyLocalInverse(t,n){return N(n,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&et(this.localMatrix,t.localMatrix)}clone(){const t={translation:A(this.translation),rotationAxis:A(this.rotationAxis),rotationAngle:this.rotationAngle,scale:A(this.scale)};return new b(t)}};g([f({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),g([f({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotationAxis",void 0),g([f({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotationAngle",void 0),g([f({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),g([f()],p.prototype,"rotation",null),g([f()],p.prototype,"localMatrix",null),g([f()],p.prototype,"localMatrixInverse",null),p=b=g([J("esri.geometry.support.MeshTransform")],p);const _=ot(),jt=p;function B(t,n){return t.isGeographic||t.isWebMercator&&((n==null?void 0:n.geographic)??!0)}function Ut(t,n,e){const o=!t.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==o&&rt.getLogger(n).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}function R(t,n,e){return B(n.spatialReference,e)?St(t,n,e):Ot(t,n,e)}function G(t,n,e,o){const{position:a,normal:r,tangent:i}=t;if(!n.isRelative)return{position:a,normal:r,tangent:i};const l=(e==null?void 0:e.localMatrix)??$;return R({position:x(new Float64Array(a.length),a,l),normal:r!=null?wt(r,new Float32Array(r.length),l):null,tangent:i!=null?vt(i,new Float32Array(i.length),l):null},n.getOriginPoint(o),{geographic:!n.isGeoreferenced})}function Ft(t,n,e){if(e!=null&&e.useTransform){const{position:o,normal:a,tangent:r}=t,{x:i,y:l,z:c}=n,s=z(i,l,c??0);return{vertexAttributes:{position:o,normal:a,tangent:r},vertexSpace:e.geographic??1?new Mt({origin:s}):new bt({origin:s}),transform:new jt}}return{vertexAttributes:R(t,n,e),vertexSpace:new Rt,transform:null}}function M(t,n,e){return B(n.spatialReference,e)?It(t,n,e):q(t,n,e)}function dt(t,n,e,o,a){if(!n.isRelative)return M(t,o,a);const{spatialReference:r}=o,i=G(t,n,e,r);return o.equals(n.getOriginPoint(r))?q(i,o,a):M(i,o,a)}function Nt({positions:t,transform:n,vertexSpace:e,inSpatialReference:o,outSpatialReference:a,outPositions:r,local:i}){const l=e.isRelative?e.origin:O,c=e.isRelative?(n==null?void 0:n.localMatrix)??$:$;if(e.isGeoreferenced){const u=r??S(t.length);if(at(c,$)?it(u,t):x(u,t,c),!st(l,O)){const[Z,E,H]=l;for(let m=0;m<u.length;m+=3)u[m]+=Z,u[m+1]+=E,u[m+2]+=H}return T(u,o,0,u,a,0,u.length/3),u}const s=P(o),F=!i&&lt(o,s)?s:o;L(o,l,h,F),ct(h,h,c);const y=r??S(t.length);return x(y,t,h),T(y,F,0,y,a,0,y.length/3),y}function Ot(t,n,e){const o=new Float64Array(t.position.length),a=t.position,r=n.x,i=n.y,l=n.z??0,c=j(e?e.unit:null,n.spatialReference);for(let s=0;s<a.length;s+=3)o[s]=a[s]*c+r,o[s+1]=a[s+1]*c+i,o[s+2]=a[s+2]*c+l;return{position:o,normal:t.normal,tangent:t.tangent}}function St(t,n,e){const o=n.spatialReference,a=C(n,e,h),r=new Float64Array(t.position.length),i=Tt(t.position,a,o,r),l=W(U,a);return{position:i,normal:_t(i,r,t.normal,l,o),tangent:zt(i,r,t.tangent,l,o)}}function Tt(t,n,e,o){x(o,t,n);const a=new Float64Array(t.length);return ut(o,a,e)}function _t(t,n,e,o,a){if(e==null)return null;const r=new Float32Array(e.length);return v(r,e,o),pt(r,t,n,a,r),r}function zt(t,n,e,o,a){if(e==null)return null;const r=new Float32Array(e.length);v(r,e,o,4);for(let i=3;i<r.length;i+=4)r[i]=e[i];return gt(r,t,n,a,r),r}function q(t,n,e){const o=new Float64Array(t.position.length),a=t.position,r=n.x,i=n.y,l=n.z??0,c=j(e?e.unit:null,n.spatialReference);for(let s=0;s<a.length;s+=3)o[s]=(a[s]-r)/c,o[s+1]=(a[s+1]-i)/c,o[s+2]=(a[s+2]-l)/c;return{position:o,normal:t.normal,tangent:t.tangent}}function It(t,n,e){const o=n.spatialReference;C(n,e,h);const a=I(Bt,h),r=new Float64Array(t.position.length),i=Pt(t.position,o,a,r),l=W(U,a);return{position:i,normal:Lt(t.normal,t.position,r,o,l),tangent:Wt(t.tangent,t.position,r,o,l)}}function C(t,n,e){L(t.spatialReference,[t.x,t.y,t.z??0],e,P(t.spatialReference));const o=j(n?n.unit:null,t.spatialReference);return ft(e,e,[o,o,o]),e}function Pt(t,n,e,o){const a=ht(t,n,o),r=new Float64Array(a.length);return x(r,a,e),r}function Lt(t,n,e,o,a){if(t==null)return null;const r=yt(t,n,e,o,new Float32Array(t.length));return v(r,r,a),r}function Wt(t,n,e,o,a){if(t==null)return null;const r=mt(t,n,e,o,new Float32Array(t.length));return v(r,r,a,4),r}function j(t,n){if(t==null)return 1;const e=xt(n);return 1/At(e,"meters",t)}const h=w(),Bt=w(),U=$t(),Zt=Object.freeze(Object.defineProperty({__proto__:null,georeference:R,georeferenceApplyTransform:G,georeferenceByTransform:Ft,project:Nt,ungeoreference:M,ungeoreferenceByTransform:dt},Symbol.toStringTag,{value:"Module"}));export{M as D,dt as E,Nt as I,jt as N,R as O,G as T,Zt as g,Ut as o,Ft as q,B as r};
