import{dk as d}from"./index-4b03b1b0.js";import{s as a,r as i,l as g}from"./DimensionAnalysisView3D-027ab1bb.js";import{r as c}from"./VertexSnappingCandidate-5582e594.js";function e({x:t,y:r,z:n}){return g(d(t,r,n??0))}function p(t,r){switch(t.type){case"edge":return t.draped?new a({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:e(t.target),objectId:t.objectId,getGroundElevation:r}):new i({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:e(t.target),objectId:t.objectId,isDraped:!1});case"vertex":return new c({targetPoint:e(t.target),objectId:t.objectId,isDraped:!1})}}function f(t){return t!=null&&t.type==="3d"?(r,n,o)=>t.elevationProvider.getElevation(r,n,o??0,t.spatialReference,"ground"):()=>null}export{p as i,f as o};
