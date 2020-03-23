<script>
  import { onMount } from "svelte";

  import EsriMap from "./EsriMap.svelte";

  let locations = [];
  let allNodes = [];

  const trackNodes = (node) => {
    allNodes.push(node);
  };

  onMount(() => {

    fetch(
      "https://utility.arcgis.com/usrsvcs/servers/36da3269d90e4eae940b3d7a17ee6b4b/rest/services/worldviewlive_internal/FeatureServer/0/query?geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&outSR=4326&f=json&where=1=1"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("fetch response:");
        console.log(data);
        locations = data.features.map((feature, i) => ({
          id: feature.attributes.OBJECTID,
          center: [feature.geometry.x, feature.geometry.y],
           // zoom out by 1 zoom level since most of these zoom levels are designed for "full browser" view:
          zoom: feature.attributes.Zoom_Level - 1,
          title: feature.attributes.Location_Name,
          basemap: 'hybrid',
        })); // .slice(0, 10);
      });
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .mapWrapper {
    height: 500px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .mapGridWrapper {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    width: 100%;
  }

  @media (min-width: 900px) {
    .mapGridWrapper {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media (min-width: 1200px) {
    .mapGridWrapper {
      grid-template-columns: repeat(3,1fr);
    }
  }

  @media (min-width: 1400px) {
    .mapGridWrapper {
      grid-template-columns: repeat(4,1fr);
    }
  }
</style>

<main>
  <h1>Interesting Earth</h1>
  <p>
    Showing the Earth's most interesting locations from the <a href="https://chrome.google.com/webstore/detail/worldview/aflbpeobpgdpibcfhkkjhaonbbpkmefg" target="_blank">worldview chrome extension</a>, all on one page.
  </p>
  <p><a class="github-button" href="https://github.com/gavinr/interesting-earth" data-show-count="true" aria-label="Star gavinr/interesting-earth on GitHub">Star</a></p>
  <div class="mapGridWrapper">
    {#each locations as locationInfo, i}
      <div class="mapWrapper" use:trackNodes>
        <EsriMap basemap={'hybrid'} center={locationInfo.center} zoom={locationInfo.zoom} title={locationInfo.title} />
      </div>
    {/each}
  </div>
</main>
