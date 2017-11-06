<template>
  <div id="mapNode" class="component"></div>
</template>

<script>
import * as esriLoader from 'esri-loader';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'This is a map',
    };
  },

  props: ['basemap'],

  mounted() {
    const createMap = () => {
      // first, we use Dojo's loader to require the map class
      esriLoader.dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
        const myMap = new Map({
          basemap: 'streets',
        });
        // Create a MapView instance (for 2D viewing) and reference the map instance
        const view = new MapView({
          map: myMap,
          container: 'mapNode',
          center: [-112, 38],
          zoom: 5,
        });
      });
    };

    // has the ArcGIS API been added to the page?
    if (!esriLoader.isLoaded()) {
      // no, lazy load it the ArcGIS API before using its classes
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err);
        } else {
          // once it's loaded, create the map
          createMap();
        }
      }, {
        // use a specific version instead of latest 4.x
        url: 'https://js.arcgis.com/4.5/',
      });
    } else {
      // ArcGIS API is already loaded, just create the map
      createMap();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://js.arcgis.com/4.5/esri/css/main.css');

.component {
  background-color: gray;
  height: 500px;
  width: 100%;
}
</style>
