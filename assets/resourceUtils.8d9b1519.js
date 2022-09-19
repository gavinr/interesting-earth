import{fD as n,aH as u,K as d,r as y,fs as v,t as R,br as I}from"./index.a8738f47.js";async function x(e,t={},a){await e.load(a);const r=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:l,token:e.apiKey},signal:u(a,"signal")},s=await e.portal._request(r,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:h,size:w,resource:g})=>({created:new Date(h),size:w,resource:e.resourceFromPath(g)}))}}async function F(e,t,a,r){if(!e.hasPath())throw new d(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(r);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,l]=m(e.path),p=await b(a),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),s.append("fileName",l),s.append("file",p,l),s.append("f","json"),y(r)&&r.access&&s.append("access",r.access),await o.portal._request(c,{method:"post",body:s,signal:u(r,"signal")}),e}async function O(e,t,a){if(!t.hasPath())throw new d("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=n(e.userItemUrl,"removeResources");await e.portal._request(r,{method:"post",query:{resource:t.path},signal:u(a,"signal")}),t.portalItem=null}async function S(e,t){await e.load(t);const a=n(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:u(t,"signal")})}function m(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function f(e){const[t,a]=P(e),[r,o]=m(t);return[r,o,a]}function P(e){const t=v(e);return R(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function b(e){return e instanceof Blob?e:(await I(e.url,{responseType:"blob"})).data}function U(e,t){if(!e.hasPath())return null;const[a,,r]=f(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}function T(e,t){if(!e.hasPath())return null;const[a,,r]=f(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}export{F as addOrUpdateResource,b as contentToBlob,x as fetchResources,U as getSiblingOfSameType,T as getSiblingOfSameTypeI,S as removeAllResources,O as removeResource,f as splitPrefixFileNameAndExtension};
