<script>
  // the <EsriMapView> component:
  // - creates a MapView instance with optional props (basemap, center, scale)
  // - syncs extents and rotations among other MapView instances
  import { onMount } from 'svelte';
  import { loadModules } from 'esri-loader';
  import scrollStop from "./scrollStop.js";
  import {isElementInViewport} from './utils.js';
  
  // props with default values in case none are passed in by a parent
  export let basemap = 'streets';
  export let center = [0, 0];
  export let zoom = 1;
  export let title = '';

  let wrapper;
  let isLoaded = false;

  const options = {
    version: '4.16',
    css: true
  };

  // reference to the DOM node where this MapView instance will be created
  // see "bind:this={viewContainer}" below
  let viewContainer;

  const createMap = async () => {
    // load Esri JSAPI modules
    const [
      EsriMap,
      MapView,
      watchUtils
    ] = await loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/core/watchUtils'
    ], options);
    // construct a MapView instance
    const view = new MapView({
      container: viewContainer,
      map: new EsriMap({
        basemap
      }),
      center,
      zoom
    });

    view.on("mouse-wheel", function(event) {
      event.stopPropagation();
    });

    isLoaded = true;
  };

  const destroy = () => {
    if(viewContainer) {
      let node = viewContainer;
      while(node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
    isLoaded = false;
  }

  // use "onMount" in the Svelte component lifecycle to create a MapView instance
  onMount(async () => {
    // set Esri JSAPI options
    if(isElementInViewport(wrapper)) {
      createMap();
    }

    scrollStop(() => {
      if(isElementInViewport(wrapper)) {
        if(isLoaded === false) {
          createMap();
        }
      } else {
        if(isLoaded === true) {
          destroy();
        }
      }
    });
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
    background-color: rgba(0,0,0,.65);
    padding: 4px 9px;
    font-weight: 100;
  }
</style>

<div class="wrapper" bind:this={wrapper}>
  <div class="map" bind:this={viewContainer}></div>
  <div class="title">{title}</div>
</div>