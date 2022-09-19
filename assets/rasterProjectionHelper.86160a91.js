import{is as D,ec as dt,am as Y,ed as O,t as G,r as S,bH as L,v as wt,aO as E,aW as Mt,K as Rt,iE as T,iF as k,iG as et,iH as Pt,iI as bt,d2 as St,iJ as it}from"./index.a8738f47.js";var U;function ut(t,n,i){return!Mt(t,n,i)}function W(t,n,i){const s=ut(t,n,i);if(s&&!D())throw new Rt("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(U||(U={}));const ot=(t,n,i,s=0)=>{if(i[0]===1)return[0,0];let r=1,e=-1,o=1,f=-1;for(let c=0;c<t.length;c+=2)isNaN(t[c])||(r=r>t[c]?t[c]:r,e=e>t[c]?e:t[c],o=o>t[c+1]?t[c+1]:o,f=f>t[c+1]?f:t[c+1]);const{cols:a,rows:l}=n,u=(e-r)/a/i[0],w=(f-o)/l/i[1],g=2*s;let m=0,x=!1,p=[0,0];for(let c=0;c<a-3;c++){for(let M=0;M<l-3;M++){const y=c*l*2+2*M,h=(t[y]+t[y+4]+t[y+4*l]+t[y+4*l+4])/4,d=(t[y+1]+t[y+5]+t[y+4*l+1]+t[y+4*l+5])/4,R=Math.abs((h-t[y+2*l+2])/u),P=Math.abs((d-t[y+2*l+3])/w);if(R+P>m&&(m=R+P,p=[R,P]),g&&m>g){x=!0;break}}if(x)break}return p},Et={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},I=32,B=4,J=B,K=new Map,X=new Map;async function Wt(){if(D())return null;await dt()}function $t(t,n,i){return W(t.spatialReference,n)?i?it(n,t.spatialReference,t):it(t.spatialReference,n,t):null}function Lt(t,n,i,s=null){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,s);const e=i.center,o=new Y({xmin:e.x-t.x/2,xmax:e.x+t.x/2,ymin:e.y-t.y/2,ymax:e.y+t.y/2,spatialReference:r}),f=O(o,n,s),a=v(n);let l;if(G(f)||S(a)&&f.width>=a){const u=L(r)/L(n);l={x:t.x*u,y:t.y*u}}else l={x:f.width,y:f.height};return l}function N(t,n=.01){return L(t)?n/L(t):0}function st(t,n,i=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,i);const e=O(t,n,i);if(!s||!e)return e;const o=j(r,!0),f=j(n,!0),a=N(r);return a&&S(o)&&S(f)&&(e.x>0&&Math.abs(t.x-o[0])<a?e.x-=f[1]-f[0]:e.x<0&&Math.abs(t.x-o[1])<a&&(e.x+=f[1]-f[0])),e}function Nt(t){const{inSR:n,outSR:i,datumTransformation:s,preferPE:r}=t;if(n.equals(i)){const{points:e}=Q(t,null);return e}if(n.isWebMercator&&i.isWGS84||n.isWGS84&&i.isWebMercator)return kt(t);if(W(n,i,s)&&r){if(n.isGeographic)return rt(t);const e=z(n);if(S(e))return rt(t)}return Gt(t)}function Gt(t){const{points:n}=Q(t,null),i=n.map(s=>new E(s[0],s[1],t.inSR));return O(i,t.outSR,t.datumTransformation).map(s=>s?[s.x,s.y]:[NaN,NaN])}function rt(t){const{inSR:n,outSR:i,datumTransformation:s}=t,r=z(n),{points:e,mask:o}=Q(t,r);if(!n.isGeographic){const a=n.wkid?T.coordsys(n.wkid):T.fromString(n.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,n.wkt);et.projToGeog(a,e.length,e)}if(S(s)&&s.steps.length&&s.steps.forEach(a=>{const l=a.wkid?T.geogtran(a.wkid):T.fromString(k.PE_TYPE_GEOGTRAN,a.wkt);Pt.geogToGeog(l,e.length,e,null,a.isInverse?k.PE_TRANSFORM_2_TO_1:k.PE_TRANSFORM_1_TO_2)}),!i.isGeographic){const a=z(i,!0),l=S(a)&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];Tt(e,l);const u=i.wkid?T.coordsys(i.wkid):T.fromString(i.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,i.wkt);et.geogToProj(u,e.length,e)}let f=e;if(o&&e.length!==o.length){f=[];for(let a=0,l=0;a<o.length;a++)o[a]?f.push(e[l++]):f.push([NaN,NaN])}return f}function kt(t){const{cols:n,rows:i,xres:s,yres:r,usePixelCenter:e,inSR:o,outSR:f}=t;let{xmin:a,ymax:l}=t;e&&(a+=s/2,l-=r/2);const u=[],w=[],g=Math.max(n,i);for(let x=0;x<g;x++){const p=a+s*Math.min(n,x),c=l-r*Math.min(i,x),M=O(new E({x:p,y:c,spatialReference:o}),f);x<=n&&u.push(M.x),x<=i&&w.push(M.y)}const m=[];for(let x=0;x<n;x++)for(let p=0;p<i;p++)m.push([u[x],w[p]]);return m}function z(t,n=!1){let i=t.wkid||t.wkt;if(!i||t.isGeographic)return null;if(i=String(i),K.has(i)){const o=K.get(i);return n?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,t.wkt),r=at(s,N(t,1e-4)),e=at(s,0,!0);return K.set(i,{pcs:r,gcs:e}),n?e:r}function at(t,n=0,i=!1){const s=bt.generate(t),r=i?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!(r!=null&&r.length))return null;let e=!1,o=r.find(c=>c.getInclusive()===1&&c.getKind()===1);if(!o){if(o=r.find(c=>c.getInclusive()===1&&c.getKind()===0),!o)return null;e=!0}const f=i?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),a=s.isPannableRectangle(),l=o.getCoord();if(e)return{isEnvelope:e,isPannable:a,vertices:l,coef:null,bbox:[l[0][0]-n,l[0][1]-n,l[1][0]+n,l[1][1]+n],poleLocation:f};let u=0;const w=[];let[g,m]=l[0],[x,p]=l[0];for(let c=0,M=l.length;c<M;c++){u++,u===M&&(u=0);const[y,h]=l[c],[d,R]=l[u];if(R===h)w.push([y,d,h,R,2]);else{const P=(d-y)/(R-h||1e-4),_=y-P*h;h<R?w.push([P,_,h,R,0]):w.push([P,_,R,h,1])}g=g<y?g:y,m=m<h?m:h,x=x>y?x:y,p=p>h?p:h}return{isEnvelope:!1,isPannable:a,vertices:l,coef:w,bbox:[g,m,x,p],poleLocation:f}}function Q(t,n){const i=[],{cols:s,rows:r,xres:e,yres:o,usePixelCenter:f}=t;let{xmin:a,ymax:l}=t;if(f&&(a+=e/2,l-=o/2),G(n)){for(let m=0;m<s;m++)for(let x=0;x<r;x++)i.push([a+e*m,l-o*x]);return{points:i}}const u=new Uint8Array(s*r);if(n.isEnvelope){const{bbox:[m,x,p,c]}=n;for(let M=0,y=0;M<s;M++){const h=a+e*M,d=n.isPannable||h>=m&&h<=p;for(let R=0;R<r;R++,y++){const P=l-o*R;d&&P>=x&&P<=c&&(i.push([h,P]),u[y]=1)}}return{points:i,mask:u}}const{coef:w}=n,g=[];for(let m=0;m<r;m++){const x=l-o*m,p=[],c=[];for(let y=0;y<w.length;y++){const[h,d,R,P,_]=w[y];if(x===R&&R===P)p.push(h),p.push(d),c.push(2),c.push(2);else if(x>=R&&x<=P){const A=h*x+d;p.push(A),c.push(_)}}let M=p;if(p.length>2){let y=c[0]===2?0:c[0],h=p[0];M=[];for(let d=1;d<c.length;d++)c[d]===2&&d!==c.length-1||(c[d]!==y&&(M.push(y===0?Math.min(h,p[d-1]):Math.max(h,p[d-1])),y=c[d],h=p[d]),d===c.length-1&&M.push(c[d]===0?Math.min(h,p[d]):Math.max(h,p[d])));M.sort((d,R)=>d-R)}else p[0]>p[1]&&(M=[p[1],p[0]]);g.push(M)}for(let m=0,x=0;m<s;m++){const p=a+e*m;for(let c=0;c<r;c++,x++){const M=l-o*c,y=g[c];if(y.length===2)p>=y[0]&&p<=y[1]&&(i.push([p,M]),u[x]=1);else if(y.length>2){let h=!1;for(let d=0;d<y.length;d+=2)if(p>=y[d]&&p<=y[d+1]){h=!0;break}h&&(i.push([p,M]),u[x]=1)}}}return{points:i,mask:u}}function Tt(t,n){const[i,s]=n;for(let r=0;r<t.length;r++){const e=t[r][1];(e<i||e>s)&&(t[r]=[NaN,NaN])}}function xt(t){const n=v(t[0].spatialReference);if(t.length<2||G(n))return t[0];let{xmin:i,xmax:s,ymin:r,ymax:e}=t[0];for(let o=1;o<t.length;o++){const f=t[o];s=f.xmax+n*o,r=Math.min(r,f.ymin),e=Math.max(e,f.ymax)}return new Y({xmin:i,xmax:s,ymin:r,ymax:e,spatialReference:t[0].spatialReference})}function vt(t,n,i=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;const e=Ct(t),o=v(r,!0),f=v(n);if(e===0||G(o)||G(f)){const l=lt(t,n,i,s);if(G(o)&&S(f)&&Math.abs(l.width-f)<N(n)&&D()){const u=z(r);if(S(u)&&u.poleLocation===U.None&&t.width<(u.bbox[2]-u.bbox[0])/2)return _t(t,n)||l}return l}const a=t.clone().normalize();if(a.length===1&&t.xmax<o&&t.xmax-o/2>N(r)){const{xmin:l,xmax:u}=t;for(let w=0;w<=e;w++){const g=w===0?l:-o/2,m=w===e?u-o*w:o/2;a[w]=new Y({xmin:g,xmax:m,ymin:t.ymin,ymax:t.ymax,spatialReference:r})}}return xt(a.map(l=>lt(l,n,i,s)).filter(l=>!!l))}function _t(t,n){const i=v(n);if(G(i))return null;let{xmin:s,ymin:r,xmax:e,ymax:o}=t;const f=t.spatialReference,a=new wt({spatialReference:f,rings:[[[s,r],[e,r],[e,o],[s,o],[s,r]]]}),l=O(a,n);if(l.rings.length!==2||!l.rings[0].length||!l.rings[1].length)return null;const{rings:u}=l,w=N(f),g=new Y({spatialReference:n});for(let m=0;m<2;m++){s=e=u[m][0][0],r=o=u[m][0][1];for(let x=0;x<u[m].length;x++)s=s>u[m][x][0]?u[m][x][0]:s,e=e<u[m][x][0]?u[m][x][0]:e,r=r>u[m][x][1]?u[m][x][1]:r,o=o<u[m][x][1]?u[m][x][1]:o;if(m===0)g.ymin=r,g.ymax=o,g.xmin=s,g.xmax=e;else if(g.ymin=Math.min(g.ymin,r),g.ymax=Math.max(g.ymax,o),Math.abs(e-i/2)<w)g.xmin=s,g.xmax=g.xmax+i;else{if(!(Math.abs(s+i/2)<w))return null;g.xmax=e+i}}return g}function lt(t,n,i=null,s=!0,r=!0){const e=t.spatialReference;if(e.equals(n))return t;W(e,n,i);const o=O(t,n,i);if(r&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const f=j(e,!0),a=j(n,!0);if(G(f)||G(a))return o;const l=N(e,.001),u=N(e,500),w=N(n,.001);if(Math.abs(o.xmin-a[0])<w&&Math.abs(o.xmax-a[1])<w){const g=Math.abs(t.xmin-f[0]),m=Math.abs(f[1]-t.xmax);if(g<l&&m>u){o.xmin=a[0];const x=[];x.push(new E(t.xmax,t.ymin,e)),x.push(new E(t.xmax,(t.ymin+t.ymax)/2,e)),x.push(new E(t.xmax,t.ymax,e));const p=x.map(c=>st(c,n,i)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmax=Math.max.apply(null,p)}if(m<l&&g>u){o.xmax=a[1];const x=[];x.push(new E(t.xmin,t.ymin,e)),x.push(new E(t.xmin,(t.ymin+t.ymax)/2,e)),x.push(new E(t.xmin,t.ymax,e));const p=x.map(c=>st(c,n,i)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmin=Math.min.apply(null,p)}}else{const g=N(n,.001);Math.abs(o.xmin-a[0])<g&&(o.xmin=a[0]),Math.abs(o.xmax-a[1])<g&&(o.xmax=a[1])}return o}function v(t,n=!1){const i=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*i:t.wkid&&t.isGeographic?360:2*Et[t.wkid]||null}function j(t,n=!1){if(t.isGeographic)return[-180,180];const i=v(t,n);return S(i)?[-i/2,i/2]:null}function ct(t,n,i,s){let r=(t-n)/i;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function Ct(t,n=!1){const i=v(t.spatialReference);if(G(i))return 0;const s=n?0:-(i/2),r=N(t.spatialReference),e=!n&&Math.abs(t.xmax-i/2)<r?i/2:t.xmax,o=!n&&Math.abs(t.xmin+i/2)<r?-i/2:t.xmin;return ct(e,s,i,!0)-ct(o,s,i,!1)}function At(t){const n=t.storageInfo.origin.x,i=v(t.spatialReference,!0);if(G(i))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const s=i/2,{nativePixelSize:r,storageInfo:e,extent:o}=t,{maximumPyramidLevel:f,blockWidth:a,pyramidScalingFactor:l}=e;let u=r.x;const w=[],g=S(t.transform)&&t.transform.type==="gcs-shift",m=n+(g?0:s),x=g?i-n:s-n;for(let p=0;p<=f;p++){const c=(o.xmax-n)/u/a,M=c-Math.floor(c)==0?c:Math.ceil(c),y=x/u/a,h=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(m/u/a),R=Math.round(m/u)%a,P=(a-Math.round(x/u)%a)%a;w.push({resolutionX:u,blockWidth:a,datsetColumnCount:M,worldColumnCountFromOrigin:h,leftMargin:R,rightPadding:P,originColumnOffset:d}),u*=l}return{originX:n,halfWorldWidth:s,pyramidsInfo:w,hasGCSSShiftTransform:g}}function zt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let i;return X.has(n)?i=X.get(n):(i=(t.wkid?T.coordsys(t.wkid):T.fromString(k.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),X.set(n,i)),new St({wkid:i})}function It(t){const n=t.isAdaptive&&t.spacing==null;let i=t.spacing||[I,I],s=H(t),r={cols:s.size[0]+1,rows:s.size[1]+1};const e=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||n&&e?[0,0]:ot(s.offsets,r,i,J);const f=(o[0]+o[1])/2,a=t.projectedExtent.spatialReference,l=t.srcBufferExtent.spatialReference;if(n&&(e||f>J)&&(ut(a,l,t.datumTransformation)&&(a.isGeographic||S(z(a))),i=[B,B],s=H({...t,spacing:i}),r={cols:s.size[0]+1,rows:s.size[1]+1},o=ot(s.offsets,r,i,J)),s.error=o,i[0]>1&&(s.coefficients=ft(s.offsets,r,e)),t.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(l.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:i};else{const u=z(a);if(S(u)&&!u.isEnvelope){const w=zt(a),g=vt(t.projectedExtent,w),{offsets:m}=H({...t,srcBufferExtent:g,spacing:i}),x=ft(m,r,e);s.gcsGrid={offsets:m,coefficients:x,spacing:i}}}return s}function H(t){const{projectedExtent:n,srcBufferExtent:i,pixelSize:s,datumTransformation:r,rasterTransform:e}=t,o=n.spatialReference,f=i.spatialReference,a=W(o,f),{xmin:l,ymin:u,xmax:w,ymax:g}=n,m=v(f),x=S(m)&&(t.hasWrapAround||(e==null?void 0:e.type)==="gcs-shift"),p=t.spacing||[I,I],c=p[0]*s.x,M=p[1]*s.y,y=p[0]===1,h=Math.ceil((w-l)/c-.1/p[0])+(y?0:1),d=Math.ceil((g-u)/M-.1/p[1])+(y?0:1),R=Nt({cols:h,rows:d,xmin:l,ymax:g,xres:c,yres:M,inSR:o,outSR:f,datumTransformation:r,preferPE:p[0]<=B,usePixelCenter:y}),P=[];let _,A=0;const V=y?-1:NaN,{xmin:Z,xmax:F,ymax:mt,width:ht,height:pt}=i,gt=N(f,500),yt=S(m)&&Z>0&&F>m/2;let tt=!1;if(a){const C=z(o);tt=S(C)&&C.poleLocation>0}for(let C=0;C<h;C++){const q=[];for(let $=0;$<d;$++){let b=R[C*d+$];if(x&&b[0]>F&&b[0]>m/2-gt?b[0]-=m:x&&C===0&&b[0]<0&&yt&&!e&&(b[0]+=m),!b||isNaN(b[0])||isNaN(b[1]))P.push(V),P.push(V),q.push(null),A++;else{if(e){const nt=e.inverseTransform(new E({x:b[0],y:b[1],spatialReference:f}));b=[nt.x,nt.y]}q.push(b),C>0&&x&&_[$]&&b[0]<_[$][0]&&(b[0]+=m,tt&&b[0]>F&&b[0]>m&&(b[0]-=m)),P.push((b[0]-Z)/ht),P.push((mt-b[1])/pt)}}_=q}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:A,spacing:p,size:y?[h,d]:[h-1,d-1]}}function ft(t,n,i){const{cols:s,rows:r}=n,e=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<s-1;a++){for(let l=0;l<r-1;l++){let u=a*r*2+2*l;const w=t[u],g=t[u+1],m=t[u+2],x=t[u+3];u+=2*r;const p=t[u],c=t[u+1],M=t[u+2],y=t[u+3];let h=0,d=12*(l*(s-1)+a);for(let R=0;R<3;R++)e[d++]=o[h++]*w+o[h++]*m+o[h++]*M;h=0;for(let R=0;R<3;R++)e[d++]=o[h++]*g+o[h++]*x+o[h++]*y;h=0;for(let R=0;R<3;R++)e[d++]=f[h++]*w+f[h++]*p+f[h++]*M;h=0;for(let R=0;R<3;R++)e[d++]=f[h++]*g+f[h++]*c+f[h++]*y}if(i)for(let l=0;l<e.length;l++)isNaN(e[l])&&(e[l]=-1)}return e}function Bt(t){const n=t.clone().normalize();return n.length===1?n[0]:xt(n)}function jt(t,n,i){const{storageInfo:s,pixelSize:r}=n;let e,o=!1;const{pyramidResolutions:f}=s;if(S(f)&&f.length){const g=(t.x+t.y)/2,m=f[f.length-1],x=(m.x+m.y)/2,p=(r.x+r.y)/2;if(g<=p)e=0;else if(g>=x)e=f.length,o=g/x>8;else{let M,y=p;for(let h=1;h<=f.length;h++){if(M=(f[h-1].x+f[h-1].y)/2,g<=M){g===M?e=h:i==="down"?(e=h-1,o=g/y>8):e=i==="up"||g-y>M-g||g/y>2?h:h-1;break}y=M}}const c=e===0?r:f[e-1];return o&&Math.min(c.x,c.y)*L(n.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new E({x:c.x,y:c.y,spatialReference:n.spatialReference}),excessiveReading:o}}const a=Math.log(t.x/r.x)/Math.LN2,l=Math.log(t.y/r.y)/Math.LN2,u=n.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(a,l)):i==="up"?Math.ceil(Math.max(a,l)):Math.round((a+l)/2),e<0?e=0:e>u&&(o=e>u+3,e=u);const w=2**e;return{pyramidLevel:e,pyramidResolution:new E({x:w*n.nativePixelSize.x,y:w*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:o}}export{Ct as D,vt as F,At as H,ut as M,$t as T,It as V,v as X,st as _,Bt as e,Wt as k,jt as t,Lt as v};
