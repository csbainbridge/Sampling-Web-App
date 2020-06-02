<template>
  <div id="app">

    <b-container fluid class="m-0 p-0 fit-height">
      <!-- Layout: Header Row -->
      <b-row tag="header" class="d-flex flex-nowrap">
        <!-- Layout: Header Branding Column Col Width 2 -->
        <b-col class="d-none d-md-flex justify-content-center align-items-center col-md-2 cda-left-column">
          <a href="#" class="brand h1">CRODA</a>
        </b-col>
        <!-- Layout: Header Content Column Col Width 9 -->
        <b-col class="d-flex align-items-center justify-content-md-between cda-h-text">
          <b-icon @click="menuHidden = !menuHidden" :icon="menuHidden ? 'list' : 'x'" class="h1 m-3 d-md-none" />
          <h1 class="pl-3 pl-md-0 croda-heading-title">{{ RBAppConfig.name }}</h1>
          <rb-user class="d-none d-md-block"></rb-user>
        </b-col>
      </b-row>

      <!-- Layout: Content Row -->
      <b-row class="h-100 d-flex flex-nowrap">
        <!-- Layout: Content Navigation Column Col Width 2 -->
        <b-col id="main-navbar" class="d-md-block m-0 p-0 col-md-2 cda-left-column main-navbar--shadow" :class="{'d-none': menuHidden, 'd-block': !menuHidden}">
          <rb-navigation></rb-navigation>
        </b-col>
        <!-- Layout: Content Main Content Column Col Width 9-->
        <b-col cols="md-9" class="d-md-block" :class="{'d-none': !menuHidden, 'd-block': menuHidden}">
          <router-view />
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import RBNavigation from '@/components/RBNavigation.vue'
import RBUserLogin from '@/components/RBUserLogin.vue'
import RBAppConfig from '@/utilities/RBAppConfig'

export default {
  components: {
    'rb-navigation': RBNavigation,
    'rb-user': RBUserLogin
  },
  data () {
    return {
      RBAppConfig,
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
@import "~@/assets/scss/_rb-reports.scss";

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
    background-color: $color-background-dark;
    background-image: linear-gradient(to bottom right, #373737, #191919);
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
.fit-height {
  height: calc(100% - 5rem) !important/* height minus height of header */
}

</style>
