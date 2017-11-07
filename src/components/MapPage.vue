<template>
  <div class="mapPageWrapper">
    <div class="mapContainer" v-for="location in filteredLocations" :key="location.id">
      <EsriMap :center="location.center"  :zoom="location.zoom" :basemap="location.basemap"></EsriMap>
    </div>
  </div>
</template>

<script>
import EsriMap from '@/components/EsriMap';
import axios from 'axios';

export default {
  name: 'MapPage',
  components: {
    EsriMap,
  },
  data() {
    return {
      locations: [],
    };
  },
  computed: {
    filteredLocations() {
      const shuffleArray = (arr) => {
        const array = arr;
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      return shuffleArray(this.locations).slice(1, 9);
    },
  },

  // when the component loads, get the list of locations and transform them into the data we need
  mounted() {
    axios.get('https://utility.arcgis.com/usrsvcs/servers/36da3269d90e4eae940b3d7a17ee6b4b/rest/services/worldviewlive_internal/FeatureServer/0/query?geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&outSR=4326&f=json&where=OBJECTID<40').then((response) => {
      if (
        response &&
        response.status === 200 &&
        response.data &&
        response.data.features &&
        response.data.features.length > 0
      ) {
        this.locations = response.data.features.map((feature, i) => ({
          id: feature.attributes.OBJECTID,
          center: [feature.geometry.x, feature.geometry.y],
          zoom: feature.attributes.Zoom_Level,
          basemap: 'hybrid',
        }));
      } else {
        console.error('Problem getting locations from server');
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mapPageWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  
  @media screen and (max-width: 1024px) { 
    .mapPageWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 400px) { 
    .mapPageWrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .mapContainer {
    width: 100%;
    height: 400px;
  }
</style>
