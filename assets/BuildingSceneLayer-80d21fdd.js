import{ai as t,aj as i,al as n,c8 as d,c9 as y,au as j,d3 as G,p9 as Q,dg as Y,gq as Z,c_ as ee,b3 as b,bB as te,b5 as re,aq as q,dh as ie,cn as se,fa as oe,ce as P,a_ as le,ba as ne}from"./index-4b03b1b0.js";import{O as ae}from"./MultiOriginJSONSupport-d720758b.js";import{C as V}from"./BuildingComponentSublayer-109daa01.js";import{d as c}from"./BuildingGroupSublayer-2d82894a.js";import{i as pe}from"./APIKeyMixin-be880531.js";import{l as ye}from"./ArcGISService-163e63f0.js";import{c as ue}from"./OperationalLayer-5b164959.js";import{j as de}from"./PortalLayer-473e8b12.js";import{t as ce}from"./ScaleRangeLayer-31eefac8.js";import{N as me,K}from"./SceneService-e31aeab8.js";import{j as he,c as fe,y as ge,d as ve}from"./commonProperties-1e64caff.js";import{i as be}from"./FetchAssociatedFeatureLayer-f8f934b6.js";import"./UniqueValueRenderer-ad13318a.js";import"./ColorStop-0686847d.js";import"./diffUtils-3c37f4e6.js";import"./colorRamps-54548a9c.js";import"./jsonUtils-dc7d3627.js";import"./DictionaryLoader-b0bde137.js";import"./FieldsIndex-06c42f48.js";import"./heatmapUtils-fe1f2bfa.js";import"./FeatureLayer-7c5e0432.js";import"./sql-a39124b8.js";import"./FeatureLayerBase-43dae5ea.js";import"./featureLayerUtils-ce39121a.js";import"./AttachmentQuery-dd62ce87.js";import"./Query-cdee9722.js";import"./RelationshipQuery-ab8c76dd.js";import"./serviceCapabilitiesUtils-8d66cffa.js";import"./queryZScale-2a8227ea.js";import"./FeatureSet-d4d9321c.js";import"./BlendLayer-08a76f1b.js";import"./jsonUtils-555359b4.js";import"./CustomParametersMixin-64be6818.js";import"./FeatureEffectLayer-142ba535.js";import"./FeatureEffect-82bb4002.js";import"./FeatureFilter-e71c77dc.js";import"./FeatureReductionLayer-b84a7e30.js";import"./LabelClass-3b8bddeb.js";import"./defaults-d003668a.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-908cb5be.js";import"./TemporalLayer-5e4b9999.js";import"./FeatureTemplate-0db006f4.js";import"./FeatureType-e95921de.js";import"./fieldProperties-ff8bee5a.js";import"./labelingInfo-66d1a5d0.js";import"./versionUtils-9472ade8.js";import"./styleUtils-5fb07ac6.js";import"./TopFeaturesQuery-da745a52.js";import"./popupUtils-8d4c7bed.js";import"./capabilities-5d185925.js";import"./I3SIndexInfo-27be0331.js";import"./I3SLayerDefinitions-3ba92081.js";import"./ElevationInfo-f714f054.js";import"./I3SUtil-8ed72294.js";import"./I3SBinaryReader-2204e87b.js";import"./popupUtils-81d67c22.js";import"./portalItemUtils-89a0d48a.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-3b75c8f2.js";let S=class extends d{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),S=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],S);const z=S;var F;let h=F=class extends d{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new F({filterType:this.filterType,filterValues:y(this.filterValues)})}};t([i({type:String,json:{write:!0}})],h.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],h.prototype,"filterValues",void 0),h=F=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],h);const Se=h;var T;const we=j.ofType(Se);let w=T=class extends d{clone(){return new T({filterTypes:y(this.filterTypes)})}};t([i({type:we,json:{write:!0}})],w.prototype,"filterTypes",void 0),w=T=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],w);const $e=w;var _;const xe=j.ofType($e);let f=_=class extends z{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:y(this.filterBlocks)})}};t([i({type:["checkbox"]})],f.prototype,"type",void 0),t([i({type:xe,json:{write:!0}})],f.prototype,"filterBlocks",void 0),f=_=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],f);const C=f;let $=class extends d{};t([i({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=t([n("esri.layers.support.BuildingFilterMode")],$);const B=$;var A;let x=A=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=A=t([n("esri.layers.support.BuildingFilterModeSolid")],x);const E=x;var k;let g=k=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:y(this.edges)})}};t([G({wireFrame:"wire-frame"})],g.prototype,"type",void 0),t([i(Q)],g.prototype,"edges",void 0),g=k=t([n("esri.layers.support.BuildingFilterModeWireFrame")],g);const J=g;var L;let O=L=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new L}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],O.prototype,"type",void 0),O=L=t([n("esri.layers.support.BuildingFilterModeXRay")],O);const U=O;var N;const Oe={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:E,"wire-frame":J,"x-ray":U}},json:{read:e=>{switch(e&&e.type){case"solid":return E.fromJSON(e);case"wireFrame":return J.fromJSON(e);case"x-ray":return U.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let m=N=class extends d{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new E,this.title=""}clone(){return new N({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterExpression",void 0),t([i(Oe)],m.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"title",void 0),m=N=t([n("esri.layers.support.BuildingFilterBlock")],m);const je=m;var R;const Be=j.ofType(je);let u=R=class extends d{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Y(),this.name=null}clone(){return new R({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],u.prototype,"description",void 0),t([i({type:Be,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:z,typeMap:{checkbox:C}},json:{read:e=>(e&&e.type)==="checkbox"?C.fromJSON(e):null,write:!0}})],u.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"name",void 0),u=R=t([n("esri.layers.support.BuildingFilter")],u);const Ie=u;let p=class extends d{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],p.prototype,"fieldName",void 0),t([i({type:String})],p.prototype,"modelName",void 0),t([i({type:String})],p.prototype,"label",void 0),t([i({type:Number})],p.prototype,"min",void 0),t([i({type:Number})],p.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],p.prototype,"subLayerIds",void 0),p=t([n("esri.layers.support.BuildingFieldStatistics")],p);let v=class extends Z.LoadableMixin(ee(d)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(b.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],v.prototype,"url",void 0),t([i({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],v.prototype,"fields",null),v=t([n("esri.layers.support.BuildingSummaryStatistics")],v);const W=v,X=j.ofType(Ie),D=y(c.sublayersProperty);var H;const I=(H=D.json)==null?void 0:H.origins;I&&(I["web-scene"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},I["portal-item"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let o=class extends me(ye(ue(de(ce(ae(pe(ne))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new re({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new X,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const l=c.readSublayers(e,r,s);return c.forEachSublayer(l,a=>a.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:s}){c.forEachSublayer(e,l=>l.read(r.get(l.id),s))}readSublayerOverrides(e,r){var l;const s=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?s.set(a.id,a):(l=r.messages)==null||l.push(new q("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const l=[];c.forEachSublayer(this.sublayers,a=>{const M=a.write({},s);Object.keys(M).length>1&&l.push(M)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(y(s))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const l=ie((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new W({url:l})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(se).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return oe(this,e=>{c.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(K.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new q("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&b.getLogger(this).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&b.getLogger(this).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new be(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(s){b.getLogger(this).warn("Associated feature service item could not be loaded",s)}}};t([i({type:["BuildingSceneLayer"]})],o.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],o.prototype,"allSublayers",void 0),t([i(D)],o.prototype,"sublayers",void 0),t([P("service","sublayers")],o.prototype,"readSublayers",null),t([i({type:X,nonNullable:!0,json:{write:!0}})],o.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],o.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:W})],o.prototype,"summaryStatistics",void 0),t([P("summaryStatistics",["statisticsHRef"])],o.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],o.prototype,"outFields",void 0),t([i(he)],o.prototype,"fullExtent",void 0),t([i(fe)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),t([i(ge(le))],o.prototype,"spatialReference",void 0),t([i(ve)],o.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i()],o.prototype,"associatedFeatureServiceItem",void 0),o=t([n("esri.layers.BuildingSceneLayer")],o);const Rt=o;export{Rt as default};