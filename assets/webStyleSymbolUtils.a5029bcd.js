import{o4 as k,K as $,r as N,mi as S,mk as c,o5 as g,o6 as v,o7 as x,o8 as f,o9 as w,oa as U,ob as D,oc as O,od as B,oe as d,of as h,og as F}from"./index.a8738f47.js";function T(e,t,a,o){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?M(e,t,o):k(e,t,o).then(r=>K(r,e.name,t,a,o)):Promise.reject(new $("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function K(e,t,a,o,r){const u=e.data,m=a&&N(a.portal)?a.portal:S.getDefault(),p={portal:m,url:c(e.baseUrl),origin:"portal-item"},s=u.items.find(n=>n.name===t);if(!s){const n=`The symbol name '${t}' could not be found`;return Promise.reject(new $("symbolstyleutils:symbol-name-not-found",n,{symbolName:t}))}let i=g(v(s,o),p),y=s.thumbnail&&s.thumbnail.href;const b=s.thumbnail&&s.thumbnail.imageData;x()&&(i=f(i),y=f(y));const P={portal:m,url:c(w(i)),origin:"portal-item"};return U(i,r).then(n=>{const E=o==="cimRef"?D(n.data):n.data,l=O(E,P);if(l&&B(l)){if(y){const j=g(y,p);l.thumbnail=new d({url:j})}else b&&(l.thumbnail=new d({url:`data:image/png;base64,${b}`}));e.styleUrl?l.styleOrigin=new h({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(l.styleOrigin=new h({portal:a.portal,styleName:e.styleName,name:t}))}return l})}function M(e,t,a){const o=F.replace(/\{SymbolName\}/gi,e.name),r=N(t.portal)?t.portal:S.getDefault();return U(o,a).then(u=>{const m=D(u.data);return O(m,{portal:r,url:c(w(o)),origin:"portal-item"})})}export{K as fetchSymbolFromStyle,T as resolveWebStyleSymbol};
