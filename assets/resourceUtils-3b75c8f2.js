import{dh as o,aq as p,di as g,bB as y}from"./index-4b03b1b0.js";async function P(e,t={},r){await e.load(r);const a=o(e.itemUrl,"resources"),{start:n=1,num:u=10,sortOrder:l="asc",sortField:c="created"}=t,i={query:{start:n,num:u,sortOrder:l,sortField:c,token:e.apiKey},signal:r==null?void 0:r.signal},s=await e.portal.request(a,i);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:h,size:f,resource:w})=>({created:new Date(h),size:f,resource:e.resourceFromPath(w)}))}}async function b(e,t,r,a){if(!e.hasPath())throw new p(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(a);const u=o(n.userItemUrl,t==="add"?"addResources":"updateResources"),[l,c]=d(e.path),i=await R(r),s=new FormData;return l&&l!=="."&&s.append("resourcesPrefix",l),a!=null&&a.compress&&s.append("compress","true"),s.append("fileName",c),s.append("file",i,c),s.append("f","json"),a!=null&&a.access&&s.append("access",a.access),await n.portal.request(u,{method:"post",body:s,signal:a==null?void 0:a.signal}),e}async function q(e,t,r){if(!t.hasPath())throw new p("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=o(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r==null?void 0:r.signal}),t.portalItem=null}async function x(e,t){await e.load(t);const r=o(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t==null?void 0:t.signal})}function d(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,r]=v(e),[a,n]=d(t);return[a,n,r]}function v(e){const t=g(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function R(e){return e instanceof Blob?e:(await y(e.url,{responseType:"blob"})).data}function F(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(o(r,t+a))}function O(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(o(r,t+a))}export{b as addOrUpdateResource,R as contentToBlob,P as fetchResources,F as getSiblingOfSameType,O as getSiblingOfSameTypeI,x as removeAllResources,q as removeResource,m as splitPrefixFileNameAndExtension};
