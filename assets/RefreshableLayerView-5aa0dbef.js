import{ai as s,aj as t,al as h,aJ as l,b7 as o,b3 as d}from"./index-4b03b1b0.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(l(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{o(a)||d.getLogger(this).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};
