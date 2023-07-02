import{ai as i,aj as s,ce as $,c6 as V,al as L,c8 as K,cA as X,cx as Y,cZ as N,am as ee,c9 as S,cN as te,b3 as re,hb as ie,aq as m,c$ as k,cD as se,gq as ne,f5 as oe,au as _,av as ae,aw as le,cn as pe,dW as ue,dh as de,jm as ye,e$ as ce,aF as he,fa as me,hc as fe,db as P,ba as be}from"./index-4b03b1b0.js";import{O as M}from"./MultiOriginJSONSupport-d720758b.js";import{n as x}from"./sql-a39124b8.js";import{i as ge}from"./APIKeyMixin-be880531.js";import{l as ve}from"./ArcGISService-163e63f0.js";import{a as we}from"./BlendLayer-08a76f1b.js";import{o as Fe}from"./CustomParametersMixin-64be6818.js";import{y as Se,w as $e,c as Ie}from"./FeatureLayerBase-43dae5ea.js";import{c as Oe}from"./OperationalLayer-5b164959.js";import{j as je}from"./PortalLayer-473e8b12.js";import{t as Ee}from"./ScaleRangeLayer-31eefac8.js";import{a as Te,d as Ce}from"./TemporalLayer-5e4b9999.js";import{m as _e,c as Le,I as xe,D as Ae,p as Pe,v as qe}from"./commonProperties-1e64caff.js";import{E as U,M as De,Q as Ge,y as Re,m as Ve,h as Ne,b as ke,g as Me,j as Ue,q as Qe,F as He,I as Be,P as Je,A as Ze,O as ze}from"./featureLayerUtils-ce39121a.js";import{s as Q}from"./fieldProperties-ff8bee5a.js";import{p as We,A as Ke,w as Xe}from"./UniqueValueRenderer-ad13318a.js";import{p as A}from"./jsonUtils-dc7d3627.js";import{p as H}from"./FeatureTemplate-0db006f4.js";import{C as Ye}from"./LabelClass-3b8bddeb.js";import{i as et}from"./labelingInfo-66d1a5d0.js";import{b as B}from"./Query-cdee9722.js";import{p as tt}from"./popupUtils-8d4c7bed.js";import{c as rt,u as it,S as st}from"./defaults-d003668a.js";import{e as nt}from"./versionUtils-9472ade8.js";import"./jsonUtils-555359b4.js";import"./serviceCapabilitiesUtils-8d66cffa.js";import"./portalItemUtils-89a0d48a.js";import"./ElevationInfo-f714f054.js";import"./AttachmentQuery-dd62ce87.js";import"./RelationshipQuery-ab8c76dd.js";import"./FieldsIndex-06c42f48.js";import"./ColorStop-0686847d.js";import"./diffUtils-3c37f4e6.js";import"./colorRamps-54548a9c.js";import"./DictionaryLoader-b0bde137.js";import"./heatmapUtils-fe1f2bfa.js";import"./defaultsJSON-59981e75.js";let b=class extends K{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=X(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const o of Object.keys(e))e[o]&&(r[o]=(n=e[o])==null?void 0:n.toJSON());t.domains=r}};i([s({type:Number,json:{write:!0}})],b.prototype,"code",void 0),i([s({type:Object,json:{write:!0}})],b.prototype,"defaultValues",void 0),i([s({json:{write:!0}})],b.prototype,"domains",void 0),i([$("domains")],b.prototype,"readDomains",null),i([V("domains")],b.prototype,"writeDomains",null),i([s({type:String,json:{write:!0}})],b.prototype,"name",void 0),b=i([L("esri.layers.support.Subtype")],b);const ot=b,at=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:We,errorContext:"renderer",typeMap:{simple:A,"unique-value":Ke,"class-breaks":Xe}},q=Q(),D=Y({types:J});let lt=0;function O(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function pt(e){return new A({symbol:ut(e)})}function ut(e){switch(e){case"point":case"multipoint":return st.clone();case"polyline":return it.clone();case"polygon":case"multipatch":return rt.clone();default:return null}}function dt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function yt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},o=Z(e,t);if(o!=null){const{defaultValues:l}=o;for(const p in l)n[p]=l[p]}return n[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const z="esri.layers.support.SubtypeSublayer";let a=class extends N(M(ee(ne))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${lt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:o}=this;let l;if(n){l=[];let p=0;n.forEach(({name:y,alias:c,editable:g,visible:v})=>{var j;if(!v)return;const d=(j=o==null?void 0:o.fields)==null?void 0:j.find(I=>I.name===y);if(!d)return;const f={name:y};let F=!1;c!==d.alias&&(f.alias=c,F=!0),g!==d.editable&&(f.editable=g,F=!0),l.push(f),F&&p++}),p===0&&l.length===n.length&&(l=null)}else l=S(e);l!=null&&l.length&&te(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:o,subtypeField:l}=e,p=o==null?void 0:o.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,g=[];for(const v of n){const d=v.clone(),{name:f}=d,F=t==null?void 0:t.find(E=>E.name===f);if(d.visible=!t||!!F,F){const{alias:E,editable:W}=F;E&&(d.alias=E),W===!1&&(d.editable=!1)}const j=(y==null?void 0:y[f])??null;d.defaultValue=f===l?r:j;const I=(c==null?void 0:c[f])??null;d.domain=f===l?null:I?I.type==="inherited"?d.domain:I.clone():null,g.push(d)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||re.getLogger(z).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){ie(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?pt(e.geometryType):null}readRendererFromService(e,t,r){var y,c,g;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,o=D(n,t,r);let l;const{subtypeCode:p}=this;if(p!=null&&dt(o,t.subtypeField)){const v=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(l=new A({symbol:v.symbol}))}else(o==null?void 0:o.type)!=="simple"||(g=o.visualVariables)!=null&&g.length||(l=o);return l}readRenderer(e,t,r){var l,p,y;const n=(p=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:p.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:D(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[yt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw w("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:o}=this;if(r){const{displayField:l,editFieldsInfo:p,objectIdField:y}=r;t={displayField:l,editFieldsInfo:p,fields:n,objectIdField:y,title:o}}return tt(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=x(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return at.some(e=>this.originIdOf(e)===k.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const n=e.clone();return n.where=G(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const n=B.from(e)??r.createQuery();return e!=null&&(n.where=G(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),i([V("fieldOverrides")],a.prototype,"writeFieldOverrides",null),i([s({...q.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),i([s(q.fieldsIndex)],a.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),i([s({type:Se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),i([s({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([s(O(S(_e)))],a.prototype,"labelsVisible",void 0),i([s({type:[Ye],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:et},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),i([s(O(S(Le)))],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s((()=>{const e=S(xe);return e.json.origins.service.read=!1,O(e)})())],a.prototype,"minScale",void 0),i([s((()=>{const e=S(Ae);return e.json.origins.service.read=!1,O(e)})())],a.prototype,"maxScale",void 0),i([s({readOnly:!0})],a.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),i([s()],a.prototype,"parent",void 0),i([s(O(S(Pe)))],a.prototype,"popupEnabled",void 0),i([s({type:se,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),i([s({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),i([s({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),i([$("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),i([s({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=i([L(z)],a);const G=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return n.test(l)?l.replace(n,o):x(o,l)},w=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=a,h="SubtypeGroupLayer",ct="esri.layers.SubtypeGroupLayer";function R(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=Q();let u=class extends $e(Ie(we(Te(Ee(oe(ve(Oe(je(M(Fe(ge(N(be))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(_.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),le))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(pe).then(async()=>{if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>De(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ge(this)}get parsedUrl(){const e=ue(this.url);return e!=null&&this.layerId!=null&&(e.path=de(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ye(this.url,t):t}async addAttachment(e,t){return Re(this,e,t,h)}async updateAttachment(e,t,r){return Ve(this,e,t,r,h)}async applyEdits(e,t){return Ne(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await ce(he(()=>import("./FeatureLayerSource-34ca55e8.js"),["./FeatureLayerSource-34ca55e8.js","./index-4b03b1b0.js","./index-0de4b476.css","./MeshGeoreferencedRelativeVertexSpace-01dadcff.js","./External-c5d404b6.js","./editingSupport-10c040dc.js","./normalizeUtils-1bd513d6.js","./normalizeUtilsCommon-a78292a0.js","./FeatureLayerBase-43dae5ea.js","./commonProperties-1e64caff.js","./ElevationInfo-f714f054.js","./featureLayerUtils-ce39121a.js","./sql-a39124b8.js","./jsonUtils-dc7d3627.js","./UniqueValueRenderer-ad13318a.js","./ColorStop-0686847d.js","./diffUtils-3c37f4e6.js","./colorRamps-54548a9c.js","./DictionaryLoader-b0bde137.js","./FieldsIndex-06c42f48.js","./heatmapUtils-fe1f2bfa.js","./AttachmentQuery-dd62ce87.js","./Query-cdee9722.js","./RelationshipQuery-ab8c76dd.js","./serviceCapabilitiesUtils-8d66cffa.js","./clientSideDefaults-76ae825d.js","./QueryEngineCapabilities-42e44ded.js","./defaultsJSON-59981e75.js","./QueryTask-e24c2014.js","./executeForIds-ab1d15b9.js","./query-af06498b.js","./pbfQueryUtils-8c741d64.js","./pbf-18997bde.js","./queryZScale-2a8227ea.js","./executeQueryJSON-838e0f16.js","./FeatureSet-d4d9321c.js","./executeQueryPBF-95f90cfc.js","./FeatureLayer-7c5e0432.js","./MultiOriginJSONSupport-d720758b.js","./APIKeyMixin-be880531.js","./ArcGISService-163e63f0.js","./BlendLayer-08a76f1b.js","./jsonUtils-555359b4.js","./CustomParametersMixin-64be6818.js","./FeatureEffectLayer-142ba535.js","./FeatureEffect-82bb4002.js","./FeatureFilter-e71c77dc.js","./FeatureReductionLayer-b84a7e30.js","./LabelClass-3b8bddeb.js","./defaults-d003668a.js","./OperationalLayer-5b164959.js","./OrderedLayer-908cb5be.js","./PortalLayer-473e8b12.js","./portalItemUtils-89a0d48a.js","./ScaleRangeLayer-31eefac8.js","./TemporalLayer-5e4b9999.js","./FeatureTemplate-0db006f4.js","./FeatureType-e95921de.js","./fieldProperties-ff8bee5a.js","./labelingInfo-66d1a5d0.js","./versionUtils-9472ade8.js","./styleUtils-5fb07ac6.js","./TopFeaturesQuery-da745a52.js","./popupUtils-8d4c7bed.js"],import.meta.url),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=x(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return ke(this,e,t,h)}async fetchRecomputedExtents(e){return Me(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return me(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ue(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=B.from(e)??r.createQuery(),o=n.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),n.outFields=o);const l=await r.source.queryFeatures(n,t);if(l!=null&&l.features)for(const p of l.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return l}async queryObjectIds(e,t){return Qe(this,e,t,h)}async queryFeatureCount(e,t){return He(this,e,t,h)}async queryExtent(e,t){return Be(this,e,t,h)}async queryRelatedFeatures(e,t){return Je(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ze(this,e,t,h)}write(e,t){var l;const{origin:r,layerContainerType:n,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return o==null||o.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return o==null||o.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(o==null||o.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&nt(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new m("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),fe(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return ze(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],u.prototype,"createQueryVersion",null),i([s({readOnly:!0})],u.prototype,"editingEnabled",null),i([s({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([s({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([s(C.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([s(qe)],u.prototype,"id",void 0),i([s({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([s(C.outFields)],u.prototype,"outFields",void 0),i([s({readOnly:!0})],u.prototype,"parsedUrl",null),i([s()],u.prototype,"source",null),i([s({type:[ot],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([s({type:_.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:o})=>{const l=new T({subtypeCode:o});return l.read(t,r),l});return new(_.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),o=k.PORTAL_ITEM;let l=!0;if(P(n)===o&&P(r.origin)>o){const p=e.some(y=>y.hasUserOverrides());l=this._sublayersCollectionChanged||p}return{enabled:l,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([s({type:Ce})],u.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([$("service","title",["name"])],u.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],u.prototype,"type",void 0),u=i([L(ct)],u);const Kt=u;export{Kt as default};