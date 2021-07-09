<script>
  import { loadModules } from "esri-loader";
  import { onMount } from "svelte";
  import { checkElevation } from "./Elevation";

  // props with default values in case none are passed in by a parent
  export let basemap = "streets";
  export let center = [0, 0];
  export let zoom = 1;
  export let title = "";
  export let locations;

  let currentIndex = -1;
  let playing = true;
  let map, view;
  let zoomingOrAboutToZoom = false;
  let cameraController;
  let w = window.innerWidth;

  const options = {
    version: "4.20",
    css: true,
  };

  // reference to the DOM node where this MapView instance will be created
  // see "bind:this={viewContainer}" below
  let viewContainer;

  const zoomTo = (index) => {
    console.log("zoomTo", index);
    if (!view.interacting) {
      const arrItem = locations[index];
      if (arrItem && title !== "") {
        title = `${title} -> ${arrItem.title}`;
      }
      // const scale = view.basemapTerrain.tilingScheme.scaleAtLevel(arrItem.attributes.Zoom_Level);
      if (!arrItem) {
        console.error("Error!", arrItem, index, locations);
      }
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
    // console.log("slowlyZoomIn", view.camera.position.z);
    if (!zoomingOrAboutToZoom && view.camera.position.z > 500) {
      requestAnimationFrame(() => {
        const camera = view.camera.clone();
        let zoomSpeed = 15;
        if (camera.position.z < 3000) {
          zoomSpeed = 0.5;
        } else if (camera.position.z < 5000) {
          zoomSpeed = 1;
        } else if (camera.position.z < 10000) {
          zoomSpeed = 3;
        } else if (camera.position.z < 20000) {
          zoomSpeed = 5;
        } else if (camera.position.z < 50000) {
          zoomSpeed = 10;
        }

        camera.position.z = camera.position.z - zoomSpeed;
        view.camera = camera;
        slowlyZoomIn();
      });
    }
  };

  const rotateAround = () => {
    // console.log("rotateAround", view.camera.tilt);
    if (!zoomingOrAboutToZoom) {
      let whereToMove = [101, 98];
      if (view.camera.tilt > 80) {
        whereToMove = [101, 100];
      }
      requestAnimationFrame(() => {
        view.state.switchCameraController(cameraController);
        cameraController.begin([100, 100]);
        cameraController.update(whereToMove);
        cameraController.end();
        rotateAround();
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
          checkElevation(view, map.ground.layers.getItemAt(0)).then(
            (totalElevationDifference) => {
              if (totalElevationDifference < 100) {
                slowlyZoomIn();
              } else {
                rotateAround();
              }
              setTimeout(() => {
                zoomingOrAboutToZoom = true;
                if (playing) {
                  requestAnimationFrame(() => {
                    startTour();
                  });
                }
              }, 10000); // Zoom for 10 seconds then move on
            },
            (err) => {
              console.error("could not find elevation difference");
              console.error(err);
            }
          );
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
    const [EsriMap, SceneView, Fullscreen, RotateController] =
      await loadModules(
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

    if (w > 768) {
      const fullscreen = new Fullscreen({
        view: view,
      });
      view.ui.add(fullscreen, "top-left");
    }

    view.when(() => {
      cameraController = new RotateController.RotateController({
        view: view,
        pivot: 0,
      });
      startTour();
    });
  };

  // Wait until the locations are loaded and then create the map and start the tour
  $: if (locations && locations.length > 0) {
    createMap();
  }
</script>

<div class="wrapper">
  <div class="map" bind:this={viewContainer} />
  {#if title}
    <div class="title">{title}</div>
  {/if}
</div>

<style>
  div.map {
    height: 100%;
    position: relative;
  }
  div.wrapper {
    background-color: gray;
    flex: 1;
    position: relative;
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
