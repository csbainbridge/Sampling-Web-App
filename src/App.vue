<template>
  <div id="app">
    <!-- New Layout -->
    <b-container fluid class="h-100">
      <!-- Row Header -->
      <b-row class="flex-nowrap">
        <header class="d-flex flex-nowrap w-100 layout-header-height">
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
          <!-- TODO: This requires standard cols class - might work wuthout but check when layout is complete -->
          <b-col
            cols
            md="10"
            lg="10"
            class="d-flex justify-content-between align-items-center h-100">
            <div class="header__title text-nowrap">
              {{ RBAppConfig.name }}
            </div>
            <!-- Move to RBHeaderFunctions.vue component
                To start with this may only be the username, potential for other components to be added
             -->
            <RBFunctions username="CRODA/curtis.bainbridge" />
          </b-col>
        </header>
      </b-row>

      <!-- Row Content -->
      <b-row class="layout-content-height flex-nowrap">
        <!-- Column Navigation -->
        <b-col
          md="1"
          lg="1"
          class="d-sm-flex layout-column-left p-0 nav-toggle--transition"
          :class="menuHidden ? 'col-1 col-lg-1' : 'd-flex col-12 col-md-2 col-lg-2'">
          <!-- Navigation Component -->
          <!-- TOOD: Move to RBNavigation.vue and add router links -->
          <nav class="navigation">
            <ul class="navigation flex-no-wrap">
              <li class="navigation__link d-flex pl-2 pl-md-0"
                :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                <font-awesome-icon
                    class="my-2 mx-3"
                    :icon="['fas', 'book-open']"
                    fixed-width>
                </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'OSO' :
                    'Outstanding Orders' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">OSO</p> -->
              </li>
              <li class="navigation__link d-flex pl-2 pl-md-0"
                :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'vial']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'Sample Stock' :
                    'Replenish Sample Stock' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">Sample Stock</p> -->
              </li>
              <li class="navigation__link d-flex pl-2 pl-md-0"
                 :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'fill-drip']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'Bucket Stock' :
                    'Replenish Bucket Stock' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">Bucket Stock</p> -->
              </li>
              <li class="navigation__link d-flex pl-2 pl-md-0"
                :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'box-open']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'Order' :
                    'Materials to Order' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">Order</p> -->
              </li>
              <li class="navigation__link d-flex pl-2 pl-md-0"
                :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'industry']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'Production' :
                    'Production Availability' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">Production</p> -->
              </li>
              <li class="navigation__link d-flex pl-2 pl-md-0"
                :class="menuHidden ?
                  'flex-column pl-sm-0' :
                  'flex-row flex-md-column flex-lg-row justify-content-start justify-content-md-center justify-content-lg-start pl-2'">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'pencil-alt']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text nav__item-text--small m-0">
                  {{ menuHidden ?
                    'Admin' :
                    'Material Administration' }}
                </p>
                <!-- <p class="nav__item-text--small m-0">Admin</p> -->
              </li>
            </ul>
          </nav>
          <!-- End of Navigation Component-->
        </b-col>
        <!-- End of Column Navigation -->
        <!-- Column Content -->
        <!-- TODO: Move layout to each Report*.vue file
              Render different dash cards
         -->
        <b-col
          md="10"
          class="p-md-3"
          :class="menuHidden ?
                  'col-12 col-sm-10 col-lg-11' :
                  'd-md-block col-0 col-lg-10 p-0'">
          <!-- Content Title -->
          <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col>Content Title</b-col>
          </b-row>
          <!-- Content Cards -->
          <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- End of Row Content -->
    </b-container>
  </div>

</template>

<script>
// import RBNavigation from '@/components/RBNavigation.vue'
// import RBUserLogin from '@/components/RBUserLogin.vue'
import RBAppConfig from '@/utilities/RBAppConfig'
import RBDashCard from '@/components/RBReportCard'
import RBFunctions from '@/components/RBFunctions'
// 'rb-navigation': RBNavigation,
//     'rb-user': RBUserLogin
export default {
  components: {
    'rb-dash-card': RBDashCard,
    RBFunctions
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
}

// .container-fluid > * *, .border {
//   border: 1px solid #fff;
// }

#app {
  background-image: linear-gradient(to bottom right, #373737, #191919);
}

.layout-header-height {
  height: 3rem;
}

.layout-column-left {
  display: none;
  min-width: 5rem;
}

.layout-content-height {
  min-height: 564px;
  height: calc(100% - 3rem);
}

.logo > p {
  text-align: center;
  font-family: 'PT Serif', serif;
}

.hamburger {
  font-size: 2rem;
}

header {
  background-color: #003932;
  color: #F7F7F7;
}

.header__title {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
}

.header__user-icon {
    font-size: 1.5rem;
}

.navigation {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    background-color: #1E1E1E;
    color: #F7F7F7;
}
.navigation__link {
    width: 100%;
    list-style: none;
    flex: 0 0 5rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #3F8957;
}

.navigation__link:hover {
    z-index: 2;
    border-left: 6px solid #3F8957;
    background-color: #333333;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: calc(100% + 3px);
    transition: all ease-in 0.1s;
    cursor: pointer;
};

.nav__item-text {
  font-size: 1rem;
  transition: all 0.5s ease-in;
}

.card {
    height: 5rem;
}

@media (min-width: 576px) {
    .header__title {
      font-size: 1rem;
    }
  .layout-left-column {
    display: flex;
  }

  .nav__item-text {
    font-size: 0.6rem;
  }
}

@media (min-width: 992px) {
    .nav__item {
        padding-left: 0.5rem;
    }
    .logo {
        font-size: 1.25rem;
    }
}

@media (min-width: 1440px) {
    .nav__item-text {
        font-size: 0.8rem;
    }
}
</style>
