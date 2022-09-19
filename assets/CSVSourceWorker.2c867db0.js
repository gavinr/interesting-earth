import{mr as $,K as h,hh as S,w as q,a8 as C,mk as D,br as O,ms as k,fn as v,fI as j,fF as P,fJ as V,d2 as R,a0 as G,$ as Q,fR as L,mt as M,c$ as Y}from"./index.a8738f47.js";import{t as A}from"./json.d1a0fa35.js";import{u as U}from"./FeatureStore.b55521bf.js";import{f as J}from"./QueryEngineResult.3d7a8c8d.js";import{Y as Z}from"./QueryEngine.dd064fa9.js";import{a as B,u as W}from"./clientSideDefaults.41204392.js";import"./PooledRBush.dcfb0021.js";import"./quickselect.03306040.js";import"./optimizedFeatureQueryEngineAdapter.c129ff5f.js";import"./centroid.88cb65db.js";import"./WhereClause.d715e7d1.js";import"./utils.bf6b5607.js";import"./ClassBreaksDefinition.d9c6c51f.js";import"./QueryEngineCapabilities.c2e9875c.js";const z=/^\s*"([\S\s]*)"\s*$/,K=/""/g,N=`
`,H=[","," ",";","|","	"];function*w(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),s=r.substring(i,n>-1?n:void 0);i+=s.length+t.length,e&&!s.trim()||(yield s)}}function b(r){const t=r.includes(`\r
`)?`\r
`:N;return w(r,t,!0)}function X(r,t){return w(r,t,!1)}function ee(r){const t=r.trim();let e=0,i="";for(const n of H){const s=t.split(n).length;s>e&&(e=s,i=n)}return i===""?null:i}function*x(r,t,e,i=()=>Object.create(null)){let n="",s="",d=0,a=i(),f=0;e:for(const o of r){const u=X(o,e);for(const c of u)if(n+=s+c,s="",d+=te(c),d%2==0){if(d>0){const y=z.exec(n);if(!y){a=i(),f=0,n="",d=0;continue e}a[t[f]]=y[1].replace(K,'"'),f++}else a[t[f]]=n,f++;n="",d=0}else s=e;d===0?(yield a,a=i(),f=0):s=N}}function te(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function ie(r){const t=r.map(e=>e.toLowerCase());return{longitudeFieldName:r[t.indexOf(le.find(e=>t.includes(e)))],latitudeFieldName:r[t.indexOf(oe.find(e=>t.includes(e)))]}}function ne(r,t,e,i){const n=[],s=x(r,e,t),d=[];for(const a of s){if(d.length===10)break;d.push(a)}for(const a of e)if(a===i.longitudeFieldName||a===i.latitudeFieldName)n.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const f=re(d.map(u=>u[a])),o={name:a,type:null,alias:a};switch(f){case"integer":o.type="esriFieldTypeInteger";break;case"double":o.type="esriFieldTypeDouble";break;case"date":o.type="esriFieldTypeDate",o.length=36;break;default:o.type="esriFieldTypeString",o.length=255}n.push(o)}return n}function re(r){if(!r.length)return"string";const t=/[^+-.,0-9]/;return r.map(e=>{let i=!1;if(e!==""){if(t.test(e))i=!0;else{let n=_(e);if(!isNaN(n))return/[.,]/.test(e)||!Number.isInteger(n)||n>214783647||n<-214783648?"double":"integer";if(e.includes("E")){if(n=Number(e),!isNaN(n))return"double";if(e.includes(",")){if(e=e.replace(",","."),n=Number(e),!isNaN(n))return"double";i=!0}else i=!0}else i=!0}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":T(new Date(e),e)?"date":"string":"string"}}).reduce((e,i)=>e===void 0||e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}function T(r,t){if(!r||Object.prototype.toString.call(r)!=="[object Date]"||isNaN(r.getTime()))return!1;let e=!0;if(!ae&&/\d+\W*$/.test(t)){const i=t.match(/[a-zA-Z]{2,}/);if(i){let n=!1,s=0;for(;!n&&s<=i.length;)n=!se.test(i[s]),s++;e=!n}}return e}const _=function(){const r=$(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const s=t.exec(n);if(r.factor=i,!s)return NaN;let d=s[1];if(!s[1]){if(!s[2])return NaN;d=s[2],r.factor*=-1}return d=d.replace(e,"").replace(r.decimal,"."),+d*r.factor}}(),se=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,ae=Number.isNaN(new Date("technology 10").getTime()),oe=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],le=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],ue=W("esriGeometryPoint"),de=["csv"],ce=[0,0];class fe{constructor(t,e){this.x=t,this.y=e}}class Se{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var d;this.loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((d=t==null?void 0:t.parsingOptions)==null?void 0:d.spatialReference)]),n=me(i,t);this.locationInfo=n.locationInfo,this.delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const s=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(s),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:a,end:f}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[a,f]}return n}async applyEdits(){throw new h("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this.loadOptions.customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=S(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),q(i)||C.getLogger("esri.layers.CSVLayer").error(new h("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this.loadOptions;if(!e)throw new h("csv-layer:invalid-source","url not defined");const n=D(e);return(await O(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:s}=t.layerDefinition,d=new U({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new Z({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:d})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this.locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:d}=this._queryEngine;let a=[];const f=[],o=s.fields.filter(l=>l.name!==n).map(l=>l.name);let u=0;const c=b(t);c.next();const y={};for(const l of s.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=k(l);p!==void 0&&(y[l.name]=p)}const E=x(c,o,this.delimiter,B(y,n));for(const l of E){const p=this._parseCoordinateValue(l[e]),g=this._parseCoordinateValue(l[i]);if(g!=null&&p!=null&&!isNaN(p)&&!isNaN(g)){l[e]=p,l[i]=g;for(const m in l)if(m!==e&&m!==i){if(s.isDateField(m)){const F=new Date(l[m]);l[m]=T(F,l[m])?F.getTime():null}else if(s.isNumericField(m)){const F=_(l[m]);isNaN(F)?l[m]=null:l[m]=F}}l[n]=u,u++,a.push(new fe(g,p)),f.push(l)}}if(!v({wkid:4326},d))if(j(d))for(const l of a)[l.x,l.y]=P(l.x,l.y,ce);else a=V(A,a,R.WGS84,d,null,null);const I=[];for(let l=0;l<a.length;l++){const{x:p,y:g}=a[l],m=f[l];m[n]=l+1,I.push(new G(new Q([],[p,g]),m,null,m[n]))}return I}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=_(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await J(L,t)}catch{throw new h("csv-layer:projection-not-supported","Projection not supported")}}}function me(r,t){const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=b(r);let s=n.next().value;if(!s)throw new h("csv-layer:empty-csv","CSV is empty",{csv:r});if(s=s.trim(),!e.delimiter){const o=ee(s);if(!o)throw new h("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=o}const d=s.split(i.delimiter).filter(o=>!!o),a=i.layerDefinition={name:M(t.url,de)||"csv",drawingInfo:ue,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:102100}}};if(!e.latitudeField||!e.longitudeField){const o=ie(d);if(!e.longitudeField&&!o.longitudeFieldName||!e.latitudeField&&!o.latitudeFieldName)throw new h("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:e.longitudeField||o.longitudeFieldName,latitudeFieldName:e.latitudeField||o.latitudeFieldName}}const f=ne(n,i.delimiter,d,i.locationInfo);if(e.fields&&e.fields.length){const o=new Map;for(const u of e.fields)o.set(u.name.toLowerCase(),u);for(const u of f){const c=o.get(u.name.toLowerCase());if(c){const y=u.name;Object.assign(u,c),u.name=y}}}if(a.fields=f,!a.fields.some(o=>o.type==="esriFieldTypeOID"&&(a.objectIdField=o.name,!0))){const o={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=o.name,a.fields.unshift(o)}if(a.timeInfo){const o=new Y(a.fields),u=a.timeInfo;if(u.startTimeField){const c=o.get(u.startTimeField);c?(u.startTimeField=c.name,c.type="esriFieldTypeDate"):u.startTimeField=null}if(u.endTimeField){const c=o.get(u.endTimeField);c?(u.endTimeField=c.name,c.type="esriFieldTypeDate"):u.endTimeField=null}if(u.trackIdField){const c=o.get(u.trackIdField);u.trackIdField=c?c.name:null}u.startTimeField||u.endTimeField||(a.timeInfo=null)}return i}export{Se as default};
