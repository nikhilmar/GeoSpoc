<template>
   <div id="app">
       <mapbox
      access-token="pk.eyJ1IjoibmlraGlsbWFyIiwiYSI6ImNrOHBvNHNlMzBpcjEzbW5scm02ZzdycjkifQ.KvBHJ29TGX3XCTjf5yugUg"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
    />
   </div>
</template>
<script>
/* eslint-disable */
import Mapbox from 'mapbox-gl-vue'
    export default {
      components: { Mapbox },
        name: "Map",
        data() { },
        props: { },
        created() { },
        mounted() { }
    }
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}</style>