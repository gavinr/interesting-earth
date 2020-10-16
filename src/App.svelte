<script>
  import { onMount } from "svelte";
  import { shuffleArray } from "./utils.js";

  import Hopper from "./Hopper.svelte";
  import Grid from "./Grid.svelte";

  let locations = [];
  let allNodes = [];
  let gridMode = false;

  // const trackNodes = (node) => {
  //   allNodes.push(node);
  // };

  onMount(() => {
    fetch(
      "https://utility.arcgis.com/usrsvcs/servers/36da3269d90e4eae940b3d7a17ee6b4b/rest/services/worldviewlive_internal/FeatureServer/0/query?geometryType=esriGeometryPoint&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&outSR=4326&f=json&where=1=1"
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
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<main>
  <h1>Interesting Earth</h1>
  <p>
    Showing the Earth's most interesting locations from the
    <a
      href="https://chrome.google.com/webstore/detail/worldview/aflbpeobpgdpibcfhkkjhaonbbpkmefg"
      target="_blank">worldview chrome extension</a>, all on one page.
  </p>
  <p>
    <button
      on:click={() => {
        gridMode = !gridMode;
      }}>Swap Mode</button>
  </p>
  <p>
    <a
      class="github-button"
      href="https://github.com/gavinr/interesting-earth"
      data-show-count="true"
      aria-label="Star gavinr/interesting-earth on GitHub">Star</a>
  </p>
  <div>
    {#if gridMode === true}
      <Grid {locations} />
    {:else}
      <Hopper {locations} basemap="hybrid" />
    {/if}
  </div>
</main>
