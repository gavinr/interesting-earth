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
  let zoomingOrAboutToZoom = false;
  let cameraController;

  const options = {
    version: "4.17",
    css: true,
  };

  // reference to the DOM node where this MapView instance will be created
  // see "bind:this={viewContainer}" below
  let viewContainer;

  const zoomTo = (index) => {
    if (!view.interacting) {
      const arrItem = locations[index];
      if (arrItem && title !== "") {
        title = `${title} -> ${arrItem.title}`;
      }
      // const scale = view.basemapTerrain.tilingScheme.scaleAtLevel(arrItem.attributes.Zoom_Level);
      const scale = map.basemap.baseLayers
        .getItemAt(0)
        .tileInfo.zoomToScale(arrItem.zoom);

      return view
        .goTo({
          center: [arrItem.center[0], arrItem.center[1]],
          scale: scale,
          rotation: 0,
          tilt: 0,
        })
        .then(() => {
          title = arrItem.title;
        });
    } else {
      return Promise.resolve();
    }
  };

  const slowlyZoomIn = () => {
    if (!zoomingOrAboutToZoom) {
      requestAnimationFrame(() => {
        view.state.switchCameraController(cameraController);
        cameraController.begin([100, 100]);
        cameraController.update([101, 99]);
        cameraController.end();
        slowlyZoomIn();
      });
    } else {
      cameraController.end();
    }
  };

  const startTour = () => {
    if (playing) {
      currentIndex = currentIndex + 1;
      zoomingOrAboutToZoom = true;
      zoomTo(currentIndex).then(
        () => {
          zoomingOrAboutToZoom = false;
          slowlyZoomIn();
          setTimeout(() => {
            zoomingOrAboutToZoom = true;
            if (playing) {
              requestAnimationFrame(() => {
                startTour();
              });
            }
          }, 6000);
        },
        (err) => {
          // skip, it'll come around again
          console.log("error", err);
        }
      );
    }
  };

  const createMap = async () => {
    // load Esri JSAPI modules
    const [
      EsriMap,
      SceneView,
      Fullscreen,
      RotateController,
    ] = await loadModules(
      [
        "esri/Map",
        "esri/views/SceneView",
        "esri/widgets/Fullscreen",
        "esri/views/3d/state/controllers/RotateController",
      ],
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

    const fullscreen = new Fullscreen({
      view: view,
    });
    view.ui.add(fullscreen, "top-left");

    view.when(() => {
      cameraController = new RotateController.RotateController({
        view: view,
        pivot: "center",
      });
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
    max-width: calc(100% - 80px); /* fix for long titles on small viewports */
  }
</style>

<div class="wrapper" bind:this={wrapper}>
  <div class="map" bind:this={viewContainer} />
  {#if title}
    <div class="title">{title}</div>
  {/if}
</div>
