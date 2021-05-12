<script>
  import { onMount } from "svelte";
  import { shuffleArray } from "./utils.js";
  import Swal from "sweetalert2";

  import Hopper from "./Hopper.svelte";
  import Grid from "./Grid.svelte";

  let locations = [];
  let allNodes = [];
  let gridMode = false;
  let w = window.innerWidth;

  // const trackNodes = (node) => {
  //   allNodes.push(node);
  // };

  onMount(() => {
    fetch(
      "https://services.arcgis.com/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/WorldviewMaster/FeatureServer/0/query?geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&outFields=*&outSR=4326&returnGeometry=true&f=json&where=Status=%27Approved%27"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const shuffledArray = [...data.features];
        shuffleArray(shuffledArray);
        locations = shuffledArray.map((feature, i) => ({
          id: feature.attributes.OBJECTID,
          center: [feature.geometry.x, feature.geometry.y],
          // zoom out by 1 zoom level since most of these zoom levels are designed for "full browser" view:
          zoom: feature.attributes.Zoom_Level - 1,
          title: feature.attributes.Location_Name,
          basemap: "hybrid",
        })); // .slice(0, 10);
      });
  });
</script>

<style>
  h1 {
    margin: 0;
  }
  main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .subtitle {
    font-size: 0.8rem;
    font-style: italic;
  }
  .topWrapper {
    display: flex;
  }
</style>

<main>
  <div class="topWrapper">
    <div>
      <h1>Interesting Earth</h1>

      <p class="subtitle">
        Showing the Earth's most interesting locations from the
        <a
          href="https://chrome.google.com/webstore/detail/worldview/aflbpeobpgdpibcfhkkjhaonbbpkmefg"
          target="_blank">worldview chrome extension</a>.
      </p>
    </div>
    <div style="flex-grow: 1; text-align: right;">
      <div>
        {#if w > 768}
          <a
            href="#"
            on:click={() => {
              gridMode = !gridMode;
            }}>View
            {gridMode !== true ? 'Grid' : 'Hopper'}</a>
          -
        {/if}
        <a
          href="#"
          on:click={() => {
            Swal.fire({
              title: 'About Interesting Earth',
              html:
                'Randomly cycling through the most interesting locations in the world (featured in the <a href="https://chrome.google.com/webstore/detail/worldview/aflbpeobpgdpibcfhkkjhaonbbpkmefg" target="_blank">Worldview Chrome extension</a>). Check out both the grid and hopper mode!<br /><br />Built by <a href="https://gavinr.com" target="_blank">Gavin Rehkemper</a>.<br /><br /><strong>If you appreciate this page, please <a class="github-button" href="https://github.com/gavinr/interesting-earth" aria-label="Star gavinr/interesting-earth on GitHub">star this project on GitHub</a>.</strong>',
              confirmButtonText: 'OK',
              backdrop: false,
            });
          }}>About</a>
      </div>
    </div>
  </div>

  {#if gridMode === true}
    <Grid {locations} />
  {:else}
    <Hopper {locations} basemap="satellite" />
  {/if}
</main>
