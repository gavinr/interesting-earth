import{e as s,d as o,n as v,el as P,lU as k,F,v as w,aW as C,cU as _,f8 as J,cW as h,u as W,aw as K,U as M,o5 as z,t as m,br as R,aH as Z,eA as B,a8 as H,nT as X,nU as Y,nV as ee,qT as te,nW as re,qW as se,r as p,c$ as ie,ri as O,mm as oe,mg as ae,E as ne,d1 as le,K as d,fD as pe,bj as de,r8 as ye,hs as E,w as ue,aJ as ce,s3 as he,s4 as fe,rV as me,qZ as ge,rl as ve,rm as be,rn as T,ra as we,s5 as Ie,d4 as Le,d5 as Se,d6 as Fe,rq as je,d9 as _e,B as Oe}from"./index.a8738f47.js";import{A as Ee,K as $}from"./SceneService.e4a39a20.js";import{t as Te}from"./capabilities.64684acb.js";import{l as $e}from"./FetchAssociatedFeatureLayer.057718c6.js";import{s as D,l as xe,u as Ae,m as Pe}from"./I3SLayerDefinitions.38b2ee60.js";import{w as Re}from"./persistable.6d7b5a7d.js";import"./originUtils.68552ec1.js";import"./multiOriginJSONSupportUtils.8128aa52.js";import"./I3SIndexInfo.aa09632f.js";import"./resourceUtils.8d9b1519.js";let u=class extends P{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"name",void 0),s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"field",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"currentRangeExtent",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"fullRangeExtent",void 0),s([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=s([v("esri.layers.support.RangeInfo")],u);var g;let I=g=class extends k(F.ofType(w)){constructor(e){super(e)}clone(){return new g(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(a=>{if(!t.equals(a.spatialReference)){if(!C(a.spatialReference,t))return e&&e.messages&&e.messages.push(new _("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new w;J(a,l,t),a=l}const n=a.toJSON(e);return delete n.spatialReference,n}).filter(a=>a!=null):(e!=null&&e.messages&&e.messages.push(new _("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(a=>a.toJSON(e)))}static fromJSON(e,t){const r=new g;return e.forEach(a=>r.add(w.fromJSON(a,t))),r}};I=g=s([v("esri.layers.support.PolygonCollection")],I);const L=I;var S;let f=S=class extends P{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new L,this._geometriesSource=null,this._handles=new W}initialize(){this._handles.add(K(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,M))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:z(e,r),context:r}}async loadGeometries(e,t){if(m(this._geometriesSource))return;const{url:r,context:a}=this._geometriesSource,n=await R(r,{responseType:"json",signal:Z(t,"signal")}),l=e.toJSON(),y=n.data.map(b=>({...b,spatialReference:l}));this.geometries=L.fromJSON(y,a),this._geometriesSource=null}clone(){return new S({geometries:B(this.geometries),spatialRelationship:this.spatialRelationship})}};s([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),s([o({type:L,nonNullable:!0,json:{write:!0}}),Re({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),s([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=S=s([v("esri.layers.support.SceneFilter")],f);const De=f,Ne=["3DObject","Point"],c=H.getLogger("esri.layers.SceneLayer"),x=_e();let i=class extends Ee(X(Y(ee(te(re(se(Oe))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new F,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a,n,l,y;const r=(n=(a=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:a.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:(y=(l=this.getField(e))==null?void 0:l.domain)!=null?y:null}getFeatureType(e){return e&&p(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return p(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return p(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return p(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new ie(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:D.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ue[this.profile]||"mesh"}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=p(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Te,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:y,supportsM:b,isVersioned:N,supportsAttachment:U},operations:{supportsEditing:q,supportsUpdate:Q,supportsQuery:G,supportsQueryAttachments:V}}=e,j=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:n},data:{supportsAttachment:U,supportsZ:y,supportsM:b,isVersioned:N},operations:{supportsQuery:G,supportsQueryAttachments:V,supportsEditing:q&&j,supportsAdd:!1,supportsDelete:!1,supportsUpdate:Q&&j}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){e!=null?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return p(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return p(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return r!=null&&A[r]?A[r]:(c.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=p(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(oe).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),p(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>ae(this,{origin:"service"},t)).then(()=>O(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){p(this.filter)&&await this.load()}createQuery(){const e=new ne;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return le(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return p(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),m(this.associatedLayer))throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===r.name){const n=pe(this.parsedUrl.path,a.href);return R(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations($.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations($.SAVE,e)}async applyEdits(e,t){const r=await de(()=>import("./editingSupport.0b59e938.js"),["editingSupport.0b59e938.js","index.a8738f47.js","index.7b18f6ca.css"],import.meta.url);if(await this.load(),m(this.associatedLayer))throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!Ne.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,a){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const y=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=y;break;case"vertex-reference-frame":n=!0,l=!y;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),r=!!(p(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(m(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(m(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=ye(this);for(let r=0;r<e.length;r++){const a=e[r],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===E.SERVICE||l===E.PORTAL_ITEM)&&t.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new $e(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){ue(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await ce(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&c.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};s([o({types:{key:"type",base:he,typeMap:{selection:fe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([o({type:[u],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([o({type:["show","hide"]})],i.prototype,"listMode",void 0),s([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([o({...x.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),s([o()],i.prototype,"types",null),s([o()],i.prototype,"typeIdField",null),s([o()],i.prototype,"formTemplate",null),s([o({readOnly:!0})],i.prototype,"fieldsIndex",null),s([o({type:me,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([o(x.outFields)],i.prototype,"outFields",void 0),s([o({type:D,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([o({type:[xe],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([o({type:[Ae],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([o({type:[Pe],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([o({type:F.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),s([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([o({type:De,json:{name:"layerDefinition.polygonFilter",write:!0}})],i.prototype,"filter",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([o(ge)],i.prototype,"elevationInfo",null),s([o({type:String})],i.prototype,"geometryType",null),s([o(ve)],i.prototype,"labelsVisible",void 0),s([o({type:[be],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:T},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:T},write:!0}})],i.prototype,"labelingInfo",void 0),s([o(we)],i.prototype,"legendEnabled",void 0),s([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var a,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(a=t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:n.transparency;return r!==void 0?Ie(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),s([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),s([o({types:Le,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([o(Se)],i.prototype,"popupEnabled",void 0),s([o({type:Fe,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([o(je)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([v("esri.layers.SceneLayer")],i);const A={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ue={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ze=i;export{ze as default};
