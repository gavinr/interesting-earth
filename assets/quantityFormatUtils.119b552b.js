import{jF as V,K as F,jz as X,jG as g,fQ as Y,jH as Z,jI as tt,d2 as et,aK as at,aM as nt,aN as st,jJ as it,jK as rt,jL as G,bH as S,jM as ot,jN as ct,jO as ut,jP as ht,jQ as lt}from"./index.a8738f47.js";import{b as ft}from"./Segment.00e10e0b.js";const zt={readOnly:!0,get(){return V(this.view)}};var x;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(x||(x={}));function K(t){if(!t)return null;if(Y(t)&&t.wkid){const e=Z[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=tt.exec(t);if(!e||e.length!==2)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const n=parseFloat(a[1]),s=parseFloat(a[2]);return isNaN(n)||isNaN(s)?null:{a:n,f:s===0?0:1/s}}function pt(t){const e=K(t||et.WGS84);if(dt(e))return e;const a=e.a*(1-e.f);return Object.assign(e,{b:a,eSq:1-(a/e.a)**2,radius:(2*e.a+a)/3,densificationRatio:1e4/((2*e.a+a)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return K(t)!==null}function _t(t,e="meters"){if(!t)throw new F("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(n=>!mt(n.spatialReference)))throw new F("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<t.length;n++){const s=t[n],{spatialReference:m}=s,v=s.type==="polyline"?s.paths:s.rings;let r=0;for(let b=0;b<v.length;b++){const o=v[b];let f=0;for(let M=1;M<o.length;M++){const $=o[M-1][0],z=o[M][0],_=o[M-1][1],u=o[M][1];if(_!==u||$!==z){const c={distance:null};gt(c,[$,_],[z,u],m),f+=c.distance}}r+=f}r=X(r,"meters",e),a.push(r)}return a}function gt(t,e,a,n){const s=e[0]*g,m=e[1]*g,v=a[0]*g,r=a[1]*g,{a:b,b:o,f,radius:M}=pt(n),$=v-s,z=Math.atan((1-f)*Math.tan(m)),_=Math.atan((1-f)*Math.tan(r)),u=Math.sin(z),c=Math.cos(z),j=Math.sin(_),h=Math.cos(_);let k,R,p,i,w,U,N,P,y,A,D=1e3,l=$;do{if(N=Math.sin(l),P=Math.cos(l),p=Math.sqrt(h*N*(h*N)+(c*j-u*h*P)*(c*j-u*h*P)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;w=u*j+c*h*P,U=Math.atan2(p,w),y=c*h*N/p,R=1-y*y,i=w-2*u*j/R,isNaN(i)&&(i=0),A=f/16*R*(4+f*(4-3*R)),k=l,l=$+(1-A)*f*y*(U+A*p*(i+A*w*(2*i*i-1)))}while(Math.abs(l-k)>1e-12&&--D>0);if(D===0){const C=M,J=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(v-s))*C,E=v-s,L=Math.sin(E)*Math.cos(r),W=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(E),B=Math.atan2(L,W);return t.azimuth=B/g,t.distance=J,t.reverseAzimuth=void 0,t}const d=R*(b*b-o*o)/(o*o),q=d/1024*(256+d*(d*(74-47*d)-128)),I=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(U-q*p*(i+q/4*(w*(2*i*i-1)-q/6*i*(4*p*p-3)*(4*i*i-3)))),Q=Math.atan2(h*Math.sin(l),c*j-u*h*Math.cos(l)),T=Math.atan2(c*Math.sin(l),c*j*Math.cos(l)-u*h);return t.azimuth=Q/g,t.distance=I,t.reverseAzimuth=T/g,t}function Rt(t,e){if(at(e,0,0,0),t.length>0){for(let a=0;a<t.length;++a)nt(e,e,t[a]);st(e,e,1/t.length)}}function wt(t,e,a,n){n.projectToRenderScreen(t,O),n.projectToRenderScreen(e,H),it(a,bt,vt),rt(a,a)}const O=G(),vt=O,H=G(),bt=H;class Nt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=S(this._spatialReference,1),this._metersPerElevationUnit=S(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function Pt(t,e,a,n=2,s="abbr"){return ot(t,ft(e,a).value,a,n,s)}function yt(t,e,a=2,n="abbr"){return ct(t,e.value,e.unit,a,n)}function At(t,e,a=2,n="abbr"){return ut(t,e.value,e.unit,a,n)}function Ut(t,e,a=2,n="abbr"){return ht(t,e.value,e.unit,a,n)}function qt(t,e,a=2,n="abbr"){return lt(t,e.value,e.unit,a,n)}export{mt as M,Ut as a,yt as b,Rt as c,x as e,Pt as g,wt as i,qt as j,zt as r,Nt as t,At as w,_t as y,gt as z};
