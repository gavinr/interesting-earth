import{a8 as m,nT as g,nU as w,nV as _,nW as f,nX as S,er as T,r as p,K as $,mm as x,br as c,nY as I,bj as d,a4 as h,e as s,d as o,cW as b,nZ as D,n_ as E,n as V,B as L}from"./index.a8738f47.js";import{s as O}from"./ArcGISCachedService.110871f6.js";import"./TilemapCache.4ff90c07.js";const u=m.getLogger("esri.layers.ElevationLayer");let a=class extends O(g(w(_(f(L))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=S()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=T(this._lercDecoder)}set minScale(e){this.constructed&&u.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&u.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new $("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(x).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const n=p((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,y={responseType:"array-buffer",signal:n},v={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>c(this.getTileUrl(e,r,t),y)).then(l=>this._lercDecoder.decode(l.data,v,n)).then(l=>({values:l.pixelData,width:l.width,height:l.height,maxZError:l.fileInfo.maxZError,noDataValue:l.noDataValue,minValue:l.minValue,maxValue:l.maxValue}))}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,n=I({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${n?"?"+n:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery.733ec039.js"),["ElevationQuery.733ec039.js","index.a8738f47.js","index.7b18f6ca.css"],import.meta.url);return h(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery.733ec039.js"),["ElevationQuery.733ec039.js","index.a8738f47.js","index.7b18f6ca.css"],import.meta.url);return h(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await c(this.parsedUrl.path,r);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([o({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),s([o({readOnly:!0,type:D})],a.prototype,"heightModelInfo",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([o({type:["show","hide"]})],a.prototype,"listMode",void 0),s([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"minScale",null),s([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"maxScale",null),s([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),s([o({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([o()],a.prototype,"sourceJSON",void 0),s([o({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),s([o(E)],a.prototype,"url",void 0),s([o()],a.prototype,"version",void 0),s([b("version",["currentVersion"])],a.prototype,"readVersion",null),a=s([V("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const C=a;export{C as default};