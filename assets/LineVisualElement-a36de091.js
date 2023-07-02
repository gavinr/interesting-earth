import{c_ as P,aI as R,ai as n,aj as h,al as $,l3 as O,l4 as M,br as _,co as y,av as j,e_ as w,je as x,dS as E,as as G,dT as V,jb as F,j7 as H,j6 as S,b2 as m,h3 as v,iR as A,eZ as I,b4 as c,kU as f,l5 as T,l6 as k}from"./index-4b03b1b0.js";const U=o=>{let e=class extends P(o){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(t){this._userInteractive=t}get updating(){return!1}get visible(){return this.parent==null||this.parent.visible&&!this.parent.suspended}set visible(t){this._overrideIfSome("visible",t)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,R(()=>this._interactiveViewModelCount--)}};return n([h({readOnly:!0})],e.prototype,"type",void 0),n([h({constructOnly:!0})],e.prototype,"analysis",void 0),n([h({constructOnly:!0})],e.prototype,"parent",void 0),n([h({constructOnly:!0})],e.prototype,"view",void 0),n([h({type:Boolean})],e.prototype,"interactive",null),n([h()],e.prototype,"_userInteractive",void 0),n([h({readOnly:!0})],e.prototype,"updating",null),n([h()],e.prototype,"visible",null),n([h()],e.prototype,"_interactiveViewModelCount",void 0),e=n([$("esri.views.3d.analysis.AnalysisView3D")],e),e};function Y(o,e,t,r=!1){const s=O(o,e);return s==null?null:(s.hasZ&&!r||t==null||(s.z=M(t,s)??0),s)}function J(o,e,t){t.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}function W(o){let{r:e,g:t,b:r,a:s}=o;return s<1&&(e=Math.round(s*e+255*(1-s)),t=Math.round(s*t+255*(1-s)),r=Math.round(s*r+255*(1-s))),new _({r:e,g:t,b:r})}function B(o,e){const{r:t,g:r,b:s}=e!=null&&e.ignoreAlpha?o:W(o);return .2126*t+.7152*r+.0722*s}function b(o){return B(o,{ignoreAlpha:!0})>225?new _([0,0,0,o.a]):new _([255,255,255,o.a])}function g(o,e){const t=new _(o);return t.a*=e,t}function D(o=1){return g(y.analysisTheme.accentColor,o)}function K(o=1){return b(D(o))}function L(o=1){return g(y.analysisTheme.accentColor,o).a}function Z(o=1){return g(y.analysisTheme.textColor,o)}function Q(o=1){return b(Z(o))}let q=class{constructor(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this._handle=j(()=>this.view.ready,t=>{this._resourcesCreated&&(t?this._createResources():this._destroyResources())})}applyProps(e){let t=!1;for(const r in e)r in this?r==="attached"?t=e[r]:this[r]=e[r]:console.error("Cannot set unknown property",r);this.attached=t}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(e))}onAttachedChange(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}};class z extends q{constructor(e){super(e.view),this._resources=null,this._transform=w()}get object(){return this._resources!=null?this._resources.object:null}get transform(){return this._transform}set transform(e){x(this._transform,e),this._resources!=null&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(this._resources==null)return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new E(e,{pickable:!1,updatePolicy:G.SYNC}),r=new V({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),e.addMany(r.geometries),this.forEachExternalMaterial(s=>e.add(s)),e.add(r),t.add(r),r.visible=this.visible,this._resources={layer:t,object:r}}destroyResources(){const e=this.view._stage;this._resources!=null&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial(t=>{e.remove(t),t.dispose()}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){this._resources!=null&&(this._resources.object.visible=e)}}class ee extends z{constructor(e,t){super(e),this._hasExternalMaterial=!1,this._hasExternalMaterial=t!=null,this._material=t??new F({width:1,color:H(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:S.OccludeAndTransparent,writeDepth:!0}),this.applyProps(e)}setGeometryFromRenderSpacePoint(e,t=1e3){this.geometry=[[[e[0]-t,e[1],e[2]],[e[0]+t,e[1],e[2]]],[[e[0],e[1]-t,e[2]],[e[0],e[1]+t,e[2]]],[[e[0],e[1],e[2]-t],[e[0],e[1],e[2]+t]]]}setGeometryFromExtent(e){const t=this.view.spatialReference,r=c(),s=c(),a=100,i=[];m(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),m(r,e[2],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),m(r,e[2],e[3],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),m(r,e[0],e[3],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),m(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),m(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,s),i.push([s[0],s[1],s[2]]),this.geometry=[i]}setGeometryFromFrustum(e){const t=[];e.lines.forEach(r=>{t.push([r.origin[0],r.origin[1],r.origin[2]]),t.push([r.endpoint[0],r.endpoint[1],r.endpoint[2]])}),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],r=e.origin,s=e.basis1,a=e.basis2,i=.5,l=c(),u=c(),d=c(),p=c();l[0]=r[0]-s[0]*i-a[0]*i,l[1]=r[1]-s[1]*i-a[1]*i,l[2]=r[2]-s[2]*i-a[2]*i,u[0]=r[0]-s[0]*i+a[0]*i,u[1]=r[1]-s[1]*i+a[1]*i,u[2]=r[2]-s[2]*i+a[2]*i,d[0]=r[0]+s[0]*i+a[0]*i,d[1]=r[1]+s[1]*i+a[1]*i,d[2]=r[2]+s[2]*i+a[2]*i,p[0]=r[0]+s[0]*i-a[0]*i,p[1]=r[1]+s[1]*i-a[1]*i,p[2]=r[2]+s[2]*i-a[2]*i,t.push([l[0],l[1],l[2]]),t.push([u[0],u[1],u[2]]),t.push([d[0],d[1],d[2]]),t.push([p[0],p[1],p[2]]),t.push([l[0],l[1],l[2]]),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;this.transform=v(C,t);const{points:r}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(e,t=A){this.transform=v(C,t),this.geometry=e.map(r=>r.createRenderGeometry(t,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return this._geometry==null?null:this._geometry.map(e=>e.map(t=>I(c(),t,this.transform)))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(e){this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(e){this._material.setParameters({width:e})}get color(){return this._material.parameters.color}set color(e){const t=e[3]===1;this._material.setParameters({color:f(e),writeDepth:t})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(e){this._material.setParameters({innerWidth:e})}get innerColor(){return this._material.parameters.innerColor}set innerColor(e){this._material.setParameters({innerColor:e!=null?f(e):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(e){this._material!=null&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(e){this._material.setParameters({stippleOffColor:e!=null?f(e):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(e){this._material.setParameters({stipplePreferContinuous:e})}get falloff(){return this._material.parameters.falloff}set falloff(e){this._material.setParameters({falloff:e})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(e){this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){}destroyExternalResources(){}createGeometries(e){for(const t of T(this.geometry)){const r=k(this._material,t);e.addGeometry(r)}}forEachExternalMaterial(e){this._hasExternalMaterial||e(this._material)}}const C=w();export{J as a,z as b,ee as c,Z as d,U as e,L as f,D as i,Y as r,Q as s,q as t,K as u};
