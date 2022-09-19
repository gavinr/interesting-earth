import{x as d,G as V,r as a,K as h,hh as _,f as c,hi as p,t as f,bT as u,bj as A,e as t,d as l,n as v}from"./index.a8738f47.js";import{n as m}from"./LayerView3D.8dc7c2ab.js";import{u as T}from"./LayerView.bc32b3eb.js";const w="analysis-view-handles";let i=class extends m(T){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModules={"line-of-sight":null}}initialize(){this.handles.add(d(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),a(s)&&this._createAnalysisView(s)},V),w)}destroy(){this.handles.remove(w),this._destroyAnalysisView()}async whenAnalysisView(){if(a(this.analysisView))return this.analysisView;if(a(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new h("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return a(this._createAnalysisViewTask)||a(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=_(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=c(this.analysisView),this._createAnalysisViewTask=p(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){const e=s.type;let r=this._analysisModules[e];if(f(r)){const o=await this._loadAnalysisModule(e);this._analysisModules[e]=o,r=o}const y=new r.default({analysis:s,view:this.view,parent:this});if(await y.when(),u(n))throw y.destroy(),new h("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return y}_loadAnalysisModule(s){return s==="line-of-sight"?A(()=>import("./LineOfSightAnalysisView3D.1d0d9828.js"),["LineOfSightAnalysisView3D.1d0d9828.js","index.a8738f47.js","index.7b18f6ca.css","LineVisualElement.c8ac394d.js","LineOfSightAnalysisTarget.091ad9e1.js","persistable.6d7b5a7d.js","multiOriginJSONSupportUtils.8128aa52.js","elevationInfoUtils.fe889101.js","projectionUtils.eb41893b.js","analysisViewUtils.1368068e.js","PointVisualElement.1a1f0dbc.js"],import.meta.url):null}};t([l()],i.prototype,"type",void 0),t([l()],i.prototype,"layer",void 0),t([l()],i.prototype,"analysisView",void 0),t([l()],i.prototype,"_createAnalysisViewTask",void 0),i=t([v("esri.views.3d.layers.LineOfSightLayerView3D")],i);const M=i;export{M as default};