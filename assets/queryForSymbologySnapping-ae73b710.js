import{fq as D,a_ as C,fr as q,fs as z,cm as S,ft as $,fu as F,fv as G,bC as O}from"./index-4b03b1b0.js";import{u as E}from"./elevationInfoUtils-a7c808f6.js";async function B(o,d,p,f,r){const{elevationProvider:h,renderCoordsHelper:c,spatialReference:I}=o,{elevationInfo:y}=d,m=q(y,!0),b=await z(m,I,r);S(r);const i=[],l=new Set,u=new Set;for(const{objectId:e,points:t}of f){const n=p(e);if(n==null){for(const s of t)i.push(s.z??0);l.add(e);continue}n.isDraped&&u.add(e);const a=n.graphic.geometry;v.setFromElevationInfo(E(a,y)),v.updateFeatureExpressionInfoContext(b,n.graphic,d),g.spatialReference=o.spatialReference;for(const{x:s,y:j,z:x}of t)g.x=s,g.y=j,g.z=x??0,$(g,h,v,c,w),i.push(w.z)}return{elevations:i,drapedObjectIds:u,failedObjectIds:l}}const v=new F,g=D(0,0,0,C.WGS84),w=new G;async function H(o,d,p){if(o==null||d.candidates.length===0)return R;const f=o.graphics3DGraphicsByObjectID??o.graphics3DGraphics,r=[],h=[],{renderer:c}=o,I=c!=null&&"arcadeRequired"in c&&c.arcadeRequired?O():null,y=async(e,{graphic:t,graphics3DSymbol:n})=>{const a=await I,s=await o.getRenderingInfoAsync(t,c,a,{signal:p});return s==null?[]:n.queryForSnapping(e,b,s,p)},{candidates:m,spatialReference:b}=d;for(let e=0;e<m.length;++e){const t=m[e],{objectId:n}=t,a=typeof n=="number"?f==null?void 0:f.get(n):void 0;if(a==null)continue;const{graphics3DSymbol:s}=a;s.symbologySnappingSupported&&(r.push(y(t,a)),h.push(e))}if(r.length===0)return R;const i=await Promise.all(r);S(p);const l=[],u=[];for(let e=0;e<i.length;++e){const t=i[e],n=h[e];for(const a of t)l.push(a),u.push(n)}return{candidates:l,sourceCandidateIndices:u}}const R={candidates:[],sourceCandidateIndices:[]};export{B as f,H as r};