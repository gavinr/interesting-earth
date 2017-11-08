<template>
  <div class="component"></div>
</template>

<script>
import L from 'leaflet';
import esri from 'esri-leaflet';

L.esri = esri;

export default {
  name: 'LeafletMap',
  data() {
    return {};
  },
  components: {
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    minZoom: {
      type: Number,
      default: undefined,
    },
    maxZoom: {
      type: Number,
      default: undefined,
    },
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
  mounted() {
    const options = this.options;
    Object.assign(options, {
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
    });
    if (this.center != null) {
      options.center = this.center;
    }
    if (this.zoom != null) {
      options.zoom = this.zoom;
    }

    const map = L.map(this.$el, options);

    L.esri.basemapLayer('Imagery').addTo(map);
    L.esri.basemapLayer('ImageryLabels').addTo(map);
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
