import{y as n,r as c,e as r,d as i,n as l}from"./index.a8738f47.js";import{o as s}from"./queryEngineUtils.974386a1.js";import"./DimensioningAnalysisView3D.87b57003.js";import"./LineVisualElement.c8ac394d.js";import"./analysisViewUtils.1368068e.js";import"./PointVisualElement.1a1f0dbc.js";import"./RightAngleQuadVisualElement.93093297.js";import"./Segment.00e10e0b.js";import"./elevationInfoUtils.fe889101.js";import"./dragEventPipeline3D.dd7775a3.js";import"./EditGeometryOperations.17db3234.js";import"./QueryEngineResult.3d7a8c8d.js";import"./WhereClause.d715e7d1.js";import"./utils.bf6b5607.js";import"./ClassBreaksDefinition.d9c6c51f.js";import"./json.d1a0fa35.js";import"./dehydratedFeatureComparison.47577290.js";let e=class extends n{constructor(t){super(t)}get availability(){return 1}refresh(){}async fetchCandidates(t,p){const o=this.layerSource.layer.source;return o.querySnapping?(await o.querySnapping({distance:t.distance,point:t.coordinateHelper.vectorToPoint(t.point).toJSON(),types:t.types,query:c(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},{signal:p})).candidates.map(a=>s(a,t.coordinateHelper,t.elevationInfo)):[]}};r([i({constructOnly:!0})],e.prototype,"layerSource",void 0),r([i({readOnly:!0})],e.prototype,"availability",null),e=r([l("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],e);export{e as FeatureCollectionSnappingSource};
