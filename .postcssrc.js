// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // "postcss-import": {}, // commented this out because https://github.com/vuejs-templates/webpack/issues/1066#issue-274079163 causes an error when we include leaflet/dist/leaflet.css in LeafletMap.vue
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
