<template>
  <div id="app">
    <b-container fluid class="m-0 p-0 h-100 container--fit-height">
      <b-row tag="header" class="d-flex flex-nowrap">
        <b-col class="d-none d-md-flex justify-content-center align-items-center col-md-3 cda-left-column">
          <!-- TODO: This bit is messy - too tired to work it out -->
          <a href="#" class="brand h1">CRODA</a>
        </b-col>
        <b-col class="d-flex align-items-center justify-content-md-between cda-h-text">
          <!-- COMPLETE Would like this left aligned to the edge of the content pane - couldn't be bothered restructuring, though -->
          <b-icon @click="menuHidden = !menuHidden" :icon="menuHidden ? 'list' : 'x'" class="h1 m-3 d-md-none" />
          <h1 class="pl-3 pl-md-0 croda-heading-title">{{ AppConfig.name }}</h1>
          <rb-user class="d-none d-md-block"></rb-user>
        </b-col>
      </b-row>

      <b-row class="h-100 d-flex flex-nowrap">
        <b-col id="main-navbar" class="d-md-block m-0 p-0 col-md-3 cda-left-column main-navbar--shadow" :class="{'d-none': menuHidden, 'd-block': !menuHidden}">
          <rb-samp-nav></rb-samp-nav>
        </b-col>
        <b-col cols="9" class="d-md-block" :class="{'d-none': !menuHidden, 'd-block': menuHidden}">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RBSampNav from '@/components/TheNavigation.vue'
import RBUser from '@/components/RB-User.vue'
import AppConfig from '@/utilities/AppConfig'

export default {
  components: {
    // TheHeader,
    'rb-samp-nav': RBSampNav,
    'rb-user': RBUser
  },
  data () {
    return {
      AppConfig,
      username: 'CRODA/curtis.bainbridge',
      menuHidden: true
    }
  }
}
</script>

<style lang="scss">
/* Global Imports */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

html, body {
  height: 100%;
}
#app {
    font-family: $font-family-default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $color-font-primary;
    overflow-x: hidden;
    height: 100%;
    background-color: $color-background;
  }

#main-navbar {
  min-height: 35rem;
}

.navigation__menu {
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .cda-left-column {
    min-width: 18rem;
    max-width: 19rem;
  }
  .navigation__menu {
    padding-right: 0;
  }
 }
header {
  background-color: $color-theme-dark;
  min-height: 2rem;
  height: 5rem;
  box-shadow: 10px 1px 7.5px 1px rgba(0, 0, 0, 0.30);
}

.brand {
    color: white;
    font-family: $font-family-brand;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    margin-left: $spacing-standard;
    text-decoration: underline;
    padding-bottom: 5px;

    &:hover {
      color: white;
    }
}

.croda-heading-title {
  letter-spacing: $letter-spacing-medium;
  text-transform: uppercase;
}

@media (max-width: 1072px) {
  .croda-heading-title {
     font-size: 1.25rem;
  }
}
.container--fit-height {
  height: calc(100% - 4rem) !important/* height minus height of header */
}

</style>
