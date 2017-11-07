<template>
  <div class="component" ref="component"></div>
</template>

<script>
import * as esriLoader from 'esri-loader';

export default {
  name: 'EsriMap',
  data() {
    return {};
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

  mounted() {
    const createMap = () => {
      // first, we use Dojo's loader to require the map class
      esriLoader.dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
        const myMap = new Map({
          basemap: this.basemap ? this.basemap : 'streets',
        });
        // Create a MapView instance (for 2D viewing) and reference the map instance
        const view = new MapView({
          map: myMap,
          container: this.$refs.component,
          center: this.center,
          zoom: this.zoom,
        });
        view.on('mouse-wheel', (evt) => {
          evt.stopPropogation();
        });
      });
    };

    // preload the ArcGIS API
    esriLoader.bootstrap((err) => {
      if (err) {
        // handle any loading errors
        // console.error('errrr', err);
        createMap();
      } else {
        // optional execute any code once it's preloaded
        createMap();
      }
    }, {
      // use a specific version instead of latest 4.x
      url: 'https://js.arcgis.com/4.5/',
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://js.arcgis.com/4.5/esri/css/main.css');

.component {
  background-color: gray;
  height: 100%;
}
</style>
