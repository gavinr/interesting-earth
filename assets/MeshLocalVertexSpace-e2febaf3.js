import{cz as n,c8 as a,ai as t,d3 as c,al as p,b4 as d,bX as y,dk as g,aj as h}from"./index-4b03b1b0.js";let s=class extends n(a){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};t([c({georeferenced:"georeferenced"},{readOnly:!0})],s.prototype,"type",void 0),s=t([p("esri.geometry.support.MeshGeoreferencedVertexSpace")],s);const f=s;let r=class extends n(a){constructor(e){super(e),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=d()}getOriginPoint(e){const[o,i,l]=this.origin;return new y({x:o,y:i,z:l,spatialReference:e})}setOriginFormPoint({x:e,y:o,z:i}){this.origin=g(e,o,i??0)}};t([c({local:"local"},{readOnly:!0})],r.prototype,"type",void 0),t([h({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=t([p("esri.geometry.support.MeshLocalVertexSpace")],r);const x=r;export{x as m,f as p};
