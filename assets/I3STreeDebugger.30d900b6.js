import{t as c,dk as S,ag as a,b6 as p,dl as u,v as b,e as o,d,n as g,dp as v,aj as j}from"./index.a8738f47.js";import{b as m}from"./TileTreeDebugger.89d4994d.js";let h=class extends m{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),l=this.view.renderSpatialReference,i=this.nodeSR;return n.map(t=>z(t,l,i)).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function z(n,l,i){const t=n.serviceObb;if(c(t)||c(l))return null;S(r,t.quaternion),a(e,t.center),p(e,i,0,e,l,0,1),r[12]=e[0],r[13]=e[1],r[14]=e[2];const s=[[],[],[]];a(e,t.halfSize),u(e,e,r),p(e,l,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[0]=-e[0],u(e,e,r),p(e,l,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],u(e,e,r),p(e,l,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[1]=-e[1],u(e,e,r),p(e,l,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),a(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],u(e,e,r),p(e,l,0,e,i,0,1),s[1].push([e[0],e[1]]),a(e,t.halfSize),e[2]=-e[2],u(e,e,r),p(e,l,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),a(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],u(e,e,r),p(e,l,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new b({rings:s,spatialReference:i});return{lij:[n.level,n.childCount,0],label:n.id,geometry:f}}o([d({constructOnly:!0})],h.prototype,"lv",void 0),o([d({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([g("esri.views.3d.layers.support.I3STreeDebugger")],h);const r=v(),e=j();export{h as I3STreeDebugger};
