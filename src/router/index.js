import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import MapPage from '@/components/MapPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: MapPage,
      props: { mapType: 'leaflet' },
    },
    {
      path: '/leaflet',
      name: 'Leaflet Map',
      component: MapPage,
      props: { mapType: 'leaflet' },
    },
    {
      path: '/esri',
      name: 'Esri Map',
      component: MapPage,
      props: { mapType: 'esri' },
    },
  ],
});
