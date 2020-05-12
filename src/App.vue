<template>
  <div id="app">
    <TheHeader :app="AppConfig.name"></TheHeader>
    <TheNavigation></TheNavigation>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheNavigation from '@/components/TheNavigation.vue'
import AppConfig from '@/utilities/AppConfig'

export default {
  components: {
    TheHeader,
    TheNavigation
  },
  data () {
    return {
      AppConfig
    }
  }
}
</script>

<style lang="scss">
/* Global Imports */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import "@/assets/scss/_globals.scss";

#app {
    font-family: $font-family-default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-font-primary;
    height: calc(100% - 3rem);
  }
</style>
