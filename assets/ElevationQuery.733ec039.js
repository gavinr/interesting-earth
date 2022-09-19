import{r as y,t as x,K as m,fK as R,ed as q,ml as M,gk as N,bH as b,f1 as _,mm as S,aB as P,b3 as Z,a3 as j,bz as E,by as U,aO as $,bc as V}from"./index.a8738f47.js";class L{constructor(e,t=null){if(this.tile=e,this.zmin=0,this.zmax=0,y(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]},this.zmin=t.minValue,this.zmax=t.maxValue}}sample(e,t){if(x(this.samplerData))return;const{safeWidth:i,width:s,pixelData:n,noDataValue:l,dx:a,dy:o,y1:c,x0:r}=this.samplerData,u=O(o*(c-t),0,i),d=O(a*(e-r),0,i),h=Math.floor(u),I=Math.floor(d),v=h*s+I,A=v+s,g=n[v],w=n[A],D=n[v+1],z=n[A+1];if(g!==l&&w!==l&&D!==l&&z!==l){const C=d-I,F=g+(D-g)*C;return F+(w+(z-w)*C-F)*(u-h)}}}function O(p,e,t){return p<e?e:p>t?t:p}class B{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new m("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=f.fromGeometry(t);let n=!1;i&&i.returnSampleInfo||(n=!0);const l={...T,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],s,l),o=await this._queryAllContinue(e,a,l);return o.geometry=o.geometry.export(),n&&delete o.sampleInfo,o}async query(e,t,i){if(!e)throw new m("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof f)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new m("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...T,...i},n=new W(e,t.spatialReference,s),l=s.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(n,t,l),await this._selectTiles(n,l),await this._populateElevationTiles(n,l),this._sampleGeometryWithElevation(n),this._createQueryResult(n,l)}async createSampler(e,t,i){if(!e)throw new m("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new m("elevation-query:invalid-extent","Invalid or undefined extent");const s={...T,...i};return this._createSampler(e,t,s)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(l=>l.visible):e.slice()).length)throw new m("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new m("elevation-query:invalid-extent","Invalid or undefined extent");const s={...T,...i,returnSampleInfo:!0},n=await this._createSampler(e[e.length-1],t,s);return this._createSamplerAllContinue(e,t,n,s)}async _createSampler(e,t,i,s){const n=i.signal;await e.load({signal:n});const l=t.spatialReference,a=e.tileInfo.spatialReference;l.equals(a)||(await R([{source:l,dest:a}],{signal:n}),t=q(t,a));const o=new Q(e,t,i,s);return await this._selectTiles(o,n),await this._populateElevationTiles(o,n),new M(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const n=i.samplers.map(c=>N(c.extent)),l=await this._createSampler(e[e.length-1],t,s,n);if(l.samplers.length===0)return i;const a=i.samplers.concat(l.samplers),o=new M(a,s.noDataValue);return this._createSamplerAllContinue(e,t,o,s)}async _queryAllContinue(e,t,i){const s=e.pop(),n=t.geometry.coordinates,l=[],a=[];for(let r=0;r<n.length;r++){const u=t.sampleInfo[r];u.demResolution>=0?u.source||(u.source=s):e.length&&(l.push(n[r]),a.push(r))}if(!e.length||l.length===0)return t;const o=t.geometry.clone(l),c=await this.query(e[e.length-1],o,i);return a.forEach((r,u)=>{n[r].z=c.geometry.coordinates[u].z,t.sampleInfo[r].demResolution=c.sampleInfo[u].demResolution}),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),i}async _createGeometryDescriptor(e,t,i){let s;const n=e.layer.tileInfo.spatialReference;if(t instanceof f?s=await t.project(n,i):(await R([{source:t.spatialReference,dest:n}],{signal:i}),s=q(t,n)),!s)throw new m("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${n.wkid}'`);e.geometry=f.fromGeometry(s)}async _selectTiles(e,t){const i=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof i=="number")this._selectTilesClosestResolution(e);else if(i==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(i!=="auto")throw new m("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(x(e.layer.fullExtent))return;const t=new L(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach(s=>{const n=s.x,l=s.y;(n<i.xmin||n>i.xmax||l<i.ymin||l>i.ymax)&&(s.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/b(e.spatialReference);let s=e.lods[0],n=0;for(let l=1;l<e.lods.length;l++){const a=e.lods[l];Math.abs(a.resolution-i)<Math.abs(s.resolution-i)&&(s=a,n=l)}return n}async _selectTilesFinestContiguous(e,t){const i=k(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const n=s.tilemapCache,l=e.getTilesToFetch();try{if(n)await _(Promise.all(l.map(a=>n.fetchAvailability(a.level,a.row,a.col,{signal:i}))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new m("elevation-query:has-unavailable-tiles")}catch(a){S(a),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},n=e.options.cache,l=e.options.noDataValue,a=i.map(async o=>{const c=`${e.layer.uid}:${o.id}:${l}`,r=y(n)?n.get(c):null,u=y(r)?r:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:l,signal:t});y(n)&&n.put(c,u),s[o.id]=new L(o,u)});await _(P(a),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),n={},l=s.map(async a=>{const o={id:null,level:0,row:0,col:0,extent:Z()},c=await j(i.fetchAvailabilityUpsample(a.level,a.row,a.col,o,{signal:t}));c.ok===!1?S(c.error):n[a.id]=o});await _(Promise.all(l),t),e.remapTiles(n)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},n=o=>{o.id in s?s[o.id]++:(s[o.id]=1,i++)},l=o=>{const c=s[o.id];c===1?(delete s[o.id],i--):s[o.id]=c-1};e.forEachTileToFetch(n,l);let a=!0;for(;a&&(a=!1,e.forEachTileToFetch(o=>{i<=e.options.maximumAutoTileRequests||(l(o),t.upsampleTile(o)&&(a=!0),n(o))},l),a););}_selectTilesAutoFinest(e){const t=k(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch((n,l)=>{i.upsampleTile(n)?s=!0:l()}),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const n=i.sample(t.x,t.y);y(n)?s=n:t.elevationTile=null}t.z=s})}_extractSampleInfo(e){const t=e.layer.tileInfo,i=b(t.spatialReference);return e.geometry.coordinates.map(s=>{let n=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(n=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:n}})}}class f{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new f;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(i=>this._cloneCoordinate(i)),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await R([{source:this.spatialReference,dest:e}],{signal:t});const i=new E({spatialReference:this.spatialReference,points:this.coordinates.map(a=>[a.x,a.y])}),s=q(i,e);if(!s)return null;const n=this.coordinates.map((a,o)=>{const c=this._cloneCoordinate(a),r=s.points[o];return c.x=r[0],c.y=r[1],c}),l=this.clone(n);return l.spatialReference=e,l}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new f;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof f)t.coordinates=e.coordinates.map(i=>t._cloneCoordinate(i)),t._exporter=(i,s)=>{const n=e.clone(i);return n.spatialReference=s,n};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:n}=i;t.coordinates=s&&n?[{x:i.x,y:i.y,z:i.z,m:i.m}]:s?[{x:i.x,y:i.y,z:i.z}]:n?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(l,a)=>e.hasM?new $(l[0].x,l[0].y,l[0].z,l[0].m,a):new $(l[0].x,l[0].y,l[0].z,a);break}case"multipoint":{const i=e,{hasZ:s,hasM:n}=i;t.coordinates=s&&n?i.points.map(l=>({x:l[0],y:l[1],z:l[2],m:l[3]})):s?i.points.map(l=>({x:l[0],y:l[1],z:l[2]})):n?i.points.map(l=>({x:l[0],y:l[1],m:l[2]})):i.points.map(l=>({x:l[0],y:l[1]})),t._exporter=(l,a)=>e.hasM?new E({points:l.map(o=>[o.x,o.y,o.z,o.m]),hasZ:!0,hasM:!0,spatiaReference:a}):new E(l.map(o=>[o.x,o.y,o.z]),a);break}case"polyline":{const i=e,s=[],n=[],{hasZ:l,hasM:a}=e;let o=0;for(const c of i.paths)if(n.push([o,o+c.length]),o+=c.length,l&&a)for(const r of c)s.push({x:r[0],y:r[1],z:r[2],m:r[3]});else if(l)for(const r of c)s.push({x:r[0],y:r[1],z:r[2]});else if(a)for(const r of c)s.push({x:r[0],y:r[1],m:r[2]});else for(const r of c)s.push({x:r[0],y:r[1]});t.coordinates=s,t._exporter=(c,r)=>{const u=e.hasM?c.map(h=>[h.x,h.y,h.z,h.m]):c.map(h=>[h.x,h.y,h.z]),d=n.map(h=>u.slice(h[0],h[1]));return new U({paths:d,hasM:e.hasM,hasZ:!0,spatialReference:r})};break}}return t}}class G{constructor(e,t){this.layer=e,this.options=t}}class W extends G{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach(s=>{s.tile=t.tileAt(i,s.x,s.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;i.elevationTile||!i.tile||e[s.id]||(e[s.id]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>t.tile=null)}}class Q extends G{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(x(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const n=t.lods[s],l=n.resolution*t.size[0],a=n.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/a)<=e)return s}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach(s=>{if(this.fetchedCandidates.has(s))return void(t&&t(s));let n=!1;e(s,()=>n=!0),n?t&&t(s):this.candidateTiles.push(s)}),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const l of e)i[l.id]?t&&t(l):(i[l.id]=l,s.push(l));const n=s.sort((l,a)=>l.level-a.level);return n.filter((l,a)=>{for(let o=0;o<a;o++)if(V(n[o].extent,l.extent))return t&&t(l),!1;return!0})}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(x(t))return;const i=this.layer.tileInfo,s=i.lods[e],n=i.tileAt(s.level,t.xmin,t.ymin),l=s.resolution*i.size[0],a=s.resolution*i.size[1],o=Math.ceil((t.xmax-n.extent[0])/l),c=Math.ceil((t.ymax-n.extent[1])/a);for(let r=0;r<c;r++)for(let u=0;u<o;u++){const d={id:null,level:n.level,row:n.row-r,col:n.col+u};i.updateTileInfo(d),this._tileIsMasked(d)||this.candidateTiles.push(d)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>V(t,e.extent))}}function k(p,e){let t=p.lods.length-1;if(e>0){const i=p.lods.findIndex(s=>s.resolution<e);i===0?t=0:i>0&&(t=i-1)}return t}const T={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{B as ElevationQuery,f as GeometryDescriptor,k as getFinestLodIndex};
