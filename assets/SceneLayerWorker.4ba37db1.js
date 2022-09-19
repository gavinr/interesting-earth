import{bj as V,bk as k,f9 as u,r as G}from"./index.a8738f47.js";import{o as _}from"./I3SNode.2febe09c.js";var L,x;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(x||(x={}));function q(){return O||(O=new Promise(e=>V(()=>import("./i3s.b1c4fa13.js"),[],import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:W,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),O}function W(e){return k(`esri/libs/i3s/${e}`)}let O;async function J(e){await E();const t=[e.geometryBuffer];return{result:N(e,t),transferList:t}}async function K(e){var g;await E();const t=[e.geometryBuffer],{geometryBuffer:o}=e,f=o.byteLength,i=r._malloc(f),d=new Uint8Array(r.HEAPU8.buffer,i,f);d.set(new Uint8Array(o));const s=r.dracoDecompressPointCloudData(i,d.byteLength);if(r._free(i),s.error.length>0)throw`i3s.wasm: ${s.error}`;const p=((g=s.featureIds)==null?void 0:g.length)>0?u(s.featureIds):null,m=u(s.positions);return p&&t.push(p.buffer),t.push(m.buffer),{result:{positions:m,featureIds:p},transferList:t}}async function Q(e){await E(),C(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function X(e){await E(),D(e)}async function Z(e){await E(),r.setLegacySchema(e.context,e.jsonSchema)}function ee(e){Y(e)}let w,r;function D(e){const t=e.modifications,o=r._malloc(8*t.length),f=new Float64Array(r.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];r.setModifications(e.context,o,t.length,e.isGeodetic),r._free(o)}function N(e,t){if(!r)return null;const{context:o,localOrigin:f,globalTrafo:i,mbs:d,obb:s,elevationOffset:p,geometryBuffer:m,geometryDescriptor:g,indexToVertexProjector:$,vertexToRenderProjector:j}=e,A=r._malloc(m.byteLength),F=33,I=r._malloc(F*Float64Array.BYTES_PER_ELEMENT),M=new Uint8Array(r.HEAPU8.buffer,A,m.byteLength);M.set(new Uint8Array(m));const a=new Float64Array(r.HEAPU8.buffer,I,F);h(a,f);let c=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c);h(l,i),c+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,d),c+=4*a.BYTES_PER_ELEMENT,G(s)&&(l=new Float64Array(a.buffer,c),h(l,s.center),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,s.halfSize),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,s.quaternion));const S=g,H={isDraco:!1,isLegacy:!1,color:e.layouts.some(y=>y.some(b=>b.name==="color")),normal:e.needNormals&&e.layouts.some(y=>y.some(b=>b.name==="normalCompressed")),uv0:e.layouts.some(y=>y.some(b=>b.name==="uv0")),uvRegion:e.layouts.some(y=>y.some(b=>b.name==="uvRegion")),featureIndex:S.featureIndex},n=r.process(o,!!e.obb,A,M.byteLength,S,H,I,p,$,j,e.normalReferenceFrame);if(r._free(I),r._free(A),n.error.length>0)throw`i3s.wasm: ${n.error}`;if(n.discarded)return null;const P=n.componentOffsets.length>0?u(n.componentOffsets):null,T=n.featureIds.length>0?u(n.featureIds):null,R=u(n.interleavedVertedData).buffer,U=n.indicesType===L.Int16?u(new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2)):u(new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4)),B=u(n.positions),v=n.positionIndicesType===L.Int16?u(new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2)):u(new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4)),z={layout:e.layouts[0],interleavedVertexData:R,indices:U,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:B,indices:v}};return T&&t.push(T.buffer),P&&t.push(P.buffer),t.push(R),t.push(U.buffer),t.push(B.buffer),t.push(v.buffer),{componentOffsets:P,featureIds:T,transformedGeometry:z,obb:n.obb}}function te(e){return e===0?_.Unmodified:e===1?_.PotentiallyModified:e===2?_.Culled:_.Unknown}function C(e){const{context:t,buffer:o}=e,f=r._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(r.HEAPU8.buffer,f,i),s=new Float64Array(o);d.set(s),r.filterOBBs(t,f,i),s.set(d),r._free(f)}function Y(e){r&&r.destroy(e)}function h(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}function E(){return r?Promise.resolve():(w||(w=q().then(e=>{r=e,w=null})),w)}const ne={transform:N,destroy:Y},ie=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:ee,dracoDecompressPointCloudData:K,filterObbsForModifications:Q,filterObbsForModificationsSync:C,initialize:E,interpretObbModificationResults:te,process:J,setLegacySchema:Z,setModifications:X,setModificationsSync:D,test:ne},Symbol.toStringTag,{value:"Module"}));export{C as E,ie as S,D as b,te as d,x as e,E as g};
