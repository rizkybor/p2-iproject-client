<template>
  <div>
      <div id="section2">
         <div class="card" style="width: 100%; border-radius: 15px; border-style: none;">
                  <l-map style="height: 420px" :zoom="zoom" :center="center">
                      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                      <l-marker :lat-lng="markerLatLng"></l-marker>
                  </l-map>
         </div>
       </div>
  </div>
</template>

<script>
// import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'MapsMain',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
