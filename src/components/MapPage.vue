<template>
  <div class="mapPageWrapper">
    <div class="pageTitle">
      <h2>Interesting Earth</h2>
      <p>Showing the Earth's most interesting locations from the <a href="https://chrome.google.com/webstore/detail/worldview/aflbpeobpgdpibcfhkkjhaonbbpkmefg">worldview chrome extension</a>, all on one page.</p>
    </div>
    <div class="mapContainer" v-for="location in filteredLocations" :key="location.id">
      <div class="title">{{ location.title }}</div>
      <LeafletMap v-if="mapType == 'leaflet'" :center="location.center"  :zoom="location.zoom" :basemap="location.basemap" :options="{scrollWheelZoom: false}"></LeafletMap>
      <EsriMap v-else :center="location.center"  :zoom="location.zoom" :basemap="location.basemap"></EsriMap>
    </div>
  </div>
</template>

<script>
import LeafletMap from '@/components/LeafletMap';
import EsriMap from '@/components/EsriMap';
import axios from 'axios';

export default {
  name: 'MapPage',
  components: {
    LeafletMap,
    EsriMap,
  },
  props: {
    mapType: {
      type: String,
      required: true,
    },
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
      return shuffleArray(this.locations);
    },
  },

  // when the component loads, get the list of locations and transform them into the data we need
  mounted() {
    axios.get('https://utility.arcgis.com/usrsvcs/servers/36da3269d90e4eae940b3d7a17ee6b4b/rest/services/worldviewlive_internal/FeatureServer/0/query?geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&outSR=4326&f=json&where=1=1').then((response) => {
      if (
        response &&
        response.status === 200 &&
        response.data &&
        response.data.features &&
        response.data.features.length > 0
      ) {
        this.locations = response.data.features.map((feature, i) => ({
          id: feature.attributes.OBJECTID,
          center: [feature.geometry.y, feature.geometry.x],
           // zoom out by 1 zoom level since most of these zoom levels are designed for "full browser" view:
          zoom: feature.attributes.Zoom_Level - 1,
          title: feature.attributes.Location_Name,
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
  .mapContainer {
    position: relative;
  }
  .title {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 401;

    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.65);
    padding: 4px 9px;
    font-weight: 100;
    letter-spacing: .5;
  }
  @media screen and (max-width: 1280px) { 
    .mapPageWrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media screen and (max-width: 1024px) { 
    .mapPageWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 600px) { 
    .mapPageWrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .mapContainer {
    width: 100%;
    height: 400px;
  }
</style>
