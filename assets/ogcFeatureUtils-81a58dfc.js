import{b3 as z,aq as g,bB as I,ee as E,a_ as F,er as _,eg as B,ef as Q,d0 as C,ed as U,es as V}from"./index-4b03b1b0.js";import{T as H,L as X,I as Y}from"./geojson-5528191c.js";import{o as ee}from"./clientSideDefaults-76ae825d.js";import{r as ne}from"./FieldsIndex-06c42f48.js";const N=z.getLogger("esri.layers.graphics.sources.ogcfeature"),G="http://www.opengis.net/def/crs/",fe=`${G}OGC/1.3/CRS84`;async function me(n,t,e={},i=5){const{links:r}=n,l=f(r,"items","application/geo+json")||f(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(l==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await I(l.href,{signal:e.signal,query:{limit:i,...e.customParameters,token:e.apiKey},headers:{accept:"application/geo+json"}});await H(u);const s=X(u,{geometryType:t.geometryType}),d=t.fields||s.fields||[],j=t.hasZ!=null?t.hasZ:s.hasZ,b=s.geometryType,m=t.objectIdField||s.objectIdFieldName||"OBJECTID";let o=t.timeInfo;const T=d.find(({name:a})=>a===m);if(T)T.editable=!1,T.nullable=!1;else{if(!s.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");d.unshift({name:m,alias:m,type:s.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==s.objectIdFieldName){const a=d.find(({name:c})=>c===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}d===s.fields&&s.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of d){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!E.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new ne(d);if(o.startTimeField){const c=a.get(o.startTimeField);c?(o.startTimeField=c.name,c.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const c=a.get(o.endTimeField);c?(o.endTimeField=c.name,c.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const c=a.get(o.trackIdField);c?o.trackIdField=c.name:(o.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}o.startTimeField||o.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}return{drawingInfo:b?ee(b):null,extent:oe(n),geometryType:b,fields:d,hasZ:!!j,objectIdField:m,timeInfo:o}}async function pe(n,t={}){const{links:e}=n,i=f(e,"data","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(i==null)throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:u}=t,{data:s}=await I(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function ge(n,t={}){const{links:e}=n,i=f(e,"conformance","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(i==null)throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:u}=t,{data:s}=await I(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function ye(n,t={}){const{apiKey:e,customParameters:i,signal:r}=t,{data:l}=await I(n,{signal:r,headers:{accept:"application/json"},query:{...i,token:e}});return l}async function we(n,t={}){const e="application/vnd.oai.openapi+json;version=3.0",i=f(n.links,"service-desc",e);if(i==null)return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:u}=t,{data:s}=await I(i.href,{signal:u,headers:{accept:e},query:{...l,token:r}});return s}function be(n){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(n),e=t==null?void 0:t.groups;if(!e)return null;const{authority:i,code:r}=e;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return F.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return F.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(r,10);return Number.isNaN(l)?null:l}default:return null}}async function he(n,t,e){const i=await te(n,t,e);return _(i)}async function te(n,t,e){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:u,customParameters:s},spatialReference:d,supportedCrs:j}=n,{links:b}=i,m=f(b,"items","application/geo+json")||f(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(m==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:T,start:a,timeExtent:c,where:W}=t;if(t.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const P=F.fromJSON(d),h=t.outSpatialReference??P,k=h.isWGS84?null:R(h,j),D=se(o,j),Z=ae(c),K=re(W),L=T??(a!=null&&a!==void 0?10:l),{data:y}=await I(m.href,{...e,query:{...s,...D,crs:k,datetime:Z,query:K,limit:L,startindex:a,token:u},headers:{accept:"application/geo+json"}});let x=!1;y.links&&(x=!!y.links.find(v=>v.rel==="next")),!x&&Number.isInteger(y.numberMatched)&&Number.isInteger(y.numberReturned)&&(x=y.numberReturned<y.numberMatched);const{fields:J,geometryType:S,hasZ:q,objectIdField:$}=r,M=Y(y,{geometryType:S,hasZ:q,objectIdField:$});if(!k&&h.isWebMercator){for(const w of M)if(w.geometry!=null&&S!=null){const v=B(w.geometry,S,q,!1);v.spatialReference=F.WGS84,w.geometry=Q(C(v,h))}}for(const w of M)w.objectId=w.attributes[$];const A=k||!k&&h.isWebMercator?h.toJSON():U,p=new V;return p.exceededTransferLimit=x,p.features=M,p.fields=J,p.geometryType=S,p.hasZ=q,p.objectIdFieldName=$,p.spatialReference=A,p}function ie(n){return n!=null&&n.type==="extent"}function R(n,t){const{isWebMercator:e,wkid:i}=n;if(!i)return null;const r=e?t[3857]??t[102100]??t[102113]??t[900913]:t[n.wkid];return r?`${G}${r}`:null}function O(n){if(n==null)return"";const{xmin:t,ymin:e,xmax:i,ymax:r}=n;return`${t},${e},${i},${r}`}function ae(n){if(n==null)return null;const{start:t,end:e}=n;return`${t!=null?t.toISOString():".."}/${e!=null?e.toISOString():".."}`}function re(n){return n!=null&&n&&n!=="1=1"?n:null}function se(n,t){if(!ie(n))return null;const{spatialReference:e}=n;if(!e||e.isWGS84)return{bbox:O(n)};const i=R(e,t);return i!=null?{bbox:O(n),"bbox-crs":i}:e.isWebMercator?{bbox:O(C(n,F.WGS84))}:null}function oe(n){var s;const t=(s=n.extent)==null?void 0:s.spatial;if(!t)return null;const e=t.bbox[0],i=e.length===4,r=e[0],l=e[1],u=i?void 0:e[2];return{xmin:r,ymin:l,xmax:i?e[2]:e[3],ymax:i?e[3]:e[4],zmin:u,zmax:i?void 0:e[5],spatialReference:F.WGS84.toJSON()}}function f(n,t,e){return n.find(i=>i.rel===t&&i.type===e)||n.find(i=>i.rel===t&&!i.type)}export{ge as F,ye as I,te as S,we as T,fe as b,me as h,pe as j,be as k,G as w,he as x};
