<template>
  <div id="app">
    <!-- New Layout -->
    <b-container fluid class="h-100">
      <!-- Row Header -->
      <b-row class="flex-nowrap">
        <header class="d-flex flex-nowrap w-100 layout-header-height col-12 p-0">
          <!-- Column Branding-->
          <b-col
            cols="1"
            sm="1"
            md="1"
            lg="1"
            class="d-flex justify-content-center align-items-center layout-column-left h-100">
            <div class="hamburger">
                <b-icon
                  @click="toggleNav"
                  :icon="menuHidden ? 'list' : 'x'" />
            </div>
          </b-col>
          <b-col cols="1" class="d-none d-lg-flex align-items-center">
             <div class="logo">
              <p class="d-none d-sm-block m-0">{{ RBAppConfig.trademark }}</p>
            </div>
          </b-col>
          <!-- Column Header -->
          <b-col
            cols
            md="11"
            lg="10"
            class="d-flex justify-content-between align-items-center h-100">
            <div class="header__title text-nowrap">
              {{ RBAppConfig.name }}
            </div>
            <RBFunctions />
          </b-col>
        </header>
      </b-row>

      <!-- Row Content -->
      <b-row class="layout-content-height flex-nowrap">
        <!-- Column Navigation -->
        <RBTheNavigation :menuHidden="menuHidden" />
        <!-- End of Column Navigation -->
        <!-- Column Content -->
        <router-view :menuHidden="menuHidden" />
        <!-- End of Column Content -->
      </b-row>
      <!-- End of Row Content -->
    </b-container>
    <RBTheModal />
  </div>

</template>

<script>
import RBAppConfig from '@/utilities/RBAppConfig'
import {
  RBFunctions,
  RBTheNavigation,
  RBTheModal
} from '@/components'

export default {
  components: {
    RBTheNavigation,
    RBFunctions,
    RBTheModal
  },
  data () {
    return {
      RBAppConfig,
      username: 'CRODA/curtis.bainbridge',
      menuHidden: true
    }
  },
  methods: {
    toggleNav () {
      this.menuHidden = !this.menuHidden
    }
  }
}
</script>

<style lang="scss">
/* Global Imports */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import "~@/assets/scss/_rb-reports.scss";
/* New layout CSS */
/* Animation Classes */
.nav-toggle--transition {
  transition: all 0.2s ease-in;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}

a {
  color: #8e8e8e !important;
  &:hover {
    text-decoration: none !important;
  }
}

#app {
  /* Background fallback */
  background-color: $rb-background-fallback;
  background-image: $dark-background-gradient;
}

.layout {
  &-header-height {
     height: 3rem;
  }
  &-column-left {
    display: none;
    min-width: 5rem;
    @media (min-width: 576px) {
      display: flex;
    }
  }
  &-content-height {
    min-height: 564px;
    height: calc(100% - 3rem);
  }
}

.logo {
  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
  & > p {
    text-align: center;
    font-family: 'PT Serif', serif;
  }
}

.hamburger {
  font-size: 2rem;
}

header {
  background-color: $rb-dashboard-header-colour;

  color: #F7F7F7;
}

.header {
  &__title {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  &__user-icon {
    font-size: 1.5rem;
  }
}

.card {
    height: 5rem;
}

</style>
