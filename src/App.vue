<template>
  <v-app>
    <!-- <component v-bind:is="layout"></component> -->
    <AppLayout/>
  </v-app>
</template>

<script>
import AppLayout from './layouts/AppLayout'
// import SimpleLayout from './layouts/SimpleLayout'

export default {
  computed: {
    // layout () {
    //   return this.$store.getters.layout
    // }
  },
  components: {
    AppLayout    // define as many layouts you want for the application
  }
}
</script>
