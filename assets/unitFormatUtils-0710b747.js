import{b_ as u,b$ as b,c0 as m,c1 as f,c2 as c,c3 as l,c4 as g,c5 as B,bK as $}from"./index-4b03b1b0.js";function p(i,t,n){return i.units[t][n]}function a(i,t,n,o=2,s="abbr"){return`${b(t,{minimumFractionDigits:o,maximumFractionDigits:o,signDisplay:t>0?"never":"exceptZero"})} ${p(i,n,s)}`}function h(i,t,n,o=2,s="abbr"){const r=f(t,n);return a(i,c(t,n,r),r,o,s)}function D(i,t,n,o=2,s="abbr"){const r=l(t,n);return a(i,c(t,n,r),r,o,s)}function E(i,t,n,o=2,s="abbr"){const r=g(t,n);return a(i,c(t,n,r),r,o,s)}function F(i,t,n,o=2,s="abbr"){const r=B(t,n);return a(i,c(t,n,r),r,o,s)}const e=["B","kB","MB","GB","TB"];function M(i,t){let n=t===0?0:Math.floor(Math.log(t)/Math.log(u.KILOBYTES));n=$(n,0,e.length-1);const o=b(t/u.KILOBYTES**n,{maximumFractionDigits:2});return m(i.units.bytes[e[n]],{fileSize:o})}export{a as b,F as d,h as p,M as v,D as x,E as y};
