<template>
  <div id="app">
    <b-container class="px-0 h-100" fluid>
      <b-row class="flex-nowrap mx-0">
          <b-col class="px-0 flex-nowrap" cols="2">
              <div class="header-left-wrapper">
                <div class="menu-icon">
                  <div class="menu-icon__row"></div>
                  <div class="menu-icon__row"></div>
                  <div class="menu-icon__row"></div>
                </div>
               <span class="header-left-wrapper__company-name">CRODA</span>
              </div>
          </b-col>
          <b-col class="px-0">
            <TheHeader :app="AppConfig.name"></TheHeader>
          </b-col>
      </b-row>
      <b-row class="h-100 mx-0">
        <b-col cols="2 px-0">
         <TheNavigation></TheNavigation>
        </b-col>
        <b-col class="px-0">
        </b-col>
      </b-row>
    </b-container>
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
#app {
    font-family: $font-family-default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-font-primary;
    height: calc(100% - 3rem);
  }

.menu-icon {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  margin-left: $spacing-standard;
  &__row {
    height: 2px;
    width: 1.5rem;
    background-color: #fff;
    margin-top: 6px;
  }
}

.header-left-wrapper {
  display: flex;
  align-items: center;
  background-color: $color-theme-dark;
  height: 3rem;
  box-shadow: 1px 1px 7.5px 1px rgba(0, 0, 0, 0.30);
  &__company-name {
    font-family: $font-family-brand;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    margin-left: $spacing-standard;
    text-decoration: underline;
    padding-bottom: 5px;
  }
  @include media-breakpoint-down(md) {
    &__company-name {
      display: none;
    }
  }
}

</style>
