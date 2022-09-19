import{e as n,i as b,k as f,p as m,r as o,q as C,w as V,x as c,U as w,f as h,z as v,A as S,B as x,C as E,D as p,E as G,g as u,F as O,t as d,G as A,d as a,n as j,H as _,I as P,J as R}from"./index.a8738f47.js";import{b as I,j as $}from"./Graphics3DScaleVisibility.8fa6127f.js";import{l as H,d as D,s as q}from"./Graphics3DObjectStates.2d298d9b.js";let r=class extends b{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.elevationAlignment=new H,this.drapeSourceType=f.Features,this._suspendResumeExtent=null}normalizeCtorArgs(e){const t={...e,scaleVisibility:null,frustumVisibility:null};return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new I),e.frustumVisibilityEnabled&&(t.frustumVisibility=new D),t}initialize(){const e=new $({owner:this,layer:this.owner.layer,preferredUpdatePolicy:m.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",e);const{layer:t,scaleVisibility:s}=this;if(o(s)&&"effectiveScaleRange"in t){const i=t;this.updatingHandles.add(()=>i.effectiveScaleRange,()=>s.layerMinMaxScaleChangeHandler())}if("fullOpacity"in this.owner){const i=this.owner;this.updatingHandles.add(()=>i.fullOpacity,()=>this.graphicsCore.opacityChange())}if("elevationInfo"in t){const i=t;this.updatingHandles.add(()=>i.elevationInfo,(l,g)=>{C(l,g)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})}}async setup(){const e=(t,s,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,s,i);if(this.elevationAlignment.setup(this,e,this.graphicsCore,this.view.elevationProvider),o(this.scaleVisibility)&&"effectiveScaleRange"in this.layer){const t=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this,this.layer,e,this.graphicsCore,t)}o(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new q(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(V(t))return;throw t}this.destroyed||(this.handles.add(c(()=>this.view.clippingArea,()=>this._updateClippingExtent(),w)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",h(this.elevationAlignment)),this._set("scaleVisibility",h(this.scaleVisibility)),this._set("frustumVisibility",h(this.frustumVisibility)),this._set("objectStates",h(this.objectStates)),this._set("graphicsCore",h(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibilitySuspended(){return!(!o(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return!(!o(this.frustumVisibility)||!this.frustumVisibility.suspended)}get suspended(){var e;return(e=this.owner.suspended)!=null?e:!1}get updating(){var e;return!!(((e=this.graphicsCore)==null?void 0:e.updating)||o(this.scaleVisibility)&&this.scaleVisibility.updating||o(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return(e=this.owner.fullOpacity)!=null?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,s){const i=v(e,{renderer:t,arcade:s});if(o(i)&&i.color){const l=i.color;l[0]=l[0]/255,l[1]=l[1]/255,l[2]=l[2]/255}return i}getRenderingInfoAsync(e,t,s,i){return S(e,{renderer:t,arcade:s,...i})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find(s=>s.uid===e);if(t){const s=this.layer instanceof x?this.layer:null,i=E(t,s);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:s}=this.objectStates.acquireSet(p.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),s}highlight(e){if(e instanceof G)return y;if(typeof e=="number")return this.highlight([e]);if(e instanceof u)return this.highlight([e]);if(e instanceof O&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof u){const t=e.map(l=>l.uid),{set:s,handle:i}=this.objectStates.acquireSet(p.Highlight,null);return this.objectStates.setUids(s,t),i}if(typeof e[0]=="number"){const t=e,{set:s,handle:i}=this.objectStates.acquireSet(p.Highlight,null);return this.objectStates.setObjectIds(s,t),i}}return y}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(d(e)&&d(t))return;const s=({computedExtent:i,extentPadding:l})=>{this._suspendResumeExtent=P(i,this._suspendResumeExtent,R,l),o(e)&&e.setExtent(this._suspendResumeExtent),o(t)&&t.setExtent(this._suspendResumeExtent)};this.handles.add(c(()=>{var i,l;return{computedExtent:(i=this.graphicsCore)==null?void 0:i.computedExtent,extentPadding:(l=this.graphicsCore)==null?void 0:l.extentPadding}},i=>s(i),A))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};n([a()],r.prototype,"type",void 0),n([a({constructOnly:!0})],r.prototype,"owner",void 0),n([a()],r.prototype,"layer",null),n([a()],r.prototype,"view",null),n([a({constructOnly:!0})],r.prototype,"graphicsCore",void 0),n([a({constructOnly:!0})],r.prototype,"scaleVisibility",void 0),n([a({constructOnly:!0})],r.prototype,"frustumVisibility",void 0),n([a({readOnly:!0})],r.prototype,"elevationAlignment",void 0),n([a({readOnly:!0})],r.prototype,"objectStates",void 0),n([a({readOnly:!0})],r.prototype,"scaleVisibilitySuspended",null),n([a({readOnly:!0})],r.prototype,"frustumVisibilitySuspended",null),n([a()],r.prototype,"suspended",null),n([a({readOnly:!0})],r.prototype,"updating",null),n([a()],r.prototype,"loadedGraphics",null),n([a()],r.prototype,"fullOpacity",null),n([a()],r.prototype,"slicePlaneEnabled",null),n([a()],r.prototype,"drapeSourceType",void 0),n([a()],r.prototype,"updatePolicy",null),r=n([j("esri.views.3d.layers.graphics.GraphicsProcessor")],r);const y=_();export{r as _};