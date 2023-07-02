import{cN as f,cO as o,cP as i,aq as u}from"./index-4b03b1b0.js";function $(t,s,e){var n;try{return p(t)}catch(a){(n=e==null?void 0:e.messages)==null||n.push(a)}return null}function y(t,s,e,n){try{const a=l(t);f(e,a,s)}catch(a){n.messages&&n.messages.push(a)}}function l(t){const s=o(t);return s?i(s)?s.map(e=>e.toJSON()):s.map(({scale:e,effects:n})=>({scale:e,value:n.map(a=>a.toJSON())})):null}function p(t){if(!t||t.length===0)return null;if(h(t)){const s=[];for(const e of t)s.push({scale:e.scale,value:r(e.value)});return s}return r(t)}function h(t){const s=t[0];return!!s&&"scale"in s}function r(t){if(!t||!t.length)return"";const s=[];for(const e of t){let n=[];switch(e.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":n=[c(e,"amount")];break;case"blur":n=[c(e,"radius","pt")];break;case"hue-rotate":n=[c(e,"angle","deg")];break;case"drop-shadow":n=[c(e,"xoffset","pt"),c(e,"yoffset","pt"),c(e,"blurRadius","pt"),m(e,"color")];break;case"bloom":n=[c(e,"strength"),c(e,"radius","pt"),c(e,"threshold")]}const a=`${e.type}(${n.filter(Boolean).join(" ")})`;o(a),s.push(a)}return s.join(" ")}function c(t,s,e){if(t[s]==null)throw new u("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});return e?t[s]+e:""+t[s]}function m(t,s){if(t[s]==null)throw new u("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});const e=t[s];return`rgba(${e[0]||0}, ${e[1]||0}, ${e[2]||0}, ${e[3]/255||0})`}export{y as a,$ as n};
