import{e as f,d as y,n as v,el as Y,d7 as g,cW as S,f7 as R,aO as $,am as j}from"./index.a8738f47.js";let x=class extends Y{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};f([y()],x.prototype,"affectsPixelSize",null),f([y({json:{write:!0}})],x.prototype,"spatialReference",void 0),x=f([v("esri.layers.support.rasterTransforms.BaseRasterTransform")],x);const T=x;let d=class extends T{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return(e=e.clone()).type==="point"?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return(e=e.clone()).type==="point"?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};f([g({GCSShiftXform:"gcs-shift"})],d.prototype,"type",void 0),f([y()],d.prototype,"tolerance",void 0),d=f([v("esri.layers.support.rasterTransforms.GCSShiftTransform")],d);const M=d;let C=class extends T{constructor(){super(...arguments),this.type="identity"}};f([g({IdentityXform:"identity"})],C.prototype,"type",void 0),C=f([v("esri.layers.support.rasterTransforms.IdentityTransform")],C);const z=C;function w(e,r,o){const{x:t,y:n}=r;if(o<2)return{x:e[0]+t*e[2]+n*e[4],y:e[1]+t*e[3]+n*e[5]};if(o===2){const p=t*t,X=n*n,O=t*n;return{x:e[0]+t*e[2]+n*e[4]+p*e[6]+O*e[8]+X*e[10],y:e[1]+t*e[3]+n*e[5]+p*e[7]+O*e[9]+X*e[11]}}const s=t*t,l=n*n,u=t*n,i=s*t,m=s*n,h=t*l,a=n*l;return{x:e[0]+t*e[2]+n*e[4]+s*e[6]+u*e[8]+l*e[10]+i*e[12]+m*e[14]+h*e[16]+a*e[18],y:e[1]+t*e[3]+n*e[5]+s*e[7]+u*e[9]+l*e[11]+i*e[13]+m*e[15]+h*e[17]+a*e[19]}}function I(e,r,o){const{xmin:t,ymin:n,xmax:s,ymax:l,spatialReference:u}=r;let i=[];if(o<2)i.push({x:t,y:l}),i.push({x:s,y:l}),i.push({x:t,y:n}),i.push({x:s,y:n});else{let a=10;for(let p=0;p<a;p++)i.push({x:t,y:n+(l-n)*p/(a-1)}),i.push({x:s,y:n+(l-n)*p/(a-1)});a=8;for(let p=1;p<=a;p++)i.push({x:t+(s-t)*p/a,y:n}),i.push({x:t+(s-t)*p/a,y:l})}i=i.map(a=>w(e,a,o));const m=i.map(a=>a.x),h=i.map(a=>a.y);return new j({xmin:Math.min.apply(null,m),xmax:Math.max.apply(null,m),ymin:Math.min.apply(null,h),ymax:Math.max.apply(null,h),spatialReference:u})}function F(e){const[r,o,t,n,s,l]=e,u=t*l-s*n,i=s*n-t*l;return[(s*o-r*l)/u,(t*o-r*n)/i,l/u,n/i,-s/u,-t/i]}let c=class extends T{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(!(o!=null&&o.length)||!(t!=null&&t.length)||o.length!==t.length)return null;const n=[];for(let s=0;s<o.length;s++)n.push(o[s]),n.push(t[s]);return n}writeForwardCoefficients(e,r,o){const t=[],n=[];for(let s=0;s<(e==null?void 0:e.length);s++)s%2==0?t.push(e[s]):n.push(e[s]);r.coeffX=t,r.coeffY=n}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=F(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(!(o!=null&&o.length)||!(t!=null&&t.length)||o.length!==t.length)return null;const n=[];for(let s=0;s<o.length;s++)n.push(o[s]),n.push(t[s]);return n}writeInverseCoefficients(e,r,o){const t=[],n=[];for(let s=0;s<(e==null?void 0:e.length);s++)s%2==0?t.push(e[s]):n.push(e[s]);r.inverseCoeffX=t,r.inverseCoeffY=n}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if(e.type==="point"){const r=w(this.forwardCoefficients,e,this.polynomialOrder);return new $({x:r.x,y:r.y,spatialReference:e.spatialReference})}return I(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if(e.type==="point"){const r=w(this.inverseCoefficients,e,this.polynomialOrder);return new $({x:r.x,y:r.y,spatialReference:e.spatialReference})}return I(this.inverseCoefficients,e,this.polynomialOrder)}};f([y({json:{write:!0}})],c.prototype,"polynomialOrder",void 0),f([y()],c.prototype,"forwardCoefficients",void 0),f([S("forwardCoefficients",["coeffX","coeffY"])],c.prototype,"readForwardCoefficients",null),f([R("forwardCoefficients")],c.prototype,"writeForwardCoefficients",null),f([y({json:{write:!0}})],c.prototype,"inverseCoefficients",null),f([S("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],c.prototype,"readInverseCoefficients",null),f([R("inverseCoefficients")],c.prototype,"writeInverseCoefficients",null),f([y()],c.prototype,"affectsPixelSize",null),f([g({PolynomialXform:"polynomial"})],c.prototype,"type",void 0),c=f([v("esri.layers.support.rasterTransforms.PolynomialTransform")],c);const G=c,P={GCSShiftXform:M,IdentityXform:z,PolynomialXform:G},_=Object.keys(P);function k(e){const r=e==null?void 0:e.type;return!e||_.includes(r)}function B(e){if(!(e==null?void 0:e.type))return null;const o=P[e==null?void 0:e.type];if(o){const t=new o;return t.read(e),t}return null}export{M as c,k as f,B as i,G as m};
