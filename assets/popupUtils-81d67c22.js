import{bx as m,by as I}from"./index-4b03b1b0.js";async function T(e,t=e.popupTemplate){var s,o;if(t==null)return[];const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=t,{objectIdField:u,typeIdField:n,globalIdField:d,relationships:i}=e;if(a.includes("*"))return["*"];const c=r?await m(e):[],l=I(e.fieldsIndex,[...a,...c]);return n&&l.push(n),l&&u&&((s=e.fieldsIndex)!=null&&s.has(u))&&!l.includes(u)&&l.push(u),l&&d&&((o=e.fieldsIndex)!=null&&o.has(d))&&!l.includes(d)&&l.push(d),i&&i.forEach(h=>{var f;const{keyField:p}=h;l&&p&&((f=e.fieldsIndex)!=null&&f.has(p))&&!l.includes(p)&&l.push(p)}),l}function b(e,t){return e.popupTemplate?e.popupTemplate:t!=null&&t.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function E(e,t){return b(e,{defaultPopupTemplateEnabled:t})!=null}export{T as n,b as p,E as t};
