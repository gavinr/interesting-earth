/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */function a(n){return n.map(r=>{let t="";for(let e=0;e<r;e++)t+=((1+Math.random())*65536|0).toString(16).substring(1);return t}).join("-")}const o=()=>a([2,1,1,1,3]);/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */function g(){return navigator.userAgentData}function s(){const n=g();return n!=null&&n.brands?n.brands.map(({brand:r,version:t})=>`${r}/${t}`).join(" "):navigator.userAgent}export{s as a,g as b,o as g};
