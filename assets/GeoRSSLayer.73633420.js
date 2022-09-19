import{qS as p,qU as u,nU as d,nV as c,qT as h,nW as m,mt as S,r as v,mm as f,br as g,r9 as b,py as C,e as o,d as s,cW as G,am as _,q_ as w,ra as x,n_ as P,n as R,f$ as n,rb as k,rc as F,rd as $,S as j,B as E}from"./index.a8738f47.js";const M=["atom","xml"],q={base:n,key:"type",typeMap:{"simple-line":k},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"picture-marker":F,"simple-marker":$},errorContext:"symbol"},T={base:n,key:"type",typeMap:{"simple-fill":j},errorContext:"symbol"};let t=class extends p(u(d(c(h(m(E)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(l=>{var a;const i=l.layerDefinition.drawingInfo.renderer.symbol;i&&i.type==="esriSFS"&&((a=i.outline)==null?void 0:a.style.includes("esriSFS"))&&(i.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?S(this.url,M)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=v(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(f).then(()=>this._fetchService(r)).then(l=>{this.read(l,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var i;const r=this.spatialReference,{data:l}=await g(C.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:b(r)?void 0:(i=r.wkid)!=null?i:JSON.stringify(r)},signal:e});return l}_hasGeometry(e){var r,l;return(l=(r=this.featureCollections)==null?void 0:r.some(i=>{var a,y;return((a=i.featureSet)==null?void 0:a.geometryType)===e&&((y=i.featureSet.features)==null?void 0:y.length)>0}))!=null?l:!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([G("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:_,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(w)],t.prototype,"id",void 0),o([s(x)],t.prototype,"legendEnabled",void 0),o([s({types:q,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:T,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(P)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([R("esri.layers.GeoRSSLayer")],t);const O=t;export{O as default};