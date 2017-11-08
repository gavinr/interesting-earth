<template>
  <v-map :zoom="zoom" :center="center" :options="{scrollWheelZoom: false}">
    <v-tilelayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"></v-tilelayer>
  </v-map>
</template>

<script>
import { Map as VueMap, TileLayer, Marker } from 'vue2-leaflet';

export default {
  name: 'LeafletMap',
  data() {
    return {};
  },
  components: {
    'v-map': VueMap,
    'v-tilelayer': TileLayer,
  },
  props: {
    center: {
      type: Array,
      default: [-122, 38],
    },
    zoom: {
      type: Number,
      default: 8,
    },
    basemap: {
      type: String,
      required: true,
      default: 'streets',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "~leaflet/dist/leaflet.css";

  .component {
    background-color: gray;
    height: 100%;
  }
</style>
