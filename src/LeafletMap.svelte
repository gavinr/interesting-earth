<script>
  import * as L from "leaflet";
  import "../node_modules/leaflet/dist/leaflet.css";
  import { onMount } from "svelte";

  // props with default values in case none are passed in by a parent
  export let center = [0, 0];
  export let zoom = 1;
  export let title = "";

  let mapDomNode;

  onMount(() => {
    var map = L.map(mapDomNode).setView([center[1], center[0]], zoom);
    map.scrollWheelZoom.disable();
    map.attributionControl.setPrefix(false);

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    ).addTo(map);
  });
</script>

<style>
  div.leafletMapWrapper,
  div.leafletMapWrapper div.map {
    width: 100%;
    height: 100%;
    position: relative;
  }
  div.leafletMapWrapper .title {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 401;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.65);
    padding: 4px 9px;
    font-weight: 100;
  }
</style>

<div class="leafletMapWrapper">
  <div class="map" bind:this={mapDomNode} />
  <div class="title">{title}</div>
</div>
