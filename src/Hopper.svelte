<script>
  import { loadModules } from "esri-loader";
  import { onMount } from "svelte";

  // props with default values in case none are passed in by a parent
  export let basemap = "streets";
  export let center = [0, 0];
  export let zoom = 1;
  export let title = "";
  export let locations;

  let currentIndex = 0;
  let playing = true;
  let wrapper;
  let map, view;

  const options = {
    version: "4.17",
    css: true,
  };

  // reference to the DOM node where this MapView instance will be created
  // see "bind:this={viewContainer}" below
  let viewContainer;

  const zoomTo = (index) => {
    console.log("zoomTo", index);
    if (!view.interacting) {
      const arrItem = locations[index];
      console.log("arrItem", arrItem);
      title = `${title} -> ${arrItem.title}`;
      // const scale = view.basemapTerrain.tilingScheme.scaleAtLevel(arrItem.attributes.Zoom_Level);
      const scale = map.basemap.baseLayers
        .getItemAt(0)
        .tileInfo.zoomToScale(arrItem.zoom);

      return view
        .goTo({
          center: [arrItem.center[0], arrItem.center[1]],
          scale: scale,
          // tilt: 45
        })
        .then(() => {
          title = arrItem.title;
        });
    } else {
      return Promise.resolve();
    }
  };

  const startTour = () => {
    if (playing) {
      currentIndex = currentIndex + 1;
      zoomTo(currentIndex).then(
        () => {
          setTimeout(() => {
            if (playing) {
              startTour();
            }
          }, 6000);
        },
        (err) => {
          toggleIcon();
          playing = !playing;
        }
      );
    }
  };

  const createMap = async () => {
    // load Esri JSAPI modules
    const [EsriMap, SceneView, watchUtils] = await loadModules(
      ["esri/Map", "esri/views/SceneView", "esri/core/watchUtils"],
      options
    );
    map = new EsriMap({
      basemap,
      ground: "world-elevation",
    });
    // construct a MapView instance
    view = new SceneView({
      container: viewContainer,
      map,
      center,
      zoom,
    });

    view.when(() => {
      startTour();
    });
  };

  onMount(() => {
    createMap();
  });
</script>

<style>
  div.wrapper,
  div.map {
    width: 100%;
    height: 100%;
    position: relative;
  }
  div.wrapper {
    background-color: gray;
  }
  .title {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 401;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.65);
    padding: 4px 9px;
    font-weight: 100;
  }
  div .title {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 401;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.65);
    padding: 4px 9px;
    font-weight: 100;
  }
</style>

<div class="wrapper" bind:this={wrapper}>
  <div class="map" bind:this={viewContainer} />
  <div class="title">{title}</div>
</div>
