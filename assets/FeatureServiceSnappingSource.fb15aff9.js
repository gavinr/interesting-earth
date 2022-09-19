import{m4 as R,qN as x,qO as N,aK as M,ej as U,e as i,d as r,n as y,y as H,r as h,b8 as j,t as k,x as S,U as F,i as _,h as O,qP as D,u as J,H as V,v as A,gp as q,f1 as L,h9 as Q,dh as W,ee as G,m_ as B,aO as K,qQ as X,bF as Y,hu as P,qR as Z}from"./index.a8738f47.js";import{o as ee}from"./queryEngineUtils.974386a1.js";import{b as te}from"./TileTreeDebugger.89d4994d.js";import"./DimensioningAnalysisView3D.87b57003.js";import"./LineVisualElement.c8ac394d.js";import"./analysisViewUtils.1368068e.js";import"./PointVisualElement.1a1f0dbc.js";import"./RightAngleQuadVisualElement.93093297.js";import"./Segment.00e10e0b.js";import"./elevationInfoUtils.fe889101.js";import"./dragEventPipeline3D.dd7775a3.js";import"./EditGeometryOperations.17db3234.js";import"./QueryEngineResult.3d7a8c8d.js";import"./WhereClause.d715e7d1.js";import"./utils.bf6b5607.js";import"./ClassBreaksDefinition.d9c6c51f.js";import"./json.d1a0fa35.js";import"./dehydratedFeatureComparison.47577290.js";function m(e,t){return x(t.extent,C),N(C,M(ie,e.x,e.y,0))}const C=R(),ie=U();let o=class extends H{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=h(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort((s,a)=>m(t,s)-m(t,a)),e}_scaleEnabled(){return j(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||k(this.tileInfo))return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:s}=t,a=[];for(const{row:n,colFrom:c,colTo:g}of e)for(let u=c;u<=g;u++){const v={id:null,level:s,row:n,col:t.normalizeCol(u)};this.tileInfo.updateTileInfo(v),a.push(v)}return a}get tileInfo(){var e,t;return(t=(e=this.view.featuresTilingScheme)==null?void 0:e.tileInfo)!=null?t:null}get tileSize(){return h(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.own(S(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.state)==null?void 0:t.viewpoint},()=>this.notifyChange("tilesCoveringView"),F))}};i([r({readOnly:!0})],o.prototype,"tiles",null),i([r({readOnly:!0})],o.prototype,"_scaleEnabled",null),i([r({readOnly:!0})],o.prototype,"tilesCoveringView",null),i([r({readOnly:!0})],o.prototype,"tileInfo",null),i([r({readOnly:!0})],o.prototype,"tileSize",null),i([r({constructOnly:!0})],o.prototype,"view",void 0),i([r({constructOnly:!0})],o.prototype,"layer",void 0),i([r()],o.prototype,"pointOfInterest",void 0),o=i([y("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],o);let d=class extends _{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this.effectivePointOfInterest;if(h(t)){const s=e.map(a=>m(t,a));for(let a=1;a<s.length;a++)if(s[a-1]>s[a])return e.sort((n,c)=>m(t,n)-m(t,c)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(re)}get tileInfo(){var e,t;return(t=(e=this.view.featureTiles)==null?void 0:e.tilingScheme.toTileInfo())!=null?t:null}get tileSize(){var e,t;return(t=(e=this.view.featureTiles)==null?void 0:e.tileSize)!=null?t:256}get effectivePointOfInterest(){var t;const e=this.pointOfInterest;return h(e)?e:(t=this.view.pointsOfInterest)==null?void 0:t.focus.location}initialize(){this.handles.add(S(()=>this.view.featureTiles,e=>{this.handles.remove(E),e&&this.handles.add(e.addClient(),E)},O))}_filterTiles(e){return k(e)?[]:e.filter(t=>Math.abs(t.measures.screenRect[3]-t.measures.screenRect[1])>ne&&t.measures.visibility===D.VISIBLE_ON_SURFACE)}};function re({lij:[e,t,s],extent:a}){return{id:`${e}/${t}/${s}`,level:e,row:t,col:s,extent:a}}i([r({readOnly:!0})],d.prototype,"tiles",null),i([r({readOnly:!0})],d.prototype,"tilesCoveringView",null),i([r({readOnly:!0})],d.prototype,"tileInfo",null),i([r({readOnly:!0})],d.prototype,"tileSize",null),i([r({constructOnly:!0})],d.prototype,"view",void 0),i([r()],d.prototype,"pointOfInterest",void 0),i([r()],d.prototype,"effectivePointOfInterest",null),d=i([y("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],d);const ne=50,E="feature-tiles";let I=class extends te{constructor(e){super(e),this.handles=new J}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.handles.add(V(()=>clearInterval(e)))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach(n=>{e.set(n.data.id,n.featureCount)}),this.debugInfo.pendingTiles.forEach(n=>{e.set(n.data.id,n.featureCount),t.set(n.data.id,n.state)});const s=n=>{var u;const c=t.get(n),g=(u=e.get(n))!=null?u:"?";return c?`${c}:${g}
${n}`:`store:${g}
${n}`},a=new Map;return this.debugInfo.storedTiles.forEach(n=>{a.set(n.data.id,n.data)}),this.debugInfo.pendingTiles.forEach(n=>{a.set(n.data.id,n.data)}),Array.from(a.values()).map(n=>({lij:[n.level,n.row,n.col],geometry:A.fromExtent(q(n.extent,this.view.spatialReference)),label:s(n.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this.debugInfo=e,this.update()})}};i([r({constructOnly:!0})],I.prototype,"handle",void 0),I=i([y("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],I);let p=class extends _{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new se(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",({updating:e})=>this.workerHandleUpdating=e),this.workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const s=this._serviceInfoFromLayer(e.layer);if(k(s))return;const a={configuration:this._convertConfiguration(e.configuration),serviceInfo:s,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",a,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const s=this._convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const s={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:h(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(s,t)}async updateTiles(e,t){const s={tiles:e.tiles,tileInfo:h(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var g,u,v,b,T,$;const s=this.editId++,a={id:s};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",a,t));const n=await this.updatingHandles.addPromise(L(e.result,t)),c={id:s,edits:{addedFeatures:(u=(g=n.addedFeatures)==null?void 0:g.map(({objectId:w})=>w))!=null?u:[],deletedFeatures:(b=(v=n.deletedFeatures)==null?void 0:v.map(({objectId:w,globalId:z})=>({objectId:w,globalId:z})))!=null?b:[],updatedFeatures:($=(T=n.updatedFeatures)==null?void 0:T.map(({objectId:w})=>w))!=null?$:[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",c,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}_convertConfiguration(e){return{filter:h(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}_serviceInfoFromLayer(e){var t;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:e.parsedUrl.path,fields:e.fields.map(s=>s.toJSON()),geometryType:Q.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(t=e.timeInfo)==null?void 0:t.toJSON()}}};i([r({constructOnly:!0})],p.prototype,"schedule",void 0),i([r({readOnly:!0})],p.prototype,"updating",null),i([r({readOnly:!0})],p.prototype,"availability",void 0),i([r()],p.prototype,"workerHandleUpdating",void 0),p=i([y("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],p);class se extends W{constructor(t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated"})}}let f=class extends H{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:G(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new B({origin:new K({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new X({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};i([r({readOnly:!0})],f.prototype,"tiles",null),i([r({readOnly:!0})],f.prototype,"tileInfo",null),i([r({readOnly:!0})],f.prototype,"tileSize",null),i([r({constructOnly:!0})],f.prototype,"layer",void 0),i([r()],f.prototype,"pointOfInterest",void 0),f=i([y("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],f);let l=class extends Y(H){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(h(e))switch(e.type){case"2d":this.tilesOfInterest=new o({view:e,layer:this.layer}),this.workerHandle=new p;break;case"3d":{const t=e.resourceController;this.tilesOfInterest=new d({view:e}),this.workerHandle=new p({schedule:s=>t.schedule(s)});break}}else this.tilesOfInterest=new f({layer:this.layer}),this.workerHandle=new p;this.handles.add([P(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(()=>this.updateTilesParameters,()=>this.workerHandle.updateTiles(this.updateTilesParameters,null),O),this.handles.add([S(()=>this.configuration,t=>this.workerHandle.configure(t,null),F)]),h(e)&&this.handles.add(S(()=>Z.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,t=>{t&&!this.debug?(this.debug=new I({view:e,handle:this.workerHandle}),this.handles.add(P(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")},O)),this.handles.add(this.layerSource.layer.on("apply-edits",t=>{this.workerHandle.applyEdits(t,null)}))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},t)).candidates.map(s=>ee(s,e.coordinateHelper,e.elevationInfo))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};i([r({constructOnly:!0})],l.prototype,"spatialReference",void 0),i([r({constructOnly:!0})],l.prototype,"layerSource",void 0),i([r({constructOnly:!0})],l.prototype,"view",void 0),i([r()],l.prototype,"tilesOfInterest",void 0),i([r({readOnly:!0})],l.prototype,"updateTilesParameters",null),i([r({readOnly:!0})],l.prototype,"updating",null),i([r({readOnly:!0})],l.prototype,"configuration",null),i([r({readOnly:!0})],l.prototype,"availability",null),l=i([y("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],l);export{l as FeatureServiceSnappingSource};