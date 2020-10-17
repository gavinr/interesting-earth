<script>
  import LeafletMap from "./LeafletMap.svelte";

  export let locations;
</script>

<style>
  .mapWrapper {
    height: 500px;
  }
  .mapGridWrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  @media (min-width: 900px) {
    .mapGridWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .mapGridWrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1400px) {
    .mapGridWrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<div class="mapGridWrapper">
  {#each locations as locationInfo, i}
    <div class="mapWrapper">
      <LeafletMap
        center={locationInfo.center}
        zoom={locationInfo.zoom}
        title={locationInfo.title} />
    </div>
  {/each}
</div>
